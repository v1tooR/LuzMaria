/* @ds-bundle: {"format":3,"namespace":"LuzMariaArtesanalDesignSystem_e1b018","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"WhatsAppButton","sourcePath":"components/buttons/WhatsAppButton.jsx"},{"name":"FaqItem","sourcePath":"components/content/FaqItem.jsx"},{"name":"StepList","sourcePath":"components/content/StepList.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Eyebrow","sourcePath":"components/layout/Eyebrow.jsx"},{"name":"OrnateFrame","sourcePath":"components/layout/OrnateFrame.jsx"},{"name":"SectionDivider","sourcePath":"components/layout/SectionDivider.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"1cabcbb70d38","components/buttons/WhatsAppButton.jsx":"12caa125ce5a","components/content/FaqItem.jsx":"8fd823d6111c","components/content/StepList.jsx":"4e1a503dde4e","components/feedback/Badge.jsx":"41057a151a27","components/feedback/Tag.jsx":"1d8355a8a964","components/forms/Input.jsx":"b6e14332c082","components/forms/Textarea.jsx":"55ad220d875f","components/layout/Eyebrow.jsx":"d8c4fe07b7d6","components/layout/OrnateFrame.jsx":"ba0ffeea7968","components/layout/SectionDivider.jsx":"88daaacbd5fd","components/product/ProductCard.jsx":"326d1e7e7ce5","ui_kits/landing/BrandStory.jsx":"6d8bda3daaa7","ui_kits/landing/Footer.jsx":"3022b8067d80","ui_kits/landing/Hero.jsx":"ff4f1c821bcf","ui_kits/landing/Nav.jsx":"140c9e5510fe","ui_kits/landing/ProductGrid.jsx":"48a488f3d796"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LuzMariaArtesanalDesignSystem_e1b018 = window.LuzMariaArtesanalDesignSystem_e1b018 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LuzMaria Button — high-contrast, restrained, no ornamentation.
 * The conversion surface stays clean: gold-on-dark or dark-on-ivory.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'secondary' | 'ghost' | 'onIvory'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 12,
      gap: 7
    },
    md: {
      padding: '13px 26px',
      fontSize: 13,
      gap: 9
    },
    lg: {
      padding: '17px 38px',
      fontSize: 14,
      gap: 10
    }
  };
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    padding: sizes[size].padding,
    fontFamily: 'var(--font-ui)',
    fontWeight: 600,
    fontSize: sizes[size].fontSize,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    lineHeight: 1,
    border: '1.5px solid transparent',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.42 : 1,
    transition: 'background var(--dur-base) var(--ease-soft), color var(--dur-base) var(--ease-soft), border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-fast) var(--ease-out)',
    transform: active && !disabled ? 'translateY(1px)' : 'none',
    WebkitFontSmoothing: 'antialiased'
  };
  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--gold-400)' : 'var(--gold-500)',
      color: 'var(--ink-900)',
      borderColor: 'transparent',
      boxShadow: hover && !disabled ? 'var(--glow-soft)' : 'none'
    },
    secondary: {
      background: hover && !disabled ? 'rgba(201,162,39,0.10)' : 'transparent',
      color: 'var(--gold-400)',
      borderColor: 'var(--gold-500)'
    },
    ghost: {
      background: hover && !disabled ? 'rgba(244,238,224,0.06)' : 'transparent',
      color: 'var(--ivory-300)',
      borderColor: 'transparent'
    },
    onIvory: {
      background: hover && !disabled ? 'var(--ink-700)' : 'var(--ink-900)',
      color: 'var(--ivory-200)',
      borderColor: 'transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant]
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/WhatsAppButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * WhatsAppButton — the brand's principal conversion action.
 * Pre-fills a devotional, first-person message to the shop.
 */
