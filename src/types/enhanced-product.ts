// Enhanced product types with Shopify metafields and advanced features
import { Product, ProductVariant, ProductImage, ProductOption, ProductTag, Collection } from './product';

export interface Metafield {
  id: string;
  namespace: string;
  key: string;
  value: string;
  type: 'single_line_text_field' | 'multi_line_text_field' | 'number_integer' | 'number_decimal' | 'date' | 'date_time' | 'boolean' | 'color' | 'weight' | 'volume' | 'dimension' | 'rating' | 'json';
  description?: string;
}

export interface ProductReview {
  id: string;
  product_id: string;
  rating: number;
  title: string;
  content: string;
  author: string;
  verified_purchase: boolean;
  created_at: string;
  helpful_count: number;
}

export interface ProductAnalytics {
  views: number;
  conversions: number;
  conversion_rate: number;
  average_session_duration: number;
  bounce_rate: number;
  last_updated: string;
}

export interface ShippingRule {
  id: string;
  name: string;
  conditions: {
    weight_min?: number;
    weight_max?: number;
    price_min?: number;
    price_max?: number;
    countries?: string[];
    zones?: string[];
  };
  rate: number;
  free_shipping_threshold?: number;
}

export interface TaxRule {
  id: string;
  country: string;
  state?: string;
  rate: number;
  compound: boolean;
  name: string;
}

export interface InventoryPolicy {
  track_quantity: boolean;
  continue_selling_when_out_of_stock: boolean;
  low_stock_threshold: number;
  auto_reorder_point?: number;
  auto_reorder_quantity?: number;
}

// Enhanced Product interface extending the base Product
export interface EnhancedProduct extends Product {
  // Metafields for custom data
  metafields: Metafield[];
  
  // Reviews and ratings
  reviews: ProductReview[];
  average_rating: number;
  review_count: number;
  
  // Analytics
  analytics: ProductAnalytics;
  
  // Enhanced inventory management
  inventory_policy: InventoryPolicy;
  
  // Shipping and fulfillment
  shipping_class?: string;
  requires_shipping: boolean;
  weight: number;
  weight_unit: 'kg' | 'lb' | 'oz' | 'g';
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: 'cm' | 'in' | 'm' | 'ft';
  };
  
  // Tax settings
  tax_code?: string;
  taxable: boolean;
  
  // SEO enhancements
  search_keywords: string[];
  boost_factor: number; // For search ranking
  
  // Personalization
  recommended_products: string[]; // Product IDs
  frequently_bought_together: string[]; // Product IDs
  
  // Marketing
  promotional_text?: string;
  badge_text?: string;
  limited_time_offer?: {
    start_date: string;
    end_date: string;
    discount_percentage: number;
  };
  
  // Compliance and certifications
  certifications: string[];
  compliance_notes?: string;
  age_restricted: boolean;
  
  // Multi-language support
  translations?: {
    [locale: string]: {
      title: string;
      description: string;
      seo_title?: string;
      seo_description?: string;
    };
  };
}

// Collection enhancements
export interface EnhancedCollection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image?: ProductImage;
  products: EnhancedProduct[];
  
  // Shopify-specific fields
  sort_order: 'manual' | 'best-selling' | 'created-desc' | 'created' | 'title-desc' | 'title' | 'price-desc' | 'price';
  published: boolean;
  published_at?: string;
  
  // SEO
  seo_title?: string;
  seo_description?: string;
  
  // Metafields
  metafields: Metafield[];
  
  // Rules for automatic collections
  rules?: Array<{
    column: string;
    relation: 'equals' | 'not_equals' | 'greater_than' | 'less_than' | 'starts_with' | 'ends_with' | 'contains' | 'not_contains';
    condition: string;
  }>;
  
  // Display settings
  template_suffix?: string;
  display_type: 'grid' | 'list' | 'carousel';
  products_per_page: number;
  
  // Analytics
  analytics: {
    views: number;
    unique_visitors: number;
    conversion_rate: number;
    average_order_value: number;
  };
}

// Enhanced variant with inventory tracking
export interface EnhancedVariant extends ProductVariant {
  // Inventory management
  inventory_policy: InventoryPolicy;
  inventory_location_quantities: Array<{
    location_id: string;
    available: number;
    committed: number;
    incoming: number;
  }>;
  
  // Cost and profit tracking
  cost_price?: string;
  profit_margin?: number;
  
