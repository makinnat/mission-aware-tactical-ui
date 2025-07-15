// Global declarations for analytics services
declare global {
  interface Window {
    gtag: (command: string, action: string, parameters?: any) => void;
    fbq: (command: string, action: string, parameters?: any) => void;
  }
}

// SEO utilities for Shopify-compatible optimization
interface StructuredDataProduct {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  sku: string;
  brand: {
    "@type": string;
    name: string;
  };
  category: string;
  image: string[];
  offers: {
    "@type": string;
    price: string;
    priceCurrency: string;
    availability: string;
    url: string;
    seller: {
      "@type": string;
      name: string;
    };
  };
  aggregateRating?: {
    "@type": string;
    ratingValue: string;
    reviewCount: string;
  };
}

export const generateProductSchema = (product: any): StructuredDataProduct => {
  const baseUrl = window.location.origin;
  
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    sku: product.variants[0]?.sku || product.handle,
    brand: {
      "@type": "Brand",
      name: product.vendor || "Aware Defense"
    },
    category: product.product_type,
    image: product.images.map((img: any) => `${baseUrl}${img.src}`),
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: product.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      url: `${baseUrl}/products/${product.handle}`,
      seller: {
        "@type": "Organization",
        name: "Aware Defense"
      }
    }
  };
};

export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
};

export const generateOrganizationSchema = () => {
  const baseUrl = window.location.origin;
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aware Defense",
    description: "Military-Grade Hearing Protection & Biometric Wearables",
    url: baseUrl,
    logo: `${baseUrl}/lovable-uploads/2bf4d720-4753-487d-ba23-f8007156d857.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "customer service"
    },
    sameAs: [
      "https://www.facebook.com/awaredefense",
      "https://www.linkedin.com/company/awaredefense"
    ]
  };
};

// Shopify-compatible URL patterns
export const generateProductUrl = (handle: string) => `/products/${handle}`;
export const generateCollectionUrl = (handle: string) => `/collections/${handle}`;
export const generateBlogUrl = (handle: string) => `/blogs/${handle}`;
export const generatePageUrl = (handle: string) => `/pages/${handle}`;

// SEO meta tag helpers
export const generateProductMeta = (product: any) => ({
  title: product.seo_title || `${product.title} | Aware Defense`,
  description: product.seo_description || product.description.slice(0, 160),
  canonical: `${window.location.origin}/products/${product.handle}`,
  ogTitle: product.title,
  ogDescription: product.description.slice(0, 160),
  ogImage: product.image?.src ? `${window.location.origin}${product.image.src}` : undefined,
  ogType: "product",
  productSchema: generateProductSchema(product)
});

// Analytics event tracking for Shopify compatibility
export const trackProductView = (product: any) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'USD',
      value: parseFloat(product.price),
      items: [{
        item_id: product.id,
        item_name: product.title,
        item_category: product.product_type,
        item_variant: product.variants[0]?.title,
        price: parseFloat(product.price),
        quantity: 1
      }]
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_ids: [product.id],
      content_type: 'product',
      content_name: product.title,
      content_category: product.product_type,
      value: parseFloat(product.price),
      currency: 'USD'
    });
  }
};

export const trackAddToCart = (variant: any, quantity: number) => {
  const value = parseFloat(variant.price) * quantity;
  
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'USD',
      value: value,
      items: [{
        item_id: variant.id,
        item_name: variant.title,
        price: parseFloat(variant.price),
        quantity: quantity
      }]
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'AddToCart', {
      content_ids: [variant.id],
      content_type: 'product',
      value: value,
      currency: 'USD'
    });
  }
};

export const trackPurchase = (orderData: any) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: orderData.id,
      value: orderData.total,
      currency: 'USD',
      items: orderData.line_items.map((item: any) => ({
        item_id: item.variant_id,
        item_name: item.title,
        price: parseFloat(item.price),
        quantity: item.quantity
      }))
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      value: orderData.total,
      currency: 'USD',
      content_ids: orderData.line_items.map((item: any) => item.variant_id)
    });
  }
};