function WhatsAppButton({
  children = 'Falar pelo WhatsApp',
  message = '',
  phone = '',
  variant = 'primary',
  size = 'lg',
  fullWidth = false,
  ...rest
}) {
  const href = phone ? `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}` : '#';
  const icon = /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
  }));
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      textDecoration: 'none',
      display: fullWidth ? 'block' : 'inline-block'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, _extends({
    variant: variant,
    size: size,
    fullWidth: fullWidth,
    iconLeft: icon
  }, rest), children));
}
Object.assign(__ds_scope, { WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }

// components/content/FaqItem.jsx
try { (() => {
/**
 * FaqItem — quiet accordion row. Hairline gold divider, gold "+" that
 * rotates to "×". Devotional, unhurried.
 */
function FaqItem({
  question,
  answer,
  defaultOpen = false
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-card)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-5) 0',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left'
    },
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      fontSize: 20,
      color: 'var(--text-strong)'
    }
  }, question), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 26,
      height: 26,
      position: 'relative',
      color: 'var(--gold-500)',
      fontSize: 24,
      lineHeight: '24px',
      transform: open ? 'rotate(135deg)' : 'rotate(0deg)',
      transition: 'transform var(--dur-base) var(--ease-out)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? 400 : 0,
      overflow: 'hidden',
      transition: 'max-height var(--dur-slow) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      paddingBottom: 'var(--space-5)',
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      maxWidth: '60ch'
    }
  }, answer)));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/content/StepList.jsx
