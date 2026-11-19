/** Mounts the shipped components for the jsdom interaction suite. */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../src/context/CartContext';
import { CartDrawer } from '../src/components/CartDrawer';
import { ProductCard } from '../src/components/ProductCard';
import { Contact } from '../src/pages/Contact';
import { PRODUCTS } from '../src/data/products';

export interface MountProps {
  open?: boolean;
  page?: 'drawer' | 'contact' | 'card';
  productId?: string;
}

export function Harness({ open = true, page = 'drawer', productId }: MountProps) {
  const product = PRODUCTS.find((p) => p.id === (productId ?? 'bubbles-pine-gel')) ?? PRODUCTS[0];
  return (
    <MemoryRouter>
      <CartProvider initialOpen={open}>
        {page === 'contact' ? (
          <Contact />
        ) : page === 'card' ? (
          <ProductCard product={product} index={0} />
        ) : (
          <CartDrawer />
        )}
      </CartProvider>
    </MemoryRouter>
  );
}
