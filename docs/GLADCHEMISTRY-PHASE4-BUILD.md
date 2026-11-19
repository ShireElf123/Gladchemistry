# Gladchemistry — Phase 4

## Commercial functionality, product authenticity & final code audit

Continues from `5bba8e0` (Phase 3). No redesign. Visual identity, photography, homepage,
animations, navigation and the Phase 3 image corrections are untouched.

**The headline:** the two things that were pretending to work — the checkout and the contact
form — now do work, or they say plainly that they cannot. There is no code path left in this
site that shows a customer a confirmation it did not earn.

---

## 1. What was inspected first

Before writing anything I read the architecture, because the brief asked for the safest
submission path rather than the quickest.

| Checked | Finding |
|---|---|
| `package.json` | vite + react 19 + framer-motion + gsap + lucide + react-router. **No email, forms or backend dependency.** |
| `vercel.json` | Rewrites and cache headers only. **No `/api`, no `functions/`, no serverless config.** |
| Repo tree | **No `api/`, `functions/` or `server/` directory anywhere.** |
| Vercel project env vars | **Empty.** Nothing to send mail with. |
| `CartDrawer.tsx` | `handleCheckout` → `setCheckedOut(true)` → `setTimeout(2200)` → clear cart. **Zero network calls.** |
| `Contact.tsx` | `handleSubmit` → `setSubmitted(true)`. Inputs uncontrolled, **no `name`, no state** — the data never left the page. |
| `ProductModal.tsx` | `selectedVariant` state, set by the buttons, **never passed to `addToCart`**. |
| `products.ts` | `Product.variants?: string[]` declared — **no product defines it.** Zero occurrences. |

**Conclusion: no backend existed, and two features were decorative.**

---

## 2. The submitted proposal, and what I built

The brief said: *"If no backend exists, propose the simplest reliable solution before
implementing it. Do not fake a backend."*

### Proposed and implemented

**Two Vercel serverless functions** — `api/order.ts` and `api/contact.ts` — with the simplest
transport that is genuinely reliable:

```
Browser  ──POST JSON──▶  /api/order.ts  ──▶  Resend API  ──▶  shop inbox
                              │
                              └─ re-prices from the catalogue, validates, returns
                                 201 {ok:true, reference} ONLY after the mail provider
                                 accepted the message
```

Why this shape:

- **No new client dependency.** The endpoints use `fetch` to the provider's REST API.
- **The catalogue stays the single source of truth.** The endpoints import
  `src/data/products.ts` directly, so a price can never drift between the shop and the order.
- **No database.** An order is an email the shop already reads; that is the honest minimum for
  a business of this size, and it cannot silently swallow an order.

### Configuration required (this is the one thing you must do)

Set these in Vercel → Project → Settings → Environment Variables, then redeploy:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | from resend.com |
| `ORDER_FROM_EMAIL` | a sender verified with the provider, e.g. `orders@gladchemistry.com` |
| `ORDER_TO_EMAIL` | inbox that receives orders (defaults to `info@gladchemistry.com`) |
| `CONTACT_TO_EMAIL` | inbox for enquiries (defaults to `ORDER_TO_EMAIL`) |

**Until those are set, the site behaves honestly rather than silently:** the endpoints return
`503 not_configured`, and the UI — which probes for this on load — never offers a checkout that
cannot work. It puts a pre-written email, WhatsApp and phone in front of the customer instead.
See §5.

---

## 3. Delivery pricing — an important decision

The site banner promises **"Free delivery over R500"**. That is the only delivery figure the
business has published. Gladchemistry has **not** published a courier tariff below that
threshold.

I started to code a flat fee, then stopped: **inventing one would be inventing a price**, which
this brief explicitly forbids. Instead:

- **Over R500** → free delivery, exactly as promised.
- **Collection** → always free.
- **Below R500** → the delivery line reads **"Quoted on confirmation"**, and the order email
  marks the amount as *"DUE ON CONFIRMATION — R— of goods + courier fee the shop quotes."*
  The customer is told about this before they submit.

