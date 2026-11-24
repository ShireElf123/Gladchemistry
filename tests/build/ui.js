// tests/ui.tsx
import { MemoryRouter } from "react-router-dom";

// src/components/CatalogueList.tsx
import { useState } from "react";

// node_modules/lucide-react/dist/esm/createLucideIcon.mjs
import { forwardRef as forwardRef2, createElement as createElement3 } from "react";

// node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
var toKebabCase = (string) => string?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
function toLucideIconData(iconName, iconNode, aliases = []) {
  if (iconNode == null) {
    throw new Error("[lucide]: iconNode is required when icon name is used");
  }
  return {
    name: toKebabCase(iconName),
    size: 24,
    node: iconNode,
    ...aliases.length > 0 ? { aliases } : {}
  };
}

// node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
var toCamelCase = (string) => {
  let out = "";
  let upperNext = false;
  for (const ch of string) {
    if (ch === "-" || ch === "_" || ch <= " ") {
      upperNext = out.length > 0;
      continue;
    }
    if (out.length === 0) {
      out += ch.toLowerCase();
    } else {
      out += upperNext ? ch.toUpperCase() : ch;
    }
    upperNext = false;
  }
  return out;
};

// node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// node_modules/lucide-react/dist/esm/Icon.mjs
import { forwardRef, createElement as createElement2 } from "react";

// node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var mergeClasses = (...classes) => {
  const tokens = /* @__PURE__ */ new Set();
  for (const cls of classes) {
    if (typeof cls !== "string") continue;
    for (const token of cls.split(/\s+/)) {
      if (token) tokens.add(token);
    }
  }
  return [...tokens].join(" ");
};

// node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

// node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
function isDefined(value) {
  return value !== null && value !== void 0;
}
function buildLucideIconNode(icon, params = {}) {
  const attributeNames = params.attributeNames ?? {};
  const getAttributeName = (attributeName) => attributeNames[attributeName] ?? attributeName;
  const viewBoxWidth = icon.size ?? icon.width ?? defaultAttributes["width"];
  const viewBoxHeight = icon.size ?? icon.height ?? defaultAttributes["height"];
  const aliasClassNames = icon.aliases?.filter((alias) => typeof alias === "string" && alias.trim() !== "").map((alias) => `lucide-${alias}`) ?? [];
  const iconClassNames = [...icon.name ? [`lucide-${icon.name}`] : [], ...aliasClassNames];
  const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
  const className = params.includeDefaultClasses === false ? mergeClasses(...classNamesFromClassName) : mergeClasses("lucide", ...iconClassNames, ...classNamesFromClassName);
  const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? defaultAttributes["stroke-width"]) * Number(icon.size ?? icon.width ?? defaultAttributes["width"]) / Number(params.size ?? params.width ?? defaultAttributes["width"]) : params.strokeWidth ?? defaultAttributes["stroke-width"];
  const attributes = {
    ...Object.entries(defaultAttributes).reduce((attrs, [attrName, value]) => {
      attrs[getAttributeName(attrName)] = value;
      return attrs;
    }, {}),
    ..."color" in params && params.color && {
      [getAttributeName("stroke")]: params.color
    },
    ..."size" in params && isDefined(params.size) && {
      [getAttributeName("width")]: params.size,
      [getAttributeName("height")]: params.size
    },
    ..."width" in params && isDefined(params.width) && {
      [getAttributeName("width")]: params.width
    },
    ..."height" in params && isDefined(params.height) && {
      [getAttributeName("height")]: params.height
    },
    [getAttributeName("stroke-width")]: calculatedStrokeWidth,
    ...className && {
      [getAttributeName("class")]: className
    },
    [getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
    ...params.hasA11yProp === false ? {
      [getAttributeName("aria-hidden")]: "true"
    } : {},
    ..."attributes" in params && params.attributes
  };
  return [
    "svg",
    attributes,
    icon.node.map((child) => {
      const [name, attrs, children] = child;
      const nextAttrs = params.nonScalingStroke ? { [getAttributeName("vector-effect")]: "non-scaling-stroke", ...attrs } : attrs;
      return children ? [name, nextAttrs, children] : [name, nextAttrs];
    })
  ];
}

// node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
function buildLucideIconForReact(icon, params = {}) {
  return buildLucideIconNode(icon, {
    ...params,
    attributeNames: {
      ...params.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  });
}

// node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
var hasA11yProp = (props) => {
  if (props == null || typeof props !== "object") {
    return false;
  }
  for (const prop in props) {
    if (Object.prototype.hasOwnProperty.call(props, prop) && (prop.startsWith("aria-") || prop === "role" || prop === "title") && props[prop] != null) {
      return true;
    }
  }
  return false;
};

// node_modules/lucide-react/dist/esm/context.mjs
import { createContext, useContext, useMemo, createElement } from "react";
var LucideContext = createContext({});
var useLucideContext = () => useContext(LucideContext);

// node_modules/lucide-react/dist/esm/Icon.mjs
var Icon = forwardRef(
  ({
    color: color2,
    size,
    width,
    height,
    strokeWidth,
    absoluteStrokeWidth,
    nonScalingStroke,
    className = "",
    children,
    iconNode = [],
    icon = {
      node: iconNode,
      aliases: [],
      size: 24
    },
    ...rest
  }, ref) => {
    const {
      size: contextSize = 24,
      strokeWidth: contextStrokeWidth = 2,
      absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
      nonScalingStroke: contextNonScalingStroke = false,
      color: contextColor = "currentColor",
      className: contextClass = ""
    } = useLucideContext() ?? {};
    const hasAccessibleProp = Boolean(children) || hasA11yProp(rest);
    const [name, svgAttributes, builtIconNode = []] = buildLucideIconForReact(icon, {
      color: color2 ?? contextColor,
      width: width ?? size ?? contextSize,
      height: height ?? size ?? contextSize,
      strokeWidth: strokeWidth ?? contextStrokeWidth,
      absoluteStrokeWidth: absoluteStrokeWidth ?? contextAbsoluteStrokeWidth,
      nonScalingStroke: nonScalingStroke ?? contextNonScalingStroke,
      className: mergeClasses(contextClass, className),
      hasA11yProp: hasAccessibleProp,
      attributes: rest
    });
    return createElement2(
      name,
      {
        ref,
        ...svgAttributes
      },
      [
        ...builtIconNode.map(([tag, attrs]) => createElement2(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// node_modules/lucide-react/dist/esm/createLucideIcon.mjs
function createLucideIcon(iconDataOrName, iconNode = [], aliases = []) {
  const iconData = typeof iconDataOrName === "string" ? toLucideIconData(iconDataOrName, iconNode, aliases) : iconDataOrName;
  const Component2 = forwardRef2(
    ({ className, ...props }, ref) => createElement3(Icon, {
      ref,
      icon: iconData,
      className,
      ...props
    })
  );
  if (iconData.name) {
    Component2.displayName = toPascalCase(iconData.name);
  }
  return Component2;
}

// node_modules/lucide-react/dist/esm/icons/chevron-down.mjs
var __iconData = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
__iconData.node;
var ChevronDown = createLucideIcon(__iconData);

// node_modules/lucide-react/dist/esm/icons/circle-check.mjs
var __iconData2 = {
  name: "circle-check",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }]
  ],
  aliases: ["check-circle-2"]
};
__iconData2.node;
var CircleCheck = createLucideIcon(__iconData2);

// node_modules/lucide-react/dist/esm/icons/clock.mjs
var __iconData3 = {
  name: "clock",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
  ]
};
__iconData3.node;
var Clock = createLucideIcon(__iconData3);

// node_modules/lucide-react/dist/esm/icons/loader-circle.mjs
var __iconData4 = {
  name: "loader-circle",
  size: 24,
  node: [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  aliases: ["loader-2"]
};
__iconData4.node;
var LoaderCircle = createLucideIcon(__iconData4);

// node_modules/lucide-react/dist/esm/icons/mail.mjs
var __iconData5 = {
  name: "mail",
  size: 24,
  node: [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
  ]
};
__iconData5.node;
var Mail = createLucideIcon(__iconData5);

// node_modules/lucide-react/dist/esm/icons/map-pin.mjs
var __iconData6 = {
  name: "map-pin",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z"
      }
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
  ]
};
__iconData6.node;
var MapPin = createLucideIcon(__iconData6);

// node_modules/lucide-react/dist/esm/icons/menu.mjs
var __iconData7 = {
  name: "menu",
  size: 24,
  node: [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }]
  ]
};
__iconData7.node;
var Menu = createLucideIcon(__iconData7);

// node_modules/lucide-react/dist/esm/icons/message-circle.mjs
var __iconData8 = {
  name: "message-circle",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s"
      }
    ]
  ]
};
__iconData8.node;
var MessageCircle = createLucideIcon(__iconData8);

// node_modules/lucide-react/dist/esm/icons/phone.mjs
var __iconData9 = {
  name: "phone",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v"
      }
    ]
  ]
};
__iconData9.node;
var Phone = createLucideIcon(__iconData9);

// node_modules/lucide-react/dist/esm/icons/send.mjs
var __iconData10 = {
  name: "send",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3"
      }
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
  ]
};
__iconData10.node;
var Send = createLucideIcon(__iconData10);

// node_modules/lucide-react/dist/esm/icons/triangle-exclamation-point.mjs
var __iconData11 = {
  name: "triangle-exclamation-point",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
      }
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ],
  aliases: ["alert-triangle", "triangle-alert"]
};
__iconData11.node;
var TriangleExclamationPoint = createLucideIcon(__iconData11);

// node_modules/lucide-react/dist/esm/icons/x.mjs
var __iconData12 = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
__iconData12.node;
var X = createLucideIcon(__iconData12);

// src/data/shop.ts
var SHOP = {
  name: "Gladchemistry Products",
  phoneDisplay: "073 719 0821",
  /** E.164, as WhatsApp deep links require. */
  whatsapp: "27737190821",
  email: "info@gladchemistry.com",
  address: "Palm Springs Shopping Mall, Shop 19, Springs, 1559",
  hours: "Mon\u2013Sat \xB7 08:00\u201317:00"
};
var waLink = (message) => {
  const base = `https://wa.me/${SHOP.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
var productEnquiry = (name, size, price) => `Hello Gladchemistry \u2014 I'd like to order ${name} (${size}) listed at R${price.toFixed(0)}. Is it in stock?`;
var telLink = `tel:+${SHOP.whatsapp}`;

// src/lib/format.ts
var rand = (n) => `R${Math.round(n).toLocaleString("en-ZA").replace(/[,\s]/g, " ").trim()}`;

// src/components/CatalogueList.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Line = ({ product, forceOpen }) => {
  return /* @__PURE__ */ jsx("div", { className: "grid-anim", children: /* @__PURE__ */ jsxs(
    "details",
    {
      className: "group border-b border-black/10 last:border-b-0",
      open: forceOpen || void 0,
      children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex cursor-pointer list-none items-center gap-4 py-3.5 pl-1 pr-2 hover:bg-black/[0.03]", children: [
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              className: "h-4 w-4 shrink-0 transition-transform group-open:rotate-180",
              style: { color: "var(--ink-soft)" },
              "aria-hidden": true
            }
          ),
          product.image ? /* @__PURE__ */ jsx(
            "img",
            {
              src: product.image,
              alt: product.fullName ?? product.name,
              width: 44,
              height: 44,
              loading: "lazy",
              decoding: "async",
              className: "h-11 w-11 shrink-0 rounded-xl border border-black/10 bg-white object-contain"
            }
          ) : (
            /* No photograph exists that shows this product's real label, so it
               gets a branded plate rather than a grey void. A dashed outline
               would read as a broken image; this reads as a decision. */
            /* @__PURE__ */ jsx(
              "span",
              {
                "aria-hidden": true,
                className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-[15px] font-extrabold",
                style: { background: "rgba(14,124,74,0.10)", color: "var(--fern)" },
                children: product.name.charAt(0)
              }
            )
          ),
          /* @__PURE__ */ jsxs(
            "span",
            {
              className: "min-w-0 flex-1 font-display text-[17px] font-extrabold leading-tight",
              style: { color: "var(--ink)" },
              children: [
                product.name,
                product.badge && /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "ml-2 align-middle text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-full",
                    style: { background: "var(--ink)", color: "var(--paper)" },
                    children: product.badge
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "hidden shrink-0 text-[13px] font-semibold sm:block",
              style: { color: "var(--ink-soft)", opacity: 0.75 },
              children: product.size
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "shrink-0 font-display text-[17px] font-extrabold tabular-nums",
              style: { color: "var(--ink)" },
              children: rand(product.price)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pb-5 pl-9 pr-2", children: [
          product.image && /* @__PURE__ */ jsx(
            "img",
            {
              src: product.image,
              alt: product.fullName ?? product.name,
              loading: "lazy",
              decoding: "async",
              className: "mt-1 mb-3 h-56 w-auto max-w-full rounded-xl border border-black/10 bg-white object-contain p-2"
            }
          ),
          /* @__PURE__ */ jsxs("p", { className: "text-[13px] font-bold uppercase tracking-[0.1em] sm:hidden", style: { color: "var(--ink-soft)" }, children: [
            product.category,
            " \xB7 ",
            product.size
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 max-w-[62ch] text-[14px] leading-relaxed", style: { color: "var(--ink-soft)" }, children: product.description }),
          product.notes && product.notes.length > 0 && /* @__PURE__ */ jsx("ul", { className: "mt-2 flex flex-wrap gap-1.5", children: product.notes.map((n) => /* @__PURE__ */ jsx(
            "li",
            {
              className: "rounded-full px-2.5 py-1 text-[11px] font-bold",
              style: { background: "rgba(0,0,0,0.05)", color: "var(--ink-soft)" },
              children: n
            },
            n
          )) }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: waLink(productEnquiry(product.name, product.size, product.price)),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "enquire mt-3",
              children: [
                /* @__PURE__ */ jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
                "Enquire"
              ]
            }
          )
        ] })
      ]
    }
  ) });
};
var CatalogueList = ({ products }) => {
  const groups = [];
  for (const product of products) {
    const last = groups[groups.length - 1];
    if (last && last.category === product.category) last.items.push(product);
    else {
      const found = groups.find((g) => g.category === product.category);
      if (found) found.items.push(product);
      else groups.push({ category: product.category, items: [product] });
    }
  }
  const [openAll, setOpenAll] = useState(false);
  const withPhoto = products.filter((p2) => p2.image).length;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-[12px] font-bold", style: { color: "var(--ink-soft)", opacity: 0.7 }, children: [
        "Tap a name to open it \xB7 ",
        withPhoto,
        " of ",
        products.length,
        " with a photo"
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setOpenAll((v) => !v),
          className: "text-[12px] font-black uppercase tracking-[0.1em] underline underline-offset-4",
          style: { color: "var(--ink)" },
          children: openAll ? "Collapse all" : "Open all"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-8", children: groups.map((group) => /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsxs(
        "h2",
        {
          className: "eyebrow mb-1 pb-2 border-b-2",
          style: { color: "var(--ink)", borderColor: "var(--lime)" },
          children: [
            group.category,
            /* @__PURE__ */ jsx("span", { className: "ml-2 opacity-40", children: group.items.length })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { children: group.items.map((product) => /* @__PURE__ */ jsx(Line, { product, forceOpen: openAll }, `${product.id}-${openAll}`)) }, `${group.category}-${openAll}`)
    ] }, group.category)) })
  ] });
};

// src/components/Navbar.tsx
import { useState as useState2 } from "react";
import { Link, NavLink } from "react-router-dom";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Catalogue" },
  { to: "/brands", label: "Brands" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
var Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState2(false);
  return /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx2(
      "div",
      {
        className: "text-center px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em]",
        style: { background: "var(--lime)", color: "var(--ink)" },
        children: "Shop 19, Palm Springs Mall \xB7 Springs \xB7 Wholesale welcome"
      }
    ),
    /* @__PURE__ */ jsxs2("header", { className: "sticky top-0 z-40", style: { background: "var(--ink)" }, children: [
      /* @__PURE__ */ jsxs2("div", { className: "mx-auto max-w-[1240px] px-5 h-[72px] flex items-center gap-6", children: [
        /* @__PURE__ */ jsxs2(Link, { to: "/", className: "flex items-center gap-2.5 shrink-0 group", children: [
          /* @__PURE__ */ jsx2(
            "img",
            {
              src: "/images/gladchemistry-logo.jpg",
              alt: "Gladchemistry",
              className: "h-9 w-9 rounded-full object-cover ring-2 ring-white/20 transition-transform group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx2(
            "span",
            {
              className: "font-display font-extrabold text-[19px] tracking-tight text-white",
              style: { letterSpacing: "-0.03em" },
              children: "Gladchemistry"
            }
          )
        ] }),
        /* @__PURE__ */ jsx2("nav", { className: "hidden md:flex items-center gap-7 mx-auto", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx2(
          NavLink,
          {
            to: link.to,
            end: link.to === "/",
            className: ({ isActive }) => `text-[14px] font-extrabold transition-colors ${isActive ? "text-[var(--lime)]" : "text-white/85 hover:text-white"}`,
            children: link.label
          },
          link.to
        )) }),
        /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2 ml-auto md:ml-0", children: [
          /* @__PURE__ */ jsxs2(
            "a",
            {
              href: waLink("Hello Gladchemistry \u2014 I'd like to ask about a product."),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-black transition-transform active:scale-95",
              style: { background: "var(--lime)", color: "var(--ink)" },
              children: [
                /* @__PURE__ */ jsx2(MessageCircle, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx2("span", { className: "hidden sm:inline", children: "WhatsApp" })
              ]
            }
          ),
          /* @__PURE__ */ jsx2(
            "button",
            {
              onClick: () => setMobileOpen(!mobileOpen),
              className: "md:hidden grid place-items-center h-10 w-10 rounded-full bg-white/10 text-white",
              "aria-label": "Toggle menu",
              "aria-expanded": mobileOpen,
              children: mobileOpen ? /* @__PURE__ */ jsx2(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx2(Menu, { className: "h-5 w-5" })
            }
          )
        ] })
      ] }),
      mobileOpen && /* @__PURE__ */ jsx2("div", { className: "md:hidden border-t border-white/10 px-5 py-3", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx2(
        NavLink,
        {
          to: link.to,
          end: link.to === "/",
          onClick: () => setMobileOpen(false),
          className: ({ isActive }) => `block px-2 py-3 text-[15px] font-extrabold border-b border-white/5 last:border-0 ${isActive ? "text-[var(--lime)]" : "text-white/85"}`,
          children: link.label
        },
        link.to
      )) })
    ] })
  ] });
};

// src/pages/Contact.tsx
import { useEffect as useEffect4, useState as useState3 } from "react";

// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
import { createContext as createContext2 } from "react";
var LayoutGroupContext = /* @__PURE__ */ createContext2({});

// node_modules/framer-motion/dist/es/utils/use-constant.mjs
import { useRef } from "react";
function useConstant(init) {
  const ref = useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
import { useLayoutEffect, useEffect } from "react";

// node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof window !== "undefined";

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
import { createContext as createContext3 } from "react";
var PresenceContext = /* @__PURE__ */ createContext3(null);

// node_modules/motion-utils/dist/es/array.mjs
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1)
    arr.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1)
    arr.splice(index, 1);
}

// node_modules/motion-utils/dist/es/clamp.mjs
var clamp = (min, max, v) => {
  if (v > max)
    return max;
  if (v < min)
    return min;
  return v;
};

// node_modules/motion-utils/dist/es/format-error-message.mjs
function formatErrorMessage(message, errorCode) {
  return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}

// node_modules/motion-utils/dist/es/errors.mjs
var warning = () => {
};
var invariant = () => {
};
if (typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
  warning = (check, message, errorCode) => {
    if (!check && typeof console !== "undefined") {
      console.warn(formatErrorMessage(message, errorCode));
    }
  };
  invariant = (check, message, errorCode) => {
    if (!check) {
      throw new Error(formatErrorMessage(message, errorCode));
    }
  };
}

// node_modules/motion-utils/dist/es/global-config.mjs
var MotionGlobalConfig = {};

// node_modules/motion-utils/dist/es/is-numerical-string.mjs
var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

// node_modules/motion-utils/dist/es/is-object.mjs
var isObject = (value) => typeof value === "object" && value !== null;

// node_modules/motion-utils/dist/es/is-zero-value-string.mjs
var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);

// node_modules/motion-utils/dist/es/memo.mjs
// @__NO_SIDE_EFFECTS__
function memo(callback) {
  let result;
  return () => {
    if (result === void 0)
      result = callback();
    return result;
  };
}

// node_modules/motion-utils/dist/es/noop.mjs
var noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;

// node_modules/motion-utils/dist/es/pipe.mjs
var pipe = (...transformers) => transformers.reduce((a, b) => (v) => b(a(v)));

// node_modules/motion-utils/dist/es/progress.mjs
var progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
  const range = to - from;
  return range ? (value - from) / range : 1;
};

// node_modules/motion-utils/dist/es/subscription-manager.mjs
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => this.remove(handler);
  }
  remove(handler) {
    removeItem(this.subscriptions, handler);
  }
  notify(a, b, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a, b, c);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};

// node_modules/motion-utils/dist/es/time-conversion.mjs
var secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
var millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;

// node_modules/motion-utils/dist/es/velocity-per-second.mjs
var velocityPerSecond = /* @__NO_SIDE_EFFECTS__ */ (velocity, frameDuration) => frameDuration ? velocity * (1e3 / frameDuration) : 0;

// node_modules/motion-utils/dist/es/warn-once.mjs
var warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, errorCode) {
  if (condition || warned.has(message))
    return;
  console.warn(formatErrorMessage(message, errorCode));
  warned.add(message);
}

// node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => t * (3 * (1 - t) * ((1 - t) * a1 + t * a2) + t * t);
// @__NO_SIDE_EFFECTS__
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noop;
  return (x) => {
    let lowerBound = 0;
    let upperBound = 1;
    let t = x;
    for (let i = 0; ; i++) {
      if (!(t >= lowerBound && t <= upperBound)) {
        t = (lowerBound + upperBound) / 2;
      }
      const currentX = calcBezier(t, mX1, mX2) - x;
      if (currentX * currentX < 1e-28 || i === 40)
        break;
      currentX > 0 ? upperBound = t : lowerBound = t;
      t -= currentX * 1e-7 / (calcBezier(t + 1e-7, mX1, mX2) - x - currentX);
    }
    return calcBezier(t, mY1, mY2);
  };
}

// node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p2) => p2 <= 0.5 ? easing(2 * p2) / 2 : (2 - easing(2 * (1 - p2))) / 2;

// node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p2) => 1 - easing(1 - p2);

// node_modules/motion-utils/dist/es/easing/back.mjs
var backOut = /* @__PURE__ */ cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = /* @__PURE__ */ reverseEasing(backOut);
var backInOut = /* @__PURE__ */ mirrorEasing(backIn);

// node_modules/motion-utils/dist/es/easing/anticipate.mjs
var anticipate = (p2) => p2 >= 1 ? 1 : (p2 *= 2) < 1 ? 0.5 * backIn(p2) : 0.5 * (2 - Math.pow(2, -10 * (p2 - 1)));

// node_modules/motion-utils/dist/es/easing/circ.mjs
var circIn = (p2) => 1 - Math.sin(Math.acos(p2));
var circOut = /* @__PURE__ */ reverseEasing(circIn);
var circInOut = /* @__PURE__ */ mirrorEasing(circIn);

// node_modules/motion-utils/dist/es/easing/ease.mjs
var easeIn = /* @__PURE__ */ cubicBezier(0.42, 0, 1, 1);
var easeOut = /* @__PURE__ */ cubicBezier(0, 0, 0.58, 1);
var easeInOut = /* @__PURE__ */ cubicBezier(0.42, 0, 0.58, 1);

// node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = /* @__NO_SIDE_EFFECTS__ */ (ease2) => {
  return Array.isArray(ease2) && typeof ease2[0] !== "number";
};

// node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = /* @__NO_SIDE_EFFECTS__ */ (easing) => Array.isArray(easing) && typeof easing[0] === "number";

// node_modules/motion-utils/dist/es/easing/utils/map.mjs
var easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
var isValidEasing = (easing) => {
  return typeof easing === "string";
};
var easingDefinitionToFunction = (definition) => {
  if (isBezierDefinition(definition)) {
    typeof process !== "undefined" && process.env.NODE_ENV !== "production" && invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (isValidEasing(definition)) {
    typeof process !== "undefined" && process.env.NODE_ENV !== "production" && invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`, "invalid-easing-type");
    return easingLookup[definition];
  }
  return definition;
};

// node_modules/motion-dom/dist/es/frameloop/frame-data.mjs
var frameData = {
  delta: 0,
  timestamp: 0,
  isProcessing: false
};

// node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
var now;
function clearTime() {
  now = void 0;
}
var time = {
  now: () => {
    if (now === void 0) {
      time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
    }
    return now;
  },
  set: (newTime) => {
    now = newTime;
    queueMicrotask(clearTime);
  }
};

// node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
var sanitize = (v) => Math.round(v * 1e5) / 1e5;

// node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
var startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
var isCSSVariableToken = (value) => {
  const startsWithToken = startsAsVariableToken(value);
  if (!startsWithToken)
    return false;
  return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function containsCSSVariable(value) {
  if (typeof value !== "string")
    return false;
  return value.split("/*")[0].includes("var(--");
}

// node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = {
  ...number,
  transform: (v) => clamp(0, 1, v)
};
var scale = {
  ...number,
  default: 1
};

// node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

// node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
  return v == null;
}

// node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

// node_modules/motion-dom/dist/es/value/types/color/utils.mjs
var isColorString = (type, testProp) => (v) => {
  return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (typeof v !== "string")
    return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = (v) => clamp(0, 255, v);
var rgbUnit = {
  ...number,
  transform: (v) => Math.round(clampRgbUnit(v))
};
var rgba = {
  test: /* @__PURE__ */ isColorString("rgb", "red"),
  parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/motion-dom/dist/es/value/types/color/hex.mjs
var channel = (v, i, size) => {
  const c = v.substring(1 + i * size, 1 + (i + 1) * size);
  return size > 1 ? c : c + c;
};
function parseHex(v) {
  const size = v.length > 5 ? 2 : 1;
  const alpha2 = channel(v, 3, size);
  return {
    red: parseInt(channel(v, 0, size), 16),
    green: parseInt(channel(v, 1, size), 16),
    blue: parseInt(channel(v, 2, size), 16),
    alpha: alpha2 ? parseInt(alpha2, 16) / 255 : 1
  };
}
var hex = {
  test: /* @__PURE__ */ isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
var createUnitType = /* @__NO_SIDE_EFFECTS__ */ (unit) => ({
  test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = /* @__PURE__ */ createUnitType("deg");
var percent = /* @__PURE__ */ createUnitType("%");
var px = /* @__PURE__ */ createUnitType("px");
var vh = /* @__PURE__ */ createUnitType("vh");
var vw = /* @__PURE__ */ createUnitType("vw");
var progressPercentage = /* @__PURE__ */ (() => ({
  ...percent,
  parse: (v) => percent.parse(v) / 100,
  transform: (v) => percent.transform(v * 100)
}))();

// node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
var hsla = {
  test: /* @__PURE__ */ isColorString("hsl", "hue"),
  parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/motion-dom/dist/es/value/types/color/index.mjs
var color = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v) => {
    return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  },
  getAnimatableNone: (v) => {
    const parsed = color.parse(v);
    parsed.alpha = 0;
    return color.transform(parsed);
  }
};

// node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

// node_modules/motion-dom/dist/es/value/types/complex/index.mjs
var hasFloat = /* @__PURE__ */ new RegExp(floatRegex.source);
var hasColor = /* @__PURE__ */ new RegExp(colorRegex.source, "i");
function test(v) {
  return isNaN(v) && typeof v === "string" && (hasFloat.test(v) || hasColor.test(v));
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;
function hasComplexValues(value) {
  const asString = value.toString();
  return hasFloat.test(asString) || hasColor.test(asString);
}
function analyseComplexValue(value) {
  const originalValue = value.toString();
  const values = [];
  const indexes = {
    color: [],
    number: [],
    var: []
  };
  const types = [];
  let i = 0;
  const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
    if (color.test(parsedValue)) {
      indexes.color.push(i);
      types.push(COLOR_TOKEN);
      values.push(color.parse(parsedValue));
    } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
      indexes.var.push(i);
      types.push(VAR_TOKEN);
      values.push(parsedValue);
    } else {
      indexes.number.push(i);
      types.push(NUMBER_TOKEN);
      values.push(parseFloat(parsedValue));
    }
    ++i;
    return SPLIT_TOKEN;
  });
  const split = tokenised.split(SPLIT_TOKEN);
  return { values, split, indexes, types };
}
function parseComplexValue(v) {
  return analyseComplexValue(v).values;
}
function buildTransformer({ split, types }) {
  const numSections = split.length;
  return (v) => {
    let output = "";
    for (let i = 0; i < numSections; i++) {
      output += split[i];
      if (v[i] !== void 0) {
        const type = types[i];
        if (type === NUMBER_TOKEN) {
          output += sanitize(v[i]);
        } else if (type === COLOR_TOKEN) {
          output += color.transform(v[i]);
        } else {
          output += v[i];
        }
      }
    }
    return output;
  };
}
function createTransformer(source) {
  return buildTransformer(analyseComplexValue(source));
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
var convertToZero = (value, splitBefore) => {
  if (typeof value === "number") {
    return splitBefore?.trim().endsWith("/") ? value : 0;
  }
  return convertNumbersToZero(value);
};
function getAnimatableNone(v) {
  const info = analyseComplexValue(v);
  const transformer = buildTransformer(info);
  return transformer(info.values.map((value, i) => convertToZero(value, info.split[i])));
}
var complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone
};

// node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function hueToRgb(p2, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p2 + (q - p2) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p2 + (q - p2) * (2 / 3 - t) * 6;
  return p2;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p2 = 2 * lightness - q;
    red = hueToRgb(p2, q, hue + 1 / 3);
    green = hueToRgb(p2, q, hue);
    blue = hueToRgb(p2, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
  return (p2) => p2 > 0 ? b : a;
}

// node_modules/motion-dom/dist/es/utils/mix/number.mjs
var mixNumber = (from, to, progress2) => {
  return from + (to - from) * progress2;
};

// node_modules/motion-dom/dist/es/utils/mix/color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const expo = v * (to * to - fromExpo) + fromExpo;
  return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color2) {
  const type = getColorType(color2);
  if (!type) {
    process.env.NODE_ENV !== "production" && warning(false, `'${color2}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable");
    return false;
  }
  let model = type.parse(color2);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
var mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  if (!fromRGBA || !toRGBA) {
    return mixImmediate(from, to);
  }
  const blended = { ...fromRGBA };
  return (v) => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};

// node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
var invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
function mixVisibility(origin, target) {
  if (invisibleValues.has(origin)) {
    return (p2) => p2 <= 0 ? origin : target;
  } else {
    return (p2) => p2 >= 1 ? target : origin;
  }
}

// node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function mixNumber2(a, b) {
  return (p2) => mixNumber(a, b, p2);
}
function getMixer(a) {
  if (typeof a === "number") {
    return mixNumber2;
  } else if (typeof a === "string") {
    return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
  } else if (Array.isArray(a)) {
    return mixArray;
  } else if (typeof a === "object") {
    return color.test(a) ? mixColor : mixObject;
  }
  return mixImmediate;
}
function mixArray(a, b) {
  const output = [...a];
  const numValues = output.length;
  const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
  return (p2) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](p2);
    }
    return output;
  };
}
function mixObject(a, b) {
  const output = { ...a, ...b };
  const blendValue = {};
  for (const key in output) {
    if (a[key] !== void 0 && b[key] !== void 0) {
      blendValue[key] = getMixer(a[key])(a[key], b[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
}
function matchOrder(origin, target) {
  const orderedOrigin = [];
  const pointers = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < target.values.length; i++) {
    const type = target.types[i];
    const originIndex = origin.indexes[type][pointers[type]];
    const originValue = origin.values[originIndex] ?? 0;
    orderedOrigin[i] = originValue;
    pointers[type]++;
  }
  return orderedOrigin;
}
var mixComplex = (origin, target) => {
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
  if (canInterpolate) {
    if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
      return mixVisibility(origin, target);
    }
    return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), buildTransformer(targetStats));
  } else {
    process.env.NODE_ENV !== "production" && warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different");
    return mixImmediate(origin, target);
  }
};

// node_modules/motion-dom/dist/es/utils/mix/index.mjs
var unitValue = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function mixUnit(from, to) {
  const a = unitValue.exec(from);
  if (!a)
    return;
  const b = unitValue.exec(to);
  if (!b || a[2] !== b[2])
    return;
  const unit = a[2];
  const origin = parseFloat(a[1]);
  const target = parseFloat(b[1]);
  return (p2) => sanitize(mixNumber(origin, target, p2)) + unit;
}
function mix(from, to, p2) {
  if (typeof from === "number" && typeof to === "number" && typeof p2 === "number") {
    return mixNumber(from, to, p2);
  }
  if (typeof from === "string" && typeof to === "string") {
    const mixer2 = mixUnit(from, to);
    if (mixer2)
      return mixer2;
  }
  const mixer = getMixer(from);
  return mixer(from, to);
}

