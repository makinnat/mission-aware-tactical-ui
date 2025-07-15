import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Plus, Minus, X, ExternalLink } from 'lucide-react';
import { CartLineItem } from '@/types/product';

interface CartSidebarProps {
  trigger?: React.ReactNode;
}

const CartItemRow: React.FC<{ item: CartLineItem; onUpdateQuantity: (id: string, quantity: number) => void; onRemove: (id: string) => void }> = ({
  item,
  onUpdateQuantity,
  onRemove
}) => {
  return (
    <div className="flex items-start gap-4 py-4">
      {item.image && (
        <img
          src={item.image.src}
          alt={item.image.alt}
          className="w-16 h-16 object-cover rounded-lg bg-muted"
        />
      )}
      
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm leading-tight">{item.title}</h4>
        {item.variant_title && item.variant_title !== item.title && (
          <p className="text-xs text-muted-foreground">{item.variant_title}</p>
        )}
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="text-sm font-medium min-w-[2rem] text-center">
              {item.quantity}
            </span>
            
            <Button
              size="sm"
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <div className="text-right">
            <div className="text-sm font-bold">${item.line_price}</div>
            <div className="text-xs text-muted-foreground">${item.price} each</div>
          </div>
        </div>
      </div>
      
      <Button
        size="sm"
        variant="ghost"
        className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
        onClick={() => onRemove(item.id)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export const CartSidebar: React.FC<CartSidebarProps> = ({ trigger }) => {
  const { state, updateQuantity, removeFromCart, clearCart, getCartTotal, getCartCount } = useCart();
  
  const cartCount = getCartCount();
  const cartTotal = getCartTotal();

  const defaultTrigger = (
    <Button variant="outline" size="sm" className="relative">
      <ShoppingCart className="h-4 w-4" />
      {cartCount > 0 && (
        <Badge 
          variant="destructive" 
          className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-scarlet-red"
        >
          {cartCount}
        </Badge>
      )}
    </Button>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger || defaultTrigger}
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>Shopping Cart</span>
            {cartCount > 0 && (
              <Badge variant="secondary">{cartCount} item{cartCount !== 1 ? 's' : ''}</Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full mt-6">
          {state.cart && state.cart.line_items.length > 0 ? (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto">
                <div className="space-y-0 divide-y divide-border">
                  {state.cart.line_items.map((item) => (
                    <CartItemRow
                      key={item.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeFromCart}
                    />
                  ))}
                </div>
              </div>

              {/* Cart Footer */}
              <div className="border-t pt-4 mt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total:</span>
                  <span className="text-xl font-bold text-scarlet-red">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full btn-scarlet">
                    Proceed to Checkout
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={clearCart}
                      className="flex-1"
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
                
                <div className="text-xs text-muted-foreground text-center">
                  <p>Taxes and shipping calculated at checkout</p>
                  <p>Free shipping on orders over $500</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-4">
                <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground" />
                <div>
                  <h3 className="text-lg font-medium">Your cart is empty</h3>
                  <p className="text-muted-foreground">Add some tactical gear to get started</p>
                </div>
                <Button variant="outline" asChild>
                  <a href="/products">Browse Products</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};