`DELIVERY_FEE` in `src/lib/order.ts` is `null` for that reason. Set it to a real figure once a
tariff is confirmed and every surface — drawer, totals, order email — picks it up automatically.

---

## 4. The order flow

`src/components/CartDrawer.tsx` is now three real steps: **cart → details → confirmation.**

**Captured field by field, as specified:**

| Required | Where |
|---|---|
| Customer name | ✅ required |
| Contact number | ✅ required, SA format validated (`073 719 0821` / `+27737190821`) |
| Email where available | ✅ optional, format-validated |
| Delivery **or** collection | ✅ explicit choice |
| Street address | ✅ required for delivery, absent and not required for collection |
| Order items + quantities | ✅ every line, from the live cart |
| Correct product prices | ✅ **re-priced server-side from the catalogue** |
| Subtotal + applicable delivery charges | ✅ itemised |
| Customer notes | ✅ optional, 800-char limit |

**The confirmation rule.** `Order sent to the shop` renders from exactly one place: the `ok`
branch after a response of `2xx` with `{ ok: true }`. The cart is cleared there and nowhere
else. In every other case the cart survives untouched:

| Server answer | What the customer sees |
|---|---|
| `201 {ok:true, reference}` | **Confirmation + reference.** Cart cleared. |
| `503 not_configured` | "Online ordering is not live yet" + email / WhatsApp / phone fallbacks |
| `502 send_failed` | "That did not go through" + retry + email / phone |
| `422 validation_failed` | Field-level messages, per field |
| `409 catalogue_changed` | "Some items are no longer available — refresh the shop" |
| `429 rate_limited` | "Too many attempts — call 073 719 0821" |
| Network failure | "Nothing was sent, so nothing is lost" + retry |
| Non-JSON / 404 | "The ordering service is not responding on this deployment" |

**Client-sent prices are ignored entirely.** The browser posts product ids and quantities; the
server re-prices from the catalogue. A tampered request cannot buy a R65 pine gel for R1.

---

## 5. Honest-by-default: the capability probe

A customer should not fill in a whole delivery address only to be told afterwards that ordering
is not switched on. Both endpoints answer a **read-only `GET`** with their capability:

```json
{ "ok": true, "onlineOrdering": true }
```

The drawer checks this on open, and the contact page on load:

| Probe result | Cart drawer shows |
|---|---|
| `live` | The normal "Continue to order details" → real submit |
| `offline` | "Online ordering is not live yet" up front, with the real handoff offered |
| `unavailable` | "No online ordering on this deployment" + Email / WhatsApp / Call |

And on the details step, when the probe says offline, there is **no submit button** — because we
already know it would fail. The finished order is handed to a `mailto:` link instead, pre-filled
with items, sizes, quantities, prices, totals and the typed address.

Because the probe expects JSON, a host that serves only the static site answers with the app
shell and is correctly read as `unavailable`. **It cannot be mistaken for success.**

---

## 6. The contact form

`src/pages/Contact.tsx` — every field is now controlled and carries its own state:
`name`, `email`, `phone`, `brand`, `type` (retail / wholesale), `message`.

- Validation runs client-side first, then again on the server (never trust the client).
- The same probe applies: offline messaging is announced before the form is filled.
- **"Message delivered" appears only after `201 {ok:true}`.**
- Every failure offers "Send by email instead" — a real `mailto:` carrying everything typed —
  plus WhatsApp and the shop number.
- Address and phone on the page now match the real shop (Palm Springs Mall, Shop 19, Springs,
  1559 · 073 719 0821), replacing the previous "Johannesburg, Gauteng" with no number.

---

## 7. The variant selector — removed

The brief allowed two options: implement genuine variants, or remove the non-functional selector.
**Removed**, because there is nothing genuine to implement:

- `Product.variants` existed in the type and was **never used by a single one of the 40 products.**
- The selector's state never reached `addToCart`, the cart, or the price.
- The only plausible options are the unverified citrus 500g/1kg case (§8). Inventing them would
  be inventing both options and prices.