// node_modules/motion-dom/dist/es/frameloop/order.mjs
var stepsOrder = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];

// node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame) {
  let thisFrame = /* @__PURE__ */ new Set();
  let nextFrame = /* @__PURE__ */ new Set();
  let isProcessing = false;
  let flushNextFrame = false;
  let running;
  const toKeepAlive = /* @__PURE__ */ new Set();
  let latestFrameData = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  function triggerCallback(callback) {
    if (toKeepAlive.has(callback)) {
      nextFrame.add(callback);
      runNextFrame();
    }
    (running = callback)(latestFrameData);
  }
  const step = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      addToCurrentFrame && callback !== running && queue.delete(callback);
      queue.add(callback);
      return callback;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (callback) => {
      nextFrame.delete(callback);
      toKeepAlive.delete(callback);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (frameData2) => {
      latestFrameData = frameData2;
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      const prevFrame = thisFrame;
      thisFrame = nextFrame;
      nextFrame = prevFrame;
      thisFrame.forEach(triggerCallback);
      thisFrame.clear();
      running = void 0;
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}

// node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive, state = {
  delta: 0,
  timestamp: 0,
  isProcessing: false
}) {
  let runNextFrame = false;
  let useDefaultElapsed = true;
  const flagRunNextFrame = () => runNextFrame = true;
  const steps = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(flagRunNextFrame);
    return acc;
  }, {});
  const { setup, read: read2, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps;
  const processBatch = () => {
    const useManualTiming = MotionGlobalConfig.useManualTiming;
    const timestamp = useManualTiming ? state.timestamp : performance.now();
    runNextFrame = false;
    if (!useManualTiming) {
      state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
    }
    state.timestamp = timestamp;
    state.isProcessing = true;
    setup.process(state);
    read2.process(state);
    resolveKeyframes.process(state);
    preUpdate.process(state);
    update.process(state);
    preRender.process(state);
    render.process(state);
    postRender.process(state);
    state.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  const wake = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  const schedule = stepsOrder.reduce((acc, key) => {
    const step = steps[key];
    acc[key] = (process2, keepAlive = false, immediate = false) => {
      if (!runNextFrame)
        wake();
      return step.schedule(process2, keepAlive, immediate);
    };
    return acc;
  }, {});
  const cancel = (process2) => {
    for (let i = 0; i < stepsOrder.length; i++) {
      steps[stepsOrder[i]].cancel(process2);
    }
  };
  return { schedule, cancel, state, steps };
}

// node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: frame, cancel: cancelFrame, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true, frameData);

// node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var frameloopDriver = (update) => {
  const passTimestamp = ({ timestamp }) => update(timestamp);
  return {
    start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
    stop: () => cancelFrame(passTimestamp),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => frameData.isProcessing ? frameData.timestamp : time.now()
  };
};

// node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
var generateLinearEasing = (easing, duration, resolution = 10) => {
  let points = "";
  const numPoints = Math.max(Math.round(duration / resolution), 2);
  for (let i = 0; i < numPoints; i++) {
    points += Math.round(easing(i / (numPoints - 1)) * 1e4) / 1e4 + ", ";
  }
  return `linear(${points.substring(0, points.length - 2)})`;
};

// node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator, timeStep = 50, maxDuration2 = maxGeneratorDuration, keyframes2) {
  let duration = 0;
  let state = generator.next(duration);
  keyframes2?.push(state.value);
  while (!state.done && duration < maxDuration2) {
    duration += timeStep;
    state = generator.next(duration);
    keyframes2?.push(state.value);
  }
  return duration >= maxDuration2 ? Infinity : duration;
}

// node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function createGeneratorEasing(options, scale2 = 100, createGenerator) {
  const { keyframes: k, velocity: v } = options;
  const delta = k && k[k.length - 1] - k[0];
  const generator = createGenerator({
    ...options,
    velocity: v && delta ? v * scale2 / delta : v,
    keyframes: [0, scale2]
  });
  const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
  return {
    type: "keyframes",
    ease: (progress2) => {
      return generator.next(duration * progress2).value / scale2;
    },
    duration: millisecondsToSeconds(duration)
  };
}

// node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var defaultStiffness = 100;
var defaultDamping = 10;
var defaultMass = 1;
var defaultDuration = 800;
var defaultBounce = 0.3;
var defaultVisualDuration = 0.3;
var restSpeedGranular = 0.01;
var restSpeedDefault = 2;
var restDeltaGranular = 5e-3;
var restDeltaDefault = 0.5;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var bounceToDampingRatio = (bounce) => bounce < 0 ? 1 / Math.max(1 + bounce, minDamping) : Math.max(1 - bounce, minDamping);
function overdampedFreqScale(dampingRatio, criticalFreqTime) {
  if (!(dampingRatio > 1))
    return 1;
  const root = Math.sqrt(dampingRatio * dampingRatio - 1);
  const slow = dampingRatio - root;
  const fast = dampingRatio + root;
  const target = 2 * root * Math.exp(-criticalFreqTime) * (1 + criticalFreqTime);
  return approximateRoot((freqTime) => fast * Math.exp(-slow * freqTime) - slow * Math.exp(-fast * freqTime) - target, (freqTime) => Math.exp(-fast * freqTime) - Math.exp(-slow * freqTime), criticalFreqTime) / criticalFreqTime;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
var safeMin = 1e-3;
function findSpring({ duration = defaultDuration, bounce = defaultBounce }) {
  let envelope;
  let derivative;
  process.env.NODE_ENV !== "production" && warning(duration <= secondsToMilliseconds(maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  const dampingRatio = bounceToDampingRatio(bounce);
  duration = clamp(minDuration, maxDuration, millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const b = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - exponentialDecay / b * c;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const e = dampingRatio * dampingRatio * undampedFreq2 * undampedFreq2 * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(undampedFreq2 * undampedFreq2, dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * -e * f / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = undampedFreq2 * duration + 1;
      return -safeMin + a * b;
    };
    derivative = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = -undampedFreq2 * (duration * duration);
      return a * b;
    };
  }
  const initialGuess = 5 / duration;
  const criticalFreq = approximateRoot(envelope, derivative, initialGuess);
  const undampedFreq = criticalFreq * overdampedFreqScale(dampingRatio, criticalFreq * duration);
  const stiffness = undampedFreq * undampedFreq;
  return {
    stiffness,
    damping: dampingRatio * 2 * Math.sqrt(stiffness),
    duration: secondsToMilliseconds(duration)
  };
}
var isValidPhysics = (value, canBeZero) => (canBeZero ? value >= 0 : value > 0) && value < Infinity;
function resolvePhysics(value, canBeZero) {
  if (isValidPhysics(value, canBeZero))
    return value;
  if (process.env.NODE_ENV !== "production") {
    warning(value === void 0 || value === "auto", "Spring stiffness and mass must be positive, damping 0 or greater", "spring-invalid-physics");
  }
  return void 0;
}
function getSpringOptions(options) {
  const validStiffness = resolvePhysics(options.stiffness);
  const validDamping = resolvePhysics(options.damping, true);
  const validMass = resolvePhysics(options.mass);
  const springOptions = {
    ...options,
    stiffness: validStiffness ?? defaultStiffness,
    damping: validDamping ?? defaultDamping,
    mass: validMass ?? defaultMass,
    isResolvedFromDuration: false,
    // stiffness/damping/mass overrides duration/bounce
    isTimeDefined: (validStiffness ?? validDamping ?? validMass) === void 0 && (options.duration !== void 0 || options.bounce !== void 0)
  };
  if (springOptions.isTimeDefined) {
    if (options.visualDuration) {
      const dampingRatio = bounceToDampingRatio(options.bounce || 0);
      const root = 2 * Math.PI / (options.visualDuration * 1.2) * overdampedFreqScale(dampingRatio, 2 * Math.PI / 1.2);
      springOptions.stiffness = root * root;
      springOptions.damping = 2 * dampingRatio * Math.sqrt(springOptions.stiffness);
    } else {
      Object.assign(springOptions, findSpring(springOptions));
      springOptions.isResolvedFromDuration = true;
    }
    if (!isValidPhysics(springOptions.stiffness) || !isValidPhysics(springOptions.damping, true)) {
      springOptions.stiffness = defaultStiffness;
      springOptions.damping = defaultDamping;
    }
  }
  return springOptions;
}
function springGenerator(optionsOrVisualDuration = defaultVisualDuration, bounce = defaultBounce) {
  const options = typeof optionsOrVisualDuration !== "object" ? {
    visualDuration: optionsOrVisualDuration,
    keyframes: [0, 1],
    bounce
  } : optionsOrVisualDuration;
  const origin = options.keyframes[0];
  const target = options.keyframes[options.keyframes.length - 1];
  const state = { done: false, value: origin };
  const { stiffness, damping, mass, duration, isResolvedFromDuration, isTimeDefined } = getSpringOptions({ ...options });
  const inheritVelocity = (velocity) => isResolvedFromDuration ? 0 : -millisecondsToSeconds(velocity);
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
  const decay = dampingRatio * undampedAngularFreq;
  const s = {
    target,
    delta: target - origin,
    velocity: inheritVelocity(options.velocity) || 0,
    restSpeed: 0,
    restDelta: 0
  };
  const setRestThresholds = () => {
    const isGranularScale = Math.abs(s.delta) < 5;
    s.restSpeed = options.restSpeed || (isGranularScale ? restSpeedGranular : restSpeedDefault);
    s.restDelta = options.restDelta || (isGranularScale ? restDeltaGranular : restDeltaDefault);
  };
  setRestThresholds();
  let resolveSpring;
  let resolveVelocity;
  let update;
  if (dampingRatio < 1) {
    const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    const c = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    update = () => {
      c.A = (s.velocity + decay * s.delta) / angularFreq;
      c.sinC = decay * c.A + s.delta * angularFreq;
      c.cosC = decay * s.delta - c.A * angularFreq;
    };
    const sample = (t) => {
      if (t !== c.t) {
        c.t = t;
        c.env = Math.exp(-decay * t);
        c.sin = Math.sin(angularFreq * t);
        c.cos = Math.cos(angularFreq * t);
      }
    };
    resolveSpring = (t) => {
      sample(t);
      return s.target - c.env * (c.A * c.sin + s.delta * c.cos);
    };
    resolveVelocity = (t) => {
      sample(t);
      return c.env * (c.sinC * c.sin + c.cosC * c.cos);
    };
  } else if (dampingRatio === 1) {
    resolveSpring = (t) => s.target - Math.exp(-undampedAngularFreq * t) * (s.delta + (s.velocity + undampedAngularFreq * s.delta) * t);
    const c = { C: 0 };
    update = () => {
      c.C = s.velocity + undampedAngularFreq * s.delta;
    };
    resolveVelocity = (t) => Math.exp(-undampedAngularFreq * t) * (undampedAngularFreq * c.C * t - s.velocity);
  } else {
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    const slow = decay - dampedAngularFreq;
    const fast = decay + dampedAngularFreq;
    const limit = dampedAngularFreq < 1 || isTimeDefined ? Infinity : 300 / dampedAngularFreq;
    const decayAt = (rate, t) => Math.exp(t > limit ? (decay - rate) * limit - decay * t : -rate * t);
    const c = { S: 0, F: 0 };
    update = () => {
      const P = (s.velocity + decay * s.delta) / dampedAngularFreq;
      c.S = (s.delta + P) / 2;
      c.F = (s.delta - P) / 2;
    };
    resolveSpring = (t) => s.target - c.S * decayAt(slow, t) - c.F * decayAt(fast, t);
    resolveVelocity = (t) => slow * c.S * decayAt(slow, t) + fast * c.F * decayAt(fast, t);
  }
  update();
  const calculatedDuration = isResolvedFromDuration ? duration || null : null;
  const generator = {
    calculatedDuration,
    /**
     * Aim the spring at a new target from its current position and
     * velocity, reusing the resolved physics and closures.
     */
    retarget: (keyframes2, newVelocity) => {
      s.target = keyframes2[keyframes2.length - 1];
      s.delta = s.target - keyframes2[0];
      s.velocity = inheritVelocity(newVelocity);
      if (!(options.restSpeed && options.restDelta))
        setRestThresholds();
      generator.calculatedDuration = calculatedDuration;
      state.done = false;
      update();
    },
    velocity: (t) => secondsToMilliseconds(resolveVelocity(t)),
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        const currentVelocity = secondsToMilliseconds(resolveVelocity(t));
        state.done = Math.abs(currentVelocity) <= s.restSpeed && Math.abs(s.target - current) <= s.restDelta;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? s.target : current;
      return state;
    },
    toString: () => {
      const easingDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
      const easing = generateLinearEasing((progress2) => generator.next(easingDuration * progress2).value, easingDuration, 30);
      return easingDuration + "ms " + easing;
    }
  };
  return generator;
}
var spring = /* @__PURE__ */ Object.assign(springGenerator, {
  applyToOptions: (options) => {
    const generatorOptions = createGeneratorEasing(options, 100, springGenerator);
    options.ease = generatorOptions.ease;
    options.duration = secondsToMilliseconds(generatorOptions.duration);
    options.type = "keyframes";
    return options;
  }
});

// node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes: keyframes2, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
  const origin = keyframes2[0];
  const state = {
    done: false,
    value: origin
  };
  const isOutOfBounds = (v) => v < min || v > max;
  const nearestBoundary = (v) => {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget ? modifyTarget(ideal) : ideal;
  if (target !== ideal)
    amplitude = target - origin;
  const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
  const applyFriction = (t) => {
    const delta = calcDelta(t);
    state.done = Math.abs(delta) <= restDelta;
    state.value = state.done ? target : t ? target + delta : origin;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = (t) => {
    if (!isOutOfBounds(state.value))
      return;
    timeReachedBoundary = t;
    spring$1 = spring({
      keyframes: [state.value, nearestBoundary(state.value)],
      /**
       * The friction curve is target + calcDelta(t), so its exact
       * derivative is -calcDelta(t) / timeConstant in units/ms,
       * converted here to the units/second expected by spring.
       */
      velocity: -calcDelta(t) / timeConstant * 1e3,
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: (t) => {
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === void 0) {
        hasUpdatedFrame = true;
        applyFriction(t);
        checkCatchBoundary(t);
      }
      if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) {
        return spring$1.next(t - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t);
        return state;
      }
    }
  };
}

// node_modules/motion-dom/dist/es/utils/interpolate.mjs
function createMixers(output, ease2, customMixer) {
  const mixers = [];
  const mixerFactory = MotionGlobalConfig.mix || mix;
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = customMixer?.(output[i], output[i + 1]) || mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      const easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
  const inputLength = input.length;
  process.env.NODE_ENV !== "production" && invariant(inputLength === output.length, "Both input and output ranges must be the same length", "range-length");
  if (inputLength === 1)
    return () => output[0];
  if (inputLength === 2 && output[0] === output[1])
    return () => output[1];
  const isZeroDeltaRange = input[0] === input[1];
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease2, mixer);
  const numMixers = mixers.length;
  const interpolator = (v) => {
    if (isZeroDeltaRange && v < input[0])
      return output[0];
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v < input[i + 1])
          break;
      }
    }
    const progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress(0, remaining, i);
    offset.push(mixNumber(min, 1, offsetProgress));
  }
}

// node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function defaultOffset(arr) {
  const offset = [0];
  fillOffset(offset, arr.length - 1);
  return offset;
}

// node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}

// node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut", mixer: transitionMixer }) {
  const customMixer = typeof keyframeValues[0] === "number" ? void 0 : transitionMixer;
  const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2) || easeInOut;
  const state = {
    done: false,
    value: keyframeValues[0]
  };
  let span = -1;
  if (!customMixer) {
    for (let i = 1; i < keyframeValues.length; i++) {
      if (keyframeValues[i] !== keyframeValues[i - 1]) {
        if (span >= 0) {
          span = -2;
          break;
        }
        span = i - 1;
      }
    }
  }
  if (span >= 0) {
    const offsets = times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues);
    const from = offsets[span] * duration;
    const to = offsets[span + 1] * duration;
    const origin = keyframeValues[span];
    const target = keyframeValues[span + 1];
    const ease3 = Array.isArray(easingFunctions) ? easingFunctions[span] : easingFunctions;
    const mixer = (MotionGlobalConfig.mix || mix)(origin, target);
    const last = keyframeValues.length - 2;
    return {
      calculatedDuration: duration,
      next: (t) => {
        state.value = span && t < from ? mixer(0) : span < last && (t >= to || !duration) ? typeof target === "number" ? target : mixer(1) : mixer(ease3(t >= to || !duration ? 1 : t <= from ? 0 : (t - from) / (to - from)));
        state.done = t >= duration;
        return state;
      }
    };
  }
  const absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
    duration
  );
  const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions),
    mixer: customMixer
  });
  return {
    calculatedDuration: duration,
    next: (t) => {
      state.value = mapTimeToKeyframe(t);
      state.done = t >= duration;
      return state;
    }
  };
}

// node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function getGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}
function calcGeneratorVelocity(generator, t, initialVelocity = 0) {
  if (t <= 0)
    return initialVelocity;
  return generator.velocity ? generator.velocity(t) : getGeneratorVelocity((s) => generator.next(s).value, t, generator.next(t).value);
}

// node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
  let first;
  let last;
  let numResolved = 0;
  for (let i = 0; i < keyframes2.length; i++) {
    const keyframe = keyframes2[i];
    if (keyframe !== null) {
      if (!numResolved++)
        first = keyframe;
      last = keyframe;
    }
  }
  const useFirstKeyframe = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1;
  const index = useFirstKeyframe ? 0 : numResolved - 1;
  return !index || finalKeyframe === void 0 ? index ? last : first : finalKeyframe;
}

// node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var transitionTypeMap = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring
};
function replaceTransitionType(transition) {
  if (typeof transition.type === "string") {
    transition.type = transitionTypeMap[transition.type];
  }
}

// node_modules/motion-dom/dist/es/animation/utils/resolve-start-time.mjs
var MAX_START_DELAY = 40;
var resolveStartTime = (startTime, now2) => now2 - startTime > MAX_START_DELAY && !MotionGlobalConfig.useManualTiming ? now2 : startTime;

// node_modules/motion-dom/dist/es/animation/utils/notify-inspector.mjs
function baseRecord(kind, animation) {
  return {
    kind,
    animation,
    timestamp: time.now(),
    frameTimestamp: frameData.timestamp,
    frameIsProcessing: frameData.isProcessing
  };
}
function notifyAnimationStart(animation, options, transition) {
  const notify = globalThis.__MOTION_INSPECT__;
  if (!notify)
    return;
  try {
    notify({
      ...baseRecord("animation-start", animation),
      options: transition ? { ...options, ...transition } : options
    });
  } catch {
  }
}
function notifyLayoutAnimationStart(animation, node) {
  const notify = globalThis.__MOTION_INSPECT__;
  if (!notify)
    return;
  try {
    notify({
      ...baseRecord("layout-animation-start", animation),
      node
    });
  } catch {
  }
}

// node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var WithPromise = class {
  constructor() {
    this.isResolved = false;
  }
  get finished() {
    if (!this._finished) {
      this._finished = this.isResolved ? Promise.resolve() : new Promise((resolve) => {
        this._resolve = resolve;
      });
    }
    return this._finished;
  }
  updateFinished() {
    this._finished = this._resolve = void 0;
    this.isResolved = false;
  }
  notifyFinished() {
    this.isResolved = true;
    this._resolve?.();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(onResolve, onReject) {
    return this.finished.then(onResolve, onReject);
  }
};

// node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
var percentToProgress = (percent2) => percent2 / 100;
var round = (value) => Math.round(value * 1e4) / 1e4;
var JSAnimation = class extends WithPromise {
  constructor(options) {
    super();
    this.state = "idle";
    this.startTime = null;
    this.isStopped = false;
    this.currentTime = 0;
    this.holdTime = null;
    this.playbackSpeed = 1;
    this.delayState = {
      done: false,
      value: void 0
    };
    this.stop = () => {
      const { motionValue: motionValue2 } = this.options;
      const now2 = time.now();
      if (motionValue2 && motionValue2.updatedAt !== now2) {
        this.tick(motionValue2.updatedAt = now2);
      }
      this.isStopped = true;
      if (this.state === "idle")
        return;
      this.teardown();
      this.options.onStop?.();
    };
    this.options = options;
    this.initAnimation();
    this.play();
    if (options.autoplay === false)
      this.pause();
    notifyAnimationStart(this, this.options);
  }
  initAnimation() {
    const { options } = this;
    replaceTransitionType(options);
    const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
    let { keyframes: keyframes$1 } = options;
    const generatorFactory = type || keyframes;
    if (process.env.NODE_ENV !== "production" && generatorFactory !== keyframes) {
      invariant(keyframes$1.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`, "spring-two-frames");
    }
    this.mixKeyframes = void 0;
    if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
      this.mixKeyframes = pipe(percentToProgress, options.mixer?.(keyframes$1[0], keyframes$1[1]) || mix(keyframes$1[0], keyframes$1[1]));
      keyframes$1 = [0, 100];
    }
    const generator = generatorFactory(keyframes$1 === options.keyframes ? options : { ...options, keyframes: keyframes$1 });
    if (repeatType === "mirror") {
      this.mirroredGenerator = generatorFactory({
        ...options,
        keyframes: [...keyframes$1].reverse(),
        velocity: -velocity
      });
    }
    if (generator.calculatedDuration === null) {
      generator.calculatedDuration = calcGeneratorDuration(generator);
    }
    const { calculatedDuration } = generator;
    this.calculatedDuration = calculatedDuration;
    this.resolvedDuration = calculatedDuration + repeatDelay;
    this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
    this.generator = generator;
  }
  updateTime(timestamp) {
    this.currentTime = this.holdTime ?? Math.round(timestamp - this.startTime) * this.playbackSpeed;
  }
  tick(timestamp, sample = false) {
    const { generator, totalDuration, calculatedDuration } = this;
    if (this.startTime === null)
      return generator.next(0);
    const { delay: delay2 = 0, keyframes: keyframes2, type, onUpdate, finalKeyframe } = this.options;
    if (this.startTime === this.pendingStartTime) {
      this.startTime = resolveStartTime(this.startTime, timestamp);
    }
    this.pendingStartTime = void 0;
    if (this.speed > 0) {
      this.startTime = Math.min(this.startTime, timestamp);
    } else if (this.speed < 0) {
      this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
    }
    if (sample) {
      this.currentTime = timestamp;
    } else {
      this.updateTime(timestamp);
    }
    const timeWithoutDelay = this.currentTime - delay2 * (this.playbackSpeed >= 0 ? 1 : -1);
    const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    this.currentTime = Math.max(timeWithoutDelay, 0);
    if (this.state === "finished" && this.holdTime === null) {
      this.currentTime = totalDuration;
    }
    const state = this.generate(this.currentTime, isInDelayPhase);
    let { done } = state;
    if (!isInDelayPhase) {
      done = this.playbackSpeed >= 0 ? calculatedDuration < Infinity ? this.currentTime >= totalDuration : done : this.currentTime <= 0;
    }
    const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
    if (isAnimationFinished && type !== inertia) {
      state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
    }
    if (onUpdate) {
      onUpdate(state.value);
    }
    if (isAnimationFinished) {
      this.finish();
    }
    return state;
  }
  /**
   * This animation's time, including delay, at a timestamp.
   */
  at(timestamp) {
    return this.holdTime ?? round((timestamp - this.startTime) * this.playbackSpeed);
  }
  /**
   * The value at a timestamp, without changing this animation's state.
   * If resolved, it ends at the last resolved keyframe, which is in the
   * same unit as the others, rather than at finalKeyframe.
   */
  sampleAt(timestamp, resolved) {
    const { options, totalDuration } = this;
    const t = this.at(timestamp) - (options.delay || 0);
    return t >= totalDuration && options.type !== inertia ? getFinalKeyframe(options.keyframes, options, resolved ? void 0 : options.finalKeyframe) : this.generate(Math.max(t, 0), t < 0).value;
  }
  /**
   * The generator's state `currentTime` ms after the delay, without
   * changing the animation's own state.
   */
  generate(currentTime, isInDelayPhase) {
    const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration } = this;
    const { keyframes: keyframes2, repeat, repeatType, repeatDelay } = this.options;
    let elapsed = currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress2 = Math.min(currentTime, totalDuration) / resolvedDuration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const isOddIteration = Boolean(currentIteration % 2);
      if (isOddIteration) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
    }
    let state;
    if (isInDelayPhase) {
      this.delayState.value = keyframes2[0];
      state = this.delayState;
    } else {
      state = frameGenerator.next(elapsed);
    }
    if (mixKeyframes && !isInDelayPhase) {
      state.value = mixKeyframes(state.value);
    }
    return state;
  }
  get duration() {
    return millisecondsToSeconds(this.calculatedDuration);
  }
  get iterationDuration() {
    return this.duration + millisecondsToSeconds(this.options.delay ?? 0);
  }
  get time() {
    return millisecondsToSeconds(this.currentTime);
  }
  set time(newTime) {
    if (this.state === "finished")
      this.updateFinished();
    newTime = secondsToMilliseconds(newTime);
    this.currentTime = newTime;
    if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
      this.holdTime = newTime;
    } else if (this.driver) {
      this.startTime = this.driver.now() - newTime / this.playbackSpeed;
    }
    if (this.driver) {
      this.driver.start(false);
    } else {
      this.startTime = 0;
      this.state = "paused";
      this.holdTime = newTime;
      this.tick(newTime);
    }
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    return calcGeneratorVelocity(this.generator, this.currentTime, this.options.velocity);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(newSpeed) {
    const hasChanged = this.playbackSpeed !== newSpeed;
    if (hasChanged && this.driver) {
      this.updateTime(time.now());
    }
    this.playbackSpeed = newSpeed;
    if (hasChanged && this.driver) {
      this.time = millisecondsToSeconds(this.currentTime);
    }
  }
  play() {
    if (this.isStopped)
      return;
    const { driver = frameloopDriver, startTime } = this.options;
    if (!this.driver) {
      this.driver = driver((timestamp) => this.tick(timestamp));
    }
    this.options.onPlay?.();
    const now2 = this.driver.now();
    if (this.state === "finished") {
      this.updateFinished();
      this.startTime = now2;
    } else if (this.holdTime !== null) {
      this.startTime = now2 - this.holdTime / (this.playbackSpeed || 1);
    } else if (!this.startTime) {
      this.startTime = startTime ?? (this.pendingStartTime = now2);
    }
    if (this.state === "finished" && this.speed < 0) {
      this.startTime += this.calculatedDuration;
    }
    this.holdTime = null;
    this.state = "running";
    this.driver.start();
  }
  pause() {
    this.state = "paused";
    this.updateTime(time.now());
    this.holdTime = this.currentTime;
  }
  complete() {
    if (this.state !== "running") {
      this.play();
    }
    this.state = "finished";
    this.holdTime = null;
  }
  finish() {
    this.notifyFinished();
    this.teardown();
    this.state = "finished";
    this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null;
    this.startTime = 0;
    this.tick(0);
    this.teardown();
    this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle";
    this.driver?.stop();
    this.driver = void 0;
    this.startTime = this.holdTime = null;
  }
  sample(sampleTime) {
    this.startTime = 0;
    return this.tick(sampleTime, true);
  }
  attachTimeline(timeline) {
    if (this.options.allowFlatten) {
      this.options.type = "keyframes";
      this.options.ease = "linear";
      this.initAnimation();
    }
    this.driver?.stop();
    return timeline.observe(this);
  }
};

// node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  const [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
var filter = {
  ...complex,
  getAnimatableNone: (v) => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};

// node_modules/motion-dom/dist/es/value/types/complex/mask.mjs
var mask = {
  ...complex,
  getAnimatableNone: (v) => {
    const parsed = complex.parse(v);
    const transformer = complex.createTransformer(v);
    return transformer(parsed.map((v2) => typeof v2 === "number" ? 0 : typeof v2 === "object" ? { ...v2, alpha: 1 } : v2));
  }
};

// node_modules/motion-dom/dist/es/value/types/int.mjs
var int = {
  ...number,
  transform: Math.round
};

// node_modules/motion-dom/dist/es/value/types/maps/transform.mjs
var transformValueTypes = {
  rotate: degrees,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px
};

// node_modules/motion-dom/dist/es/value/types/maps/number.mjs
var numberValueTypes = {
  // Border props
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  inset: px,
  insetBlock: px,
  insetBlockStart: px,
  insetBlockEnd: px,
  insetInline: px,
  insetInlineStart: px,
  insetInlineEnd: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  paddingBlock: px,
  paddingBlockStart: px,
  paddingBlockEnd: px,
  paddingInline: px,
  paddingInlineStart: px,
  paddingInlineEnd: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  marginBlock: px,
  marginBlockStart: px,
  marginBlockEnd: px,
  marginInline: px,
  marginInlineStart: px,
  marginInlineEnd: px,
  // Typography
  fontSize: px,
  // Misc
  backgroundPositionX: px,
  backgroundPositionY: px,
  ...transformValueTypes,
  zIndex: int,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
var defaultValueTypes = {
  ...numberValueTypes,
  // Color props
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  // Border props
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter,
  mask,
  WebkitMask: mask
};
var getDefaultValueType = (key) => defaultValueTypes[key];

// node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
var customTypes = /* @__PURE__ */ new Set([filter, mask]);
var lastKey;
var lastValue;
var lastNone;
function getAnimatableNone2(key, value) {
  if (key === lastKey && value === lastValue)
    return lastNone;
  let defaultValueType = getDefaultValueType(key);
  if (!customTypes.has(defaultValueType))
    defaultValueType = complex;
  lastNone = defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
  lastKey = key;
  lastValue = value;
  return lastNone;
}

// node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function fillWildcards(keyframes2) {
  for (let i = 1; i < keyframes2.length; i++) {
    keyframes2[i] ?? (keyframes2[i] = keyframes2[i - 1]);
  }
}

// node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var radToDeg = (rad) => rad * 180 / Math.PI;
var rotate = (v) => {
  const angle = radToDeg(Math.atan2(v[1], v[0]));
  return rebaseAngle(angle);
};
var matrix2dParsers = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scaleZ: () => 1,
  scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
  rotate,
  rotateZ: rotate,
  skewX: (v) => radToDeg(Math.atan(v[1])),
  skewY: (v) => radToDeg(Math.atan(v[2])),
  skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
};
var rebaseAngle = (angle) => {
  angle = angle % 360;
  if (angle < 0)
    angle += 360;
  return angle;
};
var rotateZ = rotate;
var scaleX = (v) => Math.hypot(v[0], v[1]);
var scaleY = (v) => Math.hypot(v[4], v[5]);
var matrix3dParsers = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX,
  scaleY,
  scaleZ: (v) => Math.hypot(v[8], v[9], v[10]),
  scale: (v) => (scaleX(v) + scaleY(v)) / 2,
  rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
  rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
  rotateZ,
  rotate: rotateZ,
  skewX: (v) => radToDeg(Math.atan(v[4])),
  skewY: (v) => radToDeg(Math.atan(v[1])),
  skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
};
function defaultTransformValue(name) {
  return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform, name) {
  if (!transform || transform === "none") {
    return defaultTransformValue(name);
  }
  const match = transform.match(/^matrix(3d)?\(([-\d.e\s,]+)\)$/u);
  if (!match) {
    return defaultTransformValue(name);
  }
  const valueParser = (match[1] ? matrix3dParsers : matrix2dParsers)[name];
  const values = match[2].split(",").map((v) => parseFloat(v));
  return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
}
var readTransformValue = (instance, name) => {
  const { transform = "none" } = getComputedStyle(instance);
  return parseValueFromTransform(transform, name);
};

// node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var transformPropOrder = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "scaleZ",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
var transformProps = /* @__PURE__ */ (() => /* @__PURE__ */ new Set([...transformPropOrder, "pathRotation"]))();

// node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
var isNumOrPxType = (v) => v === number || v === px;
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = /* @__PURE__ */ transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      const current = value.get();
      const reset = key.startsWith("scale") ? 1 : 0;
      if (current === reset)
        return;
      removedTransforms.push([key, current]);
      value.set(reset);
    }
  });
  return removedTransforms;
}
var boxDependentValues = /* @__PURE__ */ new Set(["bottom", "right"]);
function measureDimension(computed, measureBox, axis, paddingStart, paddingEnd, boxSizing) {
  const px2 = parseFloat(computed);
  if (!isNaN(px2))
    return px2;
  const { min, max } = measureBox()[axis];
  const size = max - min;
  return boxSizing === "border-box" ? size : size - parseFloat(paddingStart) - parseFloat(paddingEnd);
}
var transformX = ({ transform }) => parseValueFromTransform(transform, "x");
var transformY = ({ transform }) => parseValueFromTransform(transform, "y");
var positionalValues = {
  // Dimensions
  width: ({ width, paddingLeft = "0", paddingRight = "0", boxSizing }, measureBox) => measureDimension(width, measureBox, "x", paddingLeft, paddingRight, boxSizing),
  height: ({ height, paddingTop = "0", paddingBottom = "0", boxSizing }, measureBox) => measureDimension(height, measureBox, "y", paddingTop, paddingBottom, boxSizing),
  top: ({ top }) => parseFloat(top),
  left: ({ left }) => parseFloat(left),
  bottom: ({ top }, measureBox) => {
    const { y } = measureBox();
    return parseFloat(top) + (y.max - y.min);
  },
  right: ({ left }, measureBox) => {
    const { x } = measureBox();
    return parseFloat(left) + (x.max - x.min);
  },
  // Transform, including translate longform names
  x: transformX,
  y: transformY,
  translateX: transformX,
  translateY: transformY
};

// node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var toResolve = /* @__PURE__ */ new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
var isForced = false;
function measureAllKeyframes() {
  if (anyNeedsMeasurement) {
    const resolversToMeasure = [];
    const elementsToMeasure = /* @__PURE__ */ new Set();
    const elementsToUntransform = /* @__PURE__ */ new Set();
    toResolve.forEach((resolver) => {
      if (!resolver.needsMeasurement)
        return;
      resolversToMeasure.push(resolver);
      elementsToMeasure.add(resolver.element);
      if (boxDependentValues.has(resolver.name)) {
        elementsToUntransform.add(resolver.element);
      }
    });
    const transformsToRestore = /* @__PURE__ */ new Map();
    elementsToUntransform.forEach((element) => {
      const removedTransforms = removeNonTranslationalTransform(element);
      if (!removedTransforms.length)
        return;
      transformsToRestore.set(element, removedTransforms);
      element.render();
    });
    resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
    elementsToMeasure.forEach((element) => {
      element.render();
      const restore = transformsToRestore.get(element);
      if (restore) {
        restore.forEach(([key, value]) => {
          element.getValue(key)?.set(value);
        });
      }
    });
    resolversToMeasure.forEach((resolver) => resolver.measureEndState());
    resolversToMeasure.forEach((resolver) => {
      if (resolver.suspendedScrollY !== void 0) {
        window.scrollTo(0, resolver.suspendedScrollY);
      }
    });
  }
  anyNeedsMeasurement = false;
  isScheduled = false;
  toResolve.forEach((resolver) => resolver.complete(isForced));
  toResolve.clear();
}
function readAllKeyframes() {
  toResolve.forEach((resolver) => {
    resolver.readKeyframes();
    if (resolver.needsMeasurement) {
      anyNeedsMeasurement = true;
    }
  });
}
function flushKeyframeResolvers() {
  isForced = true;
  readAllKeyframes();
  measureAllKeyframes();
  isForced = false;
}
function readOrigin(value, name, target) {
  if (typeof value === "string") {
    if (isNumericalString(value) || isZeroValueString(value)) {
      return parseFloat(value);
    } else if (!complex.test(value) && complex.test(target)) {
      return getAnimatableNone2(name, target);
    }
  }
  return value ?? void 0;
}
var KeyframeResolver = class {
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element, isAsync = false) {
    this.state = "pending";
    this.isAsync = false;
    this.needsMeasurement = false;
    this.unresolvedKeyframes = [...unresolvedKeyframes];
    this.onComplete = onComplete;
    this.name = name;
    this.motionValue = motionValue2;
    this.element = element;
    this.isAsync = isAsync;
  }
  scheduleResolve() {
    this.state = "scheduled";
    if (this.isAsync) {
      toResolve.add(this);
      if (!isScheduled) {
        isScheduled = true;
        frame.read(readAllKeyframes);
        frame.resolveKeyframes(measureAllKeyframes);
      }
    } else {
      this.readKeyframes();
      this.complete();
    }
  }
  readKeyframes() {
    const { unresolvedKeyframes, name, element, motionValue: motionValue2 } = this;
    if (unresolvedKeyframes[0] === null) {
      const currentValue = motionValue2?.get();
      const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
      if (currentValue !== void 0) {
        unresolvedKeyframes[0] = currentValue;
      } else if (element && name) {
        const valueAsRead = readOrigin(element.readValue(name, finalKeyframe), name, finalKeyframe);
        if (valueAsRead !== void 0) {
          unresolvedKeyframes[0] = valueAsRead;
        }
      }
      if (unresolvedKeyframes[0] === void 0) {
        unresolvedKeyframes[0] = finalKeyframe;
      }
      if (motionValue2 && currentValue === void 0) {
        motionValue2.set(unresolvedKeyframes[0]);
      }
    }
    fillWildcards(unresolvedKeyframes);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(isForcedComplete = false) {
    this.state = "complete";
    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
    toResolve.delete(this);
  }
  cancel() {
    if (this.state === "scheduled") {
      toResolve.delete(this);
      this.state = "pending";
    }
  }
  resume() {
    if (this.state === "pending")
      this.scheduleResolve();
  }
};

// node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
var isCSSVar = (name) => name.startsWith("--");

// node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function setStyle(element, name, value) {
  isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
}

// node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var supportsFlags = {};

// node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function memoSupports(callback, supportsFlag) {
  const memoized = memo(callback);
  return () => supportsFlags[supportsFlag] ?? memoized();
}

// node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline");

// node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch (e) {
    return false;
  }
  return true;
}, "linearEasing");

// node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

// node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs
var supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};

// node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function mapEasingToNativeEasing(easing, duration) {
  if (!easing) {
    return void 0;
  } else if (typeof easing === "function") {
    return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
  } else if (isBezierDefinition(easing)) {
    return cubicBezierAsString(easing);
  } else if (Array.isArray(easing)) {
    return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
  } else {
    return supportedWaapiEasing[easing];
  }
}

// node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function startWaapiAnimation(element, valueName, keyframes2, { delay: delay2 = 0, duration = 300, repeat = 0, repeatType = "loop", ease: ease2 = "easeOut", times } = {}, pseudoElement = void 0) {
  const keyframeOptions = {
    [valueName]: keyframes2
  };
  if (times)
    keyframeOptions.offset = times;
  const easing = mapEasingToNativeEasing(ease2, duration);
  if (Array.isArray(easing))
    keyframeOptions.easing = easing;
  const options = {
    delay: delay2,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  };
  if (pseudoElement)
    options.pseudoElement = pseudoElement;
  return element.animate(keyframeOptions, options);
}

// node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
  return typeof type === "function" && "applyToOptions" in type;
}

// node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function applyGeneratorOptions({ type, ...options }) {
  if (isGenerator(type) && supportsLinearEasing()) {
    return type.applyToOptions(options);
  } else {
    options.duration ?? (options.duration = 300);
    options.ease ?? (options.ease = "easeOut");
  }
  return options;
}

// node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var NativeAnimation = class extends WithPromise {
  constructor(options) {
    super();
    this.finishedTime = null;
    this.isStopped = false;
    this.manualStartTime = null;
    if (!options)
      return;
    const { element, name, keyframes: keyframes2, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
    this.isPseudoElement = Boolean(pseudoElement);
    this.allowFlatten = allowFlatten;
    this.options = options;
    typeof process !== "undefined" && process.env.NODE_ENV !== "production" && invariant(typeof options.type !== "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const transition = applyGeneratorOptions(options);
    this.animation = startWaapiAnimation(element, name, keyframes2, transition, pseudoElement);
    if (transition.autoplay === false) {
      this.animation.pause();
    }
    this.animation.onfinish = this.onFinish = () => {
      this.animation.onfinish = null;
      this.finishedTime = this.time;
      if (!pseudoElement) {
        const keyframe = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
        this.updateMotionValue?.(keyframe);
        setStyle(element, name, keyframe);
        this.animation.cancel();
      }
      onComplete?.();
      this.notifyFinished();
    };
    notifyAnimationStart(this, options, transition);
  }
  play() {
    if (this.isStopped)
      return;
    this.manualStartTime = null;
    this.animation.onfinish = this.onFinish;
    this.animation.play();
    if (this.state === "finished") {
      this.updateFinished();
    }
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    if (!this.isStopped)
      this.animation.onfinish = this.onFinish;
    this.animation.finish?.();
  }
  cancel() {
    this.animation.onfinish = null;
    try {
      this.animation.cancel();
    } catch (e) {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = true;
    if (this.state === "idle" || this.finishedTime !== null)
      return;
    if (this.updateMotionValue) {
      this.updateMotionValue();
    } else {
      this.commitStyles();
    }
    if (!this.isPseudoElement)
      this.cancel();
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const element = this.options?.element;
    if (!this.isPseudoElement && element?.isConnected) {
      this.animation.commitStyles?.();
    }
  }
  get duration() {
    const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
    return millisecondsToSeconds(Number(duration));
  }
  get iterationDuration() {
    const { delay: delay2 = 0 } = this.options || {};
    return this.duration + millisecondsToSeconds(delay2);
  }
  get time() {
    return millisecondsToSeconds(Number(this.animation.currentTime) || 0);
  }
  set time(newTime) {
    const wasFinished = this.finishedTime !== null;
    this.manualStartTime = null;
    this.finishedTime = null;
    this.animation.currentTime = secondsToMilliseconds(newTime);
    if (wasFinished) {
      this.animation.pause();
      this.updateFinished();
    }
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(newSpeed) {
    if (newSpeed < 0)
      this.finishedTime = null;
    this.animation.playbackRate = newSpeed;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(newStartTime) {
    this.manualStartTime = this.animation.startTime = newStartTime;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline, onAttach, observe }) {
    if (this.allowFlatten) {
      this.animation.effect?.updateTiming({ easing: "linear" });
    }
    this.animation.onfinish = this.onFinish = null;
    if (timeline && supportsScrollTimeline()) {
      this.animation.timeline = timeline;
      onAttach?.(this.animation);
      return noop;
    } else {
      return observe(this);
    }
  }
};

// node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs
var unsupportedEasingFunctions = {
  anticipate,
  backInOut,
  circInOut
};
function isUnsupportedEase(key) {
  return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
  if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) {
    transition.ease = unsupportedEasingFunctions[transition.ease];
  }
}

// node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var sampleDelta = 10;
var NativeAnimationExtended = class extends NativeAnimation {
  constructor(options) {
    replaceStringEasing(options);
    replaceTransitionType(options);
    super(options);
    if (options.startTime !== void 0 && options.autoplay !== false) {
      this.startTime = options.startTime;
    }
    this.options = options;
  }
  /**
   * The animation's time now, in ms. Wall-clock rather than WAAPI's
   * currentTime while running, as under CPU load currentTime may not
   * reflect the actual elapsed time, causing incorrect sampling and
   * visual jumps.
   */
  elapsed() {
    return this.state === "running" ? (time.now() - this.startTime) * this.speed : this.time * 1e3;
  }
  /**
   * The value at a time, from a renderless JS animation.
   */
  sample(sampleTime) {
    if (!this.sampler) {
      const { motionValue: motionValue2, onUpdate, onComplete, onPlay, onStop, element, ...options } = this.options;
      this.sampler = new JSAnimation({ ...options, autoplay: false });
      this.sampler.stop();
    }
    return this.sampler.sample(Math.max(0, sampleTime)).value;
  }
  /**
   * The value now, as WAAPI doesn't set the motion value while it runs.
   */
  liveValue() {
    const { state } = this;
    if (state === "running" || state === "paused") {
      return this.sample(this.elapsed());
    }
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * sample a renderless JS animation twice to calculate its current
   * value, "previous" value, and therefore allow Motion to calculate
   * velocity for any subsequent animation.
   */
  updateMotionValue(value) {
    const { motionValue: motionValue2, element, name } = this.options;
    if (!motionValue2)
      return;
    if (value !== void 0) {
      motionValue2.set(value);
      return;
    }
    const { speed } = this;
    const sampleTime = this.elapsed();
    const delta = this.state === "running" && speed ? clamp(0, sampleDelta, sampleTime) : 0;
    const current = this.sample(sampleTime);
    if (element && name)
      setStyle(element, name, current);
    motionValue2.setWithVelocity(this.sample(sampleTime - delta * Math.sign(speed)), current, delta / Math.abs(speed || 1));
  }
};

// node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = (value, name) => {
  if (name === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && // It's animatable if we have a string
  (complex.test(value) || value === "0") && // And it contains numbers and/or colors
  !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function hasKeyframesChanged(keyframes2) {
  const current = keyframes2[0];
  if (keyframes2.length === 1)
    return true;
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] !== current)
      return true;
  }
}
function canAnimate(keyframes2, name, type, velocity) {
  const originKeyframe = keyframes2[0];
  if (originKeyframe === null) {
    return false;
  }
  if (name === "display" || name === "visibility")
    return true;
  const targetKeyframe = keyframes2[keyframes2.length - 1];
  const isOriginAnimatable = isAnimatable(originKeyframe, name);
  const isTargetAnimatable = isAnimatable(targetKeyframe, name);
  if (!isOriginAnimatable || !isTargetAnimatable) {
    isOriginAnimatable !== isTargetAnimatable && process.env.NODE_ENV !== "production" && warning(false, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". "${isOriginAnimatable ? targetKeyframe : originKeyframe}" is not an animatable value.`, "value-not-animatable");
    return false;
  }
  return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
}

// node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function makeAnimationInstant(options) {
  options.duration = 0;
  options.type = "keyframes";
}

