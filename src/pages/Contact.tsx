import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Phone,
  MessageCircle,
} from 'lucide-react';
import {
  SHOP_EMAIL,
  SHOP_PHONE,
  SHOP_PHONE_TEL,
  SHOP_WHATSAPP,
  checkContactAvailability,
  contactMailto,
  submitContact,
} from '../lib/submit';
import type { Availability, ContactInput } from '../lib/submit';
import type { SubmitFailure } from '../lib/submit';

const BRAND_OPTIONS = [
  'All 3 Brands',
  'Gladchemistry (Organic Personal Care)',
  'Felis be Glad (Fine Fragrances & Diffusers)',
  'Bubbles Detergents (Home & Car Care)',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^(?:\+27\d{9}|0\d{9})$/;

const emptyForm = (): ContactInput => ({
  name: '',
  email: '',
  phone: '',
  brand: BRAND_OPTIONS[0],
  type: 'retail',
  message: '',
});

type Errors = Partial<Record<keyof ContactInput, string>>;

const fieldClass = (invalid: boolean): string =>
  `w-full px-4 py-3 rounded-xl bg-white border text-sm focus:outline-none focus:ring-2 ${
    invalid
      ? 'border-rose-300 focus:ring-rose-500/30'
      : 'border-slate-200 focus:ring-emerald-500/30'
  }`;

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactInput>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [failure, setFailure] = useState<SubmitFailure | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [availability, setAvailability] = useState<Availability | null>(null);

  useEffect(() => {
    let alive = true;
    void checkContactAvailability().then((state) => {
      if (alive) setAvailability(state);
    });
    return () => {
      alive = false;
    };
  }, []);

  const setField = (key: keyof ContactInput) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    if (failure) setFailure(null);
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = 'Please enter your full name.';
    if (!form.email.trim()) next.email = 'An email address is required.';
    else if (!EMAIL_RE.test(form.email.trim())) next.email = 'That email address looks incomplete.';
    if (form.phone.trim() && !PHONE_RE.test(form.phone.replace(/[\s()\-.]/g, '')))
      next.phone = 'Use a 10-digit SA number, or leave it blank.';
    if (form.message.trim().length < 10)
      next.message = 'Please tell us a little more (at least 10 characters).';
    return next;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (sending) return;

    const localErrors = validate();
    if (Object.keys(localErrors).length > 0) {
      setErrors(localErrors);
      setFailure(null);
      return;
    }

    setErrors({});
    setFailure(null);
    setSending(true);

    const result = await submitContact({
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
    });

    setSending(false);

    if (result.ok) {
      setSent(true);
      return;
    }

    if (result.fields) setErrors(result.fields as Errors);
    setFailure(result);
  };

  const mailto = contactMailto(form);

  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="ui-card rounded-3xl p-8 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Get in Touch
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-1">
                Contact &amp; Wholesale
              </h1>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Have a question about Gladchemistry, Felis be Glad, or Bubbles Detergents? Reach
                out for orders, stockist opportunities, or bulk pricing.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-slate-900">Location</p>
                  <p className="text-sm text-slate-500">
                    Palm Springs Shopping Mall, Shop 19
                    <br />
                    Springs, 1559, Gauteng
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-slate-900">Email</p>
                  <a
                    href={`mailto:${SHOP_EMAIL}`}
                    className="text-sm text-slate-500 hover:text-emerald-700"
                  >
                    {SHOP_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-slate-900">Business Hours</p>
                  <p className="text-sm text-slate-500">Mon – Fri: 08:00 – 17:00 | Sat: 09:00 – 13:00</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-slate-900">Phone &amp; WhatsApp</p>
                  <a
                    href={`tel:${SHOP_PHONE_TEL}`}
                    className="text-sm text-slate-500 hover:text-emerald-700"
                  >
                    {SHOP_PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="ui-card rounded-3xl p-8"
          >
            {sent ? (
              <div className="py-16 text-center space-y-3">
                <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h2 className="font-display font-bold text-2xl text-slate-900">
                  Message delivered
                </h2>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Gladchemistry Products has received your message and will respond to the email
                  address you gave.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm(emptyForm());
                  }}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {availability && availability !== 'live' && !failure && (
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-[12px] text-amber-900 space-y-2">
                    <div className="flex gap-2.5">
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">
                          {availability === 'offline'
                            ? 'Online messaging is not switched on yet'
                            : 'This deployment cannot send messages'}
                        </p>
                        <p className="mt-0.5">
                          You can still write to us here and send it straight from your own email —
                          everything below is carried across.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <a
                        href={mailto}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold"
                      >
                        Write this in my email app
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

                {failure && (
                  <div
                    className={`p-3.5 rounded-xl border text-[12px] space-y-2 ${
                      failure.notConfigured
                        ? 'bg-amber-50 border-amber-200 text-amber-900'
                        : 'bg-rose-50 border-rose-200 text-rose-900'
                    }`}
                  >
                    <div className="flex gap-2.5">
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">
                          {failure.notConfigured
                            ? 'Online messaging is not live yet'
                            : 'Your message was not sent'}
                        </p>
                        <p className="mt-0.5">{failure.message}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <a
                        href={mailto}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold"
                      >
                        Send by email instead
                      </a>
                      <a
                        href={SHOP_WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold inline-flex items-center gap-1"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        WhatsApp
                      </a>
                      <a
                        href={`tel:${SHOP_PHONE_TEL}`}
                        className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 font-bold"
                      >
                        {SHOP_PHONE}
                      </a>
                    </div>
                    {failure.detail && (
                      <details className="text-[11px] opacity-70">
                        <summary className="cursor-pointer">Technical detail</summary>
                        <p className="mt-1 break-words">{failure.detail}</p>
                      </details>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl w-fit">
                  <button
                    type="button"
                    onClick={() => setField('type')('retail')}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      form.type === 'retail' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                    }`}
                    aria-pressed={form.type === 'retail'}
                  >
                    Retail / General
                  </button>
                  <button
                    type="button"
                    onClick={() => setField('type')('wholesale')}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      form.type === 'wholesale'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-500'
                    }`}
                    aria-pressed={form.type === 'wholesale'}
                  >
                    Wholesale &amp; Bulk
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ct-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="ct-name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setField('name')(e.target.value)}
                      placeholder="Your name"
                      className={fieldClass(Boolean(errors.name))}
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="ct-email" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="ct-email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setField('email')(e.target.value)}
                      placeholder="you@example.com"
                      className={fieldClass(Boolean(errors.email))}
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ct-phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone <span className="font-normal text-slate-400">(optional)</span>
                    </label>
                    <input
                      id="ct-phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setField('phone')(e.target.value)}
                      placeholder="073 719 0821"
                      className={fieldClass(Boolean(errors.phone))}
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="ct-brand" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Brand of Interest
                    </label>
                    <select
                      id="ct-brand"
                      value={form.brand}
                      onChange={(e) => setField('brand')(e.target.value)}
                      className={fieldClass(Boolean(errors.brand))}
                    >
                      {BRAND_OPTIONS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="ct-message" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="ct-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setField('message')(e.target.value)}
                    placeholder="Tell us how we can help..."
                    className={fieldClass(Boolean(errors.message))}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-rose-600 font-medium">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all active:scale-95 cursor-pointer disabled:opacity-70 disabled:cursor-wait"
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