So the dead code is gone — `selectedVariant` state, the buttons, the "Select Size / Option"
block, and the `variants` field itself. Everything else in the modal is unchanged.

---

## 8. Cart persistence

`src/context/CartContext.tsx` + `src/lib/cart-storage.ts`, keyed `gladchemistry.cart.v1`.

**Stored:** product ids and quantities. **Not stored:** prices, names, or product objects.

That distinction is the point — on every load each id is looked up in the live catalogue, so a
price change or a rename is picked up automatically and a stale cart can never be charged at
last month's price.

**Stored data is treated as untrusted.** Anything that fails validation is dropped **and
reported to the customer** rather than silently trusted:

- unknown product id → dropped ("no longer in the catalogue")
- quantity ≤ 0, non-integer, or `"abc"` → dropped
- duplicate line → dropped
- quantity over 99 → clamped
- unreadable JSON, `[]`, `null`, `{}`, `{"items":"nope"}` → empty cart, no crash

The cart also survives navigation, and a `storage` listener keeps two open tabs in step.

---

## 9. Product image presentation

**The one genuine clipping defect was the cart thumbnail** — a 4:5 packshot forced into a
`h-20 w-20` square with `object-cover`, slicing the top and bottom off every product.
Now `object-contain` with padding. Cards and modals were already correct and are untouched.

I checked every other `object-cover` in the codebase by rendering the actual crop:

| Location | Fit | Verdict |
|---|---|---|
| Product cards | `contain` | Correct — no crop |
| Product modal | `contain`, max-height 460 | Correct — no crop |
| **Cart thumbnail** | **`contain` (was `cover`)** | **Fixed — was clipping** |
| Hero (16:9 art in 16:9 frame) | `cover` | No crop — crops 0 % |
| About / Brands (16:9 art in 4:3 box) | `cover` | 75 % width kept — **every product intact**, verified by eye |
| Home editorial Felis (4:5 in 4:5) | `cover` | 6 % height — no product touched |
| Home editorial wholesale (16:9 in 4:3) | `cover` | 75 % width — bottles and crates intact |
| NotFound brand tiles | `cover` | 79 % height — all three brand groups intact |
| Navbar / Footer logo | `cover` | Square logo, 1:1 — no crop |

Mobile and desktop use the same fit rules here; the containers resize, the fit does not change.

---

## 10. Outstanding authenticity items — unchanged, as instructed

**Nothing was regenerated. No labels were invented.**

| Item | Status |
|---|---|
| `bubbles-pine-gel` | **SOURCE REQUIRED** — needs authentic client photography |
| `bubbles-citrus-gel` | **SOURCE REQUIRED** — needs authentic client photography |
| `bubbles-citrus-pine-gel` (combo) | **SOURCE REQUIRED** — needs authentic client photography |

### ⚠️ Still open for verification, deliberately not changed

`bubbles-citrus-gel` carries **`size: '1kg Tub'`** but its `preMessage` says **"500g from R52"**,
and there is **one price (R65) covering two sizes with one image.** The authentic photograph
shows 500 g. **This is flagged, not "corrected"** — the brief forbids silently resolving it.
It needs a one-line answer from the shop: *is the citrus gel sold as 500 g, 1 kg, or both?*

Everything else in the catalogue — prices, descriptions, ids, product relationships — is
untouched by this phase.

---

## 11. QA

`npm test` now runs **four suites, 193 assertions, all passing.** Every assertion runs against
shipped code, not a mock of it.

```
PRICING, PERSISTENCE & VALIDATION ......... 48 passed
CLIENT SUBMISSION (no fake success) ....... 28 passed
SERVERLESS ENDPOINTS (real orders only) ... 50 passed
UI INTERACTIONS (jsdom) ................... 67 passed
```

**Verified by suite:**

- **Cart** — add, remove, increment, decrement, subtotal maths, `subtotal === sum of line totals`
  (no rounding drift), free delivery at exactly R500, collection always free, empty cart R0.