// node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var acceleratedValues = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
]);

// node_modules/motion-dom/dist/es/animation/waapi/utils/is-browser-color.mjs
var browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hasBrowserOnlyColors(keyframes2) {
  for (let i = 0; i < keyframes2.length; i++) {
    if (typeof keyframes2[i] === "string" && browserColorFunctions.test(keyframes2[i])) {
      return true;
    }
  }
  return false;
}

// node_modules/motion-dom/dist/es/animation/waapi/utils/needs-mixer.mjs
var needsMixer = ({ mixer, keyframes: keyframes2 }) => mixer && typeof keyframes2[0] !== "number" && keyframes2.some((keyframe, i) => i && mixer(keyframes2[i - 1], keyframe));

// node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var colorProperties = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]);
var supportsWaapi = () => !MotionGlobalConfig.useManualTiming && Object.hasOwnProperty.call(Element.prototype, "animate");
function supportsBrowserAnimation(options) {
  const { motionValue: motionValue2, name, repeatDelay, repeatType, damping, type, keyframes: keyframes2 } = options;
  if (!name || !(acceleratedValues.has(name) || colorProperties.has(name))) {
    return false;
  }
  const subject = motionValue2?.owner?.current;
  if (!(subject instanceof HTMLElement) && !(subject instanceof SVGElement)) {
    return false;
  }
  const { onUpdate, transformTemplate } = motionValue2.owner.getProps();
  return supportsWaapi() && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (acceleratedValues.has(name) || colorProperties.has(name) && hasBrowserOnlyColors(keyframes2)) && (name !== "transform" || !transformTemplate) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia" && !needsMixer(options);
}

// node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
var openers = {};
var transformFunction = (key, value, valueAsType = getValueAsType(value, transformValueTypes[key])) => (openers[key] || (openers[key] = (translateAlias[key] || key) + "(")) + valueAsType + ")";
var isDefaultTransform = (key, value) => (typeof value === "number" ? value : parseFloat(value)) === (key.startsWith("scale") ? 1 : 0);
function buildTransform(latestValues, transform, transformTemplate) {
  let transformString = "";
  for (let i = 0; i < numTransforms; i++) {
    const key = transformPropOrder[i];
    const value = latestValues[key];
    if (value === void 0)
      continue;
    const valueAsType = transformTemplate && (transform[key] = getValueAsType(value, numberValueTypes[key]));
    if (!isDefaultTransform(key, value)) {
      transformString += transformFunction(key, value, valueAsType || void 0) + " ";
    }
  }
  const pathRotation = latestValues.pathRotation;
  if (pathRotation) {
    transformString += transformFunction("rotate", pathRotation);
  }
  transformString = transformString.trim();
  return transformTemplate ? transformTemplate(transform, transformString) : transformString || "none";
}

// node_modules/motion-dom/dist/es/animation/waapi/transforms/groups.mjs
var transformGroups = /* @__PURE__ */ new WeakMap();

// node_modules/motion-dom/dist/es/animation/waapi/transforms/TransformAnimation.mjs
var maxSamples = 200;
var easingTolerance = 1e-3;
var sampleTolerance = 0.1;
var scaleTolerance = 1e-3;
var churnWindow = 100;
var buildAhead = 100;
var nativeEasings = /* @__PURE__ */ new Set(["linear", "easeIn", "easeOut", "easeInOut"]);
var isNativeEasing = (ease2) => nativeEasings.has(ease2);
var traced = /* @__PURE__ */ new WeakMap();
var trace = (ease2, samples) => {
  let last = traced.get(ease2);
  if (last?.[0] !== samples) {
    last = [
      samples,
      "linear(" + defaultOffset(Array(samples + 1)).map((p2) => round(ease2(p2)) + " " + round(p2 * 100) + "%") + ")"
    ];
    traced.set(ease2, last);
  }
  return last[1];
};
var countSamples = (from, to) => Math.min(maxSamples, Math.max(2, Math.ceil((to - from) / sampleDelta)));
var isNear = (a, b) => Math.abs(a - b) <= easingTolerance;
var byTime = (a, b) => a - b;
var spread = (from, to, n) => defaultOffset(Array(n + 1)).map((p2) => mixNumber(from, to, p2));
var getOwner = (options) => options.motionValue.owner;
var getGroup = (element) => transformGroups.get(element);
var hasEnded = ({ state }) => state === "idle" || state === "finished";
var read = (owner, key) => owner.latestValues ? owner.latestValues[key] : owner.getValue(key)?.get();
var canGroupTransform = ({ name, motionValue: motionValue2 }) => name && transformPropOrder.includes(name) && motionValue2?.owner?.current instanceof HTMLElement && supportsWaapi() && supportsLinearEasing();
function canAccelerateTransform(options) {
  const owner = getOwner(options);
  const { onUpdate, transformTemplate } = owner.getProps();
  return (
    /**
     * A handoff from an optimised appear animation is already running
     * on its own WAAPI animation. onUpdate needs every value, every
     * frame.
     */
    !options.isHandoff && !onUpdate && !options.hasOnUpdate && /**
     * transformTemplate could output anything.
     */
    !transformTemplate && options.type !== "inertia" && /**
     * A literal transform, or pathRotation, replaces or adds to the
     * transform we'd build. styleEffect builds its own as "none".
     */
    (read(owner, "transform") || "none") === "none" && !read(owner, "pathRotation") && /**
     * Layout animations write transform every frame.
     */
    !owner.projection?.isProjecting() && /**
     * A mixer that blends these values makes them every frame. It's
     * asked last, as it's user code.
     */
    !needsMixer(options)
  );
}
var TransformDriver = class {
  constructor(element, update, makeDriver, animation) {
    this.element = element;
    this.update = update;
    this.makeDriver = makeDriver;
    this.animation = animation;
  }
  get js() {
    return this.driver || (this.driver = this.makeDriver(this.update));
  }
  now() {
    return this.driver || this.makeDriver !== frameloopDriver ? this.js.now() : frameData.isProcessing ? frameData.timestamp : time.now();
  }
  /**
   * keepAlive is false when seeking. Seeking the WAAPI animation is
   * free, but if a seek needs a rebuild and keeps happening, the group
   * moves to the main thread.
   */
  start(keepAlive = true) {
    const group = getGroup(this.element);
    !group || group.isJS ? this.js.start(keepAlive) : group.schedule(false, !keepAlive);
  }
  stopJS() {
    this.driver?.stop();
  }
  stop() {
    this.stopJS();
    const group = getGroup(this.element);
    group && !group.isFinishing && group.release(this.animation);
  }
};
var setTime;
var TransformAnimation = class extends JSAnimation {
  constructor(options) {
    const element = getOwner(options).current;
    const { driver = frameloopDriver } = options;
    let animation;
    const canAccelerate = canAccelerateTransform(options);
    options.driver = (update) => new TransformDriver(element, update, driver, animation);
    super(options);
    animation = this;
    const firstDriver = this.driver;
    firstDriver && (firstDriver.animation = this);
    this.canAccelerate = canAccelerate;
    const { stop } = this;
    this.stop = () => {
      this.isAccelerated() && this.sync();
      stop();
    };
  }
  /**
   * Each keyframe's offset, made once for the keyframes rather than on
   * every build.
   */
  offsets() {
    const { keyframes: keyframes2, times } = this.options;
    if (times)
      return times;
    if (this.offsetsOf !== keyframes2) {
      this.offsetsOf = keyframes2;
      this.cachedOffsets = defaultOffset(keyframes2);
    }
    return this.cachedOffsets;
  }
  get group() {
    return getGroup(getOwner(this.options).current);
  }
  get js() {
    return this.driver?.js;
  }
  stopJS() {
    this.driver?.stopJS();
  }
  get name() {
    return this.options.name;
  }
  /**
   * When this stops moving, or, if it repeats forever, when it starts
   * repeating, and how long each repeat takes. Held (paused, or at
   * speed 0) animations never stop moving.
   */
  timing() {
    const { startTime, speed, totalDuration } = this;
    const { delay: delay2 = 0, repeatType } = this.options;
    return this.holdTime !== null ? [Infinity, 0] : totalDuration === Infinity ? [
      startTime + delay2 / speed,
      this.resolvedDuration * (repeatType === "loop" ? 1 : 2) / speed || 1
    ] : [startTime + (delay2 + totalDuration) / speed, 0];
  }
  /**
   * Whether this is running, or paused, on the compositor.
   */
  isAccelerated() {
    const { group, state } = this;
    return group?.tracks.has(this) && !group.isJS && this.canAccelerate && (state === "running" || state === "paused");
  }
  /**
   * The value now, while this runs on the compositor and so doesn't
   * set its motion value every frame.
   */
  liveValue() {
    return this.isAccelerated() ? this.sampleAt(time.now()) : void 0;
  }
  /**
   * If this moves between two keyframes only, holding still either side
   * of them, as each value of a sequence segment does, when it starts
   * and stops moving, and its easing: as a string if WAAPI runs it
   * exactly, otherwise its function, to trace.
   */
  tween() {
    const { keyframes: keyframes$1, type, repeat, delay: delay2 = 0 } = this.options;
    let span = -1;
    if (repeat || type !== keyframes || this.holdTime !== null) {
      return;
    }
    for (let i = 1; i < keyframes$1.length; i++) {
      if (keyframes$1[i] !== keyframes$1[i - 1]) {
        if (span >= 0)
          return;
        span = i - 1;
      }
    }
    let { ease: ease2 } = this.options;
    if (isEasingArray(ease2))
      ease2 = ease2[span];
    const offsets = this.offsets();
    const at = (i) => this.startTime + (delay2 + offsets[i] * this.totalDuration) / this.speed;
    if (span >= 0) {
      const easing = isBezierDefinition(ease2) ? cubicBezierAsString(ease2) : isNativeEasing(ease2) ? supportedWaapiEasing[ease2] : easingDefinitionToFunction(ease2);
      return [
        at(span),
        at(span + 1),
        typeof easing === "string" || isNear(easing(0), 0) && isNear(easing(1), 1) ? easing : void 0
      ];
    }
  }
  /**
   * The timestamps between two timestamps where this reaches a
   * keyframe or starts a repeat, where it can turn or jump.
   */
  boundaries(from, to) {
    const { startTime, speed, resolvedDuration, options } = this;
    const { delay: delay2 = 0, repeat = 0, repeatDelay = 0, repeatType, type } = options;
    const offsets = (type || keyframes) === keyframes ? this.offsets() : [0, 1];
    const start = startTime + delay2 / speed;
    const result = [];
    if (this.holdTime !== null || !(resolvedDuration > 0))
      return result;
    for (let i = Math.max(0, Math.floor((from - start) * speed / resolvedDuration)); i <= repeat; i++) {
      const iterationStart = start + i * resolvedDuration / speed;
      if (iterationStart > to)
        break;
      for (const offset of offsets) {
        const t = iterationStart + (i % 2 && repeatType && repeatType !== "loop" ? 1 - offset : offset) * (resolvedDuration - repeatDelay) / speed;
        t > from && t < to && result.push(t);
      }
    }
    return result;
  }
  /**
   * The value at a timestamp, as a number.
   */
  numberAt(timestamp) {
    return parseFloat(this.sampleAt(timestamp, true));
  }
  /**
   * Write the current value, and velocity, to the motion value.
   */
  sync() {
    const now2 = time.now();
    const value = this.sampleAt(now2, true);
    this.options.motionValue.setWithVelocity(this.holdTime === null ? this.sampleAt(now2 - sampleDelta, true) : value, value, sampleDelta);
  }
  play() {
    if (this.isStopped)
      return;
    (this.group || createGroup(getOwner(this.options))).tracks.add(this);
    super.play();
  }
  pause() {
    super.pause();
    this.isAccelerated() && this.group.schedule(false);
  }
  /**
   * JSAnimation finishes on its next tick, which only happens once the
   * group is on the main thread, so finish now. That includes an
   * animation that can't be accelerated but reached its end before the
   * group could move there.
   */
  complete() {
    super.complete();
    const { group } = this;
    group && !group.isJS && this.tick(time.now());
  }
  /**
   * Without a tick to rebase it, a held time still includes the delay,
   * so take it off here, as a JS animation does on its next tick.
   */
  get time() {
    if (this.isAccelerated()) {
      return millisecondsToSeconds(clamp(0, this.totalDuration, this.at(time.now()) - (this.options.delay || 0)));
    }
    return super.time;
  }
  /**
   * Calls JSAnimation's setter directly, as `super.time =` is a slow
   * path in V8 and this runs for every animation of a seeked sequence.
   */
  set time(newTime) {
    (setTime ?? (setTime = Object.getOwnPropertyDescriptor(JSAnimation.prototype, "time").set)).call(this, newTime);
  }
  /**
   * Scroll timelines set time every frame, so run these on the main
   * thread.
   */
  attachTimeline(timeline) {
    this.canAccelerate = false;
    this.group?.demote(true);
    return super.attachTimeline(timeline);
  }
};
var builds;
var buildSoon = (build) => {
  builds || queueMicrotask(() => {
    const queue = builds;
    builds = void 0;
    queue.forEach((build2) => build2());
  });
  (builds || (builds = [])).push(build);
};
function createGroup(owner) {
  const element = owner.current;
  const tracks = /* @__PURE__ */ new Set();
  const byKey = /* @__PURE__ */ new Map();
  let statics = {};
  let keys = [];
  let built = /* @__PURE__ */ new Map();
  let segments = [];
  let needsBuild = false;
  let isScheduled2 = false;
  let isEnded = false;
  let hasChurned = false;
  let lastChurn = -Infinity;
  let wake;
  let wakeAt = Infinity;
  let buildAt;
  const has = (key) => {
    for (const track of tracks)
      if (track.name === key)
        return true;
  };
  const valuesAt = (timestamp, settled) => {
    const values = {};
    for (const key of timestamp === void 0 ? transformPropOrder : keys) {
      const track = byKey.get(key);
      const value = timestamp === void 0 ? read(owner, key) : track ? track.sampleAt(settled > timestamp && !track.timing()[1] ? settled : timestamp) : statics[key];
      if (value !== void 0)
        values[key] = value;
    }
    return values;
  };
  const toTransform = (values, isStyle) => {
    let transform = "";
    for (const key in values) {
      const value = values[key];
      if (!isStyle || !isDefaultTransform(key, value)) {
        transform += transformFunction(key, value) + " ";
      }
    }
    return (isStyle ? transform.trim() : transform) || "none";
  };
  const compose = (timestamp, settled) => toTransform(valuesAt(timestamp, settled));
  const commit = (values = valuesAt()) => {
    element.style.transform = toTransform(values, true);
  };
  const cancel = (animation) => {
    animation.onfinish = animation.oncancel = null;
    animation.cancel();
  };
  const stop = (shouldCommit = true) => {
    clearTimeout(wake);
    wakeAt = Infinity;
    buildAt = void 0;
    shouldCommit && commit();
    segments.forEach(({ animation }) => cancel(animation));
    segments = [];
  };
  const create = (keyframes2, options) => new Animation(new KeyframeEffect(element, keyframes2, options));
  const add = (animation, offset, end2 = Infinity) => {
    const segment = { animation, offset, end: end2 };
    animation.startTime = time.now() + offset;
    if (end2 < Infinity) {
      animation.onfinish = () => {
        segment.isDone = true;
        if (segments.some((s) => s.end === Infinity)) {
          cancel(animation);
          segments = segments.filter((s) => s !== segment);
        }
        group.schedule(false);
      };
    }
    animation.oncancel = () => segments.includes(segment) && group.demote();
    segments.push(segment);
  };
  const jumpAt = (value, a, b) => {
    const change = (x, y) => Math.abs(value(y) - value(x));
    const size = change(a, b);
    while (b - a > 0.01) {
      const mid = (a + b) / 2;
      change(a, mid) > change(mid, b) ? b = mid : a = mid;
    }
    return change(a, b) > size / 2 ? [a, b] : [];
  };
  const getEasing = (moving, from, to, bounds) => {
    const samples = countSamples(from, to);
    if (bounds.length * 4 > samples)
      return;
    let quick;
    for (const track of moving) {
      const first = track.numberAt(from);
      const p2 = (track.numberAt((from + to) / 2) - first) / (track.numberAt(to) - first);
      if (p2 !== p2)
        continue;
      if (quick === void 0)
        quick = p2;
      else if (!isNear(p2, quick))
        return;
    }
    const at = spread(from, to, samples).concat(bounds).sort(byTime);
    const position = (t) => progress(from, to, t);
    let shared;
    let progressAt;
    for (const track of moving) {
      const first = track.numberAt(from);
      const changes = at.map((t) => track.numberAt(t) - first);
      const end2 = changes[changes.length - 1];
      const range = changes.some((change) => Math.abs(change) * easingTolerance > Math.abs(end2)) ? 0 : end2;
      const progress2 = changes.map((change) => range ? change / range : change);
      if (range && !shared) {
        shared = progress2;
        progressAt = (t) => (track.numberAt(t) - first) / range;
      } else if (progress2.some((p2, i) => !isNear(p2, range && shared[i]))) {
        return;
      }
    }
    if (!shared || shared.every((p2, i) => isNear(p2, position(at[i])))) {
      return "linear";
    }
    const points = [];
    const point = (t, p2 = progressAt(t)) => points.push(round(p2) + " " + round(position(t) * 100) + "%");
    shared.forEach((p2, i) => {
      i && Math.abs(p2 - shared[i - 1]) > 0.2 && jumpAt(progressAt, at[i - 1], at[i]).forEach((t) => point(t));
      point(at[i], p2);
    });
    return "linear(" + points + ")";
  };
  const sample = (moving, from, to, bounds) => {
    const times = [from];
    const curved = [];
    let curveFrom = to;
    let curveTo = from;
    for (const track of moving) {
      const tween = track.tween();
      if (tween?.[2] !== "linear") {
        const [trackEnd, cycle] = track.timing();
        const [a, b] = tween || [from, cycle ? to : trackEnd];
        curveFrom = Math.min(curveFrom, a);
        curveTo = Math.max(curveTo, b);
        curved.push(track);
      }
    }
    curveFrom = Math.max(from, curveFrom);
    curveTo = Math.min(to, curveTo);
    const isStraight = (a, b) => curved.every((track) => !(Math.abs(track.numberAt((a + b) / 2) - (track.numberAt(a) + track.numberAt(b)) / 2) > (track.name.startsWith("scale") ? scaleTolerance : sampleTolerance)));
    const split = (a, b, depth) => {
      if (b - a < 1 || isStraight(a, b)) {
        times.push(b);
      } else if (depth < 4) {
        split(a, (a + b) / 2, depth + 1);
        split((a + b) / 2, b, depth + 1);
      } else {
        for (const track of moving) {
          times.push(...jumpAt((t) => track.numberAt(t), a, b));
        }
        times.push(b);
      }
    };
    const ends = curveTo > curveFrom ? spread(curveFrom, curveTo, Math.ceil((curveTo - curveFrom) / 100)) : [];
    ends.push(to);
    for (const t of bounds)
      ends.push(t, Math.min(t + 0.01, to));
    let start = from;
    for (const end2 of ends.sort(byTime)) {
      end2 > start && split(start, end2, 0);
      start = end2;
    }
    return times.sort(byTime);
  };
  const getTween = (moving) => {
    let shared;
    for (const track of moving) {
      const tween = track.tween();
      if (!tween || shared && (Math.abs(tween[0] - shared[0]) > 1 || Math.abs(tween[1] - shared[1]) > 1)) {
        return;
      }
      shared = [
        tween[0],
        tween[1],
        !shared || tween[2] === shared[2] ? tween[2] : void 0
      ];
    }
    return shared;
  };
  const run = (moving, from, to, nativeEasing, options = { fill: "both" }, settled) => {
    const bounds = nativeEasing ? [] : moving.flatMap((track) => track.boundaries(from, to));
    const easing = nativeEasing || getEasing(moving, from, to, bounds);
    const times = easing ? [from, to] : sample(moving, from, to, bounds);
    const transform = times.map((t) => compose(t, settled));
    let keyframes2 = { transform };
    if (!easing) {
      keyframes2.offset = times.map((t) => progress(from, to, t));
    }
    if (transform.every((t) => t === transform[0])) {
      commit(valuesAt(from, settled));
      keyframes2 = null;
    }
    return create(keyframes2, {
      ...options,
      duration: to - from,
      easing: easing || "linear"
    });
  };
  const wakeIn = (delay2) => {
    const at = time.now() + delay2;
    if (at < wakeAt) {
      clearTimeout(wake);
      wakeAt = at;
      wake = setTimeout(() => {
        wakeAt = Infinity;
        group.schedule(false);
      }, delay2);
    }
  };
  const animate = (now2) => {
    let end2 = now2;
    let cycle = 0;
    let cycleStart = 0;
    const moving = [];
    const looping = [];
    const ends = /* @__PURE__ */ new Set();
    byKey.clear();
    built = /* @__PURE__ */ new Map();
    for (const track of tracks) {
      byKey.set(track.name, track);
      const [trackEnd, trackCycle] = track.timing();
      const isHeld = trackEnd === Infinity;
      built.set(track, [track.at(now2), track.speed, isHeld]);
      if (isHeld)
        continue;
      if (track.speed < 0)
        return;
      if (trackCycle) {
        if (cycle) {
          const phase = (trackEnd - cycleStart) / trackCycle;
          if (Math.abs(trackCycle - cycle) > 1 || Math.abs(phase - Math.round(phase)) * cycle > 1) {
            return;
          }
        } else {
          cycle = trackCycle;
          cycleStart = trackEnd;
        }
        looping.push(track);
      } else {
        ends.add(trackEnd);
      }
      moving.push(track);
      end2 = Math.max(end2, trackEnd);
    }
    statics = {};
    keys = transformPropOrder.filter((key) => {
      if (byKey.has(key))
        return true;
      const value = statics[key] = read(owner, key);
      return value !== void 0 && !isDefaultTransform(key, value);
    });
    stop(false);
    const tween = !cycle && getTween(moving);
    try {
      if (end2 > now2) {
        let easing;
        if (tween && tween[1] > now2) {
          const [from, to, ease2] = tween;
          if (from - now2 > buildAhead) {
            moving.forEach((track) => track.sync());
            wakeIn(buildAt = from - now2 - buildAhead);
            return true;
          }
          easing = typeof ease2 === "string" ? ease2 : ease2 ? trace(ease2, countSamples(from, to)) : getEasing(moving, from, to, []);
          easing && add(run(moving, from, to, easing, {
            fill: "both",
            endDelay: end2 - to
          }), from - now2, end2 - from);
        }
        easing || add(run(moving, now2, end2), 0, end2 - now2);
        ends.forEach((trackEnd) => trackEnd < end2 - 1 && add(create(null, { duration: trackEnd - now2 }), 0, trackEnd - now2));
      }
      if (cycle) {
        const from = cycleStart + Math.floor((end2 - cycleStart) / cycle) * cycle;
        add(run(looping, from, from + cycle, void 0, {
          iterations: Infinity,
          iterationStart: (end2 - from) / cycle,
          /**
           * It must not fill backwards over the finite part
           * that runs before it.
           */
          fill: "forwards"
        }, end2), end2 - now2);
      }
    } catch {
      return;
    }
    segments.length || stop();
    return true;
  };
  const retime = (now2, isSeek) => {
    let elapsed;
    let rate = 0;
    for (const track of tracks) {
      const state = built.get(track);
      if (!state)
        return false;
      const [builtTime, builtSpeed, wasHeld] = state;
      const trackTime = track.at(now2);
      const isHeld = track.timing()[0] === Infinity;
      if (wasHeld) {
        if (isHeld && (trackTime === builtTime || !segments.length)) {
          continue;
        }
        return false;
      }
      const trackElapsed = (trackTime - builtTime) / builtSpeed;
      const trackRate = isHeld ? 0 : track.speed / builtSpeed;
      if (elapsed === void 0) {
        elapsed = trackElapsed;
        rate = trackRate;
      } else if (Math.abs(trackElapsed - elapsed) > 1 || trackRate !== rate) {
        return false;
      }
    }
    if (elapsed === void 0)
      return true;
    if (!segments.length) {
      if (buildAt === void 0 || isSeek && rate)
        return false;
      if (rate) {
        const delay2 = (buildAt - elapsed) / rate;
        if (delay2 < 1)
          return false;
        wakeIn(delay2);
      }
      return true;
    }
    for (const { offset, end: end2, isDone } of segments) {
      const local = elapsed - offset;
      if (end2 < Infinity && (isDone ? local < end2 - 1 : local < 0 && (isSeek || offset <= 0) || local >= end2)) {
        return false;
      }
    }
    for (const { animation, offset, isDone } of segments) {
      if (isDone)
        continue;
      const local = elapsed - offset;
      if (rate && animation.updatePlaybackRate && animation.playState === "running" && Math.abs(Number(animation.currentTime) - local) < 20) {
        animation.playbackRate !== rate && animation.updatePlaybackRate(rate);
      } else if (rate) {
        animation.playbackRate !== rate && (animation.playbackRate = rate);
        animation.startTime = now2 - local / rate;
      } else {
        animation.startTime = null;
        animation.currentTime = local;
      }
    }
    return true;
  };
  const end = () => {
    if (tracks.size)
      return false;
    isEnded = true;
    getGroup(element) === group && transformGroups.delete(element);
    group.isJS || stop();
    return true;
  };
  const build = () => {
    const now2 = time.now();
    if (!group.isJS) {
      group.isFinishing = true;
      tracks.forEach((track) => {
        const [trackEnd, trackCycle] = track.timing();
        if (track.state === "running" && track.speed > 0 && !trackCycle && trackEnd <= now2 + 1) {
          track.complete();
          statics[track.name] = read(owner, track.name);
          built.has(track) || (needsBuild = true);
        }
      });
      group.isFinishing = false;
    }
    isScheduled2 = false;
    if (isEnded)
      return;
    tracks.forEach((track) => hasEnded(track) && tracks.delete(track));
    if (end())
      return;
    for (const track of tracks) {
      if (!track.canAccelerate)
        return group.demote(true);
    }
    if (group.isJS) {
      group.isJS = false;
      needsBuild = true;
      tracks.forEach((track) => track.stopJS());
    }
    const shouldBuild = needsBuild;
    const churned = hasChurned;
    needsBuild = hasChurned = false;
    if (shouldBuild || !retime(now2, churned)) {
      if (churned) {
        if (now2 - lastChurn < churnWindow)
          return group.demote();
        lastChurn = now2;
      }
      if (!animate(now2))
        return group.demote();
    } else if (buildAt !== void 0 && !churned) {
      return;
    }
    tracks.forEach((track) => track.timing()[0] === Infinity && track.sync());
  };
  const group = {
    tracks,
    isJS: false,
    isFinishing: false,
    schedule(build_, isChurn) {
      if (isEnded)
        return;
      needsBuild || (needsBuild = build_);
      hasChurned || (hasChurned = !!isChurn);
      if (!isScheduled2) {
        isScheduled2 = true;
        frameData.isProcessing ? frame.render(build, false, true) : buildSoon(build);
      }
    },
    /**
     * End the group now, rather than when it next builds, so the
     * element's transform is the caller's again as soon as its last
     * animation is stopped.
     */
    release(track) {
      hasEnded(track) && tracks.delete(track);
      end() || group.schedule(true);
    },
    /**
     * An outside write. Rebuild once, but if it keeps happening, move
     * to the main thread.
     */
    check() {
      if (group.isJS)
        return;
      for (const key in statics) {
        if (read(owner, key) !== statics[key] && !has(key)) {
          return group.schedule(true, true);
        }
      }
    },
    demote(canReturn) {
      if (group.isJS || isEnded)
        return;
      tracks.forEach((track) => {
        track.isAccelerated() && track.sync();
        canReturn || (track.canAccelerate = false);
      });
      group.isJS = true;
      built = /* @__PURE__ */ new Map();
      stop();
      tracks.forEach((track) => track.state === "running" && track.js?.start());
      return true;
    }
  };
  transformGroups.set(element, group);
  return group;
}

