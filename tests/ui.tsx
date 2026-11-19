/** Mounts the shipped components for the jsdom interaction suite. */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ProductCard } from '../src/components/ProductCard';
import { Navbar } from '../src/components/Navbar';
import { Contact } from '../src/pages/Contact';
import { PRODUCTS } from '../src/data/products';

export interface MountProps {
  page?: 'card' | 'contact' | 'navbar';
  productId?: string;
}

export function Harness({ page = 'card', productId }: MountProps) {
  const product = PRODUCTS.find((p) => p.id === (productId ?? 'bubbles-pine-gel')) ?? PRODUCTS[0];
  return (
    <MemoryRouter>
      {page === 'contact' ? <Contact /> : page === 'navbar' ? <Navbar /> : (
        <ProductCard product={product} index={0} />
      )}
    </MemoryRouter>
  );
}
