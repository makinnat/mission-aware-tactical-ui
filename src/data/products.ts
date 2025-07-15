import { Product, ProductVariant, ProductImage, ProductOption } from '@/types/product';

// Sample product data structured for Shopify compatibility
export const sampleProducts: Product[] = [
  {
    id: 'aware-earshield-pro',
    handle: 'aware-earshield-pro',
    title: 'Aware EarShield Pro',
    description: 'Professional-grade tactical hearing protection with integrated communication capabilities. Designed for military, law enforcement, and security professionals.',
    vendor: 'Aware Defense',
    product_type: 'Hearing Protection',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
    published_at: '2024-01-01T00:00:00Z',
    status: 'active',
    published_scope: 'web',
    tags: [
      { id: 'tag-1', name: 'Tactical', slug: 'tactical' },
      { id: 'tag-2', name: 'Hearing Protection', slug: 'hearing-protection' },
      { id: 'tag-3', name: 'Professional', slug: 'professional' }
    ],
    options: [
      {
        id: 'option-1',
        name: 'Color',
        position: 1,
        values: ['Black', 'Desert Tan', 'Olive Drab']
      },
      {
        id: 'option-2', 
        name: 'Size',
        position: 2,
        values: ['Small', 'Medium', 'Large']
      }
    ],
    variants: [
      {
        id: 'variant-earshield-black-medium',
        title: 'Black / Medium',
        price: '299.99',
        compare_at_price: '349.99',
        sku: 'EAR-SHIELD-BLK-M',
        available: true,
        inventory_quantity: 25,
        weight: 0.3,
        weight_unit: 'kg',
        requires_shipping: true,
        taxable: true,
        option1: 'Black',
        option2: 'Medium'
      },
      {
        id: 'variant-earshield-tan-medium',
        title: 'Desert Tan / Medium',
        price: '299.99',
        compare_at_price: '349.99',
        sku: 'EAR-SHIELD-TAN-M',
        available: true,
        inventory_quantity: 18,
        weight: 0.3,
        weight_unit: 'kg',
        requires_shipping: true,
        taxable: true,
        option1: 'Desert Tan',
        option2: 'Medium'
      }
    ],
    images: [
      {
        id: 'img-1',
        src: '/lovable-uploads/bed92e28-b372-401f-b191-c06f75d54160.png',
        alt: 'Aware EarShield Pro in Black',
        position: 1
      },
      {
        id: 'img-2',
        src: '/lovable-uploads/1106a9b7-e1eb-4c18-b7c0-653862ff02dd.png',
        alt: 'Aware EarShield Pro Components',
        position: 2
      }
    ],
    image: {
      id: 'img-1',
      src: '/lovable-uploads/bed92e28-b372-401f-b191-c06f75d54160.png',
      alt: 'Aware EarShield Pro in Black',
      position: 1
    },
    seo_title: 'Aware EarShield Pro - Professional Tactical Hearing Protection',
    seo_description: 'Advanced tactical hearing protection with communication integration for military and law enforcement professionals.',
    available: true,
    price: '299.99',
    price_min: '299.99',
    price_max: '299.99',
    compare_at_price_min: '349.99',
    compare_at_price_max: '349.99',
    collections: [
      {
        id: 'collection-protection',
        handle: 'hearing-protection',
        title: 'Hearing Protection',
        description: 'Professional hearing protection solutions'
      }
    ],
    category: 'protection',
    use_cases: ['Military Operations', 'Law Enforcement', 'Security', 'Industrial'],
    technical_specs: {
      'Noise Reduction Rating': '33 dB',
      'Frequency Response': '20Hz - 20kHz',
      'Battery Life': '40+ hours',
      'Water Resistance': 'IPX5',
      'Operating Temperature': '-20°C to 60°C'
    },
    certifications: ['ANSI S3.19', 'CE Marked', 'Military Standard 810G'],
    compatibility: ['Most tactical radio systems', 'Smartphone Bluetooth'],
    featured: true
  },
  {
    id: 'tactical-efit-scanner',
    handle: 'tactical-efit-scanner',
    title: 'Tactical eFit 3D Scanner',
    description: 'Portable 3D ear scanning solution for creating custom-fit tactical gear on location. Perfect for field deployment and rapid customization.',
    vendor: 'Aware Defense',
    product_type: 'Technology',
    created_at: '2024-01-05T00:00:00Z',
    updated_at: '2024-01-20T00:00:00Z',
    published_at: '2024-01-05T00:00:00Z',
    status: 'active',
    published_scope: 'web',
    tags: [
      { id: 'tag-4', name: '3D Scanning', slug: '3d-scanning' },
      { id: 'tag-5', name: 'Custom Fit', slug: 'custom-fit' },
      { id: 'tag-6', name: 'Technology', slug: 'technology' }
    ],
    options: [
      {
        id: 'option-3',
        name: 'Model',
        position: 1,
        values: ['Standard', 'Pro', 'Enterprise']
      }
    ],
    variants: [
      {
        id: 'variant-scanner-standard',
        title: 'Standard',
        price: '1299.99',
        sku: 'EFIT-SCAN-STD',
        available: true,
        inventory_quantity: 10,
        weight: 2.5,
        weight_unit: 'kg',
        requires_shipping: true,
        taxable: true,
        option1: 'Standard'
      },
      {
        id: 'variant-scanner-pro',
        title: 'Pro',
        price: '1899.99',
        sku: 'EFIT-SCAN-PRO',
        available: true,
        inventory_quantity: 7,
        weight: 2.8,
        weight_unit: 'kg',
        requires_shipping: true,
        taxable: true,
        option1: 'Pro'
      }
    ],
    images: [
      {
        id: 'img-3',
        src: '/lovable-uploads/3a90284f-b504-4a79-aec4-72a9b5469446.png',
        alt: 'Tactical eFit 3D Scanner',
        position: 1
      }
    ],
    image: {
      id: 'img-3',
      src: '/lovable-uploads/3a90284f-b504-4a79-aec4-72a9b5469446.png',
      alt: 'Tactical eFit 3D Scanner',
      position: 1
    },
    seo_title: 'Tactical eFit 3D Scanner - Custom Fit Technology',
    seo_description: 'Professional 3D ear scanning technology for creating custom-fit tactical hearing protection.',
    available: true,
    price: '1299.99',
    price_min: '1299.99',
    price_max: '1899.99',
    collections: [
      {
        id: 'collection-technology',
        handle: 'technology',
        title: 'Technology Solutions',
        description: 'Advanced technology for tactical applications'
      }
    ],
    category: 'technology',
    use_cases: ['Field Deployment', 'Custom Manufacturing', 'Rapid Prototyping'],
    technical_specs: {
      'Scanning Accuracy': '±0.1mm',
      'Scan Time': '30 seconds per ear',
      'File Format': 'STL, OBJ, PLY',
      'Connectivity': 'USB-C, WiFi',
      'Battery Life': '8 hours continuous use'
    },
    certifications: ['ISO 9001', 'FCC Certified'],
    compatibility: ['Windows 10+', 'macOS 12+', 'iOS/Android apps'],
    featured: true
  },
  {
    id: 'biometric-wearables-set',
    handle: 'biometric-wearables-set',
    title: 'Biometric Wearables Training Set',
    description: 'Complete biometric monitoring solution for tactical training and operations. Monitor vital signs, stress levels, and performance metrics in real-time.',
    vendor: 'Aware Defense',
    product_type: 'Wearables',
    created_at: '2024-01-10T00:00:00Z',
    updated_at: '2024-01-25T00:00:00Z',
    published_at: '2024-01-10T00:00:00Z',
    status: 'active',
    published_scope: 'web',
    tags: [
      { id: 'tag-7', name: 'Biometric', slug: 'biometric' },
      { id: 'tag-8', name: 'Training', slug: 'training' },
      { id: 'tag-9', name: 'Monitoring', slug: 'monitoring' }
    ],
    options: [
      {
        id: 'option-4',
        name: 'Package',
        position: 1,
        values: ['Basic', 'Advanced', 'Complete']
      }
    ],
    variants: [
      {
        id: 'variant-biometric-basic',
        title: 'Basic Package',
        price: '599.99',
        sku: 'BIO-WEAR-BASIC',
        available: true,
        inventory_quantity: 15,
        weight: 0.5,
        weight_unit: 'kg',
        requires_shipping: true,
        taxable: true,
        option1: 'Basic'
      },
      {
        id: 'variant-biometric-advanced',
        title: 'Advanced Package',
        price: '899.99',
        sku: 'BIO-WEAR-ADV',
        available: true,
        inventory_quantity: 12,
        weight: 0.8,
        weight_unit: 'kg',
        requires_shipping: true,
        taxable: true,
        option1: 'Advanced'
      }
    ],
    images: [
      {
        id: 'img-4',
        src: '/lovable-uploads/71a992fd-155b-4df3-a294-21f188459041.png',
        alt: 'Biometric Wearables Set',
        position: 1
      }
    ],
    image: {
      id: 'img-4',
      src: '/lovable-uploads/71a992fd-155b-4df3-a294-21f188459041.png',
      alt: 'Biometric Wearables Set',
      position: 1
    },
    seo_title: 'Biometric Wearables - Tactical Performance Monitoring',
    seo_description: 'Advanced biometric monitoring wearables for tactical training and operations.',
    available: true,
    price: '599.99',
    price_min: '599.99',
    price_max: '899.99',
    collections: [
      {
        id: 'collection-wearables',
        handle: 'biometric-wearables',
        title: 'Biometric Wearables',
        description: 'Smart wearables for tactical applications'
      }
    ],
    category: 'technology',
    use_cases: ['Training Programs', 'Performance Analytics', 'Health Monitoring', 'Mission Planning'],
    technical_specs: {
      'Heart Rate Accuracy': '±2 BPM',
      'Battery Life': '7 days typical use',
      'Water Resistance': 'IP68',
      'Connectivity': 'Bluetooth 5.0, WiFi',
      'Data Storage': '30 days onboard'
    },
    certifications: ['FDA Class II', 'CE Medical', 'Military Standard 810H'],
    compatibility: ['iOS 14+', 'Android 8+', 'Windows 10+'],
    featured: false
  }
];

export const getProductByHandle = (handle: string): Product | undefined => {
  return sampleProducts.find(product => product.handle === handle);
};

export const getProductsByCategory = (category: string): Product[] => {
  return sampleProducts.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return sampleProducts.filter(product => product.featured);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return sampleProducts.filter(product => 
    product.title.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.name.toLowerCase().includes(lowercaseQuery)) ||
    product.use_cases.some(useCase => useCase.toLowerCase().includes(lowercaseQuery))
  );
};