import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BRANDS } from '../data/brands';
import { waLink, WA_TARGET, SHOP_WHATSAPP_DISPLAY } from '../lib/whatsapp';

export const CartDrawer: React.FC = () => {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, clearCart, subtotal } =
    useCart();
  const [sent, setSent] = useState(false);

  /**
   * Orders are handed to WhatsApp, not "confirmed" by the site.
   *
   * Checkout used to call `window.open(...)`, a scripted popup. Popup
   * blockers and the in-app browsers inside Instagram, Facebook and TikTok
   * are entitled to refuse those — silently — and then nothing opened at all
   * while the drawer still announced the order had gone. Her own phone worked
   * because she opens WhatsApp directly; a customer tapping through from a
   * social app got nothing.
   *
   * The control below is therefore a real `<a href>` carrying the whole
   * message. A link is a user-initiated navigation, not a popup, so nothing
   * is permitted to block it, and long-pressing it still offers "open in
   * WhatsApp" as a second route.
   */
  const lines = items.map(
    ({ product, quantity }) =>
      `• ${quantity} x ${product.name} (${product.size}) — R${(product.price * quantity).toFixed(2)}`
  );
  const message = [
    'Hi Gladchemistry, I would like to order:',
    '',
    ...lines,
    '',
    `Subtotal: R${subtotal.toFixed(2)}`,
    '',
    'Please confirm availability and total.',
  ].join('\n');
  const href = waLink(message);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="h-5 w-5 text-emerald-600" />
                <h2 className="font-display font-bold text-lg text-slate-900">Your Cart</h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                    Order sent on WhatsApp
                  </h3>
                  <p className="text-sm text-slate-500 max-w-xs">
                    WhatsApp should have opened with your order written out. Send that message and
                    we will confirm availability and the total — nothing is charged on this site.
                  </p>
                  <a
                    href={href}
                    target={WA_TARGET}
                    rel="noopener noreferrer"
                    className="mt-4 text-[12px] font-bold underline decoration-2 underline-offset-2 text-emerald-700"
                  >
                    WhatsApp didn't open? Tap here
                  </a>
                  <p className="mt-3 text-[11px] text-slate-400">
                    Or message {SHOP_WHATSAPP_DISPLAY} directly.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      clearCart();
                      closeCart();
                    }}
                    className="mt-5 px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="h-16 w-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mb-4">
                    <ShoppingBag className="h-8 w-8" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-slate-900 mb-1">
                    Your cart is empty
                  </h3>
                  <p className="text-sm text-slate-500">
                    Explore our 3 signature brands and add your favorites.
                  </p>
                </div>
              ) : (
                items.map(({ product, quantity }) => {
                  const brandInfo = BRANDS[product.brand];
                  return (
                    <div
                      key={product.id}
                      className="flex gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-20 w-20 rounded-xl object-contain p-1 bg-white border border-slate-100"
                      />
                      <div className="flex-1 min-w-0">
                        <span
                          className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-1"
                          style={{ background: brandInfo.stageTone, color: brandInfo.inkColor }}
                        >
                          {brandInfo.name}
                        </span>
                        <h4 className="font-display font-semibold text-sm text-slate-900 truncate">
                          {product.name}
                        </h4>
                        <p className="text-xs text-slate-500 mb-2">{product.size}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">
                            R{(product.price * quantity).toFixed(2)}
                          </span>
                          <div className="flex items-center gap-1.5 bg-white rounded-lg border border-slate-200 p-0.5">
                            <button
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="p-1 hover:bg-slate-100 rounded-md text-slate-600 cursor-pointer"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="text-xs font-bold px-1.5">{quantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              className="p-1 hover:bg-slate-100 rounded-md text-slate-600 cursor-pointer"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="self-start p-1.5 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && !sent && (
              <div className="p-6 border-t border-slate-100 bg-slate-50/60 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="font-display font-bold text-xl text-slate-900">
                    R{subtotal.toFixed(2)}
                  </span>
                </div>
                <a
                  href={href}
                  target={WA_TARGET}
                  rel="noopener noreferrer"
                  onClick={() => setSent(true)}
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-lg shadow-slate-900/15 transition-all active:scale-[0.99] cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  Send order on WhatsApp
                </a>
                <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                  Opens WhatsApp with your order written out, addressed to{' '}
                  {SHOP_WHATSAPP_DISPLAY}. Nothing is charged on this site — we confirm the total
                  with you first.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
