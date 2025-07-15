import { EnhancedProduct, EnhancedCollection, SearchFilters, SearchResult } from '@/types/enhanced-product';

// Advanced search functionality for Shopify compatibility
export class ProductSearch {
  private products: EnhancedProduct[];
  private collections: EnhancedCollection[];

  constructor(products: EnhancedProduct[], collections: EnhancedCollection[] = []) {
    this.products = products;
    this.collections = collections;
  }

  // Full-text search with relevance scoring
  search(filters: SearchFilters): SearchResult {
    let results = [...this.products];

    // Text search with relevance scoring
    if (filters.query) {
      results = this.performTextSearch(results, filters.query);
    }

    // Apply filters
    results = this.applyFilters(results, filters);

    // Sort results
    results = this.sortResults(results, filters.sort_by || 'relevance');

    // Pagination
    const page = filters.page || 1;
    const limit = filters.limit || 20;
    const startIndex = (page - 1) * limit;
    const paginatedResults = results.slice(startIndex, startIndex + limit);

    // Generate facets
    const facets = this.generateFacets(this.products, filters);

    return {
      products: paginatedResults,
      total_count: results.length,
      facets,
      suggestions: this.generateSuggestions(filters.query),
      query_expansion: this.expandQuery(filters.query)
    };
  }