// node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var AsyncMotionValueAnimation = class extends WithPromise {
  constructor(options) {
    super();
    this.stop = () => {
      if (this._animation) {
        this._animation.stop();
        this.stopTimeline?.();
      }
      this.keyframeResolver?.cancel();
    };
    this.createdAt = time.now();
    const { keyframes: keyframes2, name, motionValue: motionValue2, element } = options;
    const optionsWithDefaults = options;
    optionsWithDefaults.autoplay ?? (optionsWithDefaults.autoplay = true);
    optionsWithDefaults.delay ?? (optionsWithDefaults.delay = 0);
    optionsWithDefaults.type ?? (optionsWithDefaults.type = "keyframes");
    optionsWithDefaults.repeat ?? (optionsWithDefaults.repeat = 0);
    optionsWithDefaults.repeatDelay ?? (optionsWithDefaults.repeatDelay = 0);
    optionsWithDefaults.repeatType ?? (optionsWithDefaults.repeatType = "loop");
    const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
    this.keyframeResolver = new KeyframeResolver$1(keyframes2, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue2, element);
    this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(keyframes2, finalKeyframe, options, sync) {
    this.keyframeResolver = void 0;
    const { name, type, velocity, delay: delay2, isHandoff, onUpdate } = options;
    this.resolvedAt = time.now();
    const canAnimateValue = canAnimate(keyframes2, name, type, velocity);
    if (!canAnimateValue) {
      if (MotionGlobalConfig.instantAnimations || !delay2) {
        onUpdate?.(getFinalKeyframe(keyframes2, options, finalKeyframe));
      }
      keyframes2[0] = keyframes2[keyframes2.length - 1];
      makeAnimationInstant(options);
      options.repeat = 0;
    }
    const { onComplete } = options;
    options.finalKeyframe = finalKeyframe;
    options.keyframes = keyframes2;
    options.onComplete = () => {
      onComplete?.();
      this.notifyFinished();
    };
    const useWaapi = canAnimateValue && !isHandoff && supportsBrowserAnimation(options);
    const isGroupedTransform = !useWaapi && canGroupTransform(options);
    if (sync && (useWaapi || isGroupedTransform || this.resolvedAt !== this.createdAt)) {
      options.startTime ?? (options.startTime = resolveStartTime(this.createdAt, this.resolvedAt));
    }
    let animation;
    if (useWaapi) {
      options.element = options.motionValue?.owner?.current;
      try {
        animation = new NativeAnimationExtended(options);
      } catch {
        animation = new JSAnimation(options);
      }
    } else if (isGroupedTransform) {
      animation = new TransformAnimation(options);
    } else {
      animation = new JSAnimation(options);
    }
    if (this.pendingTimeline) {
      this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
      this.pendingTimeline = void 0;
    }
    this._animation = animation;
  }
  get finished() {
    return this._animation ? this._animation.finished : super.finished;
  }
  then(onResolve, _onReject) {
    return this.finished.finally(onResolve).then(() => {
    });
  }
  /**
   * The value now, if the animation runs on the compositor.
   */
  liveValue() {
    return this._animation?.liveValue?.();
  }
  get animation() {
    if (!this._animation) {
      this.keyframeResolver?.resume();
      flushKeyframeResolvers();
    }
    return this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(newTime) {
    this.animation.time = newTime;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(newSpeed) {
    this.animation.speed = newSpeed;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(timeline) {
    if (this._animation) {
      this.stopTimeline = this.animation.attachTimeline(timeline);
    } else {
      this.pendingTimeline = timeline;
    }
    return () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation?.cancel();
    this.keyframeResolver?.cancel();
  }
};

// node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function calcChildStagger(children, child, delayChildren, staggerChildren = 0, staggerDirection = 1) {
  const index = Array.from(children).sort((a, b) => a.sortNodePosition(b)).indexOf(child);
  const numChildren = children.size;
  const maxStaggerDuration = (numChildren - 1) * staggerChildren;
  const delayIsFunction = typeof delayChildren === "function";
  return delayIsFunction ? delayChildren(index, numChildren) : staggerDirection === 1 ? index * staggerChildren : maxStaggerDuration - index * staggerChildren;
}

// node_modules/motion-dom/dist/es/value/index.mjs
var MAX_VELOCITY_DELTA = 30;
var isFloat = (value) => {
  return !isNaN(parseFloat(value));
};
var collectMotionValues = {
  current: void 0
};
var MotionValue = class {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(init, options = {}) {
    this.canTrackVelocity = null;
    this.events = {};
    this.updateAndNotify = (v) => {
      const currentTime = time.now();
      if (this.updatedAt !== currentTime) {
        this.setPrevFrameValue();
      }
      this.prev = this.current;
      this.setCurrent(v);
      if (this.current !== this.prev) {
        this.dirty();
        if (this.dependents) {
          for (const dependent of this.dependents) {
            dependent.dirty();
          }
        }
      }
    };
    this.hasAnimated = false;
    this.setCurrent(init);
    this.owner = options.owner;
  }
  setCurrent(current) {
    this.current = current;
    this.updatedAt = time.now();
    if (this.canTrackVelocity === null && current !== void 0) {
      this.canTrackVelocity = isFloat(this.current);
    }
  }
  setPrevFrameValue(prevFrameValue = this.current) {
    this.prevFrameValue = prevFrameValue;
    this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(subscription) {
    if (process.env.NODE_ENV !== "production") {
      warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
    }
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    var _a;
    if (eventName === "change")
      return this.onChangeSubscribe(callback);
    return ((_a = this.events)[eventName] || (_a[eventName] = new SubscriptionManager())).add(callback);
  }
  onChangeSubscribe(callback) {
    const { events } = this;
    if (!events.change && !this.changeSubscriber) {
      this.changeSubscriber = callback;
    } else {
      if (!events.change) {
        events.change = new SubscriptionManager();
        events.change.add(this.changeSubscriber);
        this.changeSubscriber = void 0;
      }
      events.change.add(callback);
    }
    return () => {
      if (this.changeSubscriber === callback) {
        this.changeSubscriber = void 0;
      } else {
        events.change?.remove(callback);
      }
      this.stopIfUnobserved();
    };
  }
  /**
   * If we have no more change listeners by the start
   * of the next frame, stop active animations.
   */
  stopIfUnobserved() {
    frame.read(() => {
      if (!this.changeSubscriber && !this.events.change?.getSize()) {
        this.stop();
      }
    });
  }
  clearListeners() {
    this.changeSubscriber = void 0;
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(v) {
    this.passiveEffect ? this.passiveEffect(v, this.updateAndNotify) : this.updateAndNotify(v);
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = void 0;
    this.prevFrameValue = prev;
    this.prevUpdatedAt = this.updatedAt - delta;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(v, endAnimation = true) {
    if (endAnimation) {
      this.updatedAt = time.now();
      this.stop();
    }
    this.updateAndNotify(v);
    this.prev = v;
    this.prevUpdatedAt = this.prevFrameValue = void 0;
    this.stopPassiveEffect?.();
  }
  dirty() {
    const { current, changeSubscriber } = this;
    if (changeSubscriber) {
      changeSubscriber(current);
    } else {
      this.events.change?.notify(current);
    }
  }
  addDependent(dependent) {
    (this.dependents || (this.dependents = /* @__PURE__ */ new Set())).add(dependent);
  }
  removeDependent(dependent) {
    this.dependents?.delete(dependent);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    collectMotionValues.current?.push(this);
    const sampled = this.animation?.liveValue?.();
    return sampled === void 0 ? this.current : sampled;
  }
  /**
   * The value as last set. Unlike get(), this doesn't read an animation
   * running on the compositor, which renders the value itself.
   */
  getCurrent() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const currentTime = time.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
      return 0;
    }
    const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
    return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(startAnimation) {
    return new Promise((resolve) => this.run(startAnimation, resolve));
  }
  /**
   * As start(), without making a promise, for animations started
   * internally, which complete through their own controls.
   */
  run(startAnimation, onComplete) {
    this.stop();
    this.hasAnimated = true;
    let isComplete = false;
    let animation;
    animation = startAnimation(() => {
      isComplete = true;
      this.events.animationComplete?.notify();
      if (this.animation === animation)
        this.animation = void 0;
      onComplete?.();
    });
    if (!isComplete)
      this.animation = animation;
    this.events.animationStart?.notify();
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    if (this.animation) {
      this.animation.stop();
      this.events.animationCancel?.notify();
    }
    this.animation = void 0;
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear();
    this.events.destroy?.notify();
    this.clearListeners();
    this.stop();
    this.stopPassiveEffect?.();
  }
};
function motionValue(init, options) {
  return new MotionValue(init, options);
}

// node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function resolveTransition(transition, parentTransition) {
  if (transition?.inherit && parentTransition) {
    const { inherit: _, ...rest } = transition;
    return { ...parentTransition, ...rest };
  }
  return transition;
}

// node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition(transition, key) {
  const valueTransition = transition?.[key] ?? transition?.["default"] ?? transition;
  if (valueTransition !== transition) {
    return resolveTransition(valueTransition, transition);
  }
  return valueTransition;
}

// node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var criticallyDampedSpring = (target) => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
var ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
  if (keyframes2.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
  }
  return ease;
};

// node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var orchestrationKeys = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
  "out",
  "mixer"
]);
function isTransitionDefined(transition) {
  for (const key in transition) {
    if (!orchestrationKeys.has(key))
      return true;
  }
  return false;
}

// node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
  const valueTransition = getValueTransition(transition, name) || {};
  const delay2 = valueTransition.delay || transition.delay || 0;
  let { elapsed = 0 } = transition;
  elapsed = elapsed - secondsToMilliseconds(delay2);
  const options = {
    keyframes: Array.isArray(target) ? target : [null, target],
    ease: "easeOut",
    velocity: value.getVelocity(),
    ...valueTransition,
    delay: -elapsed,
    onUpdate: (v) => {
      value.set(v);
      valueTransition.onUpdate && valueTransition.onUpdate(v);
    },
    onComplete: () => {
      onComplete();
      valueTransition.onComplete && valueTransition.onComplete();
    },
    name,
    motionValue: value,
    element: isHandoff ? void 0 : element,
    hasOnUpdate: !!valueTransition.onUpdate
  };
  if (!isTransitionDefined(valueTransition)) {
    Object.assign(options, getDefaultTransition(name, options));
  }
  options.duration && (options.duration = secondsToMilliseconds(options.duration));
  options.repeatDelay && (options.repeatDelay = secondsToMilliseconds(options.repeatDelay));
  if (options.from !== void 0) {
    options.keyframes[0] = options.from;
  }
  let shouldSkip = false;
  if (options.type === false || options.duration === 0 && !options.repeatDelay) {
    makeAnimationInstant(options);
    if (options.delay === 0) {
      shouldSkip = true;
    }
  }
  if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || element?.shouldSkipAnimations || valueTransition.skipAnimations) {
    shouldSkip = true;
    makeAnimationInstant(options);
    options.delay = 0;
  }
  options.allowFlatten = !valueTransition.type && !valueTransition.ease;
  if (shouldSkip && !isHandoff && value.get() !== void 0) {
    const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
    if (finalKeyframe !== void 0) {
      frame.update(() => {
        options.onUpdate(finalKeyframe);
        options.onComplete();
      });
      return;
    }
  }
  return valueTransition.isSync ? new JSAnimation(options) : new AsyncMotionValueAnimation(options);
};

// node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
var splitCSSVariableRegex = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function parseCSSVariable(current) {
  const match = splitCSSVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token1, token2, fallback] = match;
  return [`--${token1 ?? token2}`, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  process.env.NODE_ENV !== "production" && invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [token, fallback] = parseCSSVariable(current);
  if (!token)
    return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    const trimmed = resolved.trim();
    return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
  }
  return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}

// node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
  const state = [{}, {}];
  visualElement?.values.forEach((value, key) => {
    state[0][key] = value.get();
    state[1][key] = value.getVelocity();
  });
  return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
  const resolveFunction = (def) => typeof def === "function" ? def(custom !== void 0 ? custom : props.custom, ...getValueState(visualElement)) : def;
  definition = resolveFunction(definition);
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  return resolveFunction(definition);
}

// node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function resolveVariant(visualElement, definition, custom) {
  return resolveVariantFromProps(visualElement.getProps(), definition, custom, visualElement);
}
var getTypeCustom = (visualElement, type) => type === "exit" ? visualElement.presenceContext?.custom : void 0;

// node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...transformPropOrder
]);

// node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var isKeyframesTarget = (v) => {
  return Array.isArray(v);
};

// node_modules/motion-dom/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function resolveFinalValueInKeyframes(v) {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
  target = { ...target, ...transitionEnd };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}

// node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => Boolean(value && value.getVelocity);

// node_modules/motion-dom/dist/es/value/will-change/is.mjs
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function addValueToWillChange(visualElement, key) {
  const willChange = visualElement.getValue("willChange");
  if (isWillChangeMotionValue(willChange)) {
    return willChange.add(key);
  } else if (!willChange && MotionGlobalConfig.WillChange) {
    const newWillChange = new MotionGlobalConfig.WillChange("auto");
    visualElement.addValue("willChange", newWillChange);
    newWillChange.add(key);
  }
}

// node_modules/motion-dom/dist/es/animation/optimized-appear/data-id.mjs
var optimizedAppearDataAttribute = "data-framer-appear-id";

// node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function getOptimisedAppearId(visualElement) {
  return visualElement.props[optimizedAppearDataAttribute];
}

// node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
var isBrowser2 = typeof window !== "undefined";
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
  const shouldBlock = key in protectedKeys && !needsAnimating[key];
  needsAnimating[key] = false;
  return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay: delay2 = 0, transitionOverride, type } = {}) {
  let { transition, transitionEnd, ...target } = targetAndTransition;
  const defaultTransition = visualElement.getDefaultTransition();
  transition = transition ? resolveTransition(transition, defaultTransition) : defaultTransition;
  const reduceMotion = transition?.reduceMotion;
  const skipAnimations = transition?.skipAnimations;
  if (transitionOverride)
    transition = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && visualElement.animationState?.getState()[type];
  const path = transition?.path;
  if (path) {
    path.animateValues ? path.animateValues((key) => visualElement.getValue(key, visualElement.latestValues[key] ?? 0), target, transition, delay2, animations2) : path.animateVisualElement?.(visualElement, target, transition, delay2, animations2);
  }
  for (const key in target) {
    const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
    const valueTarget = target[key];
    if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = {
      delay: delay2,
      ...getValueTransition(animationTypeState?.out[key] || transition || {}, key)
    };
    if (skipAnimations)
      valueTransition.skipAnimations = true;
    const currentValue = value.get();
    if (currentValue !== void 0 && !value.isAnimating() && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
      frame.update(() => value.set(valueTarget));
      continue;
    }
    let isHandoff = false;
    if (isBrowser2 && window.MotionHandoffAnimation) {
      const appearId = getOptimisedAppearId(visualElement);
      if (appearId) {
        const startTime = window.MotionHandoffAnimation(appearId, key, frame);
        if (startTime !== null) {
          valueTransition.startTime = startTime;
          isHandoff = true;
        }
      }
    }
    addValueToWillChange(visualElement, key);
    const shouldReduceMotion = reduceMotion ?? visualElement.shouldReduceMotion;
    value.run(animateMotionValue(key, value, valueTarget, shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
    const animation = value.animation;
    if (animation) {
      animations2.push(animation);
    }
  }
  if (transitionEnd) {
    const applyTransitionEnd = () => frame.update(() => {
      transitionEnd && setTarget(visualElement, transitionEnd);
    });
    if (animations2.length) {
      Promise.all(animations2).then(applyTransitionEnd);
    } else {
      applyTransitionEnd();
    }
  }
  return animations2;
}

// node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
  const resolved = resolveVariant(visualElement, variant, getTypeCustom(visualElement, options.type));
  const transition = options.transitionOverride || (resolved?.transition ?? (visualElement.getDefaultTransition() || {}));
  const getAnimation = () => Promise.all(resolved ? animateTarget(visualElement, resolved, options) : []);
  const getChildAnimations = (delay2 = 0) => {
    const { variantChildren } = visualElement;
    const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
    const animations2 = [];
    variantChildren?.forEach((child) => {
      child.notify("AnimationStart", variant);
      animations2.push(animateVariant(child, variant, {
        ...options,
        delay: delay2 + (typeof delayChildren === "function" ? 0 : delayChildren) + calcChildStagger(variantChildren, child, delayChildren, staggerChildren, staggerDirection)
      }).then(() => child.notify("AnimationComplete", variant)));
    });
    return Promise.all(animations2);
  };
  const { when } = transition;
  return when ? when === "beforeChildren" ? getAnimation().then(() => getChildAnimations()) : getChildAnimations().then(getAnimation) : Promise.all([getAnimation(), getChildAnimations(options.delay)]);
}

// node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  const animation = Array.isArray(definition) ? Promise.all(definition.map((variant) => animateVariant(visualElement, variant, options))) : typeof definition === "string" ? animateVariant(visualElement, definition, options) : Promise.all(animateTarget(visualElement, resolveVariant(visualElement, definition, options.custom), options));
  return animation.then(() => {
    visualElement.notify("AnimationComplete", definition);
  });
}

// node_modules/motion-dom/dist/es/value/types/auto.mjs
var auto = {
  test: (v) => v === "auto",
  parse: (v) => v
};

// node_modules/motion-dom/dist/es/value/types/test.mjs
var testValueType = (v) => (type) => type.test(v);

// node_modules/motion-dom/dist/es/value/types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

// node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function isNone(value) {
  if (typeof value === "number") {
    return value === 0;
  } else if (value !== null) {
    return value === "none" || value === "0" || isZeroValueString(value);
  } else {
    return true;
  }
}

// node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var invalidTemplates = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
  let i = 0;
  let animatableTemplate = void 0;
  while (i < unresolvedKeyframes.length && !animatableTemplate) {
    const keyframe = unresolvedKeyframes[i];
    if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && hasComplexValues(keyframe)) {
      animatableTemplate = unresolvedKeyframes[i];
    }
    i++;
  }
  if (animatableTemplate && name) {
    for (const noneIndex of noneKeyframeIndexes) {
      if (unresolvedKeyframes[noneIndex] === animatableTemplate)
        continue;
      unresolvedKeyframes[noneIndex] = getAnimatableNone2(name, animatableTemplate);
    }
  }
}

// node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = class extends KeyframeResolver {
  /**
   * Passes isAsync to the base constructor rather than setting it as a
   * class field, which would compile to a constructor that spreads
   * `arguments` into super(). That spread is slow in the interpreter,
   * and animate() constructs one resolver per value.
   */
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element) {
    super(unresolvedKeyframes, onComplete, name, motionValue2, element, true);
  }
  /**
   * Keyframes that don't need reading from the DOM, or measuring,
   * resolve straight away rather than in the frame loop's batched read.
   */
  scheduleResolve() {
    if (this.canReadNow()) {
      this.readKeyframes();
      if (!this.needsMeasurement)
        return this.complete();
    }
    super.scheduleResolve();
  }
  canReadNow() {
    const { unresolvedKeyframes, element, motionValue: motionValue2 } = this;
    const origin = unresolvedKeyframes[0] ?? motionValue2?.get();
    if (!element?.current || origin === void 0)
      return false;
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (containsCSSVariable(i ? unresolvedKeyframes[i] : origin)) {
        return false;
      }
    }
    return true;
  }
  readKeyframes() {
    const { unresolvedKeyframes, element, name } = this;
    if (!element?.current)
      return;
    super.readKeyframes();
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      let keyframe = unresolvedKeyframes[i];
      if (typeof keyframe === "string") {
        keyframe = keyframe.trim();
        if (isCSSVariableToken(keyframe)) {
          const resolved = getVariableValue(keyframe, element.current);
          if (resolved !== void 0) {
            unresolvedKeyframes[i] = resolved;
          }
          if (i === unresolvedKeyframes.length - 1) {
            this.finalKeyframe = keyframe;
          }
        }
      }
    }
    this.resolveNoneKeyframes();
    if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
      return;
    }
    const [origin, target] = unresolvedKeyframes;
    if (typeof origin === "number" && typeof target === "number")
      return;
    const originType = findDimensionValueType(origin);
    const targetType = findDimensionValueType(target);
    const originHasVar = containsCSSVariable(origin);
    const targetHasVar = containsCSSVariable(target);
    if (originHasVar !== targetHasVar && positionalValues[name]) {
      this.needsMeasurement = true;
      return;
    }
    if (originType === targetType)
      return;
    if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        const value = unresolvedKeyframes[i];
        if (typeof value === "string") {
          unresolvedKeyframes[i] = parseFloat(value);
        }
      }
    } else if (positionalValues[name]) {
      this.needsMeasurement = true;
    }
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes, name } = this;
    const noneKeyframeIndexes = [];
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (unresolvedKeyframes[i] === null || isNone(unresolvedKeyframes[i])) {
        noneKeyframeIndexes.push(i);
      }
    }
    if (noneKeyframeIndexes.length) {
      makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
    }
  }
  measure() {
    const { element, name } = this;
    return positionalValues[name](window.getComputedStyle(element.current), () => element.measureViewportBox());
  }
  measureInitialState() {
    const { element, unresolvedKeyframes, name } = this;
    if (!element?.current)
      return;
    if (name === "height")
      this.suspendedScrollY = window.pageYOffset;
    this.measuredOrigin = this.measure();
    unresolvedKeyframes[0] = this.measuredOrigin;
    const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
    if (measureKeyframe !== void 0) {
      this.motionValue?.jump(measureKeyframe, false);
    }
  }
  measureEndState() {
    const { element, unresolvedKeyframes } = this;
    if (!element?.current)
      return;
    this.motionValue?.jump(this.measuredOrigin, false);
    const finalKeyframeIndex = unresolvedKeyframes.length - 1;
    const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
    unresolvedKeyframes[finalKeyframeIndex] = this.measure();
    if (finalKeyframe !== null && this.finalKeyframe === void 0) {
      this.finalKeyframe = finalKeyframe;
    }
    this.resolveNoneKeyframes();
  }
};

// node_modules/motion-dom/dist/es/utils/border-radius.mjs
var cornerRadiusProps = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];

// node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function isHTMLElement(element) {
  return isObject(element) && "offsetHeight" in element && !("ownerSVGElement" in element);
}

// node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function isSVGElement(element) {
  return isObject(element) && "ownerSVGElement" in element;
}

// node_modules/motion-dom/dist/es/scope/active.mjs
var activeScope = {};
function addToScope(cleanup) {
  activeScope.current?.add(cleanup);
  return cleanup;
}
var bindToScope = (callback) => activeScope.current ? activeScope.current.bind(callback) : callback;

// node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function resolveElements(elementOrSelector, scope, selectorCache) {
  if (elementOrSelector == null) {
    return [];
  }
  if (elementOrSelector instanceof EventTarget) {
    return [elementOrSelector];
  } else if (typeof elementOrSelector === "string") {
    const root = scope ? scope.current : activeScope.current?.root || document;
    const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
    return elements ? Array.from(elements) : [];
  }
  return Array.from(elementOrSelector).filter((element) => element != null);
}

// node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function camelToDash(str) {
  return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}

// node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, transformTemplate) {
  const { style, vars, transformOrigin } = state;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (transformProps.has(key)) {
      hasTransform2 = true;
      continue;
    } else if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    } else {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (key.startsWith("origin")) {
        hasTransformOrigin = true;
        transformOrigin[key] = valueAsType;
      } else {
        style[key] = valueAsType;
      }
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style.transform = buildTransform(latestValues, state.transform, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// node_modules/motion-dom/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys = useDashCase ? dashKeys : camelKeys;
  attrs[keys.offset] = `${-offset}`;
  attrs[keys.array] = `${length} ${spacing}`;
}

// node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var cssStyleProperties = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function buildSVGAttrs(state, {
  attrX,
  attrY,
  attrScale,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  // This is object creation, which we try to avoid per-frame.
  ...latest
}, isSVGTag2, transformTemplate, styleProp) {
  buildHTMLStyles(state, latest, transformTemplate);
  if (isSVGTag2) {
    if (state.style.viewBox) {
      state.attrs.viewBox = state.style.viewBox;
    }
    return;
  }
  state.attrs = state.style;
  state.style = {};
  const { attrs, style } = state;
  for (const key of cssStyleProperties) {
    if (attrs[key] !== void 0) {
      style[key] = attrs[key];
      delete attrs[key];
    }
  }
  if (style.transform || attrs.transformOrigin) {
    style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
    delete attrs.transformOrigin;
  }
  if (style.transform) {
    style.transformBox = styleProp?.transformBox ?? "fill-box";
    delete attrs.transformBox;
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (attrScale !== void 0)
    attrs.scale = attrScale;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox({ top, left, right, bottom }) {
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox({ x, y }) {
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point, transformPoint2) {
  if (!transformPoint2)
    return point;
  const topLeft = transformPoint2({ x: point.left, y: point.top });
  const bottomRight = transformPoint2({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({ scale: scale2, scaleX: scaleX2, scaleY: scaleY2 }) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX2) || !isIdentityScale(scaleY2);
}
var angleTransforms = [
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skewX",
  "skewY"
];
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || hasDistortingTransform(values);
}
function hasDistortingTransform(values) {
  return values.z || values.rotate || values.rotateX || values.rotateY || values.rotateZ || values.skewX || values.skewY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point, scale2, originPoint) {
  const distanceFromOrigin = point - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, { x, y }) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
var TREE_SCALE_SNAP_MIN = 0.999999999999;
var TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  const treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    if (node.options.visualElement?.props.style?.display === "contents") {
      continue;
    }
    if (isSharedTransition === true && node.options.layoutScroll && node.scroll && node !== node.root) {
      translateAxis(box.x, -node.scroll.offset.x);
      translateAxis(box.y, -node.scroll.offset.y);
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && (isSharedTransition.path?.[i] || isSharedTransition) !== node && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues, node.layout?.layoutBox);
    }
  }
  if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
    treeScale.x = 1;
  }
  if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
    treeScale.y = 1;
  }
}
function translateAxis(axis, distance2) {
  axis.min += distance2;
  axis.max += distance2;
}
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
  const originPoint = mixNumber(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
function resolveAxisTranslate(value, axis) {
  if (typeof value === "string") {
    return parseFloat(value) / 100 * (axis.max - axis.min);
  }
  return value;
}
function transformBox(box, transform, sourceBox) {
  const resolveBox = sourceBox ?? box;
  transformAxis(box.x, resolveAxisTranslate(transform.x, resolveBox.x), transform.scaleX, transform.scale, transform.originX);
  transformAxis(box.y, resolveAxisTranslate(transform.y, resolveBox.y), transform.scaleY, transform.scale, transform.originY);
}

// node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const { scroll } = rootProjectionNode2;
  if (scroll) {
    translateAxis(viewportBox.x, scroll.offset.x);
    translateAxis(viewportBox.y, scroll.offset.y);
  }
  return viewportBox;
}
var measureDocumentScroll = () => ({
  x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
  y: document.documentElement.scrollTop || document.body?.scrollTop || 0
});

