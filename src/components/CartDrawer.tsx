import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  ArrowLeft,
  Info,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BRANDS } from '../data/brands';
import {
  FREE_DELIVERY_FROM,
  amountToFreeDelivery,
  deliveryLabel,
  formatRand,
  hasErrors,
  priceOrder,
  validateOrder,
} from '../lib/order';
import type { FieldErrors, Fulfilment, OrderInput, PricedOrder } from '../lib/order';
import {
  SHOP_EMAIL,
  SHOP_PHONE,
  SHOP_PHONE_TEL,
  SHOP_WHATSAPP,
  checkOrderAvailability,
  orderMailto,
  submitOrder,
} from '../lib/submit';
import type { Availability, SubmitFailure } from '../lib/submit';

type Step = 'cart' | 'details' | 'sending' | 'done';

const emptyDetails = () => ({
  customerName: '',
  contactNumber: '',
  email: '',
  address: '',
  notes: '',
});

const fieldClass = (invalid: boolean): string =>
  `w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm focus:outline-none focus:ring-2 ${
    invalid
      ? 'border-rose-300 focus:ring-rose-500/30'
      : 'border-slate-200 focus:ring-emerald-500/30'
  }`;

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    loadReport,
    dismissLoadReport,
  } = useCart();

  const [step, setStep] = useState<Step>('cart');
  const [fulfilment, setFulfilment] = useState<Fulfilment>('delivery');
  const [details, setDetails] = useState(emptyDetails);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [failure, setFailure] = useState<SubmitFailure | null>(null);
  const [reference, setReference] = useState<string | null>(null);
  const [acceptedTotal, setAcceptedTotal] = useState<number | null>(null);
  // null = still asking. Decided before the form is ever shown, so nobody fills
  // in an address the shop cannot accept.
  const [availability, setAvailability] = useState<Availability | null>(null);

  useEffect(() => {
    let alive = true;
    void checkOrderAvailability().then((state) => {
      if (alive) setAvailability(state);
    });
    return () => {
      alive = false;
    };
  }, []);

  // Derived, not synchronised: an empty cart can never be on the details step.
  // Expressing it in render avoids a wasted pass and a contradictory frame
  // (remove the last line while the form is open and it returns to the cart).
  const activeStep: Step = items.length === 0 && (step === 'details' || step === 'sending') ? 'cart' : step;

  // Closing the drawer while a genuine order is in flight would lose the
  // confirmation, so the close buttons are disabled during 'sending'.
  const sending = activeStep === 'sending';

  const order: PricedOrder = useMemo(
    () =>
      priceOrder(
        items.map(({ product, quantity }) => ({
          productId: product.id,
          name: product.name,
          size: product.size,
          brand: BRANDS[product.brand].name,
          unitPrice: product.price,
          quantity,
          lineTotal: Math.round(product.price * quantity * 100) / 100,
          image: product.image,
        })),
        fulfilment
      ),
    [items, fulfilment]
  );

  const toFree = amountToFreeDelivery(subtotal, fulfilment);

  const setField = (key: keyof ReturnType<typeof emptyDetails>) => (value: string) => {
    setDetails((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    if (failure) setFailure(null);
  };

  const buildInput = (): OrderInput => ({
    customerName: details.customerName.trim(),
    contactNumber: details.contactNumber.trim(),
    email: details.email.trim(),
    fulfilment,
    address: fulfilment === 'delivery' ? details.address.trim() : 'Collection — Palm Springs Mall, Shop 19, Springs',
    notes: details.notes.trim(),
    lines: items.map((i) => ({ productId: i.product.id, quantity: i.quantity })),
  });

  const goToDetails = () => {
    setFailure(null);
    setStep('details');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (sending) return;

    const input = buildInput();
    const localErrors = validateOrder(input);
    if (hasErrors(localErrors)) {
      setErrors(localErrors);
      setFailure(null);
      return;
    }

    setErrors({});
    setFailure(null);
    setStep('sending');

    const result = await submitOrder(input);

    if (result.ok) {
      // Only reachable from a 2xx { ok: true } — the cart is cleared here and
      // nowhere else.
      setReference(result.reference ?? null);
      setAcceptedTotal(order.total);
      clearCart();
      setStep('done');
      return;
    }

    setFailure(result);
    if (result.fields && Object.keys(result.fields).length > 0) setErrors(result.fields);
    setStep('details');
  };

  const resetAfterSuccess = () => {
    setStep('cart');
    setReference(null);
    setAcceptedTotal(null);
    setDetails(emptyDetails());
    setFulfilment('delivery');
    closeCart();
  };

  const mailto = orderMailto(order, buildInput());

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={sending ? undefined : closeCart}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {activeStep === 'details' && !sending ? (
                  <button
                    onClick={() => {
                      setStep('cart');
                      setFailure(null);
                    }}
                    className="p-1.5 -ml-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
                    aria-label="Back to cart"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                ) : null}
                <ShoppingBag className="h-5 w-5 text-emerald-600" />
                <h2 className="font-display font-bold text-lg text-slate-900">
                  {activeStep === 'details' || activeStep === 'sending'
                    ? 'Order details'
                    : activeStep === 'done'
                      ? 'Order sent'
                      : 'Your Cart'}
                </h2>
              </div>
              <button
                onClick={closeCart}
                disabled={sending}
                className="p-2 rounded-xl hover:bg-slate-100 text-slate-500 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {loadReport.dropped.length > 0 && activeStep === 'cart' && (
                <div className="flex gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-[12px] text-amber-900">
                  <Info className="h-4 w-4 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold">Your saved cart was tidied up</p>
                    <p className="mt-0.5">
                      {loadReport.dropped.length} line
                      {loadReport.dropped.length === 1 ? '' : 's'} could not be restored (
                      {loadReport.dropped.map((d) => d.id).join(', ')}). They are no longer in the
                      catalogue.
                    </p>
                    <button
                      onClick={dismissLoadReport}
                      className="mt-1.5 font-bold underline cursor-pointer"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}

              {activeStep === 'done' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                    Order sent to the shop
                  </h3>
                  <p className="text-sm text-slate-500 max-w-xs">
                    Your order was received by Gladchemistry. The shop will confirm stock and
                    delivery with you on the number you gave.
                  </p>
                  {reference && (
                    <p className="mt-3 text-xs font-bold tracking-wide text-slate-700 bg-slate-100 rounded-lg px-3 py-1.5">
                      Reference {reference}
                    </p>
                  )}
                  {acceptedTotal !== null && (
                    <p className="mt-2 text-xs text-slate-500">
                      {acceptedTotal === order.total && order.courierQuoted
                        ? `${formatRand(acceptedTotal)} of goods — courier confirmed with you`
                        : `Order total ${formatRand(acceptedTotal)}`}
                    </p>
                  )}
                  <button
                    onClick={resetAfterSuccess}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer"
                  >
                    Continue shopping
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
              ) : activeStep === 'cart' ? (
                items.map(({ product, quantity }) => {
                  const brandInfo = BRANDS[product.brand];
                  return (
                    <div
                      key={product.id}
                      className="flex gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100"
                    >
                      {/* object-contain: an uncropped packshot must never be
                          sliced to fill a square thumbnail. */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-20 w-20 shrink-0 rounded-xl object-contain bg-white border border-slate-100 p-1"
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
                            {formatRand(product.price * quantity)}
                          </span>
                          <div className="flex items-center gap-1.5 bg-white rounded-lg border border-slate-200 p-0.5">
                            <button
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="p-1 hover:bg-slate-100 rounded-md text-slate-600 cursor-pointer"
                              aria-label={`Fewer ${product.name}`}
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="text-xs font-bold px-1.5 tabular-nums">{quantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              className="p-1 hover:bg-slate-100 rounded-md text-slate-600 cursor-pointer"
                              aria-label={`More ${product.name}`}
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="self-start p-1.5 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                        aria-label={`Remove ${product.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  );
                })
              ) : (
                /* ---------------------------- details step ---------------------------- */
                <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {failure && !failure.notConfigured && (
                    <div className="flex gap-2.5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-[12px] text-rose-900">
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">That did not go through</p>
                        <p className="mt-0.5">{failure.message}</p>
                        <p className="mt-1">
                          Your cart is untouched. You can retry, or{' '}
                          <a href={mailto} className="underline font-bold">
                            email this order
                          </a>{' '}
                          /{' '}
                          <a href={`tel:${SHOP_PHONE_TEL}`} className="underline font-bold">
                            call {SHOP_PHONE}
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  )}

                  {failure?.notConfigured && (
                    <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-[12px] text-amber-900 space-y-2">
                      <div className="flex gap-2.5">
                        <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold">Online ordering is not live yet</p>
                          <p className="mt-0.5">{failure.message}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <a
                          href={mailto}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold"
                        >
                          Email this order
                        </a>
                        <a
                          href={SHOP_WHATSAPP}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold"
                        >
                          WhatsApp
                        </a>
                        <a
                          href={`tel:${SHOP_PHONE_TEL}`}
                          className="px-3 py-1.5 rounded-lg bg-white border border-amber-300 font-bold"
                        >
                          {SHOP_PHONE}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Fulfilment */}
                  <fieldset>
                    <legend className="block text-xs font-bold text-slate-700 mb-1.5">
                      How would you like it?
                    </legend>
                    <div className="flex gap-2">
                      {(
                        [
                          ['delivery', 'Delivery'],
                          ['collection', 'Collect in Springs'],
                        ] as [Fulfilment, string][]
                      ).map(([value, label]) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => {
                            setFulfilment(value);
                            setErrors((prev) => {
                              const next = { ...prev };
                              delete next.address;
                              return next;
                            });
                          }}
                          className={`flex-1 px-3 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            fulfilment === value
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                          }`}
                          aria-pressed={fulfilment === value}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                    {errors.fulfilment && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium">
                        {errors.fulfilment}
                      </p>
                    )}
                  </fieldset>

                  <div>
                    <label htmlFor="gc-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full name
                    </label>
                    <input
                      id="gc-name"
                      type="text"
                      autoComplete="name"
                      value={details.customerName}
                      onChange={(e) => setField('customerName')(e.target.value)}
                      className={fieldClass(Boolean(errors.customerName))}
                      aria-invalid={Boolean(errors.customerName)}
                      placeholder="Your name"
                    />
                    {errors.customerName && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium">
                        {errors.customerName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="gc-phone"
                        className="block text-xs font-bold text-slate-700 mb-1.5"
                      >
                        Contact number
                      </label>
                      <input
                        id="gc-phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={details.contactNumber}
                        onChange={(e) => setField('contactNumber')(e.target.value)}
                        className={fieldClass(Boolean(errors.contactNumber))}
                        aria-invalid={Boolean(errors.contactNumber)}
                        placeholder="073 719 0821"
                      />
                      {errors.contactNumber && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium">
                          {errors.contactNumber}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="gc-email"
                        className="block text-xs font-bold text-slate-700 mb-1.5"
                      >
                        Email <span className="font-normal text-slate-400">(optional)</span>
                      </label>
                      <input
                        id="gc-email"
                        type="email"
                        autoComplete="email"
                        value={details.email}
                        onChange={(e) => setField('email')(e.target.value)}
                        className={fieldClass(Boolean(errors.email))}
                        aria-invalid={Boolean(errors.email)}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {fulfilment === 'delivery' && (
                    <div>
                      <label
                        htmlFor="gc-address"
                        className="block text-xs font-bold text-slate-700 mb-1.5"
                      >
                        Delivery address
                      </label>
                      <textarea
                        id="gc-address"
                        rows={2}
                        autoComplete="street-address"
                        value={details.address}
                        onChange={(e) => setField('address')(e.target.value)}
                        className={fieldClass(Boolean(errors.address))}
                        aria-invalid={Boolean(errors.address)}
                        placeholder="Street, suburb, city, postal code"
                      />
                      {errors.address && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.address}</p>
                      )}
                    </div>
                  )}

                  {fulfilment === 'collection' && (
                    <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-[12px] text-sky-900">
                      <p className="font-bold">Collect from the shop</p>
                      <p className="mt-0.5">
                        Palm Springs Shopping Mall, Shop 19, Springs, 1559. Mon–Fri 08:00–17:00,
                        Sat 09:00–13:00. No delivery fee.
                      </p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="gc-notes" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Notes <span className="font-normal text-slate-400">(optional)</span>
                    </label>
                    <textarea
                      id="gc-notes"
                      rows={2}
                      value={details.notes}
                      onChange={(e) => setField('notes')(e.target.value)}
                      className={fieldClass(Boolean(errors.notes))}
                      placeholder="Gate code, preferred delivery day, wholesale quantity…"
                    />
                    {errors.notes && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.notes}</p>
                    )}
                  </div>

                  {errors.lines && (
                    <p className="text-[11px] text-rose-600 font-medium">{errors.lines}</p>
                  )}

                  {failure?.detail && (
                    <details className="text-[11px] text-slate-400">
                      <summary className="cursor-pointer">Technical detail</summary>
                      <p className="mt-1 break-words">{failure.detail}</p>
                    </details>
                  )}
                </form>
              )}
            </div>

            {/* Footer */}
            {activeStep === 'cart' && items.length > 0 && (
              <div className="p-6 border-t border-slate-100 bg-slate-50/60 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="font-display font-bold text-xl text-slate-900 tabular-nums">
                    {formatRand(subtotal)}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 -mt-2">
                  {fulfilment === 'collection'
                    ? 'Collect in Springs — no delivery fee.'
                    : toFree > 0
                      ? `Add ${formatRand(toFree)} more for free delivery — otherwise the courier cost is quoted when the shop confirms.`
                      : `You have free delivery (over ${formatRand(FREE_DELIVERY_FROM)}).`}
                </p>
                {availability === 'live' && (
                  <button
                    onClick={goToDetails}
                    className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-lg shadow-slate-900/15 transition-all active:scale-[0.99] cursor-pointer"
                  >
                    Continue to order details
                  </button>
                )}

                {availability === 'offline' && (
                  <>
                    <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-[12px] text-amber-900">
                      <p className="font-bold">Online ordering is not live yet</p>
                      <p className="mt-0.5">
                        Send this cart straight to the shop instead — it goes out with every item
                        and total already written.
                      </p>
                    </div>
                    <button
                      onClick={goToDetails}
                      className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-lg shadow-slate-900/15 transition-all active:scale-[0.99] cursor-pointer"
                    >
                      Continue to order details
                    </button>
                  </>
                )}

                {availability === 'unavailable' && (
                  <>
                    <div className="rounded-xl bg-slate-100 border border-slate-200 p-3 text-[12px] text-slate-700">
                      <p className="font-bold">No online ordering on this deployment</p>
                      <p className="mt-0.5">
                        Send your cart to the shop by email, WhatsApp or phone — all three actually
                        transmit.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <a
                        href={mailto}
                        className="py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold text-center"
                      >
                        Email
                      </a>
                      <a
                        href={SHOP_WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold text-center"
                      >
                        WhatsApp
                      </a>
                      <a
                        href={`tel:${SHOP_PHONE_TEL}`}
                        className="py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-center"
                      >
                        Call
                      </a>
                    </div>
                    <p className="text-[11px] text-slate-500 text-center">
                      {SHOP_EMAIL} · {SHOP_PHONE}
                    </p>
                  </>
                )}

                {availability === null && (
                  <div className="h-[46px] rounded-xl bg-slate-200 animate-pulse" aria-hidden />
                )}
              </div>
            )}

            {activeStep === 'details' && items.length > 0 && (
              <div className="p-6 border-t border-slate-100 bg-slate-50/60 space-y-3">
                <dl className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-slate-500">
                      Subtotal ({order.itemCount} item{order.itemCount === 1 ? '' : 's'})
                    </dt>
                    <dd className="text-slate-700 tabular-nums">{formatRand(order.subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">Delivery</dt>
                    <dd className="text-slate-700 tabular-nums">
                      {deliveryLabel(order, fulfilment)}
                    </dd>
                  </div>
                  <div className="flex justify-between pt-1.5 border-t border-slate-200">
                    <dt className="font-display font-bold text-slate-900">
                      {order.courierQuoted ? 'Subtotal' : 'Total'}
                    </dt>
                    <dd className="font-display font-bold text-lg text-slate-900 tabular-nums">
                      {formatRand(order.total)}
                    </dd>
                  </div>
                </dl>
                {order.courierQuoted && (
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Over {formatRand(FREE_DELIVERY_FROM)} delivers free. Below that the shop confirms
                    your courier cost with you before anything is paid.
                  </p>
                )}
                {availability === 'live' ? (
                  <>
                    <button
                      type="submit"
                      form="checkout-form"
                      disabled={sending}
                      className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 transition-all active:scale-[0.99] cursor-pointer disabled:opacity-70 disabled:cursor-wait inline-flex items-center justify-center gap-2"
                    >
                      {sending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending your order…
                        </>
                      ) : (
                        'Send order to the shop'
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                      Sends your order to Gladchemistry for confirmation. Payment is arranged
                      directly with the shop — no card details are taken here, and no courier fee
                      is added without the shop confirming it first. Need help?{' '}
                      <a href={`tel:${SHOP_PHONE_TEL}`} className="underline font-semibold">
                        {SHOP_PHONE}
                      </a>
                    </p>
                  </>
                ) : (
                  <>
                    {/* The endpoint is known to be down, so we do not offer a button
                        that cannot work. This hands the finished order over instead. */}
                    <a
                      href={mailto}
                      className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 transition-all active:scale-[0.99] inline-flex items-center justify-center gap-2"
                    >
                      Email this order to the shop
                    </a>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={SHOP_WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-center"
                      >
                        WhatsApp
                      </a>
                      <a
                        href={`tel:${SHOP_PHONE_TEL}`}
                        className="py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-center"
                      >
                        Call {SHOP_PHONE}
                      </a>
                    </div>
                    <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                      Everything above is written into the email — items, sizes, quantities and
                      prices. Payment and any courier cost are confirmed with the shop.
                    </p>
                  </>
                )}
              </div>
            )}

            {activeStep === 'sending' && items.length > 0 && (
              <div className="p-6 border-t border-slate-100 bg-slate-50/60">
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-600">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Confirming with the shop…
                </div>
              </div>
            )}

            {activeStep === 'done' && (
              <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/60">
                <p className="text-[11px] text-slate-500 text-center">
                  Questions about this order? {SHOP_EMAIL} · {SHOP_PHONE}
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