  private performTextSearch(products: EnhancedProduct[], query: string): EnhancedProduct[] {
    const queryLower = query.toLowerCase();
    const searchTerms = queryLower.split(' ').filter(term => term.length > 1);

    return products
      .map(product => ({
        product,
        score: this.calculateRelevanceScore(product, searchTerms)
      }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ product }) => product);
  }

  private calculateRelevanceScore(product: EnhancedProduct, searchTerms: string[]): number {
    let score = 0;
    const title = product.title.toLowerCase();
    const description = product.description.toLowerCase();
    const tags = product.tags.map(tag => tag.name.toLowerCase()).join(' ');
    const keywords = product.search_keywords?.join(' ').toLowerCase() || '';

    searchTerms.forEach(term => {
      // Title matches (highest weight)
      if (title.includes(term)) {
        score += title.startsWith(term) ? 10 : 5;
      }

      // Tag matches
      if (tags.includes(term)) {
        score += 3;
      }

      // Keyword matches
      if (keywords.includes(term)) {
        score += 2;
      }

      // Description matches
      if (description.includes(term)) {
        score += 1;
      }
    });

    // Boost factor from product data
    score *= (product.boost_factor || 1);

    // Boost for highly rated products
    if (product.average_rating > 4) {
      score *= 1.2;
    }

    return score;
  }

  private applyFilters(products: EnhancedProduct[], filters: SearchFilters): EnhancedProduct[] {
    return products.filter(product => {
      // Price range
      if (filters.price_min !== undefined && parseFloat(product.price_min) < filters.price_min) {
        return false;
      }
      if (filters.price_max !== undefined && parseFloat(product.price_max) > filters.price_max) {
        return false;
      }

      // Product type
      if (filters.product_type?.length && !filters.product_type.includes(product.product_type)) {
        return false;
      }

      // Vendor
      if (filters.vendor?.length && !filters.vendor.includes(product.vendor)) {
        return false;
      }

      // Tags
      if (filters.tags?.length) {
        const productTags = product.tags.map(tag => tag.name);
        if (!filters.tags.some(tag => productTags.includes(tag))) {
          return false;
        }
      }

      // Availability
      if (filters.available !== undefined && product.available !== filters.available) {
        return false;
      }

      // Collections
      if (filters.collections?.length) {
        const productCollections = product.collections.map(col => col.handle);
        if (!filters.collections.some(col => productCollections.includes(col))) {
          return false;
        }
      }

      // Rating
      if (filters.rating_min !== undefined && product.average_rating < filters.rating_min) {
        return false;
      }

      return true;
    });
  }

  private sortResults(products: EnhancedProduct[], sortBy: string): EnhancedProduct[] {
    const sorted = [...products];

    switch (sortBy) {
      case 'price_asc':
        return sorted.sort((a, b) => parseFloat(a.price_min) - parseFloat(b.price_min));
      case 'price_desc':
        return sorted.sort((a, b) => parseFloat(b.price_max) - parseFloat(a.price_max));
      case 'title_asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'title_desc':
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case 'created_desc':
        return sorted.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      case 'created_asc':
        return sorted.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
      case 'rating':
        return sorted.sort((a, b) => b.average_rating - a.average_rating);
      case 'best_selling':
        return sorted.sort((a, b) => (b.analytics?.conversions || 0) - (a.analytics?.conversions || 0));
      case 'relevance':
      default:
        return sorted; // Already sorted by relevance in text search
    }
  }

  private generateFacets(products: EnhancedProduct[], filters: SearchFilters) {
    // Filter products for facet calculation (excluding the current filter being calculated)
    const baseProducts = products.filter(product => {
      // Apply all filters except the ones we're calculating facets for
      if (filters.available !== undefined && product.available !== filters.available) return false;
      if (filters.rating_min !== undefined && product.average_rating < filters.rating_min) return false;
      return true;
    });

    return {
      price_range: this.calculatePriceRange(baseProducts),
      product_types: this.calculateFacetCounts(baseProducts, 'product_type'),
      vendors: this.calculateFacetCounts(baseProducts, 'vendor'),
      tags: this.calculateTagFacets(baseProducts),
      collections: this.calculateCollectionFacets(baseProducts),
      ratings: this.calculateRatingFacets(baseProducts)
    };
  }

  private calculatePriceRange(products: EnhancedProduct[]) {
    const prices = products.flatMap(p => [parseFloat(p.price_min), parseFloat(p.price_max)]);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  }

  private calculateFacetCounts(products: EnhancedProduct[], field: keyof EnhancedProduct) {
    const counts: { [key: string]: number } = {};
    
    products.forEach(product => {
      const value = product[field] as string;
      if (value) {
        counts[value] = (counts[value] || 0) + 1;
      }
    });

    return Object.entries(counts)
      .map(([value, count]) => ({ value, count }))
      .sort((a, b) => b.count - a.count);
  }

  private calculateTagFacets(products: EnhancedProduct[]) {
    const tagCounts: { [key: string]: number } = {};
    
    products.forEach(product => {
      product.tags.forEach(tag => {
        tagCounts[tag.name] = (tagCounts[tag.name] || 0) + 1;
      });
    });

    return Object.entries(tagCounts)
      .map(([value, count]) => ({ value, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20); // Limit to top 20 tags
  }

  private calculateCollectionFacets(products: EnhancedProduct[]) {
    const collectionCounts: { [key: string]: number } = {};
    
    products.forEach(product => {
      product.collections.forEach(collection => {
        collectionCounts[collection.handle] = (collectionCounts[collection.handle] || 0) + 1;
      });
    });

    return Object.entries(collectionCounts)
      .map(([value, count]) => ({ value, count }))
      .sort((a, b) => b.count - a.count);
  }

  private calculateRatingFacets(products: EnhancedProduct[]) {
    const ratingCounts: { [key: number]: number } = {};
    
    products.forEach(product => {
      const rating = Math.floor(product.average_rating);
      ratingCounts[rating] = (ratingCounts[rating] || 0) + 1;
    });

    return Object.entries(ratingCounts)
      .map(([value, count]) => ({ value: parseInt(value), count }))
      .sort((a, b) => b.value - a.value);
  }

  private generateSuggestions(query?: string): string[] {
    if (!query) return [];

    const queryLower = query.toLowerCase();
    const suggestions = new Set<string>();

    // Add product titles that start with or contain the query
    this.products.forEach(product => {
      const title = product.title.toLowerCase();
      if (title.includes(queryLower) && title !== queryLower) {
        suggestions.add(product.title);
      }
    });

    // Add relevant tags
    this.products.forEach(product => {
      product.tags.forEach(tag => {
        const tagName = tag.name.toLowerCase();
        if (tagName.includes(queryLower) && tagName !== queryLower) {
          suggestions.add(tag.name);
        }
      });
    });

    return Array.from(suggestions).slice(0, 5);
  }

  private expandQuery(query?: string): string[] {
    if (!query) return [];

    // Simple query expansion based on product data
    const expansions = new Set<string>();
    const queryLower = query.toLowerCase();

    this.products.forEach(product => {
      if (product.title.toLowerCase().includes(queryLower)) {
        // Add related tags as query expansions
        product.tags.forEach(tag => {
          if (!tag.name.toLowerCase().includes(queryLower)) {
            expansions.add(tag.name);
          }
        });
      }
    });

    return Array.from(expansions).slice(0, 3);
  }

  // Autocomplete functionality
  autocomplete(query: string, limit: number = 10): string[] {
    if (query.length < 2) return [];

    const queryLower = query.toLowerCase();
    const suggestions = new Set<string>();

    // Product titles
    this.products.forEach(product => {
      if (product.title.toLowerCase().startsWith(queryLower)) {
        suggestions.add(product.title);
      }
    });

    // Tags
    this.products.forEach(product => {
      product.tags.forEach(tag => {
        if (tag.name.toLowerCase().startsWith(queryLower)) {
          suggestions.add(tag.name);
        }
      });
    });

    return Array.from(suggestions).slice(0, limit);
  }
}