- **Persistence** — restore after remount, seven kinds of corrupt/hostile storage, price taken
  from the catalogue rather than storage, clamping, duplicate rejection.
- **Submission** — an accepted order; a rejected one; a provider that throws; an unconfigured
  deployment; a static host returning HTML; a 404; a 500; a malformed 201. **Only the real
  acceptance produces a confirmation.**
- **Endpoints** — 405 on write methods other than POST, 422 with per-field messages, 409 for an
  unknown product, 429 rate limiting, reply-to set to the customer, the order email carrying
  every item / the address / never an invented fee.
- **UI in jsdom** — real clicks and keystrokes: typing into the form, submitting an empty form
  (**zero network calls**), a genuine acceptance, a rejection (cart preserved, fallbacks
  offered), all three availability states, and the contact form end to end.
- **Markup** — `Order Confirmed!` and `Message Received!` appear **nowhere** in the app;
  no modal shows a variant selector; all 40 modals still render their image at `contain`.

**Build:** `tsc -b` clean across app + api + node projects · `vite build` 715 ms · `oxlint`
**0 errors**.

**Phase 3 regression:** `node .work/p3/run.mjs` → 40 cards, 40 modals, 0 duplicate images,
0 missing alt, 40 `contain` — the Phase 3 corrections and frames are unaffected.

**Live submission tested against a running dev server** (`vite` + real handlers):

```
POST /api/order   → 503 not_configured      (correct: no key set)
POST /api/contact → 503 not_configured      (correct)
GET  /api/order   → 200 {"onlineOrdering":false}
GET  /api/nope    → 404
7 rapid POSTs     → 5×503 then 2×429        (throttle works)
```

### What I did *not* claim

- **No browser screenshot.** There is no browser in this environment. The UI evidence is
  jsdom interaction tests plus rendered markup, which is what the code actually produces.
- **No live deployment verification.** Sandbox egress is currently broken (see §12), so nothing
  about `gladchemistry.vercel.app` was fetched. Do not read this report as "verified on
  production".

---

## 12. Deployment notes

**`vercel.json` changed** — the catch-all rewrite had to be narrowed, or it would swallow the
new endpoints:

```diff
- "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
+ "rewrites": [{ "source": "/((?!api/).*)", "destination": "/index.html" }]
```

`/api/*` is also given `Cache-Control: no-store` so an order is never served from cache.

**`vite.config.ts`** gained a dev-only middleware that runs the same handlers under `vite dev`,
so the real submission path can be exercised locally without `vercel dev`. It changes nothing
in production.

**⚠️ Egress was down at the time of writing.** `fetch_page` failed on `https://example.com` as
well as on the deployment, and `curl` returned `SSL_ERROR_SYSCALL` — the sandbox is offline, not
the site. The deployment in §12 is therefore structurally verified only (the built bundle
contains the new code); it is **not** confirmed against the live URL.

---

## 13. Files changed

**New**

```
api/order.ts              accept a real order, re-priced server-side
api/contact.ts            accept a real enquiry
api/_catalogue.ts         catalogue lookup for both endpoints
api/_mail.ts              transport, request helpers, throttle
src/lib/order.ts          shared pricing, delivery rule, validation
src/lib/cart-storage.ts   defensive persistence (ids + quantities only)
src/lib/submit.ts         submission + availability probe + real mailto handoffs
tests/                    four suites, 193 assertions, `npm test`
tsconfig.api.json         typecheck the functions
```

**Changed**

```
src/components/CartDrawer.tsx     fake checkout → real 3-step order flow; thumbnail contain
src/context/CartContext.tsx       persistence, validation, live re-pricing, cross-tab sync
src/pages/Contact.tsx             fake success → real submission, controlled fields
src/components/ProductModal.tsx   dead variant selector removed
src/data/products.ts              unused `variants` field removed
vercel.json                       narrow the rewrite, no-store on /api
vite.config.ts                    dev-only api middleware
package.json                      `npm test`, esbuild/jsdom/testing-library devDeps
```