// node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);

// node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes2, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.run(animateMotionValue("", motionValue$1, keyframes2, options));
  return motionValue$1.animation;
}

// node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};

// node_modules/motion-dom/dist/es/stats/buffer.mjs
var statsBuffer = {
  value: null,
  addProjectionMetrics: null,
  countProjection: void 0
};

// node_modules/motion-dom/dist/es/utils/delay.mjs
function delay(callback, timeout) {
  const start = time.now();
  callback = bindToScope(callback);
  const checkElapsed = ({ timestamp }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.setup(checkElapsed, true);
  return addToScope(() => cancelFrame(checkElapsed));
}

// node_modules/motion-dom/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
  return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function isSVGSVGElement(element) {
  return isSVGElement(element) && element.tagName === "svg";
}

// node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  return isMotionValue(value) ? value.get() : value;
}

// node_modules/motion-dom/dist/es/value/utils/as-number.mjs
var asNumber = (v) => typeof v === "number" ? v : parseFloat(v);

// node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var numBorders = cornerRadiusProps.length;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mixNumber(0, lead.opacity ?? 1, easeCrossfadeIn(progress2));
    target.opacityExit = mixNumber(follow.opacity ?? 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mixNumber(follow.opacity ?? 1, lead.opacity ?? 1, progress2);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = cornerRadiusProps[i];
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mixNumber(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  for (let i = 0; i < angleTransforms.length; i++) {
    const key = angleTransforms[i];
    if (follow[key] || lead[key]) {
      target[key] = mixNumber(follow[key] || 0, lead[key] || 0, progress2);
    }
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = /* @__PURE__ */ compress(0, 0.5, circOut);
var easeCrossfadeOut = /* @__PURE__ */ compress(0.5, 0.95, noop);
function compress(min, max, easing) {
  return (p2) => {
    if (p2 < min)
      return 0;
    if (p2 > max)
      return 1;
    return easing(progress(min, max, p2));
  };
}

// node_modules/motion-dom/dist/es/projection/animation/layout-velocity.mjs
var pointToProgressVelocity = (tx, ty, { x, y }) => {
  const lengthSquared = tx * tx + ty * ty;
  return lengthSquared < 1 ? 0 : -1e3 * (x * tx + y * ty) / lengthSquared;
};
var resolveAutoMass = (t, size = 300) => {
  const mass = clamp(0.25, 2, size / 300);
  const { stiffness, damping } = getSpringOptions({
    ...t,
    duration: t.duration && secondsToMilliseconds(t.duration)
  });
  return { ...t, stiffness, damping: damping * Math.sqrt(mass), mass };
};

// node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}
function copyAxisDeltaInto(delta, originDelta) {
  delta.translate = originDelta.translate;
  delta.scale = originDelta.scale;
  delta.originPoint = originDelta.originPoint;
  delta.origin = originDelta.origin;
}

// node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var SCALE_PRECISION = 1e-4;
var SCALE_MIN = 1 - SCALE_PRECISION;
var SCALE_MAX = 1 + SCALE_PRECISION;
var TRANSLATE_PRECISION = 0.01;
var TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
var TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear2(value, target, maxDistance) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mixNumber(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  delta.translate = mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
  if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
    delta.scale = 1;
  }
  if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
    delta.translate = 0;
  }
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin?.originX);
  calcAxisDelta(delta.y, source.y, target.y, origin?.originY);
}
function calcRelativeAxis(target, relative, parent, anchor = 0) {
  const anchorPoint = anchor ? mixNumber(parent.min, parent.max, anchor) : parent.min;
  target.min = anchorPoint + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent, anchor) {
  calcRelativeAxis(target.x, relative.x, parent.x, anchor?.x);
  calcRelativeAxis(target.y, relative.y, parent.y, anchor?.y);
}
function calcRelativeAxisPosition(target, layout2, parent, anchor = 0) {
  const anchorPoint = anchor ? mixNumber(parent.min, parent.max, anchor) : parent.min;
  target.min = layout2.min - anchorPoint;
  target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent, anchor) {
  calcRelativeAxisPosition(target.x, layout2.x, parent.x, anchor?.x);
  calcRelativeAxisPosition(target.y, layout2.y, parent.y, anchor?.y);
}

// node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mixNumber(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  let originPoint = mixNumber(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys, originBox?.x, sourceBox?.x);
  removeAxisTransforms(box.y, transforms, yKeys, originBox?.y, sourceBox?.y);
}

// node_modules/motion-dom/dist/es/projection/geometry/round.mjs
var userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
  axis.min = roundPoint(axis.min);
  axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}

// node_modules/motion-dom/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
var createAxis = () => ({ min: 0, max: 0 });
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
  return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
  return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
  return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
  return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
  return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}

// node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var NodeStack = class {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    for (let i = this.members.length - 1; i >= 0; i--) {
      const member = this.members[i];
      if (member === node || member === this.lead || member === this.prevLead)
        continue;
      const inst = member.instance;
      if ((!inst || inst.isConnected === false) && !member.snapshot) {
        removeItem(this.members, member);
        member.unmount();
      }
    }
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead)
      this.prevLead = void 0;
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead)
        this.promote(prevLead);
    }
  }
  relegate(node) {
    for (let i = this.members.indexOf(node) - 1; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false && member.instance?.isConnected !== false) {
        this.promote(member);
        return true;
      }
    }
    return false;
  }
  promote(node, preserveFollowOpacity) {
    const prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.updateSnapshot();
      node.scheduleRender();
      const { layoutDependency: prevDep } = prevLead.options;
      const { layoutDependency: nextDep } = node.options;
      if (prevDep === void 0 || prevDep !== nextDep) {
        node.resumeFrom = prevLead;
        if (preserveFollowOpacity)
          prevLead.preserveOpacity = true;
        if (prevLead.snapshot) {
          node.snapshot = prevLead.snapshot;
          node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        }
        if (node.root?.isUpdating)
          node.isLayoutDirty = true;
      }
      if (node.options.crossfade === false)
        prevLead.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((member) => {
      member.options.onExitComplete?.();
      member.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((member) => member.instance && member.scheduleRender(false));
  }
  removeLeadSnapshot() {
    if (this.lead?.snapshot)
      this.lead.snapshot = void 0;
  }
};

// node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

// node_modules/motion-dom/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = {
  correct: (latest, { treeScale, projectionDelta }) => {
    const original = latest;
    const shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    const averageScale = mixNumber(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number")
      shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number")
      shadow[3 + offset] /= averageScale;
    return template(shadow);
  }
};

// node_modules/motion-dom/dist/es/projection/styles/default-scale-correctors.mjs
var defaultScaleCorrectors = {
  borderRadius: /* @__PURE__ */ Object.assign({}, correctBorderRadius, {
    applyTo: /* @__PURE__ */ cornerRadiusProps.slice()
  }),
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  const zTranslate = latestTransform?.z || 0;
  if (xTranslate || yTranslate || zTranslate) {
    transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
  }
  let angles = "";
  if (latestTransform) {
    const { transformPerspective } = latestTransform;
    if (transformPerspective)
      transform = `perspective(${transformPerspective}px) ${transform}`;
    for (let i = 0; i < angleTransforms.length; i++) {
      const key = angleTransforms[i];
      const value = latestTransform[key];
      if (value)
        angles += `${key}(${value}deg) `;
      if (!i && latestTransform.pathRotation)
        angles += `rotate(${latestTransform.pathRotation}deg) `;
    }
  }
  if (angles) {
    if (treeScale.x !== 1 || treeScale.y !== 1) {
      transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    transform += angles;
    const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
      transform += `scale(${elementScaleX}, ${elementScaleY})`;
    }
  } else if (delta.x.scale !== 1 || delta.y.scale !== 1) {
    transform += `scale(${delta.x.scale}, ${delta.y.scale})`;
  } else if (!transform && (treeScale.x !== 1 || treeScale.y !== 1)) {
    transform = "scale(1, 1)";
  }
  return transform || "none";
}

// node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;

// node_modules/motion-dom/dist/es/projection/utils/flat-tree.mjs
var FlatTree = class {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
};

// node_modules/motion-dom/dist/es/projection/node/state.mjs
var globalProjectionState = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: true,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: false
};

// node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs
var distortingTransforms = ["z", "skew", "skewZ"];
var animationTarget = 1e3;
var id = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
  const { latestValues } = visualElement;
  if (latestValues[key]) {
    values[key] = latestValues[key];
    visualElement.setStaticValue(key, 0);
    if (sharedAnimationValues) {
      sharedAnimationValues[key] = 0;
    }
  }
}
var demoteTransforms = (node) => node.instance && transformGroups.get(node.instance)?.demote() && node.resetSkewAndRotation();
function cancelTreeOptimisedTransformAnimations(projectionNode) {
  projectionNode.hasCheckedOptimisedAppear = true;
  if (projectionNode.root === projectionNode)
    return;
  const { visualElement } = projectionNode.options;
  if (!visualElement)
    return;
  const appearId = getOptimisedAppearId(visualElement);
  if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
    const { layout: layout2, layoutId } = projectionNode.options;
    window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout2 || layoutId));
  }
  const { parent } = projectionNode;
  if (parent && !parent.hasCheckedOptimisedAppear) {
    cancelTreeOptimisedTransformAnimations(parent);
  }
}
function getClosestProjectingNode(visualElement) {
  if (!visualElement)
    return void 0;
  return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll: measureScroll2, checkIsScrollRoot, resetTransform }) {
  Object.assign(scaleCorrectors, {
    ...defaultScaleCorrectors,
    ...scaleCorrectors
  });
  return class ProjectionNode {
    /**
     * Create the projection node of a `motion` component's VisualElement,
     * from its props. This runs while the component renders, before its
     * children. It's here rather than in the component so React
     * bundles only include it with the features that supply a
     * ProjectionNode. Vanilla bundles that use the projection node
     * (drag(), animateLayout()) include it too, as a class static
     * can't be tree-shaken.
     */
    static create(visualElement, props, initialPromotionConfig) {
      const { layoutId, layout: layout2, drag: drag2, dragConstraints, layoutScroll, layoutRoot, layoutAnchor, layoutCrossfade } = props;
      const projection = visualElement.projection = new this(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
      projection.setOptions({
        layoutId,
        layout: layout2,
        alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
        visualElement,
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof layout2 === "string" ? layout2 : "both",
        initialPromotionConfig,
        crossfade: layoutCrossfade,
        layoutScroll,
        layoutRoot,
        layoutAnchor
      });
      const lead = projection.getStack()?.lead;
      if (lead && !projection.root.isUpdateBlocked()) {
        lead.willUpdate();
        lead.scheduleCheckAfterUnmount();
      }
    }
    constructor(latestValues = {}, parent = defaultParent?.()) {
      this.id = id++;
      this.animationId = 0;
      this.animationCommitId = 0;
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.hasCheckedOptimisedAppear = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.hasTreeAnimated = false;
      this.updateScheduled = false;
      this.scheduleUpdate = () => this.update();
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
        statsBuffer.countProjection?.();
      };
      this.resolvedRelativeTargetAt = 0;
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      this.eventHandlers.get(name)?.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    /**
     * Lifecycles
     */
    mount(instance) {
      if (this.instance)
        return;
      this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
      this.instance = instance;
      const { layoutId, layout: layout2, visualElement } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent?.children.add(this);
      if (this.root.hasTreeAnimated && (layout2 || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        let innerWidth = 0;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        frame.read(() => {
          innerWidth = window.innerWidth;
        });
        attachResizeListener(instance, () => {
          const newInnerWidth = window.innerWidth;
          if (newInnerWidth === innerWidth)
            return;
          innerWidth = newInnerWidth;
          this.root.updateBlockedByResize = true;
          cancelDelay?.();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      this.addLayoutListener();
    }
    /**
     * Only register the layout animation handler if this node requires
     * layout animation. This is called on mount, and again whenever options
     * change, as `layout` or `layoutId` may be enabled after mount.
     */
    addLayoutListener() {
      const { layoutId, layout: layout2, visualElement, animate } = this.options;
      if (!this.instance || this.hasLayoutListener || animate === false || !visualElement || !(layoutId || layout2))
        return;
      this.hasLayoutListener = true;
      this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0;
          this.relativeTarget = void 0;
          return;
        }
        const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
        const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
        const hasTargetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout);
        const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
        if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
          if (this.resumeFrom) {
            this.resumingFrom = this.resumeFrom;
            this.resumingFrom.resumingFrom = void 0;
          }
          const animationOptions = {
            ...getValueTransition(layoutTransition, "layout"),
            onPlay: onLayoutAnimationStart,
            onComplete: onLayoutAnimationComplete
          };
          if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
            animationOptions.delay = 0;
            animationOptions.type = false;
          }
          this.startAnimation(animationOptions);
          this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged, animationOptions.path);
        } else {
          if (!hasLayoutChanged) {
            finishAnimation(this);
          }
          this.isLead() && this.options.onExitComplete?.();
        }
        this.targetLayout = newLayout;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      this.getStack()?.remove(this);
      this.parent?.children.delete(this);
      this.instance = void 0;
      this.eventHandlers.clear();
      this.hasLayoutListener = false;
      cancelFrame(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    // Note: currently only running on root node
    startUpdate() {
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      this.nodes?.forEach(resetSkewAndRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const { visualElement } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete?.();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(this);
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      demoteTransforms(this);
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        demoteTransforms(node);
        if (typeof node.latestValues.x === "string" || typeof node.latestValues.y === "string") {
          node.isLayoutDirty = true;
        }
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
        if (node.isAnimationBlocked) {
          node.dragSnapshot || (node.dragSnapshot = node.measure());
          this.dragAncestor = node;
        }
      }
      const { layoutId, layout: layout2 } = this.options;
      if (layoutId === void 0 && !layout2)
        return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        const wasBlockedByResize = this.updateBlockedByResize;
        this.unblockUpdate();
        this.updateBlockedByResize = false;
        this.clearAllSnapshots();
        if (wasBlockedByResize) {
          this.nodes.forEach(forceLayoutMeasure);
        }
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(clearIsLayoutDirty);
        return;
      }
      this.animationCommitId = this.animationId;
      if (!this.isUpdating) {
        this.nodes.forEach(clearIsLayoutDirty);
      } else {
        this.isUpdating = false;
        this.nodes.forEach(ensureDraggedNodesSnapshotted);
        this.nodes.forEach(syncRelativeLayout);
        this.nodes.forEach(resetTransformStyle);
        this.nodes.forEach(updateLayout);
        this.nodes.forEach(notifyLayoutUpdate);
      }
      this.clearAllSnapshots();
      const now2 = time.now();
      frameData.delta = clamp(0, 1e3 / 60, now2 - frameData.timestamp);
      frameData.timestamp = now2;
      frameData.isProcessing = true;
      frameSteps.update.process(frameData);
      frameSteps.preRender.process(frameData);
      frameSteps.render.process(frameData);
      frameData.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        microtask.read(this.scheduleUpdate);
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach((stack, layoutId) => stack.members.length ? stack.removeLeadSnapshot() : this.sharedNodes.delete(layoutId));
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        frame.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      if (this.snapshot || !this.instance)
        return;
      this.snapshot = this.measure();
      if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) {
        this.snapshot = void 0;
      }
      if (this.snapshot) {
        const { visualElement } = this.options;
        const isRunning = this.currentAnimation?.state === "running";
        const edges = isRunning && this.animationEdges;
        if (isRunning && this.relativeTarget) {
          this.snapshot.relativeVelocity = this.relativeVelocity?.slice() || [];
        }
        const progress2 = edges && this.motionValue?.getVelocity() || 0;
        const velocity = [0, 1, 2, 3, 4, 5].map((i) => (i < 4 ? edges && (this.edgeValues ? this.edgeVelocity(i) : -edges[i] * progress2 / 1e3) : visualElement?.getValue(i < 5 ? "x" : "y")?.getVelocity()) || 0);
        if (velocity.some(Boolean))
          this.snapshot.velocity = velocity;
      }
    }
    updateLayout() {
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      if (!this.layoutCorrected)
        this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement } = this.options;
      visualElement?.notify("LayoutMeasure", this.layout.layoutBox, prevLayout?.layoutBox);
    }
    updateScroll(phase = "measure") {
      const { scroll, instance } = this;
      const { animationId } = this.root;
      if (this.options.layoutScroll && instance && !(scroll && scroll.animationId === animationId && scroll.phase === phase)) {
        const isRoot = checkIsScrollRoot(instance);
        this.scroll = {
          animationId,
          phase,
          isRoot,
          offset: measureScroll2(instance),
          wasRoot: scroll ? scroll.isRoot : isRoot
        };
      }
    }
    resetTransform() {
      if (!resetTransform)
        return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      isResetRequested && demoteTransforms(this);
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && this.instance && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement } = this.options;
      if (!visualElement)
        return createBox();
      const box = visualElement.measureViewportBox();
      const wasInScrollRoot = this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot);
      if (!wasInScrollRoot) {
        const { scroll } = this.root;
        if (scroll) {
          translateAxis(box.x, scroll.offset.x);
          translateAxis(box.y, scroll.offset.y);
        }
      }
      return box;
    }
    removeElementScroll(box) {
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      if (this.scroll?.wasRoot) {
        return boxWithoutScroll;
      }
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const { scroll, options } = node;
        if (node !== this.root && scroll && options.layoutScroll) {
          if (scroll.wasRoot) {
            copyBoxInto(boxWithoutScroll, box);
          }
          translateAxis(boxWithoutScroll.x, scroll.offset.x);
          translateAxis(boxWithoutScroll.y, scroll.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false, output, skipOwnTransform, start = 0) {
      const withTransforms = output || createBox();
      copyBoxInto(withTransforms, box);
      for (let i = start; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          translateAxis(withTransforms.x, -node.scroll.offset.x);
          translateAxis(withTransforms.y, -node.scroll.offset.y);
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues, node.layout?.layoutBox);
      }
      if (!skipOwnTransform && hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues, this.layout?.layoutBox);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!hasTransform(node.latestValues))
          continue;
        let sourceBox;
        if (node.instance) {
          hasScale(node.latestValues) && node.updateSnapshot();
          sourceBox = createBox();
          copyBoxInto(sourceBox, node.measurePageBox());
        }
        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot?.layoutBox, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      };
      this.addLayoutListener();
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (!this.relativeParent)
        return;
      if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(forceRecalculation = false) {
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      if (!this.layout || !(layout2 || layoutId))
        return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      const relativeParent = this.getClosestProjectingParent();
      if (!this.targetDelta && !this.relativeTarget) {
        if (this.options.layoutAnchor !== false && relativeParent && relativeParent.layout) {
          this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
        } else {
          this.removeRelativeTarget();
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        this.forceRelativeParentToResolveTarget();
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.applyTransform(this.layout.layoutBox, false, this.target, true);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        if (this.options.layoutAnchor !== false && relativeParent && (!relativeParent.resumingFrom === !this.resumingFrom || /**
         * Shared layout animations within a layoutRoot
         * animate relative to it.
         */
        relativeParent.options.layoutRoot && !relativeParent.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
          this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      statsBuffer.countProjection?.(1);
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return void 0;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(relativeParent, layout2, parentLayout) {
      this.relativeParent = relativeParent;
      this.forceRelativeParentToResolveTarget();
      this.relativeTarget = createBox();
      this.relativeTargetOrigin = createBox();
      calcRelativePosition(this.relativeTargetOrigin, layout2, parentLayout, this.options.layoutAnchor || void 0);
      copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
        canSkip = false;
      }
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      this.isTreeAnimating = Boolean(this.parent?.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout2 || layoutId))
        return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared && (lead.relativeTarget && !lead.relativeParent.resumingFrom ? lead.relativeParent : true));
      if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        lead.target = lead.layout.layoutBox;
        lead.targetWithTransforms = createBox();
      }
      const { target } = lead;
      if (!target) {
        if (this.prevProjectionDelta) {
          this.createProjectionDeltas();
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta || !this.prevProjectionDelta) {
        this.createProjectionDeltas();
      } else {
        copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
        copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
      }
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
      statsBuffer.countProjection?.(2);
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll2 = true) {
      this.options.visualElement?.scheduleRender();
      if (notifyAll2) {
        this.getStack()?.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = createDelta();
      this.projectionDelta = createDelta();
      this.projectionDeltaWithTransform = createDelta();
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false, pathFn) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = { ...this.latestValues };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = void 0;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const isSharedLayoutAnimation = snapshot?.source !== this.layout?.source;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      const interpolate2 = pathFn?.interpolateProjection(delta);
      const box = this.layout?.layoutBox;
      let edges = box && [box.x.min, box.x.max, box.y.min, box.y.max].map((edge, i) => {
        const { translate, scale: scale2, originPoint } = delta[i < 2 ? "x" : "y"];
        return (edge - originPoint) * (scale2 - 1) + translate;
      });
      if (!edges?.every(isFinite))
        edges = void 0;
      this.animationEdges = edges;
      this.edgeValues = this.startVelocity = this.impulse = this.relativeVelocity = this.relativeStart = void 0;
      const velocity = snapshot?.velocity;
      const relative = snapshot?.relativeVelocity || velocity;
      if (relative?.slice(0, 4).some(Boolean) && this.getClosestProjectingParent()) {
        this.relativeStart = relative;
      }
      if (velocity && edges) {
        const v = velocity.slice(0, 4).map((edge, i) => edge + (isSharedLayoutAnimation ? velocity[4 + (i >> 1)] : 0));
        if (v.some(Boolean)) {
          this.startVelocity = interpolate2 ? pointToProgressVelocity(delta.x.translate, delta.y.translate, { x: (v[0] + v[1]) / 2, y: (v[2] + v[3]) / 2 }) : v;
        }
      }
      this.mixTargetDelta = (latest) => {
        const progress2 = latest / 1e3;
        const point = interpolate2?.(progress2);
        const values = this.edgeValues;
        for (let i = 0; i < 2; i++) {
          const axis = i ? "y" : "x";
          values ? edgesToDelta(targetDelta[axis], delta[axis], this.layout.layoutBox[axis], values[i * 2], values[i * 2 + 1]) : mixAxisDeltaLinear(targetDelta[axis], delta[axis], progress2);
        }
        if (point) {
          targetDelta.x.translate = point.x;
          targetDelta.y.translate = point.y;
        }
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0);
          const from = this.relativeTargetOrigin;
          const to = relativeLayout;
          mixBox(this.relativeTarget, from, to, progress2);
          if (this.isSpringLayout) {
            const box2 = this.relativeTarget;
            const impulse = this.impulse || 0;
            const start = this.relativeStart;
            const now2 = time.now();
            const dt = (now2 - this.relativeTime) / 1e3;
            this.relativeTime = now2;
            const speeds = this.relativeVelocity || (this.relativeVelocity = [0, 0, 0, 0]);
            for (let i = 0; i < 4; i++) {
              const axis = i < 2 ? "x" : "y";
              const edge = i & 1 ? "max" : "min";
              if (start)
                box2[axis][edge] += start[i] * impulse;
              if (prevRelativeTarget && dt > 0) {
                speeds[i] = (box2[axis][edge] - prevRelativeTarget[axis][edge]) / dt;
              }
            }
          }
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget)
            prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        if (point?.rotate !== void 0) {
          if (!this.animationValues)
            this.animationValues = mixedValues;
          this.animationValues.pathRotation = point.rotate;
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress2;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      const isSpring = this.isSpringLayout = options.type === "spring";
      this.currentAnimation?.stop();
      this.resumingFrom?.currentAnimation?.stop();
      if (this.resumingFrom)
        this.resumingFrom.edgeValues = void 0;
      if (this.pendingAnimation) {
        cancelFrame(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.motionValue || (this.motionValue = motionValue(0));
        this.motionValue.jump(0, false);
        const velocity = this.startVelocity;
        this.startVelocity = void 0;
        let transition = options;
        let mainVelocity = 0;
        if (isSpring) {
          if (options.mass === "auto") {
            const box = this.layout?.layoutBox;
            transition = resolveAutoMass(options, box && Math.sqrt(calcLength(box.x) * calcLength(box.y)));
          }
          const relative = this.relativeStart;
          if ((velocity || relative) && !options.repeat) {
            if (typeof velocity === "number") {
              mainVelocity = velocity;
            } else {
              const edges = velocity && this.animationEdges;
              transition = {
                ...transition,
                type: (o) => {
                  const springs = [
                    o.velocity,
                    ...velocity || []
                  ].map((v, i) => spring({
                    ...o,
                    keyframes: i ? [edges[i - 1], 0] : o.keyframes,
                    velocity: v
                  }));
                  const count = springs.length;
                  relative && springs.push(spring({
                    ...o,
                    keyframes: [0, 0],
                    velocity: 1e3,
                    restDelta: 0.5,
                    restSpeed: 5
                  }));
                  let time2 = 0;
                  const values = [];
                  const generator = {
                    calculatedDuration: null,
                    next: (t) => {
                      time2 = t;
                      const state = springs[0].next(t);
                      let done = state.done;
                      for (let i = 1; i < springs.length; i++) {
                        const { value, done: rest } = springs[i].next(t);
                        if (i < count) {
                          values[i - 1] = value;
                        } else {
                          this.impulse = value / 1e3;
                        }
                        done = done && rest;
                      }
                      if (edges)
                        this.edgeValues = values;
                      state.done = done;
                      return state;
                    }
                  };
                  generator.calculatedDuration = calcGeneratorDuration(generator);
                  generator.next(0);
                  this.edgeVelocity = (i) => springs[i + 1].velocity(time2);
                  return generator;
                }
              };
            }
          }
        }
        const main = animateSingleValue(this.motionValue, [0, 1e3], {
          ...transition,
          velocity: mainVelocity,
          isSync: true,
          onUpdate: (latest) => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onComplete: () => {
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        this.currentAnimation = main;
        notifyLayoutAnimationStart(this.currentAnimation, this);
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = this.edgeValues = this.edgeVelocity = this.impulse = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.edgeValues = this.impulse = void 0;
        this.mixTargetDelta?.(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      const { targetWithTransforms, layout: layout2, latestValues } = lead;
      let { target } = lead;
      if (!targetWithTransforms || !target || !layout2)
        return;
      if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
        const { layoutBox } = this.layout;
        const leadTarget = target;
        target = this.target || createBox();
        alignAxis(target.x, leadTarget.x, layoutBox.x);
        alignAxis(target.y, leadTarget.y, layoutBox.y);
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      const config = node.options.initialPromotionConfig;
      node.promote({
        transition: config?.transition,
        preserveFollowOpacity: config?.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      const { layoutId } = this.options;
      return layoutId ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId } = this.options;
      return layoutId ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId } = this.options;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    }
    promote({ needsReset, transition, preserveFollowOpacity } = {}) {
      this.getStack()?.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    }
    relegate() {
      return this.getStack()?.relegate(this) || false;
    }
    resetSkewAndRotation() {
      const { visualElement } = this.options;
      if (!visualElement)
        return;
      const { latestValues } = visualElement;
      if (!hasDistortingTransform(latestValues))
        return;
      const resetValues = {};
      for (let i = 0; i < distortingTransforms.length; i++) {
        resetDistortingTransform(distortingTransforms[i], visualElement, resetValues, this.animationValues);
      }
      for (let i = 0; i < angleTransforms.length; i++) {
        resetDistortingTransform(angleTransforms[i], visualElement, resetValues, this.animationValues);
      }
      visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
        if (this.animationValues) {
          this.animationValues[key] = resetValues[key];
        }
      }
      visualElement.scheduleRender();
    }
    applyProjectionStyles(targetStyle, styleProp) {
      if (!this.instance || this.isSVG)
        return;
      const lead = this.getLead();
      if (!this.isVisible && lead !== this) {
        targetStyle.visibility = "hidden";
        return;
      }
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        targetStyle.visibility = "";
        targetStyle.opacity = "";
        targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
        targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return;
      }
      if (!this.projectionDelta || !this.layout || !lead.target) {
        if (this.options.layoutId || this.needsShow) {
          this.needsShow = false;
          targetStyle.visibility = "";
          targetStyle.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return;
      }
      targetStyle.visibility = "";
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      let transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        transform = transformTemplate(valuesToRender, transform);
      }
      targetStyle.transform = transform;
      const { x, y } = this.projectionDelta;
      targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        targetStyle.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
        const corrected = transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            targetStyle[applyTo[i]] = corrected;
          }
        } else {
          if (isCSSVariable) {
            this.options.visualElement.renderState.vars[key] = corrected;
          } else {
            targetStyle[key] = corrected;
          }
        }
      }
      if (this.options.layoutId) {
        targetStyle.pointerEvents = lead === this ? resolveMotionValue(styleProp?.pointerEvents) || "" : "none";
      }
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((node) => node.currentAnimation?.stop());
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
  followDraggedAncestor(node);
}
function notifyLayoutUpdate(node) {
  const snapshot = node.resumeFrom?.snapshot || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const { layoutBox: layout2, measuredBox: measuredLayout } = node.layout;
    const { animationType } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    const resizeSnapshot = (box, to) => {
      if (animationType === "size") {
        eachAxis((axis) => {
          const length = calcLength(box[axis]);
          box[axis].min = to[axis].min;
          box[axis].max = box[axis].min + length;
        });
      } else if (animationType === "x" || animationType === "y") {
        const snapAxis = animationType === "x" ? "y" : "x";
        copyAxisInto(box[snapAxis], to[snapAxis]);
      } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
        eachAxis((axis) => {
          const length = calcLength(to[axis]);
          box[axis].max = box[axis].min + length;
          if (node.relativeTarget && !node.currentAnimation) {
            node.isProjectionDirty = true;
            node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
          }
        });
      }
    };
    const snapshotBox = isShared ? snapshot.measuredBox : snapshot.layoutBox;
    resizeSnapshot(snapshotBox, layout2);
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
    const visualDelta = createDelta();
    calcBoxDelta(visualDelta, isShared ? node.applyTransform(measuredLayout, true) : layout2, snapshotBox);
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeLayoutChanged = false;
    const relativeParent = node.getClosestProjectingParent();
    if (!isShared || relativeParent?.options.layoutRoot && node.resumeFrom?.path.includes(relativeParent)) {
      if (relativeParent && !relativeParent.resumeFrom) {
        const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const anchor = node.options.layoutAnchor || void 0;
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, isShared ? node.resumeFrom.applyTransform(snapshot.layoutBox, true, void 0, true, relativeParent.depth + 1) : snapshot.layoutBox, parentSnapshot.layoutBox, anchor);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox, anchor);
          isShared && resizeSnapshot(relativeSnapshot, relativeLayout);
          if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
            hasRelativeLayoutChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout2,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeLayoutChanged
    });
  } else if (node.isLead()) {
    node.options.onExitComplete?.();
  }
  node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
  statsBuffer.countProjection?.(0);
  if (!node.parent)
    return;
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function forceLayoutMeasure(node) {
  node.isLayoutDirty = true;
  node.updateLayout();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function followDraggedAncestor(node) {
  const { snapshot, dragAncestor } = node;
  const to = dragAncestor?.isAnimationBlocked && dragAncestor.layout;
  if (!snapshot || !to || node.resumeFrom || node.isAnimationBlocked)
    return;
  const from = dragAncestor.dragSnapshot;
  eachAxis((axis) => translateAxis(snapshot.layoutBox[axis], to.layoutBox[axis].min - from.layoutBox[axis].min));
}
function ensureDraggedNodesSnapshotted(node) {
  if (node.isAnimationBlocked && node.layout && !node.isLayoutDirty) {
    node.snapshot = node.dragSnapshot || node.layout;
    node.isLayoutDirty = true;
  }
}
function syncRelativeLayout(node) {
  if (node.relativeTarget && node.relativeParent?.isLayoutDirty) {
    if (node.currentAnimation) {
      node.isLayoutDirty = true;
    } else {
      node.targetDelta = void 0;
      node.removeRelativeTarget();
    }
  }
}
function resetTransformStyle(node) {
  const { visualElement } = node.options;
  if (visualElement?.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
  node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetSkewAndRotation(node) {
  node.resetSkewAndRotation();
}
function edgesToDelta(output, delta, layout2, min, max) {
  const length = layout2.max - layout2.min;
  const scale2 = length ? Math.max(0, (length + max - min) / length) : 1;
  const origin = output.originPoint = delta.originPoint;
  output.origin = delta.origin;
  output.scale = scale2;
  output.translate = layout2.min + min - (origin + (layout2.min - origin) * scale2);
}
function mixAxisDeltaLinear(output, delta, p2) {
  output.translate = mixNumber(delta.translate, 0, p2);
  output.scale = mixNumber(delta.scale, 1, p2);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p2) {
  output.min = mixNumber(from.min, to.min, p2);
  output.max = mixNumber(from.max, to.max, p2);
}
function mixBox(output, from, to, p2) {
  mixAxis(output.x, from.x, to.x, p2);
  mixAxis(output.y, from.y, to.y, p2);
}
function hasOpacityCrossfade(node) {
  return node.animationValues?.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function alignAxis(output, from, layout2) {
  output.max = calcLength(layout2) + (output.min = from.min);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear2(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
}
function checkNodeWasScrollRoot(node) {
  return node !== node.root && node.scroll?.wasRoot;
}

// node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: true }) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler, options);
}

// node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = /* @__PURE__ */ createProjectionNode({
  attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
  measureScroll: measureDocumentScroll,
  checkIsScrollRoot: () => true
});

// node_modules/motion-dom/dist/es/projection/node/root.mjs
var rootProjectionNode = {
  current: void 0
};

// node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs
var HTMLProjectionNode = /* @__PURE__ */ createProjectionNode({
  measureScroll: (instance) => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: (instance) => window.getComputedStyle(instance).position === "fixed"
});

// node_modules/motion-dom/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */ new WeakMap();

// node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return v !== null && typeof v === "object" && typeof v.start === "function";
}

// node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

// node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "whilePinch",
  "exit"
];
var variantProps = /* @__PURE__ */ ["initial"].concat(variantPriorityOrder);

