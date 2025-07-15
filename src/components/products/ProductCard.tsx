import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LazyImage } from '@/components/ui/lazy-image';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  showQuickAdd?: boolean;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = memo(({ 
  product, 
  showQuickAdd = true,
  className = "" 
}) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (product.variants.length > 0) {
      const defaultVariant = product.variants[0];
      addToCart(defaultVariant, 1);
    }
  };

  const formatPrice = (price: string, comparePrice?: string) => {
    const formattedPrice = `$${parseFloat(price).toFixed(2)}`;
    if (comparePrice && parseFloat(comparePrice) > parseFloat(price)) {
      return (
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-scarlet-red">{formattedPrice}</span>
          <span className="text-sm line-through text-muted-foreground">
            ${parseFloat(comparePrice).toFixed(2)}
          </span>
        </div>
      );
    }
    return <span className="text-lg font-bold text-foreground">{formattedPrice}</span>;
  };

  return (
    <Card className={`group card-tactical hover:shadow-command transition-all duration-300 ${className}`}>
      <Link to={`/products/${product.handle}`} className="block">
        <div className="relative overflow-hidden rounded-t-lg bg-muted/10">
          {product.image && (
            <LazyImage
              src={product.image.src}
              alt={product.image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
          
          {/* Product badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.featured && (
              <Badge variant="destructive" className="bg-scarlet-red">
                Featured
              </Badge>
            )}
            {product.variants[0]?.compare_at_price && (
              <Badge variant="secondary" className="bg-olive-drab text-signal-white">
                Sale
              </Badge>
            )}
            {!product.available && (
              <Badge variant="outline" className="bg-muted text-muted-foreground">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Quick actions overlay */}
          <div className="absolute inset-0 bg-combat-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            <Button size="sm" variant="secondary" className="btn-olive-outline">
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
            {showQuickAdd && product.available && (
              <Button 
                size="sm" 
                onClick={handleQuickAdd}
                className="btn-scarlet"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            )}
          </div>
        </div>

        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {product.title}
            </h3>
            
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex flex-wrap gap-1">
              {product.tags.slice(0, 3).map((tag) => (
                <Badge key={tag.id} variant="outline" className="text-xs">
                  {tag.name}
                </Badge>
              ))}
              {product.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{product.tags.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div>
            {formatPrice(product.price, product.variants[0]?.compare_at_price)}
            <div className="text-xs text-muted-foreground">
              {product.variants.length > 1 ? `${product.variants.length} variants` : 'One size'}
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground">
            {product.category}
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
});

ProductCard.displayName = 'ProductCard';