  // Fulfillment
  fulfillment_service: 'manual' | 'amazon' | 'shipwire' | 'webgistix';
  inventory_management: 'shopify' | 'not_managed';
  
  // Metafields
  metafields: Metafield[];
  
  // Barcode information
  barcode?: string;
  barcode_format?: 'UPC' | 'EAN' | 'ISBN' | 'GTIN';
}

// Search and filtering interfaces
export interface SearchFilters {
  query?: string;
  price_min?: number;
  price_max?: number;
  product_type?: string[];
  vendor?: string[];
  tags?: string[];
  available?: boolean;
  collections?: string[];
  rating_min?: number;
  sort_by?: 'relevance' | 'price_asc' | 'price_desc' | 'created_asc' | 'created_desc' | 'title_asc' | 'title_desc' | 'best_selling' | 'rating';
  page?: number;
  limit?: number;
}

export interface SearchResult {
  products: EnhancedProduct[];
  total_count: number;
  facets: {
    price_range: { min: number; max: number };
    product_types: Array<{ value: string; count: number }>;
    vendors: Array<{ value: string; count: number }>;
    tags: Array<{ value: string; count: number }>;
    collections: Array<{ value: string; count: number }>;
    ratings: Array<{ value: number; count: number }>;
  };
  suggestions?: string[];
  query_expansion?: string[];
}

// Cart enhancements for Shopify compatibility
export interface EnhancedCartItem {
  id: string;
  variant_id: string;
  product_id: string;
  quantity: number;
  properties?: { [key: string]: string }; // Custom properties
  gift_wrap?: boolean;
  gift_message?: string;
  subscription?: {
    frequency: 'weekly' | 'monthly' | 'quarterly' | 'yearly';
    next_delivery: string;
  };
}

export interface EnhancedCart {
  id: string;
  line_items: EnhancedCartItem[];
  subtotal: number;
  total_tax: number;
  total_price: number;
  currency: string;
  
  // Discounts
  discounts: Array<{
    code: string;
    type: 'percentage' | 'fixed_amount' | 'free_shipping';
    value: number;
    title: string;
  }>;
  
  // Shipping
  shipping_address?: Address;
  shipping_lines: Array<{
    id: string;
    title: string;
    price: number;
    code: string;
  }>;
  
  // Customer info
  customer_id?: string;
  email?: string;
  phone?: string;
  
  // Timestamps
  created_at: string;
  updated_at: string;
  expires_at?: string;
  
  // Checkout URL for Shopify compatibility
  checkout_url: string;
  
  // Attributes
  attributes: { [key: string]: string };
  
  // Notes
  note?: string;
}

export interface Address {
  id?: string;
  first_name: string;
  last_name: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  province: string;
  province_code: string;
  country: string;
  country_code: string;
  zip: string;
  phone?: string;
  default?: boolean;
}

// Order management for Shopify compatibility
export interface ShopifyOrder {
  id: string;
  order_number: string;
  email: string;
  created_at: string;
  updated_at: string;
  cancelled_at?: string;
  closed_at?: string;
  processed_at?: string;
  
  // Financial status
  financial_status: 'pending' | 'authorized' | 'partially_paid' | 'paid' | 'partially_refunded' | 'refunded' | 'voided';
  fulfillment_status: 'fulfilled' | 'partial' | 'unfulfilled' | 'restocked';
  
  // Customer
  customer: {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    phone?: string;
  };
  
  // Addresses
  billing_address: Address;
  shipping_address: Address;
  
  // Line items
  line_items: Array<{
    id: string;
    variant_id: string;
    product_id: string;
    title: string;
    quantity: number;
    price: string;
    total_discount: string;
    properties: { [key: string]: string };
  }>;
  
  // Pricing
  subtotal_price: string;
  total_tax: string;
  total_price: string;
  currency: string;
  
  // Shipping
  shipping_lines: Array<{
    title: string;
    price: string;
    code: string;
  }>;
  
  // Discounts
  discount_codes: Array<{
    code: string;
    amount: string;
    type: string;
  }>;
  
  // Fulfillments
  fulfillments: Array<{
    id: string;
    status: string;
    created_at: string;
    tracking_number?: string;
    tracking_url?: string;
    tracking_company?: string;
  }>;
  
  // Notes
  note?: string;
  note_attributes: Array<{ name: string; value: string }>;
  
  // Tags
  tags: string[];
}