// node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
  if (isAnimationControls(props.animate))
    return true;
  for (let i = 0; i < variantProps.length; i++) {
    if (isVariantLabel(props[variantProps[i]])) {
      return true;
    }
  }
  return false;
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue, { owner: element }));
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        if (existingValue.liveStyle === true) {
          existingValue.jump(nextValue);
        } else if (!existingValue.hasAnimated) {
          existingValue.set(nextValue);
        }
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}

// node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };

// node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs
var isBrowser3 = typeof window !== "undefined";
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser3)
    return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

// node_modules/motion-dom/dist/es/render/VisualElement.mjs
var propEventHandlers = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
var featureDefinitions = {};
function setFeatureDefinitions(definitions) {
  featureDefinitions = definitions;
}
function getFeatureDefinitions() {
  return featureDefinitions;
}
var VisualElement = class {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
    return {};
  }
  constructor({ parent, props, presenceContext, reducedMotionConfig, skipAnimations, blockInitialAnimation, visualState }, options = {}) {
    this.current = null;
    this.children = /* @__PURE__ */ new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.shouldSkipAnimations = false;
    this.values = /* @__PURE__ */ new Map();
    this.KeyframeResolver = KeyframeResolver;
    this.features = {};
    this.valueSubscriptions = /* @__PURE__ */ new Map();
    this.prevMotionValues = {};
    this.hasBeenMounted = false;
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current)
        return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.renderScheduledAt = 0;
    this.scheduleRender = () => {
      const now2 = time.now();
      if (this.renderScheduledAt < now2) {
        this.renderScheduledAt = now2;
        frame.render(this.render, false, true);
      }
    };
    const { latestValues, renderState } = visualState;
    this.latestValues = latestValues;
    this.baseTarget = { ...latestValues };
    this.initialValues = props.initial ? { ...latestValues } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.skipAnimationsConfig = skipAnimations;
    this.options = options;
    this.blockInitialAnimation = Boolean(blockInitialAnimation);
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */ new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key]);
      }
    }
  }
  mount(instance) {
    const presence = this.presenceContext;
    if (this.hasBeenMounted && presence?.isPresent !== false && !presence?.keepValuesOnRemount) {
      for (const key in this.initialValues) {
        this.values.get(key)?.jump(this.initialValues[key]);
        this.latestValues[key] = this.initialValues[key];
      }
    }
    this.current = instance;
    visualElementStore.set(instance, this);
    this.projection?.instance || this.projection?.mount(instance);
    if (this.isVariantNode && !this.isControllingVariants) {
      let node = this;
      do
        node = node.props.inherit !== false && node.parent;
      while (node && !node.isVariantNode);
      if (node) {
        const { variantChildren } = node;
        variantChildren.add(this);
        this.removeFromVariantTree = () => variantChildren.delete(this);
      }
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (this.reducedMotionConfig === "never") {
      this.shouldReduceMotion = false;
    } else if (this.reducedMotionConfig === "always") {
      this.shouldReduceMotion = true;
    } else {
      if (!hasReducedMotionListener.current) {
        initPrefersReducedMotion();
      }
      this.shouldReduceMotion = prefersReducedMotion.current;
    }
    if (process.env.NODE_ENV !== "production") {
      warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
    }
    this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
    this.parent?.addChild(this);
    this.update(this.props, this.presenceContext);
    this.hasBeenMounted = true;
  }
  unmount() {
    this.projection?.unmount();
    cancelFrame(this.notifyUpdate);
    cancelFrame(this.render);
    this.valueSubscriptions.forEach((remove) => remove());
    this.valueSubscriptions.clear();
    this.removeFromVariantTree?.();
    this.parent?.removeChild(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature) {
        feature.unmount();
        feature.isMounted = false;
      }
    }
    this.current = null;
  }
  addChild(child) {
    this.children.add(child);
    (this.enteringChildren || (this.enteringChildren = /* @__PURE__ */ new Set())).add(child);
  }
  removeChild(child) {
    this.children.delete(child);
    this.enteringChildren?.delete(child);
  }
  bindToMotionValue(key, value) {
    this.valueSubscriptions.get(key)?.();
    if (value.accelerate && acceleratedValues.has(key) && this.current instanceof HTMLElement) {
      const { factory, keyframes: keyframes2, times, ease: ease2, duration } = value.accelerate;
      const animation = new NativeAnimation({
        element: this.current,
        name: key,
        keyframes: keyframes2,
        times,
        ease: ease2,
        duration: secondsToMilliseconds(duration)
      });
      const cleanup = factory(animation);
      this.valueSubscriptions.set(key, () => {
        cleanup();
        animation.cancel();
      });
      return;
    }
    const valueIsTransform = transformProps.has(key);
    if (valueIsTransform && this.onBindTransform) {
      this.onBindTransform();
    }
    const removeOnChange = value.on("change", (latestValue) => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && frame.preRender(this.notifyUpdate);
      if (valueIsTransform) {
        if (this.projection) {
          this.projection.isTransformDirty = true;
        }
        transformGroups.get(this.current)?.check();
      }
      this.scheduleRender();
    });
    let removeSyncCheck;
    if (typeof window !== "undefined" && window.MotionCheckAppearSync) {
      removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
    }
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeSyncCheck?.();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !other.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  updateFeatures() {
    let key = "animation";
    for (key in featureDefinitions) {
      const featureDefinition = featureDefinitions[key];
      if (!featureDefinition)
        continue;
      const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
      if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
        this.features[key] = new FeatureConstructor(this);
      }
      if (this.features[key]) {
        const feature = this.features[key];
        if (feature.isMounted) {
          feature.update();
        } else {
          feature.mount();
          feature.isMounted = true;
        }
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(props, presenceContext) {
    const { transformTemplate, onUpdate } = this.props;
    if (props.transformTemplate || transformTemplate) {
      this.scheduleRender();
    }
    if (props.transformTemplate && !transformTemplate || props.onUpdate && !onUpdate) {
      transformGroups.get(this.current)?.demote();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      this.propEventSubscriptions[key]?.();
      delete this.propEventSubscriptions[key];
      const listenerName = "on" + key;
      const listener = props[listenerName];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps || {}, this), this.prevMotionValues);
    this.handleChildMotionValue?.();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(name) {
    return this.props.variants?.[name];
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(key, value) {
    const existingValue = this.values.get(key);
    if (value !== existingValue) {
      if (existingValue)
        this.removeValue(key);
      this.bindToMotionValue(key, value);
      this.values.set(key, value);
      const latest = value.get();
      if (latest !== void 0)
        this.latestValues[key] = latest;
    }
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(key) {
    this.values.delete(key);
    this.valueSubscriptions.get(key)?.();
    this.valueSubscriptions.delete(key);
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    let value = this.props.values?.[key];
    if (value)
      return value;
    value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue ?? this.getDefaultValue?.(key), {
        owner: this
      });
      this.addValue(key, value);
    }
    return value;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(key, target) {
    let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
    if (value !== void 0 && value !== null) {
      if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
        value = parseFloat(value);
      } else if (
        /**
         * If the value as read isn't animatable (e.g. "none") but
         * the target is, derive an animatable none from the target.
         * A value is animatable if it's a number or contains a
         * number or color, which is cheaper to check than trying
         * every value type in turn.
         */
        typeof value !== "number" && !complex.test(value) && complex.test(target)
      ) {
        value = getAnimatableNone2(key, target);
      }
      this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
    }
    return isMotionValue(value) ? value.get() : value;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  on(eventName, callback) {
    return (this.events[eventName] || (this.events[eventName] = new SubscriptionManager())).add(callback);
  }
  notify(eventName, ...args) {
    this.events[eventName]?.notify(...args);
  }
  scheduleRenderMicrotask() {
    microtask.render(this.render);
  }
};

// node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
  constructor() {
    super(...arguments);
    this.KeyframeResolver = DOMKeyframesResolver;
  }
  sortInstanceNodePosition(a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    const style = props.style;
    return style ? style[key] : void 0;
  }
  removeValueFromRenderState(key, { vars, style }) {
    delete vars[key];
    delete style[key];
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const { children } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", (latest) => {
        if (this.current) {
          this.current.textContent = `${latest}`;
        }
      });
    }
  }
};

// node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
  const elementStyle = element.style;
  let key;
  for (key in style) {
    elementStyle[key] = style[key];
  }
  projection?.applyProjectionStyles(elementStyle, styleProp);
  for (key in vars) {
    elementStyle.setProperty(key, vars[key]);
  }
}

// node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout: layout2, layoutId }) {
  return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
  const style = props.style;
  const prevStyle = prevProps?.style;
  const newValues = {};
  if (!style)
    return newValues;
  for (const key in style) {
    if (isMotionValue(style[key]) || prevStyle && isMotionValue(prevStyle[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== void 0) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "html";
    this.renderInstance = renderHTML;
  }
  mount(instance) {
    process.env.NODE_ENV !== "production" && invariant(Boolean(instance.style), "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref");
    super.mount(instance);
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      return this.projection?.isProjecting ? defaultTransformValue(key) : readTransformValue(instance, key);
    } else {
      const computedStyle = getComputedStyle2(instance);
      const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, { transformPagePoint }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, props) {
    buildHTMLStyles(renderState, latestValues, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps(props, prevProps, visualElement);
  }
};

// node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
var isPrimaryPointer = (event) => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};

// node_modules/motion-dom/dist/es/events/event-info.mjs
function extractEventInfo(event) {
  return {
    point: {
      x: event.pageX,
      y: event.pageY
    }
  };
}
var addPointerInfo = (handler) => (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));

// node_modules/motion-dom/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

// node_modules/motion-dom/dist/es/resize/handle-element.mjs
var resizeHandlers = /* @__PURE__ */ new WeakMap();
var observer;
var getSize = (borderBoxAxis, svgAxis, htmlAxis) => (target, borderBoxSize) => {
  if (borderBoxSize && borderBoxSize[0]) {
    return borderBoxSize[0][borderBoxAxis + "Size"];
  } else if (isSVGElement(target) && "getBBox" in target) {
    return target.getBBox()[svgAxis];
  } else {
    return target[htmlAxis];
  }
};
var getWidth = /* @__PURE__ */ getSize("inline", "width", "offsetWidth");
var getHeight = /* @__PURE__ */ getSize("block", "height", "offsetHeight");
function notifyTarget({ target, borderBoxSize }) {
  resizeHandlers.get(target)?.forEach((handler) => {
    handler(target, {
      get width() {
        return getWidth(target, borderBoxSize);
      },
      get height() {
        return getHeight(target, borderBoxSize);
      }
    });
  });
}
function notifyAll(entries) {
  entries.forEach(notifyTarget);
}
function createResizeObserver() {
  if (typeof ResizeObserver === "undefined")
    return;
  observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
  if (!observer)
    createResizeObserver();
  const elements = resolveElements(target);
  elements.forEach((element) => {
    let elementHandlers = resizeHandlers.get(element);
    if (!elementHandlers) {
      elementHandlers = /* @__PURE__ */ new Set();
      resizeHandlers.set(element, elementHandlers);
    }
    elementHandlers.add(handler);
    observer?.observe(element);
  });
  return () => {
    elements.forEach((element) => {
      const elementHandlers = resizeHandlers.get(element);
      elementHandlers?.delete(handler);
      if (!elementHandlers?.size) {
        observer?.unobserve(element);
      }
    });
  };
}

// node_modules/motion-dom/dist/es/resize/handle-window.mjs
var windowCallbacks = /* @__PURE__ */ new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
  windowResizeHandler = () => {
    const info = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    windowCallbacks.forEach((callback) => callback(info));
  };
  window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
  windowCallbacks.add(callback);
  if (!windowResizeHandler)
    createWindowResizeHandler();
  return () => {
    windowCallbacks.delete(callback);
    if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
      window.removeEventListener("resize", windowResizeHandler);
      windowResizeHandler = void 0;
    }
  };
}

// node_modules/motion-dom/dist/es/resize/index.mjs
function resize(a, b) {
  return addToScope(typeof a === "function" ? resizeWindow(a) : resizeElement(a, b));
}

// node_modules/motion-dom/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

// node_modules/motion-dom/dist/es/gestures/pan/PanSession.mjs
var overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]);
var PanSession = class {
  constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element, immediate } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.lastRawMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.scrollPositions = /* @__PURE__ */ new Map();
    this.onElementScroll = (event2) => {
      this.handleScroll(event2.target);
    };
    this.onWindowScroll = () => {
      this.handleScroll(window);
    };
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.hasPendingMove = false;
      if (this.lastRawMoveEventInfo) {
        this.lastMoveEventInfo = transformPoint(this.lastRawMoveEventInfo, this.transformPagePoint);
      }
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point2 } = info2;
      this.history.push({ ...point2, timestamp: time.now() });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart?.(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove?.(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.handleScroll(window);
      this.lastMoveEvent = event2;
      this.lastRawMoveEventInfo = info2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      this.hasPendingMove = true;
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.hasPendingMove && this.updatePoint();
      this.end();
      const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
      if (this.dragSnapToOrigin || !this.startEvent) {
        resumeAnimation?.();
      }
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      this.startEvent && onEnd?.(event2, panInfo);
      onSessionEnd?.(event2, panInfo);
    };
    if (!isPrimaryPointer(event))
      return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.distanceThreshold = immediate ? 0 : distanceThreshold;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point } = initialInfo;
    this.history = [{ ...point, timestamp: time.now() }];
    const { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    const eventOptions = { passive: true, capture: true };
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove, eventOptions), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp, eventOptions), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp, eventOptions));
    if (element) {
      this.startScrollTracking(element);
    }
    if (immediate) {
      this.handlePointerMove(event, info);
      this.updatePoint();
    }
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(element) {
    let current = element.parentElement;
    while (current) {
      const style = getComputedStyle(current);
      if (overflowStyles.has(style.overflowX) || overflowStyles.has(style.overflowY)) {
        this.scrollPositions.set(current, getScroll(current));
      }
      current = current.parentElement;
    }
    this.scrollPositions.set(window, getScroll(window));
    this.removeScrollListeners = pipe(
      // Capture listener catches element scroll events as they bubble
      addDomEvent(window, "scroll", this.onElementScroll, {
        capture: true
      }),
      // Direct window scroll listener (window scroll doesn't bubble)
      addDomEvent(window, "scroll", this.onWindowScroll, {})
    );
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(target) {
    const initial = this.scrollPositions.get(target);
    if (!initial)
      return;
    const isWindow = target === window;
    const current = getScroll(target);
    const delta = { x: current.x - initial.x, y: current.y - initial.y };
    if (delta.x === 0 && delta.y === 0)
      return;
    if (isWindow) {
      if (this.lastMoveEventInfo) {
        this.lastMoveEventInfo.point.x += delta.x;
        this.lastMoveEventInfo.point.y += delta.y;
      }
    } else {
      if (this.history.length > 0) {
        this.history[0].x -= delta.x;
        this.history[0].y -= delta.y;
      }
    }
    this.scrollPositions.set(target, current);
    frame.update(this.updatePoint, true);
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners?.();
    this.removeScrollListeners?.();
    this.scrollPositions.clear();
    cancelFrame(this.updatePoint);
  }
};
var getScroll = (target) => target === window ? { x: window.scrollX, y: window.scrollY } : {
  x: target.scrollLeft,
  y: target.scrollTop
};
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta) * 2) {
    timestampedPoint = history[1];
  }
  const seconds = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (seconds === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / seconds,
    y: (lastPoint.y - timestampedPoint.y) / seconds
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
var keyboardAccessibleElements = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function isElementKeyboardAccessible(element) {
  return keyboardAccessibleElements.has(element.tagName) || element.isContentEditable === true;
}
var textInputElements = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function isElementTextInput(element) {
  return textInputElements.has(element.tagName) || element.isContentEditable === true;
}

// node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var isDragging = {
  x: false,
  y: false
};
function isDragActive() {
  return isDragging.x || isDragging.y;
}

// node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function setDragLock(axis) {
  if (axis === "x" || axis === "y") {
    if (isDragging[axis]) {
      return null;
    } else {
      isDragging[axis] = true;
      return () => {
        isDragging[axis] = false;
      };
    }
  } else {
    if (isDragging.x || isDragging.y) {
      return null;
    } else {
      isDragging.x = isDragging.y = true;
      return () => {
        isDragging.x = isDragging.y = false;
      };
    }
  }
}

// node_modules/motion-dom/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point, { min, max }, elastic) {
  if (min !== void 0 && point < min) {
    point = elastic ? mixNumber(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== void 0 && point > max) {
    point = elastic ? mixNumber(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

// node_modules/motion-dom/dist/es/gestures/drag/VisualElementDragControls.mjs
function measureScroll(projection) {
  let key = "";
  for (const node of projection.path) {
    node.scroll = void 0;
    node.updateScroll();
    const { scroll } = node;
    if (node !== projection.root && scroll) {
      key += scroll.offset.x + "," + scroll.offset.y + ",";
    }
  }
  return key;
}
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
  constructor(visualElement, readProps = () => visualElement.getProps()) {
    this.openDragLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.latestPointerEvent = null;
    this.latestPanInfo = null;
    this.visualElement = visualElement;
    this.readProps = readProps;
  }
  start(originEvent, options = {}) {
    if (this.visualElement.presenceContext?.isPresent === false)
      return;
    const onSessionStart = (event) => {
      if (options.snapToCursor)
        this.snapToCursor(event);
      this.stopAnimation();
    };
    const onStart = (event, info) => {
      const { drag: drag2, dragConstraints, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation) {
        this.openDragLock?.();
        this.openDragLock = setDragLock(drag2);
        if (!this.openDragLock)
          return;
      }
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      const { projection } = this.visualElement;
      if (projection) {
        projection.isAnimationBlocked = true;
        projection.target = void 0;
      }
      eachAxis((axis) => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (isCSSVariableToken(current)) {
          current = getVariableValue(current, this.visualElement.current) || 0;
        }
        if (px.test(current)) {
          current = parseFloat(current);
        } else if (percent.test(current)) {
          const measuredAxis = projection?.layout?.layoutBox[axis];
          if (measuredAxis) {
            current = calcLength(measuredAxis) * (parseFloat(current) / 100);
          }
        }
        this.originPoint[axis] = current;
      });
      this.point = typeof dragConstraints === "function" && dragConstraints(this);
      if (onDragStart) {
        frame.update(() => onDragStart(event, info), false, true);
      }
      addValueToWillChange(this.visualElement, "transform");
      this.visualElement.animationState?.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openDragLock)
        return;
      const { offset } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection === null)
          return;
        onDirectionLock && onDirectionLock(this.currentDirection);
      }
      this.updateAxis("x", offset);
      this.updateAxis("y", offset);
      this.point && this.point.move();
      this.visualElement.render();
      if (onDrag) {
        frame.update(() => onDrag(event, info), false, true);
      }
    };
    const onSessionEnd = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.stop(event, info);
      this.latestPointerEvent = null;
      this.latestPanInfo = null;
    };
    const resumeAnimation = () => {
      const { dragSnapToOrigin: snap } = this.getProps();
      if (snap || this.constraints || this.point) {
        this.startAnimation({ x: 0, y: 0 });
      }
    };
    const { dragSnapToOrigin } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      ...options,
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      contextWindow: this.visualElement.current?.ownerDocument.defaultView,
      element: this.visualElement.current
    });
  }
  /**
   * @param dragAxes - The axes to animate on release, if not the `drag`
   * prop's, e.g. when drag was disabled mid-gesture.
   */
  stop(event, panInfo, dragAxes) {
    const finalEvent = event || this.latestPointerEvent;
    const finalPanInfo = panInfo || this.latestPanInfo;
    const isDragging2 = this.isDragging;
    this.cancel();
    if (!isDragging2 || !finalPanInfo || !finalEvent)
      return;
    const { velocity } = finalPanInfo;
    this.startAnimation(velocity, dragAxes);
    const { onDragEnd } = this.getProps();
    if (onDragEnd) {
      frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
    }
  }
  cancel() {
    this.isDragging = false;
    const { projection, animationState } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.endPanSession();
    if (!this.getProps().dragPropagation && this.openDragLock) {
      this.openDragLock();
      this.openDragLock = null;
    }
    animationState?.setActive("whileDrag", false);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   */
  endPanSession() {
    this.panSession?.end();
    this.panSession = void 0;
  }
  updateAxis(axis, offset) {
    const { drag: drag2 } = this.readProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    const constraints = this.constraints && this.constraints[axis];
    if (constraints) {
      next = applyConstraints(next, constraints, this.elastic[axis]);
    }
    this.point ? this.point[axis] = next : axisValue.set(next);
  }
  resolveConstraints() {
    const { dragConstraints, dragElastic } = this.getProps();
    const { projection } = this.visualElement;
    const layout2 = projection && (projection.layout || projection.measure(false));
    const prevConstraints = this.constraints;
    if (isElementConstraints(dragConstraints)) {
      if (!this.constraints || this.scroll !== measureScroll(projection)) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2 && typeof dragConstraints === "object") {
        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && !isElementConstraints(dragConstraints) && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.constraints !== false && this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!isElementConstraints(constraints))
      return false;
    const constraintsElement = resolveConstraintsElement(constraints);
    process.env.NODE_ENV !== "production" && invariant(!!constraintsElement, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    this.scroll = measureScroll(projection);
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, projection.removeElementScroll(constraintsBox));
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity, dragAxes) {
    const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const options = {
      bounceStiffness: dragElastic ? 200 : 1e6,
      bounceDamping: dragElastic ? 40 : 1e7,
      timeConstant: 750,
      restDelta: 1,
      restSpeed: 10,
      ...dragTransition
    };
    const axisVelocity = (axis) => dragMomentum && !(this.point && dragSnapToOrigin) && shouldDrag(axis, dragAxes || drag2, this.currentDirection) ? velocity[axis] : 0;
    if (this.point && !dragSnapToOrigin) {
      return this.point.release({ x: axisVelocity("x"), y: axisVelocity("y") }, options).then(onDragTransitionEnd);
    }
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      if (!shouldDrag(axis, dragAxes || drag2, this.currentDirection)) {
        return;
      }
      let transition = constraints[axis] || {};
      if (dragSnapToOrigin === true || dragSnapToOrigin === axis)
        transition = { min: 0, max: 0 };
      const inertia2 = {
        type: "inertia",
        velocity: axisVelocity(axis),
        ...options,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    addValueToWillChange(this.visualElement, axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(axis) {
    const dragKey = `_drag${axis.toUpperCase()}`;
    const props = this.readProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, this.visualElement.latestValues[axis] ?? 0);
  }
  /**
   * Measure the live box - projection.layout may or may not include the
   * drag transform, depending on when it was measured.
   */
  snapToCursor({ clientX, clientY }) {
    const { drag: drag2 } = this.getProps();
    const point = { x: clientX, y: clientY };
    const cursor = this.visualElement.getTransformPagePoint()?.(point) || point;
    const box = this.visualElement.measureViewportBox();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min, max } = box[axis];
      axisValue.set((axisValue.get() || 0) + cursor[axis] - mixNumber(min, max, 0.5));
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: drag2, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isElementConstraints(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const constraints = this.constraints;
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const latest = this.getAxisMotionValue(axis).get();
      boxProgress[axis] = calcOrigin({ min: latest, max: latest }, constraints[axis]);
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root?.updateScroll();
    projection.updateLayout();
    this.constraints = false;
    this.resolveConstraints();
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (!shouldDrag(axis, drag2, null) || !axisValue.get())
        return;
      const { min, max } = this.constraints[axis];
      axisValue.set(mixNumber(min, max, boxProgress[axis]));
    });
    this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag: drag2, dragListener = true } = this.getProps();
      const target = event.target;
      const isClickingTextInputChild = target !== element && isElementTextInput(target);
      if (drag2 && dragListener && !isClickingTextInputChild) {
        this.start(event);
      }
    });
    let stopResizeObservers;
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      const constraintsElement = isElementConstraints(dragConstraints) && resolveConstraintsElement(dragConstraints);
      if (constraintsElement) {
        this.constraints = this.resolveRefConstraints();
        if (!stopResizeObservers) {
          stopResizeObservers = startResizeObservers(element, constraintsElement, () => this.scalePositionWithinConstraints());
        }
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (!projection.layout) {
      projection.root?.updateScroll();
      projection.updateLayout();
    }
    frame.read(measureDragConstraints);
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          if (!shouldDrag(axis, this.getProps().drag, this.currentDirection))
            return;
          const motionValue2 = this.getAxisMotionValue(axis);
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    }));
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener();
      stopResizeObservers?.();
    };
  }
  getProps() {
    const props = this.readProps();
    const { dragElastic = defaultElastic, dragMomentum = true } = props;
    return { ...props, dragElastic, dragMomentum };
  }
};
function isElementConstraints(constraints) {
  return !!constraints && typeof constraints === "object" && ("current" in constraints || "nodeType" in constraints);
}
var resolveConstraintsElement = (constraints) => "current" in constraints ? constraints.current : constraints;
function skipFirstCall(callback) {
  let isFirst = true;
  return () => {
    if (isFirst) {
      isFirst = false;
      return;
    }
    callback();
  };
}
function startResizeObservers(element, constraintsElement, onResize) {
  const stopElement = resize(element, skipFirstCall(onResize));
  const stopContainer = resize(constraintsElement, skipFirstCall(onResize));
  return () => {
    stopElement();
    stopContainer();
  };
}
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function setupGesture(elementOrSelector, options) {
  const elements = resolveElements(elementOrSelector);
  const gestureAbortController = new AbortController();
  const eventOptions = {
    passive: true,
    ...options,
    signal: gestureAbortController.signal
  };
  const cancel = addToScope(() => gestureAbortController.abort());
  return [elements, eventOptions, cancel];
}

// node_modules/motion-dom/dist/es/gestures/hover.mjs
function isValidHover(event) {
  return !(event.pointerType === "touch" || isDragActive());
}
function hover(elementOrSelector, onHoverStart, options = {}) {
  onHoverStart = bindToScope(onHoverStart);
  const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
  elements.forEach((element) => {
    let isPressed = false;
    let deferredHoverEnd = false;
    let hoverEndCallback;
    const removePointerLeave = () => {
      element.removeEventListener("pointerleave", onPointerLeave);
    };
    const endHover = (event) => {
      if (hoverEndCallback) {
        hoverEndCallback(event);
        hoverEndCallback = void 0;
      }
      removePointerLeave();
    };
    const onPointerUp = (event) => {
      isPressed = false;
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      if (deferredHoverEnd) {
        deferredHoverEnd = false;
        endHover(event);
      }
    };
    const onPointerDown = () => {
      isPressed = true;
      window.addEventListener("pointerup", onPointerUp, eventOptions);
      window.addEventListener("pointercancel", onPointerUp, eventOptions);
    };
    const onPointerLeave = (leaveEvent) => {
      if (leaveEvent.pointerType === "touch")
        return;
      if (isPressed) {
        deferredHoverEnd = true;
        return;
      }
      endHover(leaveEvent);
    };
    const onPointerEnter = (enterEvent) => {
      if (!isValidHover(enterEvent))
        return;
      deferredHoverEnd = false;
      const onHoverEnd = onHoverStart(element, enterEvent);
      if (typeof onHoverEnd !== "function")
        return;
      hoverEndCallback = onHoverEnd;
      element.addEventListener("pointerleave", onPointerLeave, eventOptions);
    };
    element.addEventListener("pointerenter", onPointerEnter, eventOptions);
    element.addEventListener("pointerdown", onPointerDown, eventOptions);
  });
  return cancel;
}

// node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var isPressing = /* @__PURE__ */ new WeakSet();

// node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function filterEvents(callback) {
  return (event) => {
    if (event.key !== "Enter")
      return;
    callback(event);
  };
}
function firePointerEvent(target, type) {
  target.dispatchEvent(new PointerEvent("pointer" + type, { isPrimary: true, bubbles: true }));
}
var enableKeyboardPress = (element, eventOptions) => {
  let isKeyPressing = false;
  const handleKeydown = filterEvents(() => {
    if (isKeyPressing || isPressing.has(element))
      return;
    isKeyPressing = true;
    firePointerEvent(element, "down");
  });
  const handleKeyup = filterEvents(() => {
    if (!isKeyPressing)
      return;
    isKeyPressing = false;
    firePointerEvent(element, "up");
  });
  element.addEventListener("keydown", handleKeydown, eventOptions);
  element.addEventListener("keyup", handleKeyup, eventOptions);
  element.addEventListener("blur", () => {
    element.removeEventListener("keydown", handleKeydown);
    element.removeEventListener("keyup", handleKeyup);
    if (isKeyPressing)
      firePointerEvent(element, "cancel");
  }, { ...eventOptions, once: true });
};

