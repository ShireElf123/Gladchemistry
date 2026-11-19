import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '../data/products';
import { MAX_LINE_QUANTITY, formatRand, roundCents } from '../lib/order';
import { CART_STORAGE_KEY, readStoredCart, serialiseCart } from '../lib/cart-storage';
import type { CartItem, CartLoadReport } from '../lib/cart-storage';

const writeStoredCart = (items: CartItem[]): void => {
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, serialiseCart(items));
  } catch {
    // Private mode or a full quota — the in-memory cart still works.
  }
};

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, qty?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  /** Formatted subtotal, so every surface prints the same string. */
  subtotalLabel: string;
  /** Lines discarded from the saved cart on this load, if any. */
  loadReport: CartLoadReport;
  dismissLoadReport: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * `initialOpen` only exists so the cart can be opened by something other than a
 * click — a deep link, or a render test that needs the real drawer markup.
 * It defaults to closed, so the shipped behaviour is unchanged.
 */
export const CartProvider: React.FC<{ children: React.ReactNode; initialOpen?: boolean }> = ({
  children,
  initialOpen = false,
}) => {
  // Read the saved cart during the first render. Reading localStorage is a
  // synchronous external read, so a lazy initialiser is the honest place for
  // it — no flash of an empty cart, and no setState inside an effect. Guarded
  // because a prerender pass has no window.
  const [saved] = useState(() => {
    if (typeof window === 'undefined') return { items: [] as CartItem[], report: { restored: 0, dropped: [] } };
    let raw: string | null = null;
    try {
      raw = window.localStorage.getItem(CART_STORAGE_KEY);
    } catch {
      raw = null;
    }
    return readStoredCart(raw);
  });

  const [items, setItems] = useState<CartItem[]>(saved.items);
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [loadReport, setLoadReport] = useState<CartLoadReport>(saved.report);
  // Nothing is written back until the first change, so an untouched visit never
  // overwrites a saved cart with an empty one.
  const [dirty, setDirty] = useState(false);

  const updateItems = useCallback((next: (prev: CartItem[]) => CartItem[]) => {
    setDirty(true);
    setItems(next);
  }, []);

  // Persist on every real change.
  useEffect(() => {
    if (!dirty) return;
    writeStoredCart(items);
  }, [items, dirty]);

  // Keep multiple tabs in step.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== CART_STORAGE_KEY) return;
      const { items: next, report } = readStoredCart(event.newValue);
      setItems(next);
      setDirty(false);
      if (report.dropped.length > 0) setLoadReport(report);
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const dismissLoadReport = useCallback(
    () => setLoadReport({ restored: 0, dropped: [] }),
    []
  );

  const addToCart = useCallback((product: Product, qty = 1) => {
    const add = Math.max(1, Math.floor(qty));
    updateItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: Math.min(MAX_LINE_QUANTITY, i.quantity + add) }
            : i
        );
      }
      return [...prev, { product, quantity: Math.min(MAX_LINE_QUANTITY, add) }];
    });
    setIsOpen(true);
  }, [updateItems]);

  const removeFromCart = useCallback((productId: string) => {
    updateItems((prev) => prev.filter((i) => i.product.id !== productId));
  }, [updateItems]);

  const updateQuantity = useCallback((productId: string, qty: number) => {
    if (!Number.isFinite(qty) || qty <= 0) {
      updateItems((prev) => prev.filter((i) => i.product.id !== productId));
      return;
    }
    const next = Math.min(MAX_LINE_QUANTITY, Math.floor(qty));
    updateItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity: next } : i))
    );
  }, [updateItems]);

  const clearCart = useCallback(() => updateItems(() => []), [updateItems]);

  const totalItems = items.reduce((acc, i) => acc + i.quantity, 0);
  const subtotal = roundCents(items.reduce((acc, i) => acc + i.product.price * i.quantity, 0));

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      subtotalLabel: formatRand(subtotal),
      loadReport,
      dismissLoadReport,
    }),
    [
      items,
      isOpen,
      openCart,
      closeCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      loadReport,
      dismissLoadReport,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