try { (() => {
/**
 * StepList — numbered "como funciona" flow. Gold numeral discs, ivory text.
 * Horizontal on desktop, vertical on mobile (controlled by `direction`).
 */
function StepList({
  steps = [],
  direction = 'horizontal'
}) {
  const horizontal = direction === 'horizontal';
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: horizontal ? 'row' : 'column',
      gap: horizontal ? 'var(--space-3)' : 'var(--space-4)',
      flexWrap: horizontal ? 'wrap' : 'nowrap'
    }
  }, steps.map((step, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      flex: horizontal ? '1 1 140px' : 'none',
      display: 'flex',
      flexDirection: horizontal ? 'column' : 'row',
      alignItems: horizontal ? 'flex-start' : 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: '1px solid var(--gold-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--gold-400)',
      background: 'rgba(201,162,39,0.06)'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontSize: 16,
      color: 'var(--text-body)'
    }
  }, typeof step === 'string' ? step : step.label))));
}
Object.assign(__ds_scope, { StepList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepList.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/**
 * Badge — tiny status/eyebrow marker. Use for "Feito à mão", "Sob encomenda".
 */
function Badge({
  children,
  tone = 'gold'
}) {
  const tones = {
    gold: {
      color: 'var(--ink-900)',
      bg: 'var(--gold-500)'
    },
    wine: {
      color: 'var(--ivory-200)',
      bg: 'var(--wine-700)'
    },
    outline: {
      color: 'var(--gold-400)',
      bg: 'transparent',
      border: '1px solid var(--border-hairline)'
    }
  };
  const t = tones[tone] || tones.gold;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 10px',
      font: 'var(--font-ui)',
      fontSize: 10,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: t.color,
      background: t.bg,
      border: t.border || 'none',
      borderRadius: 'var(--radius-sm)'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
/**
 * Tag / Chip — small label for personalization options, categories, occasions.
 * Pill shape is the only place rounded geometry is allowed liberally.
 */
function Tag({
  children,
  tone = 'gold',
  size = 'md'
}) {
  const tones = {
    gold: {
      color: 'var(--gold-400)',
      border: 'var(--border-hairline)',
      bg: 'rgba(201,162,39,0.07)'
    },
    wine: {
      color: '#E0A9A4',
      border: 'rgba(122,42,44,0.55)',
      bg: 'rgba(122,42,44,0.18)'
    },
    muted: {
      color: 'var(--text-muted)',
      border: 'var(--ink-600)',
      bg: 'transparent'
    }
  };
  const t = tones[tone] || tones.gold;
  const pad = size === 'sm' ? '4px 10px' : '6px 14px';
  const fs = size === 'sm' ? 11 : 12;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: pad,
      font: 'var(--font-ui)',
      fontSize: fs,
      fontWeight: 500,
      letterSpacing: '0.02em',
      color: t.color,
      background: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — clean form field for the order/contact flow.
 * High contrast, gold focus ring, no flourishes.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `lm-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-muted)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--ivory-200)',
      background: 'var(--ink-900)',
      border: `1.5px solid ${focus ? 'var(--gold-500)' : 'var(--ink-600)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px var(--ring-accent)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — multiline field (e.g. personalization intention / message). */
function Textarea({
  label,
  id,
  placeholder = '',
  rows = 4,
  value,
  onChange,
  required = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `lm-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-muted)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)'
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--ivory-200)',
      background: 'var(--ink-900)',
      border: `1.5px solid ${focus ? 'var(--gold-500)' : 'var(--ink-600)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      outline: 'none',
      resize: 'vertical',
      boxShadow: focus ? '0 0 0 3px var(--ring-accent)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Eyebrow.jsx
try { (() => {
/** Eyebrow — small-caps gold label above a heading. */
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      font: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--text-accent)'
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/layout/OrnateFrame.jsx
try { (() => {
/**
 * OrnateFrame — the ONE place baroque ornamentation is allowed.
 * A gold corner-bracketed moldura for the "sobre a marca" highlight.
 * Never repeat this as a background pattern.
 */
function OrnateFrame({
  children,
  pad = 'var(--space-7)'
}) {
  const corner = rot => /*#__PURE__*/React.createElement("svg", {
    width: "34",
    height: "34",
    viewBox: "0 0 34 34",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      transform: `rotate(${rot}deg)`,
      color: 'var(--gold-500)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 32 L2 10 Q2 2 10 2 L32 2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 32 L8 14 Q8 8 14 8 L32 8",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "14",
    r: "2",
    fill: "currentColor"
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: pad
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -2,
      left: -2
    }
  }, corner(0)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2
    }
  }, corner(90)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -2,
      right: -2
    }
  }, corner(180)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -2,
      left: -2
    }
  }, corner(270)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { OrnateFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/OrnateFrame.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionDivider.jsx
try { (() => {
/**
 * SectionDivider — fine gold filete between content blocks.
 * Used with restraint. 'node' adds a central diamond ornament.
 */
function SectionDivider({
  variant = 'line',
  width = '100%'
}) {
  if (variant === 'node') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        width,
        margin: '0 auto',
        color: 'var(--gold-500)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        height: 1,
        flex: 1,
        maxWidth: 120,
        background: 'linear-gradient(90deg, transparent, var(--gold-600))'
      }
    }), /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      "aria-hidden": "true",
      style: {
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 0 L9 5 L14 7 L9 9 L7 14 L5 9 L0 7 L5 5 Z",
      fill: "var(--gold-500)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        height: 1,
        flex: 1,
        maxWidth: 120,
        background: 'linear-gradient(90deg, var(--gold-600), transparent)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      height: 1,
      width,
      background: 'linear-gradient(90deg, transparent, var(--gold-600) 18%, var(--gold-400) 50%, var(--gold-600) 82%, transparent)',
      opacity: 0.7,
      margin: 0
    }
  });
}
Object.assign(__ds_scope, { SectionDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionDivider.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
/**
 * ProductCard — dark surface, fine gold border, centered product photo.
 * No ornamentation inside the card; name + price in clean ivory.
 */
function ProductCard({
  name,
  description,
  price,
  image,
  // url string
  imageAlt = '',
  badge = null,
  // optional small label e.g. "Mais pedida"
  phone = '',
  message = '',
  ctaLabel = 'Quero essa vela'
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: `1px solid ${hover ? 'var(--gold-500)' : 'var(--border-card)'}`,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-out)',
      boxShadow: hover ? 'var(--glow-soft), var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-3px)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      background: image ? `radial-gradient(120% 90% at 50% 35%, rgba(201,162,39,0.10), transparent 60%), #0b0a09` : 'radial-gradient(120% 90% at 50% 35%, rgba(201,162,39,0.10), transparent 60%), #0b0a09',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt || name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-faint)'
    }
  }, "Foto da vela"), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      font: 'var(--type-label)',
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--ink-900)',
      background: 'var(--gold-500)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)'
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-h3)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      fontSize: 15,
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-normal)',
      flex: 1
    }
  }, description), price && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-price)',
      color: 'var(--text-accent)',
      marginTop: 'var(--space-1)'
    }
  }, price), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.WhatsAppButton, {
    variant: "secondary",
    size: "sm",
    fullWidth: true,
    phone: phone,
    message: message
  }, ctaLabel))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/BrandStory.jsx
