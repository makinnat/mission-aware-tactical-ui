// Shopify-compatible product types for Aware Defense

export interface ProductImage {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  position: number;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: string;
  compare_at_price?: string;
  sku?: string;
  available: boolean;
  inventory_quantity?: number;
  weight?: number;
  weight_unit?: 'kg' | 'lb' | 'oz' | 'g';
  requires_shipping: boolean;
  taxable: boolean;
  barcode?: string;
  image_id?: string;
  option1?: string;
  option2?: string;
  option3?: string;
}

export interface ProductOption {
  id: string;
  name: string;
  position: number;
  values: string[];
}

export interface ProductTag {
  id: string;
  name: string;
  slug: string;
}

export interface ProductCollection {
  id: string;
  handle: string;
  title: string;
  description?: string;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  vendor: string;
  product_type: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
  template_suffix?: string;
  status: 'active' | 'archived' | 'draft';
  published_scope: 'web' | 'global';
  tags: ProductTag[];
  options: ProductOption[];
  variants: ProductVariant[];
  images: ProductImage[];
  image?: ProductImage;
  seo_title?: string;
  seo_description?: string;
  available: boolean;
  price: string;
  price_min: string;
  price_max: string;
  compare_at_price_min?: string;
  compare_at_price_max?: string;
  collections: ProductCollection[];
  
  // Aware Defense specific fields
  category: 'protection' | 'communication' | 'technology' | 'accessories';
  use_cases: string[];
  technical_specs: Record<string, string>;
  certifications: string[];
  compatibility: string[];
  installation_guide?: string;
  warranty_info?: string;
  featured: boolean;
}

export interface CartLineItem {
  id: string;
  variant_id: string;
  product_id: string;
  quantity: number;
  title: string;
  variant_title?: string;
  vendor: string;
  price: string;
  line_price: string;
  original_line_price: string;
  discounted_price: string;
  image?: ProductImage;
  url: string;
  properties?: Record<string, string>;
}

export interface Cart {
  id: string;
  token: string;
  line_items: CartLineItem[];
  item_count: number;
  total_price: string;
  total_weight: number;
  currency: string;
  requires_shipping: boolean;
  taxes_included: boolean;
  total_discount: string;
  cart_level_discount_applications: any[];
  checkout_url: string;
  note?: string;
  attributes?: Record<string, string>;
  original_total_price: string;
  total_price_usd: string;
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  published_at?: string;
  sort_order: 'alpha-asc' | 'alpha-desc' | 'best-selling' | 'created' | 'created-desc' | 'manual' | 'price-asc' | 'price-desc';
  template_suffix?: string;
  image?: ProductImage;
  products_count: number;
  seo_title?: string;
  seo_description?: string;
}

export interface SearchFilters {
  category?: string[];
  price_min?: number;
  price_max?: number;
  tags?: string[];
  vendor?: string[];
  product_type?: string[];
  available?: boolean;
  use_cases?: string[];
}

export interface SearchResults {
  products: Product[];
  total_count: number;
  current_page: number;
  total_pages: number;
  filters: SearchFilters;
}