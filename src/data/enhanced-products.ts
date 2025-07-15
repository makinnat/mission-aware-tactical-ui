import { EnhancedProduct, Metafield } from '@/types/enhanced-product';
import { sampleProducts } from './products';

// Enhanced sample data with Shopify-compatible structure
export const enhancedSampleProducts: EnhancedProduct[] = sampleProducts.map(product => ({
  ...product,
  // Enhanced fields
  metafields: [
    {
      id: 'meta-1',
      namespace: 'custom',
      key: 'noise_reduction_rating',
      value: '33',
      type: 'number_integer',
      description: 'NRR rating in decibels'
    },
    {
      id: 'meta-2',
      namespace: 'custom',
      key: 'military_spec',
      value: 'MIL-STD-810G',
      type: 'single_line_text_field',
      description: 'Military specification compliance'
    }
  ],

  reviews: [
    {
      id: 'review-1',
      product_id: product.id,
      rating: 5,
      title: 'Excellent for tactical operations',
      content: 'Used these during training exercises. Clear communication and excellent noise protection.',
      author: 'Tactical User',
      verified_purchase: true,
      created_at: '2024-01-20T00:00:00Z',
      helpful_count: 12
    }
  ],

  average_rating: 4.8,
  review_count: 24,

  analytics: {
    views: 1250,
    conversions: 45,
    conversion_rate: 3.6,
    average_session_duration: 245,
    bounce_rate: 0.32,
    last_updated: '2024-01-25T00:00:00Z'
  },

  inventory_policy: {
    track_quantity: true,
    continue_selling_when_out_of_stock: false,
    low_stock_threshold: 5,
    auto_reorder_point: 10,
    auto_reorder_quantity: 50
  },

  requires_shipping: true,
  weight: 0.3,
  weight_unit: 'kg' as const,
  dimensions: {
    length: 15,
    width: 10,
    height: 8,
    unit: 'cm' as const
  },

  taxable: true,
  tax_code: 'HEARING_PROTECTION',

  search_keywords: ['tactical', 'hearing', 'protection', 'communication', 'military', 'police'],
  boost_factor: 1.2,

  recommended_products: ['tactical-efit-scanner', 'biometric-wearables-set'],
  frequently_bought_together: ['tactical-efit-scanner'],

  promotional_text: 'Trusted by Special Operations',
  badge_text: 'Military Grade',

  age_restricted: false,

  translations: {
    'es': {
      title: 'Aware EarShield Pro',
      description: 'Protección auditiva táctica de grado profesional con capacidades de comunicación integradas.',
      seo_title: 'Aware EarShield Pro - Protección Auditiva Táctica Profesional',
      seo_description: 'Protección auditiva táctica avanzada con integración de comunicación para profesionales militares y policiales.'
    }
  }
}));

// Collection data with enhanced structure
export const enhancedCollections = [
  {
    id: 'collection-protection',
    handle: 'hearing-protection',
    title: 'Hearing Protection',
    description: 'Professional hearing protection solutions for tactical and industrial applications.',
    image: {
      id: 'col-img-1',
      src: '/lovable-uploads/bed92e28-b372-401f-b191-c06f75d54160.png',
      alt: 'Hearing Protection Collection',
      position: 1
    },
    products: enhancedSampleProducts.filter(p => p.product_type === 'Hearing Protection'),
    sort_order: 'best-selling' as const,
    published: true,
    published_at: '2024-01-01T00:00:00Z',
    seo_title: 'Professional Hearing Protection | Aware Defense',
    seo_description: 'Discover our range of tactical hearing protection solutions trusted by military and law enforcement.',
    metafields: [
      {
        id: 'col-meta-1',
        namespace: 'custom',
        key: 'featured_benefit',
        value: 'Military Grade Protection',
        type: 'single_line_text_field'
      }
    ],
    display_type: 'grid' as const,
    products_per_page: 12,
    analytics: {
      views: 850,
      unique_visitors: 620,
      conversion_rate: 4.2,
      average_order_value: 425.80
    }
  }
];

// Utility functions for enhanced data
export const getEnhancedProductByHandle = (handle: string): EnhancedProduct | undefined => {
  return enhancedSampleProducts.find(product => product.handle === handle);
};

export const getProductsByCollection = (collectionHandle: string): EnhancedProduct[] => {
  return enhancedSampleProducts.filter(product => 
    product.collections.some(col => col.handle === collectionHandle)
  );
};

export const getProductMetafield = (product: EnhancedProduct, namespace: string, key: string): Metafield | undefined => {
  return product.metafields.find(meta => meta.namespace === namespace && meta.key === key);
};

export const getFeaturedProducts = (): EnhancedProduct[] => {
  return enhancedSampleProducts.filter(product => product.featured);
};

export const getRecommendedProducts = (productId: string): EnhancedProduct[] => {
  const product = enhancedSampleProducts.find(p => p.id === productId);
  if (!product?.recommended_products) return [];
  
  return enhancedSampleProducts.filter(p => 
    product.recommended_products.includes(p.id)
  );
};

export const getFrequentlyBoughtTogether = (productId: string): EnhancedProduct[] => {
  const product = enhancedSampleProducts.find(p => p.id === productId);
  if (!product?.frequently_bought_together) return [];
  
  return enhancedSampleProducts.filter(p => 
    product.frequently_bought_together.includes(p.id)
  );
};