try { (() => {
/* global React */
// BrandStory — the one ornate moment + How it works steps
function BrandStory() {
  const {
    OrnateFrame,
    Eyebrow,
    StepList
  } = window.LuzMariaArtesanalDesignSystem_e1b018;
  return /*#__PURE__*/React.createElement("section", {
    id: "sobre",
    style: {
      background: 'var(--ink-850)',
      padding: 'var(--section-y) 0',
      borderTop: '1px solid var(--border-card)',
      borderBottom: '1px solid var(--border-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    },
    className: "lm-story-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Sobre a marca"), /*#__PURE__*/React.createElement(OrnateFrame, {
    pad: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 'clamp(24px, 3vw, 34px)',
      lineHeight: 1.4,
      color: 'var(--ivory-200)'
    }
  }, "\"Mais do que uma vela, uma lembran\xE7a de f\xE9, cuidado e da presen\xE7a de Deus nos pequenos detalhes.\""), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--ivory-400)'
    }
  }, "A LuzMaria Artesanal nasceu para transformar velas em presentes cheios de significado. Cada cria\xE7\xE3o \xE9 feita \xE0 m\xE3o, com inspira\xE7\xE3o na f\xE9 cat\xF3lica e aten\xE7\xE3o em cada detalhe."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: 'var(--font-script)',
      fontSize: 34,
      color: 'var(--gold-400)',
      lineHeight: 1
    }
  }, "com f\xE9 e carinho"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Como funciona"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(26px, 3vw, 36px)',
      color: 'var(--ivory-200)',
      margin: '12px 0 28px'
    }
  }, "Sua encomenda em quatro passos"), /*#__PURE__*/React.createElement(StepList, {
    direction: "vertical",
    steps: ['Escolha o modelo de vela que mais combina com você', 'Fale com a gente pelo WhatsApp', 'Confira valores, personalização e prazo de produção', 'Receba sua vela feita à mão em casa']
  }))));
}
window.BrandStory = BrandStory;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/BrandStory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Footer.jsx
try { (() => {
/* global React */
// FaqSection + Footer + final CTA band
function FaqSection() {
  const {
    FaqItem,
    Eyebrow
  } = window.LuzMariaArtesanalDesignSystem_e1b018;
  const faqs = [{
    q: 'As velas são feitas à mão?',
    a: 'Sim. Cada vela é produzida artesanalmente, com cuidado e atenção em cada detalhe.'
  }, {
    q: 'Posso personalizar minha vela?',
    a: 'Sim. É possível consultar as opções de personalização — nome, data e intenção — diretamente pelo WhatsApp.'
  }, {
    q: 'Vocês enviam para todo o Brasil?',
    a: 'Sim, enviamos para todo o país. O frete e o prazo são combinados durante a conversa no WhatsApp.'
  }, {
    q: 'Qual o prazo de produção?',
    a: 'Por serem feitas sob encomenda, o prazo varia conforme o modelo. Informamos tudo antes de você confirmar.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "duvidas",
    style: {
      background: 'var(--ink-900)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: '0 var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "D\xFAvidas frequentes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(28px, 4vw, 40px)',
      color: 'var(--ivory-200)',
      margin: '12px 0 0'
    }
  }, "Antes de encomendar")), /*#__PURE__*/React.createElement("div", null, faqs.map((f, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    question: f.q,
    answer: f.a,
    defaultOpen: i === 0
  })))));
}
function CtaBand() {
  const {
    WhatsAppButton
  } = window.LuzMariaArtesanalDesignSystem_e1b018;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-ivory)',
      padding: 'var(--space-9) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(30px, 4.5vw, 48px)',
      color: 'var(--text-on-ivory)',
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, "Acenda uma luz de f\xE9 hoje"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      color: 'var(--text-on-ivory-muted)',
      margin: '16px auto 28px',
      maxWidth: '44ch',
      lineHeight: 1.6
    }
  }, "Fale com a gente e encomende sua vela artesanal, feita \xE0 m\xE3o e cheia de significado."), /*#__PURE__*/React.createElement(WhatsAppButton, {
    size: "lg",
    message: "Ol\xE1! Quero encomendar uma vela artesanal da LuzMaria."
  }, "Falar pelo WhatsApp")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      borderTop: '1px solid var(--border-card)',
      padding: 'var(--space-7) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--ivory-200)'
    }
  }, "Luz", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--gold-400)'
    }
  }, "Maria")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 9,
      textTransform: 'uppercase',
      letterSpacing: '0.34em',
      color: 'var(--ivory-500)',
      marginTop: 3
    }
  }, "Artesanal")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ivory-600)',
      margin: 0
    }
  }, "Velas devocionais feitas \xE0 m\xE3o \xB7 \xA9 2026 LuzMaria Artesanal")));
}
window.FaqSection = FaqSection;
window.CtaBand = CtaBand;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
/* global React */
// Hero — chiaroscuro candlelight backdrop, serif display, single CTA
function Hero() {
  const {
    WhatsAppButton,
    Eyebrow
  } = window.LuzMariaArtesanalDesignSystem_e1b018;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(70% 80% at 72% 38%, rgba(201,162,39,0.30), rgba(184,134,11,0.08) 38%, #0a0908 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(40% 50% at 74% 36%, rgba(228,199,101,0.42), transparent 60%)',
      filter: 'blur(6px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '140px var(--container-pad) 120px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    },
    className: "lm-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Velas devocionais artesanais"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'clamp(44px, 6vw, 76px)',
      lineHeight: 1.04,
      letterSpacing: '-0.01em',
      color: 'var(--ivory-200)',
      margin: '18px 0 0',
      textWrap: 'balance'
    }
  }, "Iluminar momentos", /*#__PURE__*/React.createElement("br", null), "de f\xE9 e devo\xE7\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(17px, 2.2vw, 21px)',
      lineHeight: 1.7,
      color: 'var(--ivory-400)',
      margin: '24px 0 0',
      maxWidth: '46ch'
    }
  }, "Velas feitas \xE0 m\xE3o, com cuidado em cada detalhe, para transformar ora\xE7\xF5es, presentes e mem\xF3rias em luz."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppButton, {
    size: "lg",
    message: "Ol\xE1! Vim pela landing page e gostaria de encomendar uma vela artesanal."
  }, "Quero fazer minha encomenda"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 30,
      color: 'var(--gold-400)',
      lineHeight: 1
    }
  }, "feitas com f\xE9"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '3/4',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-card)',
      background: 'radial-gradient(80% 70% at 50% 32%, rgba(201,162,39,0.22), #0b0a09 68%)',
      boxShadow: 'var(--glow-candle)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: 18
    },
    className: "lm-hero-img"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      color: 'var(--ivory-600)'
    }
  }, "Foto da vela em claro-escuro"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Nav.jsx
