import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
  reviewCount?: number;
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  showNumber = false,
  reviewCount,
  className = ''
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const starSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex items-center">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <Star 
            key={`full-${index}`} 
            className={`${starSize} fill-yellow-400 text-yellow-400`} 
          />
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <StarHalf className={`${starSize} fill-yellow-400 text-yellow-400`} />
        )}
        
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <Star 
            key={`empty-${index}`} 
            className={`${starSize} text-muted-foreground`} 
          />
        ))}
      </div>
      
      {showNumber && (
        <span className="text-sm text-muted-foreground">
          {rating.toFixed(1)}
          {reviewCount && ` (${reviewCount})`}
        </span>
      )}
    </div>
  );
};