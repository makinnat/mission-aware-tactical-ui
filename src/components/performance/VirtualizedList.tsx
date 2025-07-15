import React, { useMemo, useState, useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';

interface VirtualizedListProps<T> {
  items: T[];
  height: number;
  itemHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  overscan?: number;
}

export const VirtualizedList = <T,>({
  items,
  height,
  itemHeight,
  renderItem,
  className,
  overscan = 5
}: VirtualizedListProps<T>) => {
  const [scrollOffset, setScrollOffset] = useState(0);

  const ItemRenderer = useCallback(({ index, style }: { index: number; style: React.CSSProperties }) => {
    const item = items[index];
    return (
      <div style={style} className="flex items-center">
        {renderItem(item, index)}
      </div>
    );
  }, [items, renderItem]);

  const memoizedItems = useMemo(() => items, [items]);

  if (!memoizedItems.length) {
    return null;
  }

  return (
    <div className={className}>
      <List
        height={height}
        itemCount={memoizedItems.length}
        itemSize={itemHeight}
        overscanCount={overscan}
        onScroll={({ scrollOffset }) => setScrollOffset(scrollOffset)}
      >
        {ItemRenderer}
      </List>
    </div>
  );
};