// node_modules/motion-dom/dist/es/gestures/press/index.mjs
function isValidPressEvent(event) {
  return isPrimaryPointer(event) && !isDragActive();
}
var claimedPointerDownEvents = /* @__PURE__ */ new WeakSet();
var sequenceSlop = 100;
var holdSlop = 8;
var exceeds = (a, b, max) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY) > max;
var preventDefault = (event) => event.preventDefault();
function press(targetOrSelector, onPressStart, options = {}) {
  onPressStart = bindToScope(onPressStart);
  const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options);
  const sequences = /* @__PURE__ */ new WeakMap();
  const startPress = (startEvent) => {
    const target = startEvent.currentTarget;
    if (!isValidPressEvent(startEvent))
      return;
    if (claimedPointerDownEvents.has(startEvent))
      return;
    if (options.stopPropagation) {
      claimedPointerDownEvents.add(startEvent);
    }
    const { count: presses = 1, countTimeout = 0.3, hold = 0, repeat } = options;
    const downTime = time.now();
    const holdTime = secondsToMilliseconds(hold);
    const timeout = secondsToMilliseconds(countTimeout);
    let previous = sequences.get(target);
    if (previous?.expire(exceeds(previous.event, startEvent, sequenceSlop))) {
      previous = void 0;
    } else if (previous) {
      cancelFrame(previous.expire);
      sequences.delete(target);
    }
    const count = previous ? previous.count + 1 : 1;
    const isFinal = count >= presses;
    const isHeld = isFinal && (hold || repeat);
    let isActive = !hold;
    let repeats = 0;
    let handlers;
    isPressing.add(target);
    if (previous) {
      handlers = previous.handlers;
    } else {
      const result = onPressStart(target, startEvent);
      handlers = typeof result === "function" ? { onComplete: result } : result || {};
    }
    isFinal && isActive && handlers.onActive?.();
    const repeatTime = secondsToMilliseconds(repeat);
    let length = holdTime || repeatTime;
    let cycleEnd = downTime + length;
    let isCycleStart = true;
    const tick = () => {
      if (eventOptions.signal.aborted)
        return cancelFrame(tick);
      let progress2 = Math.min(1 - (cycleEnd - time.now()) / length, 1);
      if (isCycleStart && progress2 < 1)
        progress2 = 0;
      isCycleStart = false;
      handlers.onHold?.(progress2);
      if (progress2 < 1)
        return;
      if (isActive) {
        handlers.onRepeat?.(++repeats);
      } else {
        isActive = true;
        handlers.onActive?.();
      }
      if (repeat) {
        isCycleStart = true;
        cycleEnd += length = repeatTime;
      } else {
        cancelFrame(tick);
      }
    };
    const endEventOptions = { ...eventOptions, capture: true };
    const onPointerEnd = (endEvent, success) => {
      if (!isPrimaryPointer(endEvent))
        return;
      window.removeEventListener("pointerup", onPointerUp, endEventOptions);
      window.removeEventListener("pointercancel", onPointerCancel, endEventOptions);
      window.removeEventListener("pointermove", onPointerMove, endEventOptions);
      target.removeEventListener("contextmenu", preventDefault);
      cancelFrame(tick);
      isPressing.delete(target);
      if (isDragActive())
        success = false;
      if (success && !isFinal) {
        const end = time.now();
        const expire = (force) => {
          const isAborted = eventOptions.signal.aborted;
          if (isAborted || force === true || time.now() - end > timeout) {
            cancelFrame(expire);
            sequences.delete(target);
            isAborted || handlers.onComplete?.(endEvent, { success: false });
            return true;
          }
        };
        sequences.set(target, {
          count,
          event: startEvent,
          handlers,
          expire
        });
        frame.update(expire, true);
      } else {
        handlers.onComplete?.(endEvent, {
          success: success && isActive
        });
      }
    };
    const onPointerUp = (upEvent) => {
      onPointerEnd(upEvent, target === window || target === document || options.useGlobalTarget || isNodeOrChild(target, upEvent.target));
    };
    const onPointerCancel = (cancelEvent) => {
      onPointerEnd(cancelEvent, false);
    };
    const onPointerMove = (moveEvent) => {
      if (isPrimaryPointer(moveEvent) && ((repeat || !isActive) && exceeds(startEvent, moveEvent, holdSlop) || presses > 1 && isDragActive())) {
        onPointerCancel(moveEvent);
      }
    };
    window.addEventListener("pointerup", onPointerUp, endEventOptions);
    window.addEventListener("pointercancel", onPointerCancel, endEventOptions);
    if (isHeld || presses > 1) {
      window.addEventListener("pointermove", onPointerMove, endEventOptions);
    }
    if (isHeld) {
      frame.update(tick, true);
      target.addEventListener("contextmenu", preventDefault, {
        ...eventOptions,
        passive: false
      });
    }
  };
  targets.forEach((target) => {
    const pointerDownTarget = options.useGlobalTarget ? window : target;
    pointerDownTarget.addEventListener("pointerdown", startPress, eventOptions);
    if (isHTMLElement(target)) {
      target.addEventListener("focus", () => enableKeyboardPress(target, eventOptions), eventOptions);
      if (!isElementKeyboardAccessible(target) && !target.hasAttribute("tabindex")) {
        target.tabIndex = 0;
      }
    }
  });
  return cancelEvents;
}

// node_modules/motion-dom/dist/es/render/Feature.mjs
var Feature = class {
  constructor(node) {
    this.isMounted = false;
    this.node = node;
  }
  update() {
  }
};

// node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);

// node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

// node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props, prevProps, visualElement) {
  const newValues = scrapeMotionValuesFromProps(props, prevProps, visualElement);
  for (const key in props) {
    if (key !== "children" && (isMotionValue(props[key]) || isMotionValue(prevProps[key]))) {
      const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "svg";
    this.isSVGTag = false;
    this.measureInstanceViewportBox = createBox;
  }
  getBaseTargetFromProps(props, key) {
    return transformProps.has(key) ? super.getBaseTargetFromProps(props, key) ?? defaultTransformValue(key) : props[key];
  }
  /**
   * An independent transform's origin is never read from the DOM, so it
   * starts from its latest or default value and renders on mount.
   */
  getDefaultValue(key) {
    return transformProps.has(key) ? this.latestValues[key] ?? defaultTransformValue(key) : void 0;
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    }
    if (cssStyleProperties.includes(key)) {
      const computedStyle = getComputedStyle(instance);
      const value = computedStyle[key];
      if (typeof value === "string" && value)
        return value.trim();
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps2(props, prevProps, visualElement);
  }
  build(renderState, latestValues, props) {
    buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
};

// node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  const prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}

// node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var getOutTransition = (transition) => transition?.out === true ? transition : transition?.out;
function createAnimationState(visualElement) {
  let animate = (animations2) => Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
  let state = createState();
  let isInitialRender = true;
  let wasReset = false;
  function animateChanges(changedActiveType) {
    const { props, parent, manuallyAnimateOnMount } = visualElement;
    const { initial } = props;
    const isMounting = isInitialRender || wasReset;
    const animations2 = [];
    const resolveInitial = (definition = initial) => typeof definition !== "boolean" && resolveVariant(visualElement, Array.isArray(definition) ? definition[0] : definition, visualElement.presenceContext?.custom) || void 0;
    const removedKeys = /* @__PURE__ */ new Map();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    let source = visualElement;
    do
      source = source.props.inherit !== false && source.parent;
    while (source && !source.isControllingVariants);
    const initialOut = isMounting && getOutTransition(resolveInitial(initial ?? (source && source.props.initial))?.transition);
    reversePriorityOrder.forEach((type, i) => {
      const typeState = state[type];
      const ownProp = props[type];
      const inheritedProp = source && source.props[type];
      const prop = ownProp !== void 0 ? ownProp : isVariantLabel(inheritedProp) || inheritedProp === false ? inheritedProp : void 0;
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      const isInherited = propIsVariant && ownProp === void 0 && !(isMounting && manuallyAnimateOnMount);
      typeState.protectedKeys = { ...encounteredKeys };
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        return;
      }
      if (activeDelta === false)
        removedVariantIndex = i;
      if (type === "exit" && typeState.isActive && activeDelta !== true) {
        encounteredKeys = {
          ...encounteredKeys,
          ...typeState.prevResolvedValues
        };
        return;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || propIsVariant && (activeDelta && !isInherited || i > removedVariantIndex);
      let handledRemovedValues = false;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = {};
      let out;
      if (activeDelta !== false) {
        for (const definition of definitionList) {
          const { transition, transitionEnd, ...target } = resolveVariant(visualElement, definition, getTypeCustom(visualElement, type)) || {};
          resolvedValues = {
            ...resolvedValues,
            ...target,
            ...transitionEnd
          };
          out = getOutTransition(transition) || out;
        }
      }
      const { prevResolvedValues } = typeState;
      for (const key in { ...prevResolvedValues, ...resolvedValues }) {
        if (key in encounteredKeys)
          continue;
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        const valueHasChanged = Array.isArray(next) && Array.isArray(prev) ? !shallowCompare(next, prev) || variantDidChange : next !== prev;
        let outTransition;
        if (valueHasChanged && (next === void 0 || next === null)) {
          removedKeys.has(key) || removedKeys.set(key, typeState.prevOut);
        } else if (valueHasChanged || next !== void 0 && removedKeys.has(key)) {
          shouldAnimateType = true;
          outTransition = removedKeys.get(key) || initialOut;
          if (removedKeys.delete(key))
            handledRemovedValues = true;
          typeState.needsAnimating[key] = true;
          const motionValue2 = visualElement.getValue(key);
          if (motionValue2)
            motionValue2.liveStyle = false;
        } else {
          typeState.protectedKeys[key] = true;
        }
        typeState.out[key] = outTransition;
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      typeState.prevOut = out;
      if (typeState.isActive) {
        encounteredKeys = { ...encounteredKeys, ...resolvedValues };
      }
      if (shouldAnimateType && (!(isInherited && variantDidChange) || handledRemovedValues)) {
        for (const animation of definitionList) {
          const options = { type };
          if (typeof animation === "string" && isMounting && manuallyAnimateOnMount && parent?.enteringChildren) {
            const delayChildren = resolveVariant(parent, animation)?.transition?.delayChildren;
            options.delay = calcChildStagger(parent.enteringChildren, visualElement, delayChildren);
          }
          animations2.push({ animation, options });
        }
      }
    });
    if (removedKeys.size) {
      const fallbackAnimation = {};
      const resolvedInitial = resolveInitial();
      let fallbackTransition = resolvedInitial?.transition;
      removedKeys.forEach((outTransition, key) => {
        if (outTransition) {
          fallbackTransition = {
            ...fallbackTransition || visualElement.getDefaultTransition(),
            [key]: outTransition
          };
        }
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2)
          motionValue2.liveStyle = true;
        const fromInitial = resolvedInitial && !Array.isArray(initial) ? resolvedInitial[key] : void 0;
        const fromProps = visualElement.getBaseTargetFromProps(props, key);
        fallbackAnimation[key] = (fromInitial !== void 0 ? fromInitial : fromProps !== void 0 && !isMotionValue(fromProps) ? fromProps : visualElement.initialValues[key] === void 0 ? visualElement.baseTarget[key] : void 0) ?? null;
        if (process.env.NODE_ENV !== "production" && fallbackAnimation[key] === null && visualElement.initialValues[key] !== void 0) {
          delete visualElement.initialValues[key];
          motionValue2?.stop();
          visualElement.baseTarget[key] = motionValue2?.get();
        }
      });
      if (fallbackTransition) {
        fallbackAnimation.transition = fallbackTransition;
      }
      animations2.push({ animation: fallbackAnimation });
    }
    const blockAnimation = isMounting && visualElement.blockInitialAnimation || isInitialRender && !manuallyAnimateOnMount && (props.initial === false || props.initial === props.animate);
    isInitialRender = wasReset = false;
    return !blockAnimation && animations2.length ? animate(animations2) : Promise.resolve();
  }
  function setActive(type, isActive) {
    if (state[type].isActive === isActive)
      return Promise.resolve();
    visualElement.variantChildren?.forEach((child) => child.animationState?.setActive(type, isActive));
    state[type].isActive = isActive;
    const animations2 = animateChanges(type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    /**
     * Allows tests to inject a mocked animate function.
     * @internal
     */
    setAnimateFunction: (makeAnimator) => {
      animate = makeAnimator(visualElement);
    },
    getState: () => state,
    reset: () => {
      state = createState();
      wasReset = true;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createState() {
  const state = {};
  for (const type of variantPriorityOrder) {
    state[type] = {
      isActive: type === "animate",
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
      out: {}
    };
  }
  return state;
}

// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
import { createContext as createContext4 } from "react";
var MotionConfigContext = /* @__PURE__ */ createContext4({
  transformPagePoint: (p2) => p2,
  isStatic: false,
  reducedMotion: "never"
});

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
import { useContext as useContext2, useId, useEffect as useEffect2, useCallback } from "react";
function usePresence(subscribe = true) {
  const context = useContext2(PresenceContext);
  if (context === null)
    return [true, null];
  const { isPresent, onExitComplete, register } = context;
  const id3 = useId();
  useEffect2(() => {
    if (subscribe) {
      return register(id3);
    }
  }, [subscribe]);
  const safeToRemove = useCallback(() => subscribe && onExitComplete && onExitComplete(id3), [id3, onExitComplete, subscribe]);
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

// node_modules/framer-motion/dist/es/context/LazyContext.mjs
import { createContext as createContext5 } from "react";
var LazyContext = /* @__PURE__ */ createContext5({
  strict: false
});

// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
  animation: ["variants", ...variantPriorityOrder],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
var isInitialized = false;
function initFeatureDefinitions() {
  if (isInitialized)
    return;
  const initialFeatureDefinitions = {};
  for (const key in featureProps) {
    initialFeatureDefinitions[key] = {
      isEnabled: (props) => featureProps[key].some((name) => !!props[name])
    };
  }
  setFeatureDefinitions(initialFeatureDefinitions);
  isInitialized = true;
}
function getInitializedFeatureDefinitions() {
  initFeatureDefinitions();
  return getFeatureDefinitions();
}

// node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
  const featureDefinitions2 = getInitializedFeatureDefinitions();
  for (const key in features) {
    featureDefinitions2[key] = {
      ...featureDefinitions2[key],
      ...features[key]
    };
  }
  setFeatureDefinitions(featureDefinitions2);
}

// node_modules/framer-motion/dist/es/motion/index.mjs
import { jsxs as jsxs3, jsx as jsx3 } from "react/jsx-runtime";
import { forwardRef as forwardRef3, useContext as useContext6 } from "react";

// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
import { createContext as createContext6 } from "react";
var MotionContext = /* @__PURE__ */ createContext6({});

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
import { useContext as useContext3, useMemo as useMemo2 } from "react";

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const { initial, animate } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate) ? animate : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
  const { initial, animate } = getCurrentTreeVariants(props, useContext3(MotionContext));
  return useMemo2(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
import { Fragment as Fragment2, useMemo as useMemo5, createElement as createElement4 } from "react";

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
import { useMemo as useMemo3 } from "react";

// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
  return useMemo3(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState));
  return style;
}
function useHTMLProps(props, visualState) {
  const htmlProps = {};
  const style = useStyle(props, visualState);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
import { useMemo as useMemo4 } from "react";

// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState, _isStatic, Component2) {
  const visualProps = useMemo4(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, isSVGTag(Component2), props.transformTemplate, props.style);
    return {
      ...state.attrs,
      style: { ...state.style }
    };
  }, [visualState]);
  if (props.style) {
    const style = {};
    copyRawValuesOnly(style, props.style, props);
    return { ...visualProps, style: { ...style, ...visualProps.style } };
  }
  return visualProps;
}

// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "tap",
  "propagate",
  "ignoreStrict",
  "viewport",
  "pinch"
]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
function shouldForward(key, isValidProp) {
  return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp?.(key) ?? !isValidMotionProp(key);
}
function filterProps(props, isDom, forwardMotionProps, isValidProp) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object")
      continue;
    if (isMotionValue(props[key]))
      continue;
    if (key === "fx") {
      if (props.fx)
        filteredProps.fx = "";
      continue;
    }
    if (shouldForward(key, isValidProp) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
    props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component2) {
  if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component2 !== "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    Component2.includes("-")
  ) {
    return false;
  } else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component2) > -1 || /**
     * If it contains a capital letter, it's an SVG component
     */
    /[A-Z]/u.test(Component2)
  ) {
    return true;
  }
  return false;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function useRender(Component2, props, ref, { latestValues }, isStatic, forwardMotionProps = false, isSVG, isValidProp) {
  const useVisualProps = isSVG ?? isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
  const visualProps = useVisualProps(props, latestValues, isStatic, Component2);
  const filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps, isValidProp);
  const elementProps = Component2 !== Fragment2 ? { ...filteredProps, ...visualProps, ref } : {};
  const { children } = props;
  const renderedChildren = useMemo5(() => isMotionValue(children) ? children.get() : children, [children]);
  return createElement4(Component2, {
    ...elementProps,
    children: renderedChildren
  });
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
import { useContext as useContext4 } from "react";
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3, createRenderState }, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  return state;
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0)
      initial = context.initial;
    if (animate === void 0)
      animate = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    for (let i = 0; i < list.length; i++) {
      const resolved = resolveVariantFromProps(props, list[i]);
      if (resolved) {
        const { transitionEnd, transition, ...target } = resolved;
        for (const key in target) {
          let valueTarget = target[key];
          if (Array.isArray(valueTarget)) {
            const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
            valueTarget = valueTarget[index];
          }
          if (valueTarget !== null) {
            values[key] = valueTarget;
          }
        }
        for (const key in transitionEnd) {
          values[key] = transitionEnd[key];
        }
      }
    }
  }
  return values;
}
var makeUseVisualState = (config) => (props, isStatic) => {
  const context = useContext4(MotionContext);
  const presenceContext = useContext4(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};

// node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs
var useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
  scrapeMotionValuesFromProps,
  createRenderState: createHtmlRenderState
});

// node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs
var useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
  createRenderState: createSvgRenderState
});

// node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = /* @__PURE__ */ Symbol.for("motionComponentSymbol");

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
import { useRef as useRef2, useInsertionEffect, useCallback as useCallback2 } from "react";
function useMotionRef(visualState, visualElement, externalRef) {
  const externalRefContainer = useRef2(externalRef);
  useInsertionEffect(() => {
    externalRefContainer.current = externalRef;
  });
  const refCleanup = useRef2(null);
  return useCallback2((instance) => {
    if (instance) {
      visualState.onMount?.(instance);
    }
    if (visualElement) {
      instance ? visualElement.mount(instance) : visualElement.unmount();
    }
    const ref = externalRefContainer.current;
    if (typeof ref === "function") {
      if (instance) {
        const cleanup = ref(instance);
        if (typeof cleanup === "function") {
          refCleanup.current = cleanup;
        }
      } else if (refCleanup.current) {
        refCleanup.current();
        refCleanup.current = null;
      } else {
        ref(instance);
      }
    } else if (ref) {
      ref.current = instance;
    }
  }, [visualElement]);
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
import { useContext as useContext5, useRef as useRef3, useInsertionEffect as useInsertionEffect2, useEffect as useEffect3 } from "react";

// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
import { createContext as createContext7 } from "react";
var SwitchLayoutGroupContext = /* @__PURE__ */ createContext7({});

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component2, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
  const { visualElement: parent } = useContext5(MotionContext);
  const lazyContext = useContext5(LazyContext);
  const presenceContext = useContext5(PresenceContext);
  const motionConfig = useContext5(MotionConfigContext);
  const reducedMotionConfig = motionConfig.reducedMotion;
  const skipAnimations = motionConfig.skipAnimations;
  const visualElementRef = useRef3(null);
  const hasMountedOnce = useRef3(false);
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component2, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig,
      skipAnimations,
      isSVG
    });
    if (hasMountedOnce.current && visualElementRef.current) {
      visualElementRef.current.manuallyAnimateOnMount = true;
    }
  }
  const visualElement = visualElementRef.current;
  const initialLayoutGroupConfig = useContext5(SwitchLayoutGroupContext);
  if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
    ProjectionNodeConstructor.create(visualElement, props, initialLayoutGroupConfig);
  }
  useInsertionEffect2(() => {
    if (visualElement && visualElement.props !== props) {
      visualElement.update(props, presenceContext);
    }
  });
  const optimisedAppearId = props[optimizedAppearDataAttribute];
  const wantsHandoff = useRef3(Boolean(optimisedAppearId) && typeof window !== "undefined" && !window.MotionHandoffIsComplete?.(optimisedAppearId) && window.MotionHasOptimisedAnimation?.(optimisedAppearId));
  useIsomorphicLayoutEffect(() => {
    if (!hasMountedOnce.current || !visualElement)
      return;
    visualElement.animationState?.animateChanges();
    visualElement.enteringChildren = void 0;
  }, []);
  useIsomorphicLayoutEffect(() => {
    hasMountedOnce.current = true;
    if (!visualElement)
      return;
    window.MotionIsMounted = true;
    visualElement.updateFeatures();
    visualElement.scheduleRenderMicrotask();
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  useEffect3(() => {
    if (!visualElement)
      return;
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      queueMicrotask(() => {
        window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
      });
      wantsHandoff.current = false;
    }
    visualElement.enteringChildren = void 0;
  });
  return visualElement;
}

// node_modules/framer-motion/dist/es/motion/index.mjs
function createMotionComponent(Component2, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  const isSVG = type ? type === "svg" : isSVGComponent(Component2);
  const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
  function MotionDOMComponent(props, externalRef) {
    let MeasureLayout2;
    const layoutId = useLayoutId(props);
    if (useConstant(() => !!rootProjectionNode.current?.sharedNodes.get(layoutId)?.lead && props.initial)) {
      props = { ...props, initial: false };
    }
    const configAndProps = {
      ...useContext6(MotionConfigContext),
      ...props,
      layoutId
    };
    const { isStatic, isValidProp } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState(props, isStatic);
    if (!isStatic && typeof window !== "undefined") {
      useStrictMode(configAndProps, preloadedFeatures);
      const layoutProjection = getProjectionFunctionality(configAndProps);
      context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
      if (layoutProjection.isEnabled || context.visualElement?.projection?.options.layoutId)
        MeasureLayout2 = layoutProjection.MeasureLayout;
    }
    return jsxs3(MotionContext.Provider, { value: context, children: [MeasureLayout2 && context.visualElement ? jsx3(MeasureLayout2, { visualElement: context.visualElement, ...configAndProps }) : null, useRender(Component2, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG, isValidProp)] });
  }
  MotionDOMComponent.displayName = `motion.${typeof Component2 === "string" ? Component2 : `create(${Component2.displayName ?? Component2.name ?? ""})`}`;
  const ForwardRefMotionComponent = forwardRef3(MotionDOMComponent);
  ForwardRefMotionComponent[motionComponentSymbol] = Component2;
  return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = useContext6(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
  const isStrict = useContext6(LazyContext).strict;
  if (process.env.NODE_ENV !== "production" && preloadedFeatures && isStrict) {
    const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead";
    configAndProps.ignoreStrict ? warnOnce(false, strictMessage + '. For Reorder, import it from "motion/react-m"', "lazy-strict-mode") : invariant(false, strictMessage, "lazy-strict-mode");
  }
}
function getProjectionFunctionality(props) {
  const featureDefinitions2 = getInitializedFeatureDefinitions();
  const { drag: drag2, layout: layout2 } = featureDefinitions2;
  if (!drag2 && !layout2)
    return {};
  const combined = { ...drag2, ...layout2 };
  return {
    MeasureLayout: combined.MeasureLayout,
    isEnabled: drag2?.isEnabled(props) || layout2?.isEnabled(props),
    ProjectionNode: combined.ProjectionNode
  };
}

// node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createMotionProxy(preloadedFeatures, createVisualElement) {
  if (typeof Proxy === "undefined") {
    return createMotionComponent;
  }
  const componentCache = /* @__PURE__ */ new Map();
  const factory = (Component2, options) => {
    return createMotionComponent(Component2, options, preloadedFeatures, createVisualElement);
  };
  const deprecatedFactoryFunction = (Component2, options) => {
    if (process.env.NODE_ENV !== "production") {
      warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
    }
    return factory(Component2, options);
  };
  return new Proxy(deprecatedFactoryFunction, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
      if (key === "create")
        return factory;
      if (!componentCache.has(key)) {
        componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
import { Fragment as Fragment3 } from "react";
var createDomVisualElement = (Component2, options) => {
  const isSVG = options.isSVG ?? isSVGComponent(Component2);
  return isSVG ? new SVGVisualElement(options) : new HTMLVisualElement(options, {
    allowProjection: Component2 !== Fragment3
  });
};

// node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const { animate } = this.node.getProps();
    if (isAnimationControls(animate)) {
      this.unmountControls = animate.subscribe(this.node);
    }
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    if (this.node.getProps().animate !== this.node.prevProps?.animate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
    this.node.animationState.reset();
    this.unmountControls?.();
  }
};

// node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id2 = 0;
var ExitAnimationFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.id = id2++;
  }
  update() {
    const { presenceContext, animationState } = this.node;
    if (!presenceContext || !animationState)
      return;
    const { isPresent, onExitComplete } = presenceContext;
    if (isPresent === !this.exit)
      return;
    if (isPresent) {
      if (this.exit === true) {
        const { initial } = this.node.getProps();
        if (initial && !Array.isArray(initial)) {
          const { transition, transitionEnd, ...target } = resolveVariant(this.node, initial) || {};
          for (const key in target) {
            this.node.getValue(key)?.jump(target[key]);
          }
        }
        this.node.blockInitialAnimation = false;
        animationState.reset();
        animationState.animateChanges();
      } else {
        animationState.setActive("exit", false);
      }
      this.exit = void 0;
      return;
    }
    const exit = this.exit = animationState.setActive("exit", true);
    if (onExitComplete) {
      exit.then(() => {
        if (this.exit !== exit)
          return;
        this.exit = true;
        onExitComplete(this.id);
      });
    }
  }
  mount() {
    const { register } = this.node.presenceContext || {};
    if (register) {
      this.unmount = register(this.id, this.node);
    }
    this.update();
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};

// node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const { dragControls } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  update() {
    const { dragControls, drag: drag2 } = this.node.getProps();
    const { dragControls: prevDragControls, drag: prevDrag } = this.node.prevProps || {};
    if (dragControls !== prevDragControls) {
      this.removeGroupControls();
      if (dragControls) {
        this.removeGroupControls = dragControls.subscribe(this.controls);
      }
    }
    if (prevDrag && !drag2)
      this.controls.stop(void 0, void 0, prevDrag);
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
    if (!this.controls.isDragging) {
      this.controls.endPanSession();
    }
  }
};

// node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = (handler) => (event, info) => {
  if (handler) {
    frame.update(() => handler(event, info), false, true);
  }
};
var PanGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      // Fixes https://github.com/motiondivision/motion/issues/2270
      contextWindow: this.node.current?.ownerDocument.defaultView
    });
  }
  createPanHandlers() {
    const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: asyncHandler(onPan),
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.postRender(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
  }
  update() {
    this.session?.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session?.end();
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
import { jsx as jsx4 } from "react/jsx-runtime";
import { useContext as useContext7, Component } from "react";
var hasTakenAnySnapshot = false;
var layoutOptions = ({ layout: layout2, layoutDependency, layoutAnchor }) => ({
  layout: layout2,
  layoutDependency,
  layoutAnchor,
  animationType: typeof layout2 === "string" ? layout2 : "both"
});
var switchLayoutId = (projection, layoutId) => {
  const { snapshot } = projection;
  const stack = projection.getStack();
  stack?.remove(projection);
  const lead = stack?.lead;
  if (stack?.prevLead === projection && lead.resumeFrom === projection)
    lead.resumeFrom = lead.currentAnimation = projection.resumingFrom = void 0;
  projection.options.layoutId = layoutId;
  if (!layoutId) {
    projection.needsShow = true;
    return;
  }
  projection.root.registerSharedNode(layoutId, projection);
  return () => {
    const { resumeFrom } = projection;
    if (resumeFrom?.isPresent !== false && projection.getStack().members.includes(resumeFrom)) {
      resumeFrom.hide();
      projection.resumeFrom = void 0;
      projection.snapshot = snapshot;
    }
  };
};
var MeasureLayoutWithContext = class extends Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement;
    if (projection) {
      layoutGroup.group?.add(projection);
      layoutId && switchLayoutGroup?.register?.(projection);
      if (hasTakenAnySnapshot) {
        projection.root.didUpdate();
      }
      if (projection.options.layoutId !== layoutId)
        switchLayoutId(projection, layoutId)?.();
      projection.addEventListener("animationComplete", () => this.safeToRemove());
      projection.setOptions({
        ...projection.options,
        ...layoutOptions(this.props),
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, layoutId, visualElement, drag: drag2, isPresent } = this.props;
    const { projection } = visualElement;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    this.takeOver = prevProps.layoutId !== layoutId ? (projection.willUpdate(), switchLayoutId(projection, layoutId)) : void 0;
    projection.setOptions({
      ...projection.options,
      ...layoutOptions(this.props)
    });
    hasTakenAnySnapshot = true;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          projection.getStack()?.members.length || this.safeToRemove();
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { projection } = this.props.visualElement;
    if (projection) {
      this.takeOver?.();
      projection.root.didUpdate();
      microtask.postRender(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement;
    hasTakenAnySnapshot = true;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      layoutGroup.group?.remove(projection);
      promoteContext?.deregister?.(projection);
    }
  }
  safeToRemove() {
    this.props.safeToRemove?.();
  }
  render() {
    return null;
  }
};
function MeasureLayout(props) {
  const [isPresent, safeToRemove] = usePresence();
  const layoutGroup = useContext7(LayoutGroupContext);
  return jsx4(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: useContext7(SwitchLayoutGroupContext), isPresent, safeToRemove });
}

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/gestures/hover.mjs
function handleGestureEvent(node, event, gesture, lifecycle, isRepeat) {
  const { props } = node;
  const whileKey = "while" + gesture;
  if (!isRepeat && node.animationState && props[whileKey]) {
    node.animationState.setActive(whileKey, lifecycle === "Start");
  }
  const callback = props["on" + gesture + lifecycle];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
var HoverGesture = class extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.unmount = hover(current, (_element, startEvent) => {
      handleGestureEvent(this.node, startEvent, "Hover", "Start");
      return (endEvent) => handleGestureEvent(this.node, endEvent, "Hover", "End");
    });
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/gestures/press.mjs
function handlePressEvent(node, event, lifecycle, isRepeat) {
  if (node.current instanceof HTMLButtonElement && node.current.disabled) {
    return;
  }
  handleGestureEvent(node, event, "Tap", lifecycle, isRepeat);
}
var PressGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.options = {};
  }
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.update();
    this.unmount = press(current, (_element, startEvent) => {
      handlePressEvent(this.node, startEvent, "Start");
      return {
        onComplete: (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "" : "Cancel"),
        onRepeat: () => handlePressEvent(this.node, startEvent, "", true)
      };
    }, this.options);
  }
  update() {
    const { options, node } = this;
    const { globalTapTarget, propagate, tap } = node.props;
    for (const key in options)
      delete options[key];
    Object.assign(options, tap, {
      useGlobalTarget: globalTapTarget,
      stopPropagation: propagate?.tap === false
    });
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
  some: 0,
  all: 1
};
var InViewFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport = {} } = this.node.getProps();
    const { root, margin: rootMargin, amount = "some", once } = viewport;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = (entry) => {
      const { isIntersecting } = entry;
      if (this.isInView === isIntersecting)
        return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const { onViewportEnter, onViewportLeave } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    this.stopObserver = observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined")
      return;
    const { props, prevProps } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {
    this.stopObserver?.();
    this.hasEnteredView = false;
    this.isInView = false;
  }
};
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
  return (name) => viewport[name] !== prevViewport[name];
}

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/render/components/motion/feature-bundle.mjs
var featureBundle = /* @__PURE__ */ Object.assign({}, animations, gestureAnimations, drag, layout);

// node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
var motion = /* @__PURE__ */ createMotionProxy(featureBundle, createDomVisualElement);

