/** Mounts the shipped components for the jsdom interaction suite. */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CatalogueList } from '../src/components/CatalogueList';
import { Navbar } from '../src/components/Navbar';
import { Contact } from '../src/pages/Contact';
import { PRODUCTS } from '../src/data/products';

export interface MountProps {
  page?: 'catalogue' | 'contact' | 'navbar';
  productId?: string;
}

export function Harness({ page = 'catalogue', productId }: MountProps) {
  const products = productId
    ? PRODUCTS.filter((p) => p.id === productId)
    : PRODUCTS.slice(0, 6);
  return (
    <MemoryRouter>
      {page === 'contact' ? (
        <Contact />
      ) : page === 'navbar' ? (
        <Navbar />
      ) : (
        <CatalogueList products={products.length ? products : PRODUCTS.slice(0, 6)} />
      )}
    </MemoryRouter>
  );
}
