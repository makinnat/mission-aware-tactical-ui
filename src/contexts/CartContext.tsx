import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Cart, CartLineItem, ProductVariant } from '@/types/product';
import { useToast } from '@/hooks/use-toast';

interface CartState {
  cart: Cart | null;
  isLoading: boolean;
  error: string | null;
}

type CartAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_CART'; payload: Cart }
  | { type: 'ADD_ITEM'; payload: CartLineItem }
  | { type: 'UPDATE_ITEM'; payload: { id: string; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'SET_CART':
      return { ...state, cart: action.payload, isLoading: false, error: null };
    case 'ADD_ITEM':
      if (!state.cart) return state;
      const existingItemIndex = state.cart.line_items.findIndex(
        item => item.variant_id === action.payload.variant_id
      );
      
      let updatedItems;
      if (existingItemIndex >= 0) {
        updatedItems = [...state.cart.line_items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity,
          line_price: (parseFloat(updatedItems[existingItemIndex].price) * 
            (updatedItems[existingItemIndex].quantity + action.payload.quantity)).toFixed(2)
        };
      } else {
        updatedItems = [...state.cart.line_items, action.payload];
      }
      
      return {
        ...state,
        cart: {
          ...state.cart,
          line_items: updatedItems,
          item_count: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
          total_price: updatedItems.reduce((sum, item) => sum + parseFloat(item.line_price), 0).toFixed(2)
        }
      };
    case 'UPDATE_ITEM':
      if (!state.cart) return state;
      const itemIndex = state.cart.line_items.findIndex(item => item.id === action.payload.id);
      if (itemIndex === -1) return state;
      
      const updatedItemsList = [...state.cart.line_items];
      if (action.payload.quantity <= 0) {
        updatedItemsList.splice(itemIndex, 1);
      } else {
        updatedItemsList[itemIndex] = {
          ...updatedItemsList[itemIndex],
          quantity: action.payload.quantity,
          line_price: (parseFloat(updatedItemsList[itemIndex].price) * action.payload.quantity).toFixed(2)
        };
      }
      
      return {
        ...state,
        cart: {
          ...state.cart,
          line_items: updatedItemsList,
          item_count: updatedItemsList.reduce((sum, item) => sum + item.quantity, 0),
          total_price: updatedItemsList.reduce((sum, item) => sum + parseFloat(item.line_price), 0).toFixed(2)
        }
      };
    case 'REMOVE_ITEM':
      if (!state.cart) return state;
      const filteredItems = state.cart.line_items.filter(item => item.id !== action.payload);
      return {
        ...state,
        cart: {
          ...state.cart,
          line_items: filteredItems,
          item_count: filteredItems.reduce((sum, item) => sum + item.quantity, 0),
          total_price: filteredItems.reduce((sum, item) => sum + parseFloat(item.line_price), 0).toFixed(2)
        }
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: state.cart ? {
          ...state.cart,
          line_items: [],
          item_count: 0,
          total_price: '0.00'
        } : null
      };
    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addToCart: (variant: ProductVariant, quantity?: number) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { toast } = useToast();
  
  const initialState: CartState = {
    cart: {
      id: 'local-cart',
      token: 'local-token',
      line_items: [],
      item_count: 0,
      total_price: '0.00',
      total_weight: 0,
      currency: 'USD',
      requires_shipping: true,
      taxes_included: false,
      total_discount: '0.00',
      cart_level_discount_applications: [],
      checkout_url: '',
      original_total_price: '0.00',
      total_price_usd: '0.00'
    },
    isLoading: false,
    error: null
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('aware-defense-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'SET_CART', payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (state.cart) {
      localStorage.setItem('aware-defense-cart', JSON.stringify(state.cart));
    }
  }, [state.cart]);

  const addToCart = (variant: ProductVariant, quantity = 1) => {
    if (!variant.available) {
      toast({
        title: "Product Unavailable",
        description: "This product is currently out of stock.",
        variant: "destructive",
      });
      return;
    }

    const lineItem: CartLineItem = {
      id: `${variant.id}_${Date.now()}`,
      variant_id: variant.id,
      product_id: variant.id.split('_')[0] || variant.id,
      quantity,
      title: variant.title,
      variant_title: variant.title,
      vendor: 'Aware Defense',
      price: variant.price,
      line_price: (parseFloat(variant.price) * quantity).toFixed(2),
      original_line_price: (parseFloat(variant.price) * quantity).toFixed(2),
      discounted_price: variant.price,
      url: `/products/${variant.id}`,
      properties: {}
    };

    dispatch({ type: 'ADD_ITEM', payload: lineItem });
    toast({
      title: "Added to Cart",
      description: `${variant.title} has been added to your cart.`,
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { id: itemId, quantity } });
  };

  const removeFromCart = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart.",
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const getCartTotal = () => {
    return state.cart ? parseFloat(state.cart.total_price) : 0;
  };

  const getCartCount = () => {
    return state.cart ? state.cart.item_count : 0;
  };

  const value: CartContextType = {
    state,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};