// src/lib/submit.ts
var SHOP_PHONE = "073 719 0821";
var SHOP_PHONE_TEL = "+27737190821";
var SHOP_EMAIL = "info@gladchemistry.com";
var SHOP_WHATSAPP = "https://wa.me/27737190821";
var isRecord = (value) => typeof value === "object" && value !== null;
async function postJson(path, payload) {
  let res;
  try {
    res = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch {
    return {
      ok: false,
      message: "We could not reach the shop \u2014 your connection may have dropped. Nothing was sent, so nothing is lost.",
      retryable: true,
      notConfigured: false
    };
  }
  const raw = await res.text();
  let body = null;
  try {
    body = raw ? JSON.parse(raw) : null;
  } catch {
    body = null;
  }
  const json = isRecord(body) ? body : null;
  if (!json) {
    return {
      ok: false,
      message: "The ordering service is not responding on this deployment (it returned no confirmation). Nothing was sent.",
      retryable: res.ok,
      notConfigured: res.status === 404 || res.ok,
      detail: `HTTP ${res.status} from ${path}`
    };
  }
  if (res.ok && json.ok === true) {
    return {
      ok: true,
      reference: typeof json.reference === "string" ? json.reference : void 0
    };
  }
  const detail = typeof json.detail === "string" ? json.detail : void 0;
  const errorCode = typeof json.error === "string" ? json.error : "";
  if (errorCode === "not_configured") {
    return {
      ok: false,
      message: typeof json.message === "string" ? json.message : "Online submission is not switched on for this deployment yet.",
      retryable: false,
      notConfigured: true,
      detail
    };
  }
  if (errorCode === "validation_failed" && isRecord(json.fields)) {
    const fields = {};
    for (const [key, value] of Object.entries(json.fields)) {
      if (typeof value === "string") fields[key] = value;
    }
    return {
      ok: false,
      message: typeof json.message === "string" ? json.message : "Please check the highlighted fields.",
      fields,
      retryable: true,
      notConfigured: false
    };
  }
  if (errorCode === "catalogue_changed") {
    return {
      ok: false,
      message: typeof json.message === "string" ? json.message : "Some items are no longer available. Please refresh the shop.",
      retryable: false,
      notConfigured: false
    };
  }
  return {
    ok: false,
    message: typeof json.message === "string" ? json.message : `The shop did not accept that (HTTP ${res.status}). Nothing was charged.`,
    retryable: res.status >= 500 || res.status === 429,
    notConfigured: false,
    detail
  };
}
var submitContact = (input) => postJson("/api/contact", input);
async function checkContactAvailability() {
  return checkAvailability("/api/contact", "onlineMessaging");
}
async function checkAvailability(path, flag) {
  try {
    const res = await fetch(path, { method: "GET", headers: { Accept: "application/json" } });
    const raw = await res.text();
    let body = null;
    try {
      body = JSON.parse(raw);
    } catch {
      body = null;
    }
    if (!isRecord(body) || body.ok !== true) return "unavailable";
    return body[flag] === true ? "live" : "offline";
  } catch {
    return "unavailable";
  }
}
function contactMailto(input) {
  const body = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone || "(none)"}`,
    `Brand: ${input.brand}`,
    `Enquiry: ${input.type === "wholesale" ? "Wholesale & bulk" : "Retail / general"}`,
    "",
    input.message
  ].join("\n");
  return `mailto:${SHOP_EMAIL}?subject=${encodeURIComponent(
    `${input.type === "wholesale" ? "Wholesale" : "Enquiry"} \u2014 ${input.name}`
  )}&body=${encodeURIComponent(body)}`;
}

// src/pages/Contact.tsx
import { Fragment as Fragment4, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var BRAND_OPTIONS = [
  "All 3 Brands",
  "Gladchemistry (Organic Personal Care)",
  "Felis be Glad (Fine Fragrances & Diffusers)",
  "Bubbles Detergents (Home & Car Care)"
];
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
var PHONE_RE = /^(?:\+27\d{9}|0\d{9})$/;
var emptyForm = () => ({
  name: "",
  email: "",
  phone: "",
  brand: BRAND_OPTIONS[0],
  type: "retail",
  message: ""
});
var fieldClass = (invalid) => `w-full px-4 py-3 rounded-xl bg-white border text-sm focus:outline-none focus:ring-2 ${invalid ? "border-rose-300 focus:ring-rose-500/30" : "border-slate-200 focus:ring-emerald-500/30"}`;
var Contact = () => {
  const [form, setForm] = useState3(emptyForm);
  const [errors, setErrors] = useState3({});
  const [failure, setFailure] = useState3(null);
  const [sending, setSending] = useState3(false);
  const [sent, setSent] = useState3(false);
  const [availability, setAvailability] = useState3(null);
  useEffect4(() => {
    let alive = true;
    void checkContactAvailability().then((state) => {
      if (alive) setAvailability(state);
    });
    return () => {
      alive = false;
    };
  }, []);
  const setField = (key) => (value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    if (failure) setFailure(null);
  };
  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!form.email.trim()) next.email = "An email address is required.";
    else if (!EMAIL_RE.test(form.email.trim())) next.email = "That email address looks incomplete.";
    if (form.phone.trim() && !PHONE_RE.test(form.phone.replace(/[\s()\-.]/g, "")))
      next.phone = "Use a 10-digit SA number, or leave it blank.";
    if (form.message.trim().length < 10)
      next.message = "Please tell us a little more (at least 10 characters).";
    return next;
  };
  const handleSubmit = async (event) => {
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
      message: form.message.trim()
    });
    setSending(false);
    if (result.ok) {
      setSent(true);
      return;
    }
    if (result.fields) setErrors(result.fields);
    setFailure(result);
  };
  const mailto = contactMailto(form);
  return /* @__PURE__ */ jsx5("div", { className: "px-4 py-10", children: /* @__PURE__ */ jsxs4("div", { className: "mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
    /* @__PURE__ */ jsx5("div", { className: "lg:col-span-5 space-y-6", children: /* @__PURE__ */ jsxs4("div", { className: "ui-card rounded-3xl p-8 space-y-6", children: [
      /* @__PURE__ */ jsxs4("div", { children: [
        /* @__PURE__ */ jsx5("span", { className: "text-xs font-bold uppercase tracking-widest text-emerald-600", children: "Get in Touch" }),
        /* @__PURE__ */ jsx5("h1", { className: "font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-1", children: "Contact & Wholesale" }),
        /* @__PURE__ */ jsx5("p", { className: "text-sm text-slate-500 mt-2 leading-relaxed", children: "Have a question about Gladchemistry, Felis be Glad, or Bubbles Detergents? Reach out for orders, stockist opportunities, or bulk pricing." })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "space-y-4 pt-2", children: [
        /* @__PURE__ */ jsxs4("div", { className: "flex items-start gap-3.5", children: [
          /* @__PURE__ */ jsx5("div", { className: "h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx5(MapPin, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs4("div", { children: [
            /* @__PURE__ */ jsx5("p", { className: "font-display font-bold text-sm text-slate-900", children: "Location" }),
            /* @__PURE__ */ jsxs4("p", { className: "text-sm text-slate-500", children: [
              "Palm Springs Shopping Mall, Shop 19",
              /* @__PURE__ */ jsx5("br", {}),
              "Springs, 1559, Gauteng"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs4("div", { className: "flex items-start gap-3.5", children: [
          /* @__PURE__ */ jsx5("div", { className: "h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx5(Mail, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs4("div", { children: [
            /* @__PURE__ */ jsx5("p", { className: "font-display font-bold text-sm text-slate-900", children: "Email" }),
            /* @__PURE__ */ jsx5(
              "a",
              {
                href: `mailto:${SHOP_EMAIL}`,
                className: "text-sm text-slate-500 hover:text-emerald-700",
                children: SHOP_EMAIL
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs4("div", { className: "flex items-start gap-3.5", children: [
          /* @__PURE__ */ jsx5("div", { className: "h-10 w-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx5(Clock, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs4("div", { children: [
            /* @__PURE__ */ jsx5("p", { className: "font-display font-bold text-sm text-slate-900", children: "Business Hours" }),
            /* @__PURE__ */ jsx5("p", { className: "text-sm text-slate-500", children: "Mon \u2013 Fri: 08:00 \u2013 17:00 | Sat: 09:00 \u2013 13:00" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs4("div", { className: "flex items-start gap-3.5", children: [
          /* @__PURE__ */ jsx5("div", { className: "h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx5(Phone, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs4("div", { children: [
            /* @__PURE__ */ jsx5("p", { className: "font-display font-bold text-sm text-slate-900", children: "Phone & WhatsApp" }),
            /* @__PURE__ */ jsx5(
              "a",
              {
                href: `tel:${SHOP_PHONE_TEL}`,
                className: "text-sm text-slate-500 hover:text-emerald-700",
                children: SHOP_PHONE
              }
            )
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx5("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsx5(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        className: "ui-card rounded-3xl p-8",
        children: sent ? /* @__PURE__ */ jsxs4("div", { className: "py-16 text-center space-y-3", children: [
          /* @__PURE__ */ jsx5("div", { className: "h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx5(CircleCheck, { className: "h-9 w-9" }) }),
          /* @__PURE__ */ jsx5("h2", { className: "font-display font-bold text-2xl text-slate-900", children: "Message delivered" }),
          /* @__PURE__ */ jsx5("p", { className: "text-sm text-slate-500 max-w-md mx-auto", children: "Gladchemistry Products has received your message and will respond to the email address you gave." }),
          /* @__PURE__ */ jsx5(
            "button",
            {
              onClick: () => {
                setSent(false);
                setForm(emptyForm());
              },
              className: "mt-4 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer",
              children: "Send Another Message"
            }
          )
        ] }) : /* @__PURE__ */ jsxs4("form", { onSubmit: handleSubmit, className: "space-y-5", noValidate: true, children: [
          availability && availability !== "live" && !failure && /* @__PURE__ */ jsxs4("div", { className: "p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-[12px] text-amber-900 space-y-2", children: [
            /* @__PURE__ */ jsxs4("div", { className: "flex gap-2.5", children: [
              /* @__PURE__ */ jsx5(TriangleExclamationPoint, { className: "h-4 w-4 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs4("div", { children: [
                /* @__PURE__ */ jsx5("p", { className: "font-bold", children: availability === "offline" ? "Online messaging is not switched on yet" : "This deployment cannot send messages" }),
                /* @__PURE__ */ jsx5("p", { className: "mt-0.5", children: "You can still write to us here and send it straight from your own email \u2014 everything below is carried across." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs4("div", { className: "flex flex-wrap gap-2 pt-1", children: [
              /* @__PURE__ */ jsx5(
                "a",
                {
                  href: mailto,
                  className: "px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold",
                  children: "Write this in my email app"
                }
              ),
              /* @__PURE__ */ jsx5(
                "a",
                {
                  href: SHOP_WHATSAPP,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold",
                  children: "WhatsApp"
                }
              ),
              /* @__PURE__ */ jsx5(
                "a",
                {
                  href: `tel:${SHOP_PHONE_TEL}`,
                  className: "px-3 py-1.5 rounded-lg bg-white border border-amber-300 font-bold",
                  children: SHOP_PHONE
                }
              )
            ] })
          ] }),
          failure && /* @__PURE__ */ jsxs4(
            "div",
            {
              className: `p-3.5 rounded-xl border text-[12px] space-y-2 ${failure.notConfigured ? "bg-amber-50 border-amber-200 text-amber-900" : "bg-rose-50 border-rose-200 text-rose-900"}`,
              children: [
                /* @__PURE__ */ jsxs4("div", { className: "flex gap-2.5", children: [
                  /* @__PURE__ */ jsx5(TriangleExclamationPoint, { className: "h-4 w-4 shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsxs4("div", { children: [
                    /* @__PURE__ */ jsx5("p", { className: "font-bold", children: failure.notConfigured ? "Online messaging is not live yet" : "Your message was not sent" }),
                    /* @__PURE__ */ jsx5("p", { className: "mt-0.5", children: failure.message })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs4("div", { className: "flex flex-wrap gap-2 pt-1", children: [
                  /* @__PURE__ */ jsx5(
                    "a",
                    {
                      href: mailto,
                      className: "px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold",
                      children: "Send by email instead"
                    }
                  ),
                  /* @__PURE__ */ jsxs4(
                    "a",
                    {
                      href: SHOP_WHATSAPP,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold inline-flex items-center gap-1",
                      children: [
                        /* @__PURE__ */ jsx5(MessageCircle, { className: "h-3.5 w-3.5" }),
                        "WhatsApp"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx5(
                    "a",
                    {
                      href: `tel:${SHOP_PHONE_TEL}`,
                      className: "px-3 py-1.5 rounded-lg bg-white border border-slate-300 font-bold",
                      children: SHOP_PHONE
                    }
                  )
                ] }),
                failure.detail && /* @__PURE__ */ jsxs4("details", { className: "text-[11px] opacity-70", children: [
                  /* @__PURE__ */ jsx5("summary", { className: "cursor-pointer", children: "Technical detail" }),
                  /* @__PURE__ */ jsx5("p", { className: "mt-1 break-words", children: failure.detail })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-2 p-1 bg-slate-100 rounded-xl w-fit", children: [
            /* @__PURE__ */ jsx5(
              "button",
              {
                type: "button",
                onClick: () => setField("type")("retail"),
                className: `px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${form.type === "retail" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`,
                "aria-pressed": form.type === "retail",
                children: "Retail / General"
              }
            ),
            /* @__PURE__ */ jsx5(
              "button",
              {
                type: "button",
                onClick: () => setField("type")("wholesale"),
                className: `px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${form.type === "wholesale" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`,
                "aria-pressed": form.type === "wholesale",
                children: "Wholesale & Bulk"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs4("div", { children: [
              /* @__PURE__ */ jsx5("label", { htmlFor: "ct-name", className: "block text-xs font-bold text-slate-700 mb-1.5", children: "Full Name" }),
              /* @__PURE__ */ jsx5(
                "input",
                {
                  id: "ct-name",
                  type: "text",
                  autoComplete: "name",
                  value: form.name,
                  onChange: (e) => setField("name")(e.target.value),
                  placeholder: "Your name",
                  className: fieldClass(Boolean(errors.name)),
                  "aria-invalid": Boolean(errors.name)
                }
              ),
              errors.name && /* @__PURE__ */ jsx5("p", { className: "mt-1 text-[11px] text-rose-600 font-medium", children: errors.name })
            ] }),
            /* @__PURE__ */ jsxs4("div", { children: [
              /* @__PURE__ */ jsx5("label", { htmlFor: "ct-email", className: "block text-xs font-bold text-slate-700 mb-1.5", children: "Email Address" }),
              /* @__PURE__ */ jsx5(
                "input",
                {
                  id: "ct-email",
                  type: "email",
                  autoComplete: "email",
                  value: form.email,
                  onChange: (e) => setField("email")(e.target.value),
                  placeholder: "you@example.com",
                  className: fieldClass(Boolean(errors.email)),
                  "aria-invalid": Boolean(errors.email)
                }
              ),
              errors.email && /* @__PURE__ */ jsx5("p", { className: "mt-1 text-[11px] text-rose-600 font-medium", children: errors.email })
            ] })
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs4("div", { children: [
              /* @__PURE__ */ jsxs4("label", { htmlFor: "ct-phone", className: "block text-xs font-bold text-slate-700 mb-1.5", children: [
                "Phone ",
                /* @__PURE__ */ jsx5("span", { className: "font-normal text-slate-400", children: "(optional)" })
              ] }),
              /* @__PURE__ */ jsx5(
                "input",
                {
                  id: "ct-phone",
                  type: "tel",
                  inputMode: "tel",
                  autoComplete: "tel",
                  value: form.phone,
                  onChange: (e) => setField("phone")(e.target.value),
                  placeholder: "073 719 0821",
                  className: fieldClass(Boolean(errors.phone)),
                  "aria-invalid": Boolean(errors.phone)
                }
              ),
              errors.phone && /* @__PURE__ */ jsx5("p", { className: "mt-1 text-[11px] text-rose-600 font-medium", children: errors.phone })
            ] }),
            /* @__PURE__ */ jsxs4("div", { children: [
              /* @__PURE__ */ jsx5("label", { htmlFor: "ct-brand", className: "block text-xs font-bold text-slate-700 mb-1.5", children: "Brand of Interest" }),
              /* @__PURE__ */ jsx5(
                "select",
                {
                  id: "ct-brand",
                  value: form.brand,
                  onChange: (e) => setField("brand")(e.target.value),
                  className: fieldClass(Boolean(errors.brand)),
                  children: BRAND_OPTIONS.map((b) => /* @__PURE__ */ jsx5("option", { value: b, children: b }, b))
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs4("div", { children: [
            /* @__PURE__ */ jsx5("label", { htmlFor: "ct-message", className: "block text-xs font-bold text-slate-700 mb-1.5", children: "Message" }),
            /* @__PURE__ */ jsx5(
              "textarea",
              {
                id: "ct-message",
                rows: 4,
                value: form.message,
                onChange: (e) => setField("message")(e.target.value),
                placeholder: "Tell us how we can help...",
                className: fieldClass(Boolean(errors.message)),
                "aria-invalid": Boolean(errors.message)
              }
            ),
            errors.message && /* @__PURE__ */ jsx5("p", { className: "mt-1 text-[11px] text-rose-600 font-medium", children: errors.message })
          ] }),
          /* @__PURE__ */ jsx5(
            "button",
            {
              type: "submit",
              disabled: sending,
              className: "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all active:scale-95 cursor-pointer disabled:opacity-70 disabled:cursor-wait",
              children: sending ? /* @__PURE__ */ jsxs4(Fragment4, { children: [
                /* @__PURE__ */ jsx5(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
                "Sending\u2026"
              ] }) : /* @__PURE__ */ jsxs4(Fragment4, { children: [
                /* @__PURE__ */ jsx5(Send, { className: "h-4 w-4" }),
                "Send Message"
              ] })
            }
          )
        ] })
      }
    ) })
  ] }) });
};

// src/data/products.ts
var p = (o) => ({
  preMessage: o.preMessage ?? "Handmade in South Africa",
  notes: o.notes,
  ...o
});
var PRODUCTS = [
  /* ---------------------------------------------------- Gladchemistry care */
  p({
    id: "gc-skin-moist-125g",
    image: "/images/products/gladchemistry-skin-moist-125g.jpg",
    name: "Skin Moist 125g",
    brand: "gladchemistry",
    category: "Skin Care",
    price: 96,
    size: "125g Tub",
    badge: "Bestseller",
    featured: true,
    preMessage: "The original formula \xB7 For dry, itchy and flaky skin",
    notes: ["Dry skin", "Eczema", "Dermatitis", "Insect bites", "Chemical burns"],
    description: "The cream Gladness formulated for her daughter's dry, itchy skin when standard creams failed \u2014 a rich body and hand emollient that calms dry, flaky and irritated skin."
  }),
  p({
    id: "gc-skin-moist-family",
    image: "/images/products/gladchemistry-skin-moist-family.jpg",
    name: "Skin Moist Family Tub",
    brand: "gladchemistry",
    category: "Skin Care",
    price: 150,
    size: "Large Tub",
    featured: true,
    preMessage: "Family size \xB7 Same formula, bigger tub",
    description: "The whole-family tub of Skin Moist, for anyone who goes through the 125g faster than they would like. Same emollient formula, sized for daily use."
  }),
  p({
    id: "gc-raw-shea-butter",
    image: "/images/products/gladchemistry-raw-shea-butter.jpg",
    name: "Raw Shea Butter 100g",
    brand: "gladchemistry",
    category: "Skin Care",
    price: 100,
    size: "100g",
    preMessage: "Unrefined \xB7 Imported from Ghana",
    notes: ["Moisturises skin & scalp", "Reduces eczema signs", "Improves hair growth", "Relieves dry skin"],
    description: "Raw, unrefined shea butter imported from Ghana. Nothing added, nothing refined out \u2014 just the butter, for skin, scalp and hair."
  }),
  p({
    id: "gc-sheacoco-hair-care",
    image: "/images/products/gladchemistry-sheacoco-hair-care.jpg",
    name: "SheaCoco Hair Care 125g",
    brand: "gladchemistry",
    category: "Hair Care",
    price: 120,
    size: "125g Tub",
    preMessage: "Shea + coconut \xB7 For receding hairlines",
    description: "A shea and coconut hair cream aimed at receding hairlines and slow growth. Massage into the scalp and leave in."
  }),
  p({
    id: "gc-hair-food",
    image: "/images/products/gladchemistry-hair-food.jpg",
    name: "Hair Food",
    brand: "gladchemistry",
    category: "Hair Care",
    price: 45,
    size: "125g Tub",
    preMessage: "Petroleum jelly base \xB7 Softens and seals",
    description: "A classic hair food with a petroleum jelly base and a light scent, for sealing in moisture and softening dry hair and scalp."
  }),
  p({
    id: "gc-hair-oil",
    image: "/images/products/gladchemistry-hair-oil.jpg",
    name: "Hair Oil",
    brand: "gladchemistry",
    category: "Hair Care",
    price: 55,
    size: "100ml",
    preMessage: "Organic blend \xB7 For beard growth and scalp health",
    description: "An organic hair oil for beard growth, scalp moisturising and flake control. Light enough to use daily."
  }),
  p({
    id: "gc-castor-oil-50",
    image: "/images/products/gladchemistry-castor-oil-50ml.jpg",
    name: "Castor Oil 50ml",
    brand: "gladchemistry",
    category: "Hair & Skin Oils",
    price: 33,
    size: "50ml",
    preMessage: "Cold pressed \xB7 Hexane free",
    description: "Pure cold-pressed, hexane-free castor oil in a handy 50ml. Thick and rich \u2014 a little goes a long way on hair, brows and lashes."
  }),
  p({
    id: "gc-castor-oil-500",
    image: "/images/products/gladchemistry-castor-oil-500ml.jpg",
    name: "Castor Oil 500ml",
    brand: "gladchemistry",
    category: "Hair & Skin Oils",
    price: 90,
    size: "500ml",
    preMessage: "Cold pressed \xB7 Hexane free",
    description: "The bulk bottle of the same cold-pressed, hexane-free castor oil. Better value if you use it regularly."
  }),
  p({
    id: "gc-skin-moist-charcoal",
    name: "Skin Moist & Charcoal Bar",
    brand: "gladchemistry",
    category: "Skin Care",
    price: 125,
    size: "Tub + 100g Bar",
    preMessage: "Combo \xB7 Acne and dark spots",
    description: "The Skin Moist tub paired with a charcoal soap bar, put together for acne-prone skin and dark spots."
  }),
  p({
    id: "gc-foam-bath-15l",
    name: "1.5L Foam Bath & 100g Bar",
    brand: "gladchemistry",
    category: "Bath & Body",
    price: 110,
    size: "1.5L + 100g",
    preMessage: "Combo \xB7 Any foam bath, any bar",
    description: "Any of the 1.5L foam baths paired with a 100g soap bar. Pick your fragrance when you order."
  }),
  p({
    id: "gc-bubble-bath-combo",
    name: "Bubble Bath & Skin Moist Combo",
    brand: "gladchemistry",
    category: "Bath & Body",
    price: 220,
    size: "5L + 125g",
    preMessage: "Combo \xB7 The full bath routine",
    description: "A 5L bubble bath with a 125g Skin Moist \u2014 the whole bath routine in one order."
  }),
  p({
    id: "gc-deobloks",
    name: "Deobloks 500g",
    brand: "gladchemistry",
    category: "Home Care",
    price: 55,
    size: "500g Tub",
    preMessage: "Refreshing deodoriser blocks",
    description: "Deodoriser blocks for toilets, drains and bins. Drop one in and it keeps the space fresh."
  }),
  p({
    id: "gc-bicarb",
    name: "Pure Bicarbonate of Soda",
    brand: "gladchemistry",
    category: "Personal Care",
    price: 55,
    size: "500g",
    preMessage: "Pharmaceutical grade \xB7 Multipurpose",
    description: "Pharmaceutical-grade bicarbonate of soda for exfoliation, bath soaks and general eco-friendly cleaning."
  }),
  p({
    id: "gc-personal-care-startup",
    name: "Personal Care Start Up",
    brand: "gladchemistry",
    category: "Starter Packs",
    price: 2600,
    size: "10 + 12 Pack",
    badge: "Wholesale",
    preMessage: "For resellers \xB7 10 of each, 12 lines",
    description: "A reseller starter pack: 10 of each of 12 skin care lines, so you can open a shelf without ordering everything individually."
  }),
  /* ------------------------------------------------- Felis be Glad scent */
  p({
    id: "felis-reed-diffuser",
    image: "/images/products/felis-reed-diffuser-real.jpg",
    name: "Signature Amber Reed Diffuser",
    brand: "felis-be-glad",
    category: "Home Diffusers",
    price: 240,
    size: "100ml + Black Reeds",
    badge: "Luxury Home",
    featured: true,
    preMessage: "12+ weeks of scent",
    description: "Hand-poured amber home fragrance oil in a square glass flacon with matte black rattan reeds. Twelve weeks or more of continuous scent."
  }),
  p({
    id: "felis-scandal-ladies",
    image: "/images/products/felis-inspired-scandal-ladies.jpg",
    name: "Inspired by Scandal Ladies",
    brand: "felis-be-glad",
    category: "Fine Fragrances",
    price: 195,
    size: "30ml Eau de Parfum",
    featured: true,
    badge: "Top Pick",
    preMessage: "Honey \xB7 Gardenia \xB7 Blood orange",
    description: "A captivating honey, gardenia and blood orange accord in a sculpted teal glass flacon."
  }),
  p({
    id: "felis-hugo-men",
    image: "/images/products/felis-inspired-hugo-men.jpg",
    name: "Inspired by Hugo Men",
    brand: "felis-be-glad",
    category: "Fine Fragrances",
    price: 260,
    size: "100ml Eau de Parfum",
    featured: true,
    preMessage: "Green apple \xB7 Sage \xB7 Cedarwood",
    description: "Crisp green apple, aromatic sage and cedarwood, built for all-day confidence."
  }),
  p({
    id: "felis-diesel-men",
    image: "/images/products/felis-inspired-diesel-men.jpg",
    name: "Inspired by Diesel Men",
    brand: "felis-be-glad",
    category: "Fine Fragrances",
    price: 195,
    size: "30ml Eau de Parfum",
    preMessage: "Grapefruit \xB7 Lavender \xB7 Amber",
    description: "A bold spicy-woody fragrance with grapefruit and lavender over warm amber."
  }),
  p({
    id: "felis-ted-lapidus-car",
    image: "/images/products/felis-inspired-ted-lapidus-car.jpg",
    name: "Inspired by Ted Lapidus Car & Roll-On",
    brand: "felis-be-glad",
    category: "Car Perfumes",
    price: 85,
    size: "15ml",
    preMessage: "Auto & travel",
    description: "A concentrated fragrance oil for the car or a roll-on for your bag. Long-lasting cabin freshness without the aerosol."
  }),
  p({
    id: "felis-fragrance-edp-20ml",
    image: "/images/products/felis-fragrances-lineup-real.jpg",
    name: "Fine Fragrance EDP 20ml",
    brand: "felis-be-glad",
    category: "Fine Fragrances",
    price: 80,
    size: "20ml Eau de Parfum",
    preMessage: "Your choice of 20 generics",
    description: "Generics of your choice of fine fragrance, in a 20ml travel size. Pick the scent you want when you order."
  }),
  p({
    id: "felis-fragrances-startup",
    image: "/images/products/felis-fragrances-lineup-real.jpg",
    name: "Fine Fragrances Business Start Up",
    brand: "felis-be-glad",
    category: "Starter Packs",
    price: 1250,
    size: "20 Piece Collection",
    badge: "Wholesale",
    preMessage: "For resellers \xB7 20-piece set",
    description: "A 20-piece collection of the fine fragrance line for resellers \u2014 enough to build a display without ordering case by case."
  }),
  /* ------------------------------------------------------- Bubbles clean */
  p({
    id: "bubbles-dishwashing-liquid",
    image: "/images/products/bubbles-dishwashing-liquid.png",
    name: "Hygiene Dishwashing Liquid",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 36,
    size: "750ml",
    featured: true,
    preMessage: "High foam \xB7 Long lasting",
    description: "Ultra-concentrated, grease-cutting dishwashing liquid that holds a thick foam and leaves a fresh lemon fragrance."
  }),
  p({
    id: "bubbles-dishwashing-2l",
    name: "Dishwashing Liquid 2L",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 82,
    size: "2L",
    preMessage: "High foam \xB7 Bulk size",
    description: "The same thick, strong dishwashing liquid in a 2L tub for kitchens that go through it fast."
  }),
  p({
    id: "bubbles-thick-bleach",
    image: "/images/products/bubbles-thick-bleach.png",
    name: "Bubbles Thick Bleach",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 42,
    size: "750ml",
    preMessage: "Clings to the surface",
    description: "A clinging thick bleach formula that kills germs and stains, whitens surfaces and handles tough toilet and drain jobs."
  }),
  p({
    id: "bubbles-pine-gel",
    image: "/images/products/bubbles-pine-gel.png",
    name: "Bubbles Pine Gel",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 65,
    size: "1kg Tub",
    preMessage: "Heavy duty \xB7 Pine fresh",
    description: "A heavy-duty pine disinfectant gel that cleans, deodorises and leaves floors shining."
  }),
  p({
    id: "bubbles-citrus-gel",
    image: "/images/products/bubbles-citrus-gel.jpg",
    name: "Bubbles Citrus Gel",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 65,
    size: "1kg Tub",
    preMessage: "Zesty citrus \xB7 500g from R52",
    description: "A zesty citrus cleaning gel for kitchens, bathrooms and high-traffic surfaces. Also available in 500g."
  }),
  p({
    id: "bubbles-citrus-pine-gel",
    image: "/images/products/bubbles-pine-gel-dishwashing.jpg",
    name: "Citrus and Pine Gel Combo",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 52,
    size: "500g + 1kg",
    preMessage: "Both gels, one price",
    description: "The citrus gel in 500g together with the pine gel, for anyone who wants both on the shelf."
  }),
  p({
    id: "bubbles-all-purpose-cleaner",
    image: "/images/products/bubbles-all-purpose-cleaner.png",
    name: "All-Purpose Cleaner",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 44,
    size: "750ml",
    preMessage: "Fresh lemon \xB7 Cuts grease",
    description: "A versatile lemon-fresh surface cleaner that cuts through grease and grime on most washable surfaces."
  }),
  p({
    id: "bubbles-multipurpose-750",
    image: "/images/products/bubbles-multipurpose-750ml.png",
    name: "Multipurpose Cleaner 750ml",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 97,
    size: "750ml",
    preMessage: "Heavy duty formulation",
    description: "A stronger multipurpose cleaning liquid for floors, tiles and general household use. Also available in 5L."
  }),
  p({
    id: "bubbles-black-dip",
    image: "/images/products/bubbles-black-dip-lineup-real.jpg",
    name: "Household Hygiene Black Dip",
    brand: "bubbles-detergents",
    category: "Home Care",
    price: 75,
    size: "1L",
    preMessage: "Drains \xB7 yards \xB7 pet areas",
    description: "An industrial-strength disinfectant fluid for drains, outdoor areas and deep sanitation. Not for use on skin."
  }),
  p({
    id: "bubbles-floor-polish-lg",
    name: "Liquid Polymer Floor Polish",
    brand: "bubbles-detergents",
    category: "Floor Care",
    price: 136,
    size: "5L",
    preMessage: "Instant shine \xB7 Polymer",
    description: "A polymer floor shine polish for instant gloss on hard floors. The larger 5L size."
  }),
  p({
    id: "bubbles-floor-polish-1l",
    name: "Liquid Polymer Floor Polish 1L",
    brand: "bubbles-detergents",
    category: "Floor Care",
    price: 66,
    size: "1L",
    preMessage: "Instant shine \xB7 Polymer",
    description: "The same polymer floor polish in a 1L for smaller spaces."
  }),
  p({
    id: "bubbles-powder-soap",
    name: "Powder Soap",
    brand: "bubbles-detergents",
    category: "Laundry",
    price: 140,
    size: "5kg \xB7 20kg R380",
    preMessage: "Bulk laundry soap \xB7 Two sizes",
    description: "Bulk washing powder soap, 5kg for R140 or 20kg for R380."
  }),
  p({
    id: "bubbles-tile-cleaner-5l",
    name: "Tile Cleaner 5L",
    brand: "bubbles-detergents",
    category: "Floor Care",
    price: 155,
    size: "5L",
    preMessage: "For all tile types",
    description: "A tile cleaner for glazed and ceramic tiles, bulk sized for larger floors."
  }),
  p({
    id: "bubbles-car-wash-wax",
    image: "/images/products/bubbles-car-wash-wax-real.jpg",
    name: "Car Wash & Wax Shampoo",
    brand: "bubbles-detergents",
    category: "Car Care",
    price: 155,
    size: "5L Jerry Can",
    featured: true,
    preMessage: "High foam \xB7 Streak free",
    description: "A high-foam, pH-balanced car shampoo with carnauba wax for a streak-free, showroom shine."
  }),
  p({
    id: "bubbles-car-interior",
    image: "/images/products/bubbles-car-tyre-real.jpg",
    name: "Car Tyre, Leather & Dash Cleaner",
    brand: "bubbles-detergents",
    category: "Car Care",
    price: 50,
    size: "1L",
    preMessage: "Tyre \xB7 leather \xB7 plastic",
    description: "For leather polishing, plastic polishing and tyre dressing in one bottle."
  }),
  p({
    id: "bubbles-detergents-startup",
    image: "/images/products/bubbles-detergents-lineup-real.jpg",
    name: "Detergents Business Start Up",
    brand: "bubbles-detergents",
    category: "Starter Packs",
    price: 1850,
    size: "10 of Each \xB7 750ml",
    badge: "Wholesale",
    preMessage: "For resellers \xB7 10 of each line",
    description: "A reseller starter pack: 10 of each of the 750ml detergents, enough stock to open a shelf."
  }),
  p({
    id: "bubbles-combo-95",
    image: "/images/products/bubbles-combo-r95.jpg",
    name: "Combo R95",
    brand: "bubbles-detergents",
    category: "Combos",
    price: 95,
    size: "3 \xD7 750ml",
    preMessage: "Dish liquid \xB7 thick bleach \xB7 multipurpose",
    description: "750ml dish liquid, 750ml thick bleach and a multipurpose cleaner, bundled."
  }),
  p({
    id: "bubbles-combo-137",
    image: "/images/products/bubbles-combo-r137.jpg",
    name: "Combo R137",
    brand: "bubbles-detergents",
    category: "Combos",
    price: 137,
    size: "4 Piece",
    preMessage: "Dish liquid \xB7 pine gel \xB7 bleach \xB7 all-purpose",
    description: "750ml dishwashing liquid, 750ml thick bleach, a 750ml pine gel and a 750ml all-purpose cleaner, bundled at R137."
  }),
  p({
    id: "bubbles-pine-gel-dishwashing",
    name: "Pine Gel & Dishwashing Liquid",
    brand: "bubbles-detergents",
    category: "Combos",
    price: 83,
    size: "750ml + 750ml",
    preMessage: "Two everyday essentials",
    description: "A 750ml dishwashing liquid with a 750ml pine gel, the two things most kitchens run out of first."
  })
];
var FEATURED = PRODUCTS.filter((x) => x.featured);
var PRODUCT_COUNT = PRODUCTS.length;
var BRAND_COUNTS = PRODUCTS.reduce((acc, x) => {
  acc[x.brand] = (acc[x.brand] ?? 0) + 1;
  return acc;
}, {});

// tests/ui.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function Harness({ page = "catalogue", productId }) {
  const products = productId ? PRODUCTS.filter((p2) => p2.id === productId) : PRODUCTS.slice(0, 6);
  return /* @__PURE__ */ jsx6(MemoryRouter, { children: page === "contact" ? /* @__PURE__ */ jsx6(Contact, {}) : page === "navbar" ? /* @__PURE__ */ jsx6(Navbar, {}) : /* @__PURE__ */ jsx6(CatalogueList, { products: products.length ? products : PRODUCTS.slice(0, 6) }) });
}
export {
  Harness
};
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/chevron-down.mjs:
lucide-react/dist/esm/icons/circle-check.mjs:
lucide-react/dist/esm/icons/clock.mjs:
lucide-react/dist/esm/icons/loader-circle.mjs:
lucide-react/dist/esm/icons/mail.mjs:
lucide-react/dist/esm/icons/map-pin.mjs:
lucide-react/dist/esm/icons/menu.mjs:
lucide-react/dist/esm/icons/message-circle.mjs:
lucide-react/dist/esm/icons/phone.mjs:
lucide-react/dist/esm/icons/send.mjs:
lucide-react/dist/esm/icons/triangle-exclamation-point.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.75.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