try { (() => {
/* global React */
// Nav — fixed translucent bar, wordmark + WhatsApp CTA
function Nav() {
  const {
    WhatsAppButton
  } = window.LuzMariaArtesanalDesignSystem_e1b018;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(14,13,12,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-card)' : '1px solid transparent',
      transition: 'background var(--dur-base) var(--ease-soft), border-color var(--dur-base) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '16px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--ivory-200)',
      letterSpacing: '0.02em'
    }
  }, "Luz", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--gold-400)'
    }
  }, "Maria")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 9,
      textTransform: 'uppercase',
      letterSpacing: '0.34em',
      color: 'var(--ivory-500)',
      marginTop: 3
    }
  }, "Artesanal")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    },
    className: "lm-navlinks"
  }, ['Velas', 'Como funciona', 'Sobre', 'Dúvidas'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--ivory-300)',
      textDecoration: 'none',
      letterSpacing: '0.02em'
    }
  }, l)), /*#__PURE__*/React.createElement(WhatsAppButton, {
    size: "sm",
    variant: "primary"
  }, "Encomendar"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/ProductGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// ProductGrid — section heading + 3-up ProductCard grid
function ProductGrid() {
  const {
    ProductCard,
    SectionDivider,
    Eyebrow
  } = window.LuzMariaArtesanalDesignSystem_e1b018;
  const products = [{
    name: 'Vela Nossa Senhora Aparecida',
    description: 'Peça delicada e devocional, ideal para oratórios e cantinhos de oração.',
    price: 'R$ 68,00',
    badge: 'Mais pedida'
  }, {
    name: 'Vela Sagrado Coração',
    description: 'Inspirada na imagem do Sagrado Coração de Jesus, para momentos de intenção.',
    price: 'R$ 72,00'
  }, {
    name: 'Kit Presente de Fé',
    description: 'Presente cheio de significado para datas religiosas e o Dia das Mães.',
    price: 'R$ 119,00'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "velas",
    style: {
      background: 'var(--ink-900)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Nossas velas"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(30px, 4vw, 44px)',
      color: 'var(--ivory-200)',
      margin: '12px 0 16px',
      letterSpacing: '-0.01em'
    }
  }, "Escolha a sua devo\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionDivider, {
    variant: "node"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    },
    className: "lm-product-grid"
  }, products.map((p, i) => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: i
  }, p, {
    message: `Olá! Tenho interesse na ${p.name}. Pode me passar valores e prazo?`
  }))))));
}
window.ProductGrid = ProductGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/ProductGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.StepList = __ds_scope.StepList;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.OrnateFrame = __ds_scope.OrnateFrame;

__ds_ns.SectionDivider = __ds_scope.SectionDivider;

__ds_ns.ProductCard = __ds_scope.ProductCard;

})();
