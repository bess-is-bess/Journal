/* @ds-bundle: {"format":4,"namespace":"AnimalIslandUIDesignSystem_ed2c2c","components":[{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"Checkbox","sourcePath":"components/Checkbox/Checkbox.jsx"},{"name":"CodeBlock","sourcePath":"components/CodeBlock/CodeBlock.jsx"},{"name":"Collapse","sourcePath":"components/Collapse/Collapse.jsx"},{"name":"Cursor","sourcePath":"components/Cursor/Cursor.jsx"},{"name":"Divider","sourcePath":"components/Divider/Divider.jsx"},{"name":"Drawer","sourcePath":"components/Drawer/Drawer.jsx"},{"name":"Footer","sourcePath":"components/Footer/Footer.jsx"},{"name":"Form","sourcePath":"components/Form/Form.jsx"},{"name":"FormItem","sourcePath":"components/Form/Form.jsx"},{"name":"ICON_LIST","sourcePath":"components/Icon/Icon.jsx"},{"name":"Icon","sourcePath":"components/Icon/Icon.jsx"},{"name":"Input","sourcePath":"components/Input/Input.jsx"},{"name":"Loading","sourcePath":"components/Loading/Loading.jsx"},{"name":"Modal","sourcePath":"components/Modal/Modal.jsx"},{"name":"Phone","sourcePath":"components/Phone/Phone.jsx"},{"name":"Radio","sourcePath":"components/Radio/Radio.jsx"},{"name":"Select","sourcePath":"components/Select/Select.jsx"},{"name":"Switch","sourcePath":"components/Switch/Switch.jsx"},{"name":"Table","sourcePath":"components/Table/Table.jsx"},{"name":"Tabs","sourcePath":"components/Tabs/Tabs.jsx"},{"name":"Tag","sourcePath":"components/Tag/Tag.jsx"},{"name":"Time","sourcePath":"components/Time/Time.jsx"},{"name":"Title","sourcePath":"components/Title/Title.jsx"},{"name":"Tooltip","sourcePath":"components/Tooltip/Tooltip.jsx"},{"name":"Typewriter","sourcePath":"components/Typewriter/Typewriter.jsx"},{"name":"Wallet","sourcePath":"components/Wallet/Wallet.jsx"}],"sourceHashes":{"components/Button/Button.jsx":"9520c8a7ed76","components/Card/Card.jsx":"5a91fa940578","components/Checkbox/Checkbox.jsx":"c7cd31852993","components/CodeBlock/CodeBlock.jsx":"ecb6f22a69e9","components/Collapse/Collapse.jsx":"df8f20d9060f","components/Cursor/Cursor.jsx":"cf0ee36470ad","components/Divider/Divider.jsx":"7101b9c25292","components/Drawer/Drawer.jsx":"926ab206a038","components/Footer/Footer.jsx":"dd0f7077e369","components/Form/Form.jsx":"d4b6229f5b91","components/Icon/Icon.jsx":"34d0b1aef611","components/Input/Input.jsx":"e0a9f6d82c26","components/Loading/Loading.jsx":"b143fdd82b4a","components/Modal/Modal.jsx":"bc7248daec50","components/Phone/Phone.jsx":"ea60d9d4f06f","components/Radio/Radio.jsx":"d74e80d63120","components/Select/Select.jsx":"8b4bcfb9550b","components/Switch/Switch.jsx":"2cee980456c6","components/Table/Table.jsx":"991a35fbf0b5","components/Tabs/Tabs.jsx":"95222a98954e","components/Tag/Tag.jsx":"716084faec27","components/Time/Time.jsx":"b8c08f9bf028","components/Title/Title.jsx":"b64c7b0226ed","components/Tooltip/Tooltip.jsx":"57d963f61977","components/Typewriter/Typewriter.jsx":"4dc4bfa648dc","components/Wallet/Wallet.jsx":"146c3e3813b9","ui_kits/docs-site/HomePage.jsx":"d302e657d4be","ui_kits/docs-site/Showcase.jsx":"4fc55622dec3","ui_kits/docs-site/Sidebar.jsx":"be7090107c6f"},"inlinedExternals":[],"unexposedExports":[{"name":"aiuiAsset","sourcePath":"components/Icon/Icon.jsx"},{"name":"useForm","sourcePath":"components/Form/Form.jsx"}]} */

(() => {

const __ds_ns = (window.AnimalIslandUIDesignSystem_ed2c2c = window.AnimalIslandUIDesignSystem_ed2c2c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Animal Crossing-style action button.
 * The signature primary/danger-primary variants carry a 3D "pixel-stack"
 * bottom shadow that presses down on click like a physical game button.
 * default / dashed / text / link use a soft warm elevation shadow only.
 */

const CSS = `
.aiui-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-sizing: border-box;
  font-family: var(--animal-font-family);
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 50px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  outline: none;
  line-height: 1;
  letter-spacing: 0.02em;
  box-shadow: var(--animal-shadow-sm);
}
.aiui-btn:focus-visible { outline: 2px solid var(--animal-primary-color); outline-offset: 2px; }
.aiui-btn:disabled { cursor: not-allowed; opacity: 0.5; box-shadow: none; transform: none; }

/* sizes */
.aiui-btn--small  { height: 32px; padding: 0 16px; font-size: 12px; border-radius: 16px; }
.aiui-btn--middle { height: 45px; padding: 0 20px; font-size: 14px; border-radius: 50px; }
.aiui-btn--large  { height: 48px; padding: 0 32px; font-size: 16px; border-radius: 24px; }

/* default */
.aiui-btn--default { color: var(--animal-text-color); background: var(--animal-bg-color); border-color: var(--animal-border-color); }
.aiui-btn--default:hover:not(:disabled) { color: var(--animal-primary-color); border-color: var(--animal-primary-color); box-shadow: var(--animal-shadow-base); transform: translateY(-1px); }
.aiui-btn--default:active:not(:disabled) { color: var(--animal-primary-color-active); border-color: var(--animal-primary-color-active); transform: translateY(0); box-shadow: var(--animal-shadow-sm); }

/* primary — 3D pixel-stack */
.aiui-btn--primary { color: #794f27; background: #f8f8f0; border-color: #f8f8f0; box-shadow: 0 5px 0 0 #bdaea0; }
.aiui-btn--primary:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 0 0 #bdaea0; }
.aiui-btn--primary:active:not(:disabled) { transform: translateY(2px); box-shadow: 0 1px 0 0 #bdaea0; }

/* dashed */
.aiui-btn--dashed { color: var(--animal-text-color); background: var(--animal-bg-color); border-color: var(--animal-border-color); border-style: dashed; }
.aiui-btn--dashed:hover:not(:disabled) { color: var(--animal-primary-color); border-color: var(--animal-primary-color); transform: translateY(-1px); }
.aiui-btn--dashed:active:not(:disabled) { color: var(--animal-primary-color-active); border-color: var(--animal-primary-color-active); transform: translateY(0); }

/* text */
.aiui-btn--text { color: var(--animal-text-color); background: transparent; border-color: transparent; box-shadow: none; }
.aiui-btn--text:hover:not(:disabled) { background: var(--animal-bg-color-secondary); }

/* link */
.aiui-btn--link { color: var(--animal-primary-color); background: transparent; border-color: transparent; box-shadow: none; }
.aiui-btn--link:hover:not(:disabled) { color: var(--animal-primary-color-hover); opacity: 0.85; }
.aiui-btn--link:active:not(:disabled) { color: var(--animal-primary-color-active); }

/* danger + primary */
.aiui-btn--danger.aiui-btn--primary { color: #fff; background: var(--animal-error-color); border-color: var(--animal-error-color); box-shadow: 0 5px 0 0 #c94444; }
.aiui-btn--danger.aiui-btn--primary:hover:not(:disabled) { background: var(--animal-error-color-hover); border-color: var(--animal-error-color-hover); box-shadow: 0 6px 0 0 #c94444; }
.aiui-btn--danger.aiui-btn--primary:active:not(:disabled) { background: var(--animal-error-color-active); box-shadow: 0 1px 0 0 #c94444; }
/* danger + default/dashed */
.aiui-btn--danger.aiui-btn--default, .aiui-btn--danger.aiui-btn--dashed { color: #e05a5a; border-color: var(--animal-error-color); }
.aiui-btn--danger.aiui-btn--default:hover:not(:disabled), .aiui-btn--danger.aiui-btn--dashed:hover:not(:disabled) { color: #e05a5a; border-color: var(--animal-error-color-hover); }

/* ghost */
.aiui-btn--ghost { background: transparent; box-shadow: none; }
.aiui-btn--ghost.aiui-btn--primary { color: var(--animal-primary-color); background: transparent; box-shadow: none; border-color: var(--animal-primary-color); }
.aiui-btn--ghost.aiui-btn--primary:hover:not(:disabled) { color: var(--animal-primary-color-hover); border-color: var(--animal-primary-color-hover); background: rgba(25,200,185,0.08); }

/* block */
.aiui-btn--block { display: flex; width: 100%; }

/* loading */
.aiui-btn--loading { cursor: default; pointer-events: none; box-shadow: none; background: #0ec4b6; border: 4px solid #4de2da; color: #fff;
  background-image: repeating-linear-gradient(-45deg, #0ec4b6, #0ec4b6 10px, #01b0a7 10px, #01b0a7 20px);
  background-size: 28.28px 28.28px; animation: aiui-btn-loading 1s linear infinite; }
.aiui-btn__icon { display: inline-flex; align-items: center; }

@keyframes aiui-btn-loading { 0% { background-position: 0 0; } 100% { background-position: -28.28px 0; } }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-btn-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-btn-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Button({
  type = 'default',
  size = 'middle',
  danger = false,
  ghost = false,
  block = false,
  loading = false,
  disabled = false,
  icon,
  htmlType = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = ['aiui-btn', `aiui-btn--${type}`, `aiui-btn--${size}`, danger && 'aiui-btn--danger', ghost && 'aiui-btn--ghost', block && 'aiui-btn--block', loading && 'aiui-btn--loading', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: htmlType,
    className: cls,
    disabled: disabled || loading
  }, rest), icon && !loading ? /*#__PURE__*/React.createElement("span", {
    className: "aiui-btn__icon"
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — cozy parchment container. Default/dashed types, 13 solid NookPhone
 * colors, and 13 pastel polka-dot "wallpaper" patterns. No drop shadow — depth
 * comes from border/pattern and a gentle hover float.
 */

// name -> [solid background, solid text, pattern hue]
const PALETTE = {
  default: ['rgb(247, 243, 223)', '#725d42', '#c4b89e'],
  'app-pink': ['#f8a6b2', '#fff', '#f8a6b2'],
  purple: ['#b77dee', '#fff', '#b77dee'],
  'app-blue': ['#889df0', '#fff', '#889df0'],
  'app-yellow': ['#f7cd67', '#725d42', '#f7cd67'],
  'app-orange': ['#e59266', '#fff', '#e59266'],
  'app-teal': ['#82d5bb', '#fff', '#82d5bb'],
  'app-green': ['#8ac68a', '#fff', '#8ac68a'],
  'app-red': ['#fc736d', '#fff', '#fc736d'],
  'lime-green': ['#d1da49', '#3d5a1a', '#d1da49'],
  'yellow-green': ['#ecdf52', '#725d42', '#ecdf52'],
  brown: ['#9a835a', '#fff', '#9a835a'],
  'warm-peach-pink': ['#e18c6f', '#fff', '#e18c6f']
};
const CSS = `
.aiui-card {
  box-sizing: border-box;
  border-radius: 20px;
  background: rgb(247, 243, 223);
  padding: 16px 24px;
  color: #725d42;
  font-family: var(--animal-font-family);
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 1.6;
  border: 2px solid transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.aiui-card:hover { transform: translateY(-2px); }
.aiui-card--dashed { border: 2px dashed #e8dcc8; background: rgb(250, 248, 242); }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-card-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-card-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function patternStyle(hue) {
  return {
    background: `radial-gradient(circle, color-mix(in srgb, ${hue} 18%, transparent) 1.5px, transparent 1.5px) 0 0/28px 28px,` + `radial-gradient(circle, color-mix(in srgb, ${hue} 12%, transparent) 1px, transparent 1px) 7px 7px/14px 14px,` + `color-mix(in srgb, ${hue} 20%, #fffdf5)`,
    border: `1.5px solid ${hue}`,
    color: `color-mix(in srgb, ${hue} 62%, #5a3d28)`
  };
}
function Card({
  type = 'default',
  color = 'default',
  pattern = 'none',
  className = '',
  style,
  children,
  ...rest
}) {
  const cls = ['aiui-card', type === 'dashed' && 'aiui-card--dashed', className].filter(Boolean).join(' ');
  let colorStyle = {};
  if (pattern && pattern !== 'none') {
    const hue = (PALETTE[pattern] || PALETTE.default)[2];
    colorStyle = patternStyle(hue);
  } else if (color && color !== 'default' && type !== 'dashed') {
    const [bg, text] = PALETTE[color] || PALETTE.default;
    colorStyle = {
      background: bg,
      color: text
    };
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      ...colorStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/Checkbox/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — group multi-select. Rounded-square boxes (8px radius) that fill
 * mint-teal when checked, with a popping ✓. Yellow focus ring.
 */

const CSS = `
.aiui-cbx-group { display: flex; flex-wrap: wrap; gap: 12px; font-family: var(--animal-font-family); }
.aiui-cbx-group--vertical { flex-direction: column; flex-wrap: nowrap; gap: 8px; }
.aiui-cbx {
  display: inline-flex; align-items: center; gap: 8px; cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
}
.aiui-cbx__box {
  box-sizing: border-box; flex: none;
  display: inline-flex; align-items: center; justify-content: center;
  background: rgb(247,243,223); border: 2.5px solid #c4b89e; border-radius: 8px;
  transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
}
.aiui-cbx:hover:not(.aiui-cbx--disabled) .aiui-cbx__box { border-color: #19c8b9; transform: translateY(-1px); }
.aiui-cbx__input:focus-visible + .aiui-cbx__box { outline: 2px solid #ffcc00; outline-offset: 2px; }
.aiui-cbx--checked .aiui-cbx__box { background: #19c8b9; border-color: #11a89b; }
.aiui-cbx--checked:hover:not(.aiui-cbx--disabled) .aiui-cbx__box { background: #3dd4c6; border-color: #19c8b9; }
.aiui-cbx__check { color: #fff; font-weight: 700; line-height: 1; animation: aiui-pop 0.15s cubic-bezier(0.4,0,0.2,1); }
.aiui-cbx__label { color: #725d42; font-weight: 500; letter-spacing: 0.01em; }
.aiui-cbx:hover:not(.aiui-cbx--disabled) .aiui-cbx__label { color: #794f27; }
.aiui-cbx--disabled { cursor: not-allowed; opacity: 0.55; }
.aiui-cbx--disabled .aiui-cbx__box { background: #f0ece2; border-color: #d4c9b4; transform: none !important; }
.aiui-cbx--disabled .aiui-cbx__label { color: #c4b89e; }
.aiui-cbx__input { position: absolute; opacity: 0; width: 0; height: 0; }

@keyframes aiui-pop {
  0% { transform: scale(0.4); opacity: 0; }
  60% { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
}

.aiui-cbx--small  .aiui-cbx__box { width: 18px; height: 18px; border-width: 2px; }
.aiui-cbx--small  .aiui-cbx__check { font-size: 11px; }
.aiui-cbx--small  .aiui-cbx__label { font-size: 12px; }
.aiui-cbx--middle .aiui-cbx__box { width: 22px; height: 22px; border-width: 2.5px; }
.aiui-cbx--middle .aiui-cbx__check { font-size: 13px; }
.aiui-cbx--middle .aiui-cbx__label { font-size: 14px; }
.aiui-cbx--large  .aiui-cbx__box { width: 28px; height: 28px; border-width: 3px; }
.aiui-cbx--large  .aiui-cbx__check { font-size: 16px; }
.aiui-cbx--large  .aiui-cbx__label { font-size: 16px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-cbx-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-cbx-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Checkbox({
  options = [],
  value,
  defaultValue = [],
  size = 'middle',
  disabled = false,
  direction = 'horizontal',
  onChange,
  className = '',
  style,
  ...rest
}) {
  const controlled = value !== undefined;
  const [inner, setInner] = React.useState(defaultValue);
  const selected = controlled ? value : inner;
  const toggle = val => {
    const next = selected.includes(val) ? selected.filter(v => v !== val) : [...selected, val];
    if (!controlled) setInner(next);
    onChange && onChange(next);
  };
  const groupCls = ['aiui-cbx-group', direction === 'vertical' && 'aiui-cbx-group--vertical', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: groupCls,
    style: style,
    role: "group"
  }, rest), options.map(opt => {
    const isChecked = selected.includes(opt.value);
    const isDisabled = disabled || opt.disabled;
    const cls = ['aiui-cbx', `aiui-cbx--${size}`, isChecked && 'aiui-cbx--checked', isDisabled && 'aiui-cbx--disabled'].filter(Boolean).join(' ');
    return /*#__PURE__*/React.createElement("label", {
      className: cls,
      key: opt.value
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      className: "aiui-cbx__input",
      checked: isChecked,
      disabled: isDisabled,
      onChange: () => toggle(opt.value)
    }), /*#__PURE__*/React.createElement("span", {
      className: "aiui-cbx__box"
    }, isChecked ? /*#__PURE__*/React.createElement("span", {
      className: "aiui-cbx__check"
    }, "\u2713") : null), /*#__PURE__*/React.createElement("span", {
      className: "aiui-cbx__label"
    }, opt.label));
  }));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Checkbox/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/CodeBlock/CodeBlock.jsx
try { (() => {
/**
 * CodeBlock — dark JSX/TS code panel with a built-in tokenizer. Warm cream
 * text on espresso brown, rounded 20px. Highlights comments, strings,
 * keywords, React identifiers, components, functions, props and JSX tags.
 */

const COLORS = {
  comment: '#6b5e50',
  string: '#a8d4a0',
  keyword: '#d4a0e0',
  react: '#e06c75',
  component: '#80c0e0',
  func: '#61afef',
  prop: '#e8c87a',
  jsx: '#f0a870',
  operator: '#d4b896',
  def: '#e8d5bc'
};
const KEYWORDS = new Set(['import', 'export', 'const', 'let', 'var', 'return', 'function', 'async', 'await', 'type', 'interface', 'from', 'default', 'if', 'else', 'for', 'while', 'new', 'class', 'extends', 'true', 'false', 'null', 'undefined', 'as', 'of', 'in', 'typeof', 'void']);
const REACT = new Set(['React', 'useState', 'useEffect', 'useRef', 'useMemo', 'useCallback', 'FC', 'ReactNode', 'CSSProperties']);
const CSS = `
.aiui-code {
  margin: 0; padding: 20px 24px;
  background: #2b2118; border: 1px solid #3d3028; border-radius: 20px;
  font-family: var(--animal-font-family-mono);
  font-size: 14px; line-height: 1.7; font-weight: 600; tab-size: 4;
  color: #e8d5bc; white-space: pre; overflow: auto;
}
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-code-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-code-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function tokenize(src) {
  const out = [];
  let i = 0;
  const n = src.length;
  const push = (text, color) => out.push({
    text,
    color
  });
  const re = {
    comment: /^(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/,
    string: /^(`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,
    jsx: /^(<\/?[A-Za-z][\w.]*|\/>)/,
    number: /^(\b\d[\d._]*\b)/,
    ident: /^([A-Za-z_$][\w$]*)/,
    ws: /^(\s+)/
  };
  while (i < n) {
    const rest = src.slice(i);
    let m;
    if (m = rest.match(re.comment)) {
      push(m[1], COLORS.comment);
      i += m[1].length;
      continue;
    }
    if (m = rest.match(re.string)) {
      push(m[1], COLORS.string);
      i += m[1].length;
      continue;
    }
    if (m = rest.match(re.jsx)) {
      push(m[1], COLORS.jsx);
      i += m[1].length;
      continue;
    }
    if (m = rest.match(re.number)) {
      push(m[1], COLORS.string);
      i += m[1].length;
      continue;
    }
    if (m = rest.match(re.ws)) {
      push(m[1], COLORS.def);
      i += m[1].length;
      continue;
    }
    if (m = rest.match(re.ident)) {
      const word = m[1];
      let after = i + word.length;
      while (after < n && src[after] === ' ') after++;
      const next = src[after];
      let color = COLORS.def;
      if (KEYWORDS.has(word)) color = COLORS.keyword;else if (REACT.has(word)) color = COLORS.react;else if (/^[A-Z]/.test(word)) color = COLORS.component;else if (next === '(') color = COLORS.func;else if (next === '=') color = COLORS.prop;
      push(word, color);
      i += word.length;
      continue;
    }
    push(src[i], COLORS.operator);
    i += 1;
  }
  return out;
}
function CodeBlock({
  code = '',
  className = '',
  style
}) {
  const tokens = React.useMemo(() => tokenize(code), [code]);
  return /*#__PURE__*/React.createElement("pre", {
    className: ['aiui-code', className].filter(Boolean).join(' '),
    style: style
  }, tokens.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: t.color
    }
  }, t.text)));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/CodeBlock/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/Collapse/Collapse.jsx
try { (() => {
/**
 * Collapse — single accordion panel. Header with a mint-teal circular toggle;
 * the body expands via a pure CSS grid-row transition (no JS height measuring).
 */

const CSS = `
.aiui-collapse {
  border: 2px solid #9f927d; border-radius: 18px; margin-bottom: 12px;
  background: rgb(247,243,223); font-family: var(--animal-font-family); overflow: hidden;
}
.aiui-collapse--disabled { opacity: 0.6; }
.aiui-collapse__head {
  display: flex; align-items: center; gap: 12px; width: 100%;
  padding: 16px 24px; background: transparent; border: none; cursor: pointer; text-align: left;
}
.aiui-collapse--disabled .aiui-collapse__head { cursor: not-allowed; }
.aiui-collapse__icon {
  flex: none; display: inline-flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; border-radius: 50%;
  background: #19c8b9; color: #fff;
  box-shadow: 0 2px 4px rgba(25,200,185,0.3); transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
}
.aiui-collapse--open .aiui-collapse__icon { transform: rotate(180deg); }
.aiui-collapse__q { flex: 1; font-size: 16px; font-weight: 600; line-height: 1.4; color: #725d42; }
.aiui-collapse__body {
  display: grid; grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.4,0,0.2,1);
}
.aiui-collapse--open .aiui-collapse__body { grid-template-rows: 1fr; }
.aiui-collapse__inner { overflow: hidden; }
.aiui-collapse__a { padding: 0 24px; font-size: 14px; line-height: 1.7; color: #8a7b66; }
.aiui-collapse--open .aiui-collapse__a { padding-bottom: 20px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-collapse-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-collapse-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Collapse({
  question,
  answer,
  defaultExpanded = false,
  disabled = false,
  className = '',
  style
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  const cls = ['aiui-collapse', open && 'aiui-collapse--open', disabled && 'aiui-collapse--disabled', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: style
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "aiui-collapse__head",
    "aria-expanded": open,
    disabled: disabled,
    onClick: () => !disabled && setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    className: "aiui-collapse__icon"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "aiui-collapse__q"
  }, question)), /*#__PURE__*/React.createElement("div", {
    className: "aiui-collapse__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aiui-collapse__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aiui-collapse__a"
  }, answer))));
}
Object.assign(__ds_scope, { Collapse });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Collapse/Collapse.jsx", error: String((e && e.message) || e) }); }

// components/Cursor/Cursor.jsx
try { (() => {
/**
 * Cursor — wraps a region and swaps the pointer for the Animal-Crossing finger
 * cursor (hotspot 4,0) on all descendants. Do not nest.
 */

function assetBase(rel) {
  if (typeof document === 'undefined') return rel;
  const s = document.querySelector('script[src*="_ds_bundle.js"]');
  if (s && s.src) return s.src.replace(/_ds_bundle\.js.*$/, '') + rel;
  return rel;
}
if (typeof document !== 'undefined' && !document.getElementById('aiui-cursor-style')) {
  const url = assetBase('assets/cursor/cursor-icon.png');
  const el = document.createElement('style');
  el.id = 'aiui-cursor-style';
  el.textContent = `.aiui-cursor, .aiui-cursor * { cursor: url('${url}') 4 0, auto !important; }`;
  document.head.appendChild(el);
}
function Cursor({
  children,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['aiui-cursor', className].filter(Boolean).join(' '),
    style: style
  }, children);
}
Object.assign(__ds_scope, { Cursor });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Cursor/Cursor.jsx", error: String((e && e.message) || e) }); }

// components/Divider/Divider.jsx
try { (() => {
/**
 * Divider — decorative 12px band. Line/wave types use illustrated art; the
 * dashed types render a colored dash. Purely ornamental section separator.
 */

function assetBase(rel) {
  if (typeof document === 'undefined') return rel;
  const s = document.querySelector('script[src*="_ds_bundle.js"]');
  if (s && s.src) return s.src.replace(/_ds_bundle\.js.*$/, '') + rel;
  return rel;
}
const IMG = {
  'line-brown': 'divider-line-brown.svg',
  'line-teal': 'divider-line-teal.svg',
  'line-white': 'divider-line-white.png',
  'line-yellow': 'divider-line-yellow.svg',
  'wave-yellow': 'wave-yellow.svg'
};
const DASH = {
  'dashed-brown': '#c9bfa8',
  'dashed-teal': '#7fd0c2',
  'dashed-white': '#ffffff',
  'dashed-yellow': '#f3d24e'
};
const CSS = `
.aiui-divider { width: 100%; height: 12px; background-repeat: no-repeat; background-position: center; background-size: contain; }
.aiui-divider--dashed { background-image: none; display: flex; align-items: center; }
.aiui-divider--dashed::before { content: ''; width: 100%; height: 3px; background: repeating-linear-gradient(to right, var(--dash) 0 9px, transparent 9px 18px); }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-divider-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-divider-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Divider({
  type = 'line-brown',
  className = '',
  style
}) {
  if (DASH[type]) {
    return /*#__PURE__*/React.createElement("div", {
      className: ['aiui-divider', 'aiui-divider--dashed', className].filter(Boolean).join(' '),
      style: {
        '--dash': DASH[type],
        ...style
      }
    });
  }
  const file = IMG[type] || IMG['line-brown'];
  return /*#__PURE__*/React.createElement("div", {
    className: ['aiui-divider', className].filter(Boolean).join(' '),
    style: {
      backgroundImage: `url(${assetBase('assets/dividers/' + file)})`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Divider/Divider.jsx", error: String((e && e.message) || e) }); }

// components/Drawer/Drawer.jsx
try { (() => {
/**
 * Drawer — sliding panel with the signature depth effect: on open the page
 * content sinks (translate + scale + dim) so the drawer floats above it. Four
 * placements; lighter mask than Modal so the sunken page stays visible.
 */

const CSS = `
.aiui-drawer-mask {
  position: fixed; inset: 0; z-index: 1000; background: rgba(0,0,0,0.18);
  animation: aiui-fade-in 0.25s ease; font-family: var(--animal-font-family);
}
.aiui-drawer {
  position: fixed; z-index: 1001; display: flex; flex-direction: column;
  background: rgb(247,243,223); color: rgb(128,115,89); overflow: hidden;
  font-family: var(--animal-font-family);
  animation-duration: 0.3s; animation-timing-function: cubic-bezier(0.4,0,0.2,1); animation-fill-mode: both;
}
.aiui-drawer--right  { top: 0; right: 0; height: 100vh; max-width: calc(100vw - 32px); border-radius: 20px 0 0 20px; box-shadow: -12px 0 32px rgba(61,52,40,0.18); animation-name: aiui-drawer-r; }
.aiui-drawer--left   { top: 0; left: 0; height: 100vh; max-width: calc(100vw - 32px); border-radius: 0 20px 20px 0; box-shadow: 12px 0 32px rgba(61,52,40,0.18); animation-name: aiui-drawer-l; }
.aiui-drawer--top    { top: 0; left: 0; width: 100vw; max-height: calc(100vh - 32px); border-radius: 0 0 20px 20px; box-shadow: 0 12px 32px rgba(61,52,40,0.18); animation-name: aiui-drawer-t; }
.aiui-drawer--bottom { bottom: 0; left: 0; width: 100vw; max-height: calc(100vh - 32px); border-radius: 20px 20px 0 0; box-shadow: 0 -12px 32px rgba(61,52,40,0.18); animation-name: aiui-drawer-b; }
@keyframes aiui-drawer-r { from { transform: translateX(100%); } to { transform: translateX(0); } }
@keyframes aiui-drawer-l { from { transform: translateX(-100%); } to { transform: translateX(0); } }
@keyframes aiui-drawer-t { from { transform: translateY(-100%); } to { transform: translateY(0); } }
@keyframes aiui-drawer-b { from { transform: translateY(100%); } to { transform: translateY(0); } }
.aiui-drawer__head { display: flex; align-items: center; justify-content: space-between; padding: 24px 24px 16px; }
.aiui-drawer__title { font-size: 28px; font-weight: 700; color: rgba(114,93,66,1); }
.aiui-drawer__close { width: 32px; height: 32px; font-size: 22px; line-height: 1; color: rgba(114,93,66,0.6); border: none; background: transparent; border-radius: 50%; cursor: pointer; transition: all 0.2s; }
.aiui-drawer__close:hover { background: rgba(114,93,66,0.1); color: rgba(114,93,66,1); }
.aiui-drawer__body { flex: 1; overflow: auto; font-size: 20px; font-weight: 600; line-height: 1.6; color: #8a7b66; padding: 0 24px 24px; }
.aiui-drawer__footer { display: flex; justify-content: flex-end; gap: 12px; padding: 0 24px 24px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-drawer-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-drawer-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Drawer({
  open,
  title,
  placement = 'right',
  width = 378,
  height = 300,
  maskClosable = true,
  pushBackground = true,
  footer,
  onClose,
  children,
  className = '',
  maskStyle
}) {
  const nodeRef = React.useRef(null);
  if (!nodeRef.current && typeof document !== 'undefined') {
    nodeRef.current = document.createElement('div');
    nodeRef.current.className = 'aiui-drawer-portal';
  }
  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    document.body.appendChild(node);
    return () => {
      if (node.parentNode) node.parentNode.removeChild(node);
    };
  }, []);
  React.useEffect(() => {
    if (!open || !pushBackground) return;
    const touched = [];
    Array.from(document.body.children).forEach(child => {
      if (child === nodeRef.current) return;
      if (getComputedStyle(child).position === 'fixed') return;
      touched.push([child, child.style.transform, child.style.filter, child.style.transition]);
      child.style.transition = 'transform 0.3s cubic-bezier(0.4,0,0.2,1), filter 0.3s cubic-bezier(0.4,0,0.2,1)';
      child.style.transform = 'translateY(24px) scale(0.96)';
      child.style.filter = 'brightness(0.85) saturate(0.9)';
    });
    return () => {
      touched.forEach(([child, t, f, tr]) => {
        child.style.transform = t;
        child.style.filter = f;
        child.style.transition = tr;
      });
    };
  }, [open, pushBackground]);
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === 'Escape' && onClose && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open || !nodeRef.current) return null;
  const sizeStyle = placement === 'left' || placement === 'right' ? {
    width
  } : {
    height
  };
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "aiui-drawer-mask",
    style: maskStyle,
    onClick: () => maskClosable && onClose && onClose()
  }), /*#__PURE__*/React.createElement("div", {
    className: ['aiui-drawer', `aiui-drawer--${placement}`, className].filter(Boolean).join(' '),
    style: sizeStyle,
    role: "dialog",
    "aria-modal": "true"
  }, title != null && /*#__PURE__*/React.createElement("div", {
    className: "aiui-drawer__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aiui-drawer__title"
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "aiui-drawer__close",
    "aria-label": "close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "aiui-drawer__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "aiui-drawer__footer"
  }, footer) : null)), nodeRef.current);
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Drawer/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/Footer/Footer.jsx
try { (() => {
/**
 * Footer — decorative bottom art band. `sea` is an illustrated ocean wave;
 * `tree` (default) is a forest silhouette. Recolor is not supported.
 */

function assetBase(rel) {
  if (typeof document === 'undefined') return rel;
  const s = document.querySelector('script[src*="_ds_bundle.js"]');
  if (s && s.src) return s.src.replace(/_ds_bundle\.js.*$/, '') + rel;
  return rel;
}
const CSS = `
.aiui-footer { width: 100%; }
.aiui-footer--sea { height: 80px; background-repeat: no-repeat; background-position: center; background-size: contain; }
.aiui-footer--sea.aiui-footer--seamless { background-size: auto 100%; background-repeat: repeat-x; }
.aiui-footer--tree { height: 60px; background-repeat: no-repeat; background-position: bottom center; background-size: cover; }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-footer-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-footer-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Footer({
  type = 'tree',
  seamless = false,
  className = '',
  style
}) {
  const file = type === 'sea' ? 'footer-sea.svg' : 'footer-tree.webp';
  const cls = ['aiui-footer', `aiui-footer--${type}`, seamless && 'aiui-footer--seamless', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: {
      backgroundImage: `url(${assetBase('assets/footer/' + file)})`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Footer/Footer.jsx", error: String((e && e.message) || e) }); }

// components/Form/Form.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Form — layout + validation container with a conventional form API
 * (useForm / Form.Item / rules / onFinish / validateFields). FormItem injects
 * value/onChange into its child via cloneElement. Uses neutral status colors
 * (not the parchment palette) to match form conventions.
 */

const CSS = `
.aiui-form { color: rgba(0,0,0,0.85); font-size: 14px; line-height: 1.6; font-family: var(--animal-font-family); box-sizing: border-box; }
.aiui-form--horizontal { display: flex; flex-direction: column; gap: 8px; }
.aiui-form--inline { display: flex; flex-wrap: wrap; gap: 8px 16px; }
.aiui-form-item { display: flex; }
.aiui-form--horizontal .aiui-form-item { align-items: baseline; }
.aiui-form--vertical .aiui-form-item { display: block; margin-bottom: 8px; }
.aiui-form--inline .aiui-form-item { flex: 0 0 auto; flex-direction: column; }
.aiui-form-item__label { color: rgba(0,0,0,0.85); font-weight: normal; white-space: nowrap; line-height: 1.6; padding-right: 12px; box-sizing: border-box; }
.aiui-form--vertical .aiui-form-item__label { display: block; margin-bottom: 6px; padding-right: 0; }
.aiui-form-item__label--req::before { content: '*'; color: #ff4d4f; margin-right: 4px; }
.aiui-form-item__label--colon::after { content: ':'; margin: 0 4px 0 2px; }
.aiui-form-item__control { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.aiui-form-item__explain { min-height: 20px; font-size: 12px; line-height: 1.5; margin-top: 4px; color: rgba(0,0,0,0.45); }
.aiui-form-item--error .aiui-form-item__explain { color: #ff4d4f; }
.aiui-form-item--warning .aiui-form-item__explain { color: #faad14; }
.aiui-form--small .aiui-form-item__label { font-size: 12px; }
.aiui-form--large .aiui-form-item__label { font-size: 16px; }
.aiui-form--disabled { opacity: 0.6; }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-form-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-form-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
const FormCtx = React.createContext(null);
function useForm() {
  const ref = React.useRef(null);
  if (!ref.current) ref.current = {
    __store: {}
  };
  return [ref.current];
}
function checkRule(rule, value) {
  const empty = value == null || value === '' || Array.isArray(value) && value.length === 0;
  if (rule.required && (empty || rule.whitespace && String(value).trim() === '')) return rule.message || 'This field is required';
  if (!empty) {
    if (rule.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) return rule.message || 'Invalid email';
    if (rule.type === 'url' && !/^https?:\/\/\S+$/.test(value)) return rule.message || 'Invalid URL';
    if (rule.min != null && String(value).length < rule.min) return rule.message || `Must be at least ${rule.min} characters`;
    if (rule.max != null && String(value).length > rule.max) return rule.message || `Must be at most ${rule.max} characters`;
    if (rule.len != null && String(value).length !== rule.len) return rule.message || `Must be ${rule.len} characters`;
    if (rule.pattern && !rule.pattern.test(value)) return rule.message || 'Invalid format';
  }
  return null;
}
function Form({
  form,
  initialValues = {},
  layout = 'horizontal',
  labelCol = {
    span: 6
  },
  wrapperCol = {
    span: 18
  },
  size = 'middle',
  disabled = false,
  colon = true,
  requiredMark = false,
  onFinish,
  onFinishFailed,
  onValuesChange,
  onReset,
  children,
  className = '',
  style,
  ...rest
}) {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const rulesRef = React.useRef({});
  const setValue = (name, v) => {
    setValues(prev => {
      const next = {
        ...prev,
        [name]: v
      };
      onValuesChange && onValuesChange({
        [name]: v
      }, next);
      return next;
    });
  };
  const validate = vals => {
    const errs = {};
    Object.keys(rulesRef.current).forEach(name => {
      const rules = rulesRef.current[name] || [];
      for (const r of rules) {
        const rule = typeof r === 'function' ? r(instance) : r;
        const msg = checkRule(rule, vals[name]);
        if (msg) {
          errs[name] = msg;
          break;
        }
      }
    });
    return errs;
  };
  const fallback = useFallback();
  const instance = form || fallback;
  const submit = () => {
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) onFinish && onFinish(values);else onFinishFailed && onFinishFailed({
      values,
      errorFields: Object.entries(errs).map(([name, e]) => ({
        name,
        errors: [e]
      })),
      outOfDate: false
    });
  };
  Object.assign(instance, {
    getFieldValue: n => values[n],
    getFieldsValue: () => ({
      ...values
    }),
    setFieldValue: (n, v) => setValue(n, v),
    setFieldsValue: obj => setValues(prev => ({
      ...prev,
      ...obj
    })),
    resetFields: () => {
      setValues(initialValues);
      setErrors({});
    },
    validateFields: async () => {
      const errs = validate(values);
      setErrors(errs);
      if (Object.keys(errs).length) return Promise.reject({
        values,
        errorFields: Object.entries(errs).map(([name, e]) => ({
          name,
          errors: [e]
        })),
        outOfDate: false
      });
      return values;
    },
    submit,
    getFieldError: n => errors[n] ? [errors[n]] : [],
    isFieldTouched: () => false,
    isFieldValidating: () => false
  });
  const ctx = {
    values,
    errors,
    setValue,
    register: (name, rules) => {
      rulesRef.current[name] = rules || [];
    },
    unregister: name => {
      delete rulesRef.current[name];
    },
    validateField: name => {
      setErrors(prev => {
        const rules = rulesRef.current[name] || [];
        let msg = null;
        for (const r of rules) {
          const rule = typeof r === 'function' ? r(instance) : r;
          msg = checkRule(rule, ctx.values[name]);
          if (msg) break;
        }
        const next = {
          ...prev
        };
        if (msg) next[name] = msg;else delete next[name];
        return next;
      });
    },
    layout,
    labelCol,
    wrapperCol,
    size,
    disabled,
    colon,
    requiredMark
  };
  const cls = ['aiui-form', `aiui-form--${layout}`, `aiui-form--${size}`, disabled && 'aiui-form--disabled', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(FormCtx.Provider, {
    value: ctx
  }, /*#__PURE__*/React.createElement("form", _extends({
    className: cls,
    style: style,
    onSubmit: e => {
      e.preventDefault();
      submit();
    },
    onReset: e => {
      instance.resetFields();
      onReset && onReset(e);
    }
  }, rest), children));
}

// A stable fallback instance when the user didn't pass one from useForm.
function useFallback() {
  const ref = React.useRef(null);
  if (!ref.current) ref.current = {
    __store: {}
  };
  return ref.current;
}
function extractValue(arg, valuePropName) {
  if (arg && typeof arg === 'object' && arg.target) {
    return valuePropName === 'checked' ? arg.target.checked : arg.target.value;
  }
  return arg;
}
function FormItem({
  name,
  label,
  rules,
  required,
  valuePropName = 'value',
  trigger = 'onChange',
  help,
  hidden = false,
  noStyle = false,
  children,
  layout: itemLayout,
  className = '',
  style
}) {
  const ctx = React.useContext(FormCtx);
  if (!ctx) throw new Error('Form.Item must be used inside <Form>');
  React.useEffect(() => {
    if (name) {
      ctx.register(name, rules);
      return () => ctx.unregister(name);
    }
  }, [name]);
  if (hidden) return null;
  const value = name ? ctx.values[name] : undefined;
  const error = name ? ctx.errors[name] : undefined;
  const layout = itemLayout || ctx.layout;
  const showReq = (required || (rules || []).some(r => typeof r === 'object' && r.required)) && ctx.requiredMark !== false;
  let control = children;
  if (React.isValidElement(children) && name) {
    control = React.cloneElement(children, {
      [valuePropName]: value,
      [trigger]: arg => {
        ctx.setValue(name, extractValue(arg, valuePropName));
        setTimeout(() => ctx.validateField(name), 0);
        children.props[trigger] && children.props[trigger](arg);
      },
      ...(ctx.disabled && children.props.disabled === undefined ? {
        disabled: true
      } : null),
      ...(error && children.props.status === undefined ? {
        status: 'error'
      } : null)
    });
  } else if (React.isValidElement(children) && ctx.disabled && children.props.disabled === undefined) {
    control = React.cloneElement(children, {
      disabled: true
    });
  }
  if (noStyle) return control;
  const labelStyle = layout === 'horizontal' && ctx.labelCol && ctx.labelCol.span ? {
    flex: `0 0 ${ctx.labelCol.span / 24 * 100}%`,
    maxWidth: `${ctx.labelCol.span / 24 * 100}%`
  } : undefined;
  const itemCls = ['aiui-form-item', error && 'aiui-form-item--error', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: itemCls,
    style: style
  }, label != null && /*#__PURE__*/React.createElement("label", {
    className: ['aiui-form-item__label', showReq && 'aiui-form-item__label--req', ctx.colon && layout !== 'vertical' && 'aiui-form-item__label--colon'].filter(Boolean).join(' '),
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "aiui-form-item__control"
  }, control, /*#__PURE__*/React.createElement("div", {
    className: "aiui-form-item__explain"
  }, error || help || '')));
}
Form.Item = FormItem;
Form.useForm = useForm;
Object.assign(__ds_scope, { useForm, Form, FormItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Form/Form.jsx", error: String((e && e.message) || e) }); }

// components/Icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — the 10 built-in NookPhone app glyphs (illustrated SVGs).
 * Renders a <span> with a background-image. Also accepts an arbitrary
 * `src` (used by Wallet for the coin-bag PNG).
 */

// Resolve bundled assets relative to the loaded _ds_bundle.js so paths work
// from cards, UI kits and consuming projects alike.
function aiuiAsset(rel) {
  if (typeof document === 'undefined') return rel;
  const s = document.querySelector('script[src*="_ds_bundle.js"]');
  if (s && s.src) return s.src.replace(/_ds_bundle\.js.*$/, '') + rel;
  return rel;
}
const ICON_FILES = {
  'icon-miles': 'icon-miles.svg',
  'icon-camera': 'icon-camera.svg',
  'icon-chat': 'icon-chat.svg',
  'icon-critterpedia': 'icon-critterpedia.svg',
  'icon-design': 'icon-design.svg',
  'icon-diy': 'icon-diy.svg',
  'icon-helicopter': 'icon-helicopter.svg',
  'icon-map': 'icon-map.svg',
  'icon-shopping': 'icon-shopping.svg',
  'icon-variant': 'icon-variant.svg'
};
const ICON_LIST = [{
  name: 'icon-miles',
  label: 'NookMiles'
}, {
  name: 'icon-camera',
  label: 'Camera'
}, {
  name: 'icon-chat',
  label: 'Chat'
}, {
  name: 'icon-critterpedia',
  label: 'Critterpedia'
}, {
  name: 'icon-design',
  label: 'Design'
}, {
  name: 'icon-diy',
  label: 'DIY'
}, {
  name: 'icon-helicopter',
  label: 'Helicopter'
}, {
  name: 'icon-map',
  label: 'Map'
}, {
  name: 'icon-shopping',
  label: 'Shopping'
}, {
  name: 'icon-variant',
  label: 'Variant'
}];
const CSS = `
.aiui-icon {
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.aiui-icon--bounce:hover { animation: aiui-icon-bounce 0.3s ease-in-out forwards; }
@keyframes aiui-icon-bounce {
  0%   { transform: scale(1) rotate(0deg); }
  50%  { transform: scale(1.2) rotate(-5deg); }
  100% { transform: scale(1.1) rotate(-4deg); }
}
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-icon-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-icon-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Icon({
  name,
  src,
  size = 24,
  bounce = false,
  className = '',
  style,
  ...rest
}) {
  const url = src || (name && ICON_FILES[name] ? aiuiAsset('assets/icons/' + ICON_FILES[name]) : null);
  const cls = ['aiui-icon', bounce && 'aiui-icon--bounce', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      width: size,
      height: size,
      ...(url ? {
        backgroundImage: `url(${url})`
      } : null),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { aiuiAsset, ICON_LIST, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/Input/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — pill text field. 2.5px parchment border, warm placeholder, yellow
 * focus halo (never blue). The 3D pixel-stack shadow is opt-in via `shadow`.
 * Supports prefix/suffix, allowClear and error/warning status.
 */

const CSS = `
.aiui-input {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  width: 100%;
  background: rgb(247, 243, 223);
  border: 2.5px solid #c4b89e;
  font-family: var(--animal-font-family);
  transition: all 0.15s cubic-bezier(0.4,0,0.2,1);
}
.aiui-input__el {
  flex: 1 1 auto; min-width: 0;
  border: none; outline: none; background: transparent;
  font-family: inherit; font-size: inherit;
  color: #725d42; font-weight: 500; letter-spacing: 0.01em;
}
.aiui-input__el::placeholder { color: #c4b89e; font-weight: 400; }
.aiui-input__affix { color: #a0936e; display: inline-flex; align-items: center; flex: none; }
.aiui-input__affix--prefix { margin-right: 6px; }
.aiui-input__affix--suffix { margin-left: 6px; }

.aiui-input--small  { height: 32px; padding: 0 14px; font-size: 12px; border-radius: 40px; }
.aiui-input--middle { height: 40px; padding: 0 18px; font-size: 14px; border-radius: 50px; }
.aiui-input--large  { height: 48px; padding: 0 22px; font-size: 16px; border-radius: 50px; border-width: 3px; }

.aiui-input:hover:not(.aiui-input--disabled) { border-color: #a89878; }
.aiui-input--shadow { box-shadow: 0 3px 0 0 #d4c9b4; }
.aiui-input--shadow.aiui-input--small { box-shadow: 0 2px 0 0 #d4c9b4; }
.aiui-input--shadow.aiui-input--large { box-shadow: 0 4px 0 0 #d4c9b4; }
.aiui-input--shadow:hover:not(.aiui-input--disabled) { box-shadow: 0 3px 0 0 #c4b89e; }

.aiui-input:focus-within:not(.aiui-input--disabled) {
  border-color: #ffcc00;
  box-shadow: 0 0 0 3px rgba(255,204,0,0.15);
}
.aiui-input--shadow:focus-within:not(.aiui-input--disabled) {
  box-shadow: 0 3px 0 0 #e0b800, 0 0 0 3px rgba(255,204,0,0.15);
}

.aiui-input--error   { border-color: #e05a5a; box-shadow: 0 3px 0 0 #c94444; }
.aiui-input--warning { border-color: #dba90e; box-shadow: 0 3px 0 0 #dba90e; }

.aiui-input--disabled { background: #ece8dc; border-color: #d4c9b4; opacity: 0.6; cursor: not-allowed; }
.aiui-input--disabled .aiui-input__el { color: #c4b89e; cursor: not-allowed; }

.aiui-input__clear {
  flex: none; margin-left: 4px; width: 20px; height: 20px;
  display: inline-flex; align-items: center; justify-content: center;
  color: #c4b89e; font-size: 13px; font-weight: 700; line-height: 1;
  border: none; background: transparent; border-radius: 50%; cursor: pointer;
  transition: all 0.15s;
}
.aiui-input__clear:hover { color: #725d42; background: rgba(114,93,66,0.1); }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-input-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-input-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Input({
  size = 'middle',
  prefix,
  suffix,
  allowClear = false,
  status,
  shadow = false,
  disabled = false,
  value,
  defaultValue,
  onChange,
  onClear,
  className = '',
  style,
  ...rest
}) {
  const controlled = value !== undefined;
  const [inner, setInner] = React.useState(defaultValue ?? '');
  const inputRef = React.useRef(null);
  const current = controlled ? value : inner;
  const handleChange = e => {
    if (!controlled) setInner(e.target.value);
    onChange && onChange(e);
  };
  const handleClear = () => {
    if (!controlled) setInner('');
    if (inputRef.current) {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      setter.call(inputRef.current, '');
      inputRef.current.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      inputRef.current.focus();
    }
    onClear && onClear();
  };
  const cls = ['aiui-input', `aiui-input--${size}`, shadow && 'aiui-input--shadow', status === 'error' && 'aiui-input--error', status === 'warning' && 'aiui-input--warning', disabled && 'aiui-input--disabled', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: style
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    className: "aiui-input__affix aiui-input__affix--prefix"
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    ref: inputRef,
    className: "aiui-input__el",
    disabled: disabled,
    value: controlled ? value : undefined,
    defaultValue: controlled ? undefined : defaultValue,
    onChange: handleChange
  }, rest)), allowClear && current ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "aiui-input__clear",
    "aria-label": "clear",
    onClick: handleClear
  }, "\xD7") : null, suffix ? /*#__PURE__*/React.createElement("span", {
    className: "aiui-input__affix aiui-input__affix--suffix"
  }, suffix) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Input/Input.jsx", error: String((e && e.message) || e) }); }

// components/Loading/Loading.jsx
try { (() => {
/**
 * Loading — self-contained full-bleed loading scene: a mint-teal SVG spinner on
 * a dark field. Fades out via an expanding radial mask when `active` goes false.
 * Position it as an overlay sibling (absolute, fills nearest positioned parent).
 */

const CSS = `
.aiui-loading {
  position: absolute; inset: 0; overflow: hidden; background: #1c160f;
  display: flex; align-items: center; justify-content: center;
  transition: opacity 0.5s ease;
  --mask-r: 0%;
  -webkit-mask: radial-gradient(circle at center, transparent var(--mask-r), #000 calc(var(--mask-r) + 1px));
  mask: radial-gradient(circle at center, transparent var(--mask-r), #000 calc(var(--mask-r) + 1px));
  transition: --mask-r 0.6s ease, opacity 0.5s ease;
}
.aiui-loading--out { --mask-r: 120%; opacity: 0; pointer-events: none; }
.aiui-loading__svg { width: 56px; height: 56px; animation: aiui-loading-rotate 1s linear infinite; color: #19c8b9; }
.aiui-loading__circle {
  stroke: currentColor; stroke-linecap: round; fill: none; stroke-width: 5;
  animation: aiui-loading-dash 1.5s ease-in-out infinite;
}
@keyframes aiui-loading-rotate { to { transform: rotate(360deg); } }
@keyframes aiui-loading-dash {
  0%   { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
  50%  { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
  100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
}
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-loading-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-loading-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Loading({
  active = true,
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['aiui-loading', !active && 'aiui-loading--out', className].filter(Boolean).join(' '),
    style: style,
    role: "status",
    "aria-live": "polite",
    "aria-busy": active
  }, /*#__PURE__*/React.createElement("svg", {
    className: "aiui-loading__svg",
    viewBox: "0 0 50 50"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "aiui-loading__circle",
    cx: "25",
    cy: "25",
    r: "20"
  })));
}
Object.assign(__ds_scope, { Loading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Loading/Loading.jsx", error: String((e && e.message) || e) }); }

// components/Modal/Modal.jsx
try { (() => {
/**
 * Modal — organic SVG-blob dialog. The content area is clipped to an irregular
 * soft silhouette (never a plain rounded rectangle). Game-yellow confirm button.
 * Optional typewriter reveal of string bodies.
 */

const CLIP_PATH = 'M0.501,0.005 L0.501,0.005 L0.523,0.005 L0.549,0.006 C0.704,0.01,0.796,0.017,0.825,0.027 L0.827,0.028 ' + 'C0.872,0.045,0.939,0.044,0.978,0.17 C1,0.254,1,0.365,0.99,0.505 L0.988,0.513 ' + 'C0.979,0.558,0.971,0.598,0.965,0.633 C0.956,0.689,0.979,0.77,0.964,0.865 ' + 'C0.953,0.928,0.921,0.966,0.869,0.979 C0.821,0.986,0.773,0.992,0.726,0.995 L0.712,0.996 L0.694,0.997 ' + 'C0.648,1,0.586,1,0.507,1 L0.501,1 L0.464,1 C0.385,1,0.325,0.998,0.283,0.995 ' + 'C0.234,0.992,0.184,0.987,0.133,0.979 C0.081,0.966,0.05,0.928,0.039,0.865 ' + 'C0.023,0.77,0.047,0.689,0.037,0.633 C0.031,0.595,0.023,0.552,0.013,0.505 ' + 'C-0.006,0.365,-0.002,0.254,0.024,0.17 C0.064,0.045,0.13,0.045,0.174,0.028 L0.175,0.028 ' + 'C0.204,0.017,0.303,0.009,0.474,0.005 L0.501,0.005';
const CSS = `
.aiui-modal-mask {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(0,0,0,0.35); display: flex; align-items: center; justify-content: center;
  animation: aiui-fade-in 0.25s ease; font-family: var(--animal-font-family);
}
.aiui-modal {
  max-width: calc(100vw - 32px); max-height: calc(100vh - 64px);
  animation: aiui-zoom-in 0.3s ease;
}
.aiui-modal__clip {
  clip-path: url(#animal-modal-clip);
  background: rgb(247,243,223); color: rgb(128,115,89);
  padding: 48px 48px 32px 48px; box-sizing: border-box; overflow: auto; max-height: calc(100vh - 64px);
}
.aiui-modal__title { font-size: 28px; font-weight: 700; color: rgba(114,93,66,1); padding-bottom: 15px; }
.aiui-modal__close {
  position: absolute; top: 26px; right: 30px;
  width: 32px; height: 32px; font-size: 22px; line-height: 1;
  color: rgba(114,93,66,0.6); border: none; background: transparent; border-radius: 50%;
  cursor: pointer; transition: all 0.2s;
}
.aiui-modal__close:hover { background: rgba(114,93,66,0.1); color: rgba(114,93,66,1); }
.aiui-modal__body { font-size: 20px; font-weight: 600; line-height: 1.6; color: #8a7b66; padding-bottom: 20px; }
.aiui-modal__footer { display: flex; justify-content: flex-end; gap: 12px; }
.aiui-modal__btn {
  height: 40px; padding: 0 24px; font-size: 18px; font-family: inherit; font-weight: 600;
  border: 2px solid rgba(114,93,66,0.3); border-radius: 40px; background: transparent;
  color: rgba(114,93,66,1); cursor: pointer; transition: all 0.2s; line-height: 1;
}
.aiui-modal__btn:hover { border-color: rgba(114,93,66,0.6); background: rgba(114,93,66,0.08); }
.aiui-modal__btn--ok { color: rgba(114,93,66,1); background: rgba(255,204,0,1); border-color: rgba(255,204,0,1); }
.aiui-modal__btn--ok:hover { background: rgba(255,204,0,0.85); border-color: rgba(255,204,0,0.85); }
@keyframes aiui-fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes aiui-zoom-in { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-modal-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-modal-style';
  el.textContent = CSS;
  document.head.appendChild(el);
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('style', 'position:absolute;width:0;height:0');
  svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = `<defs><clipPath id="animal-modal-clip" clipPathUnits="objectBoundingBox"><path d="${CLIP_PATH}"/></clipPath></defs>`;
  document.body.appendChild(svg);
}
function Typed({
  text,
  speed
}) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    setN(0);
    const t = setInterval(() => setN(v => v >= text.length ? (clearInterval(t), v) : v + 1), speed);
    return () => clearInterval(t);
  }, [text, speed]);
  return text.slice(0, n);
}
function Modal({
  open,
  title,
  width = 520,
  maskClosable = true,
  footer,
  onClose,
  onOk,
  typewriter = true,
  typeSpeed = 80,
  children,
  className = ''
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === 'Escape' && onClose && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  const body = typewriter && typeof children === 'string' ? /*#__PURE__*/React.createElement(Typed, {
    text: children,
    speed: typeSpeed
  }) : children;
  return /*#__PURE__*/React.createElement("div", {
    className: "aiui-modal-mask",
    onClick: () => maskClosable && onClose && onClose()
  }, /*#__PURE__*/React.createElement("div", {
    className: ['aiui-modal', className].filter(Boolean).join(' '),
    style: {
      width,
      position: 'relative'
    },
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "aiui-modal__clip"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "aiui-modal__title"
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    className: "aiui-modal__body"
  }, body), footer === null ? null : footer ? /*#__PURE__*/React.createElement("div", {
    className: "aiui-modal__footer"
  }, footer) : /*#__PURE__*/React.createElement("div", {
    className: "aiui-modal__footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "aiui-modal__btn",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "aiui-modal__btn aiui-modal__btn--ok",
    onClick: onOk
  }, "OK"))), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "aiui-modal__close",
    "aria-label": "close",
    onClick: onClose
  }, "\xD7") : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Modal/Modal.jsx", error: String((e && e.message) || e) }); }

// components/Phone/Phone.jsx
try { (() => {
/**
 * Phone — decorative NookPhone. Fixed 527×788 device with a 3×3 app grid, a
 * live AM/PM clock with blinking colon, and hover icon bounce. Not configurable.
 */

function assetBase(rel) {
  if (typeof document === 'undefined') return rel;
  const s = document.querySelector('script[src*="_ds_bundle.js"]');
  if (s && s.src) return s.src.replace(/_ds_bundle\.js.*$/, '') + rel;
  return rel;
}
const APPS = [{
  id: 'camera',
  icon: 'icon-camera',
  color: '#B77DEE',
  badge: true
}, {
  id: 'app',
  icon: 'icon-miles',
  color: '#889DF0',
  offset: true
}, {
  id: 'critterpedia',
  icon: 'icon-critterpedia',
  color: '#F7CD67',
  size: '85% auto'
}, {
  id: 'diy',
  icon: 'icon-diy',
  color: '#E59266'
}, {
  id: 'shopping',
  icon: 'icon-design',
  color: '#F8A6B2'
}, {
  id: 'variant',
  icon: 'icon-map',
  color: '#82D5BB',
  badge: true,
  size: '72% auto'
}, {
  id: 'design',
  icon: 'icon-variant',
  color: '#8AC68A',
  size: '65% auto'
}, {
  id: 'map',
  icon: 'icon-helicopter',
  color: '#FC736D'
}, {
  id: 'chat',
  icon: 'icon-chat',
  color: '#D1DA49'
}];
const CSS = `
.aiui-phone { width: 527px; height: 788px; background: #f8f4e8; border-radius: 136px; overflow: hidden; font-family: var(--animal-font-family); }
.aiui-phone__home { height: 100%; display: flex; flex-direction: column; align-items: center; padding-top: 40px; box-sizing: border-box; }
.aiui-phone__date { width: 100%; text-align: center; padding: 0 70px 31px; box-sizing: border-box; }
.aiui-phone__dateHead { display: flex; justify-content: space-between; align-items: center; font-size: 32px; font-weight: 800; letter-spacing: 2px; color: #dddbcc; }
.aiui-phone__blink { animation: aiui-phone-blink 1s steps(1) infinite; }
@keyframes aiui-phone-blink { 0%,50% { opacity: 1; } 51%,100% { opacity: 0; } }
.aiui-phone__day { font-size: 48px; font-weight: 800; color: #725c4e; letter-spacing: 2px; margin-top: 20px; }
.aiui-phone__wifi { width: 79px; height: 29px; background: no-repeat center/contain; }
.aiui-phone__loc { width: 36px; height: 36px; background: no-repeat center/contain; }
.aiui-phone__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; padding: 8px; flex: 1; align-content: center; justify-content: center; }
.aiui-phone__app { position: relative; width: 123px; height: 123px; border-radius: 45px; display: flex; align-items: center; justify-content: center; }
.aiui-phone__app--offset { overflow: hidden; }
.aiui-phone__icon { width: 100%; height: 100%; background: no-repeat center; background-size: 70% auto; }
.aiui-phone__icon--offset { transform: translateY(15px); }
.aiui-phone__app:hover .aiui-phone__icon { animation: aiui-phone-bounce 0.3s ease-in-out forwards; }
.aiui-phone__badge { position: absolute; top: 0; left: 0; width: 28px; height: 28px; border-radius: 50%; background: #ff544a; border: 5px solid #f8f4e8; }
.aiui-phone__page { display: flex; justify-content: center; align-items: center; margin-top: 74px; }
.aiui-phone__pageimg { width: 65px; height: 32px; background: no-repeat center/contain; }
@keyframes aiui-phone-bounce { 0% { transform: scale(1) rotate(0); } 50% { transform: scale(1.2) rotate(-5deg); } 100% { transform: scale(1.1) rotate(-4deg); } }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-phone-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-phone-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Phone({
  className = '',
  style
}) {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const h12 = now.getHours() % 12 || 12;
  const mm = now.getMinutes().toString().padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  return /*#__PURE__*/React.createElement("div", {
    className: ['aiui-phone', className].filter(Boolean).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "aiui-phone__home"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aiui-phone__date"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aiui-phone__dateHead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aiui-phone__wifi",
    style: {
      backgroundImage: `url(${assetBase('assets/icons/wifi.svg')})`
    }
  }), /*#__PURE__*/React.createElement("div", null, h12, /*#__PURE__*/React.createElement("span", {
    className: "aiui-phone__blink"
  }, ":"), mm, ampm), /*#__PURE__*/React.createElement("span", {
    className: "aiui-phone__loc",
    style: {
      backgroundImage: `url(${assetBase('assets/icons/location.svg')})`
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "aiui-phone__day"
  }, "Welcome!")), /*#__PURE__*/React.createElement("div", {
    className: "aiui-phone__grid"
  }, APPS.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    className: ['aiui-phone__app', a.offset && 'aiui-phone__app--offset'].filter(Boolean).join(' '),
    style: {
      backgroundColor: a.color
    }
  }, a.badge && /*#__PURE__*/React.createElement("span", {
    className: "aiui-phone__badge"
  }), /*#__PURE__*/React.createElement("span", {
    className: ['aiui-phone__icon', a.offset && 'aiui-phone__icon--offset'].filter(Boolean).join(' '),
    style: {
      backgroundImage: `url(${assetBase('assets/icons/' + a.icon + '.svg')})`,
      backgroundSize: a.offset ? '100% auto' : a.size || '70% auto'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "aiui-phone__page"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aiui-phone__pageimg",
    style: {
      backgroundImage: `url(${assetBase('assets/icons/page.svg')})`
    }
  }))));
}
Object.assign(__ds_scope, { Phone });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Phone/Phone.jsx", error: String((e && e.message) || e) }); }

// components/Radio/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Radio — group single-select. Outer control is a heavily-rounded square
 * (not a perfect circle), filling mint-teal with a popping white dot when
 * selected. Warmer yellow focus ring (#f5c31c) than Checkbox.
 */

const CSS = `
.aiui-radio-group { display: flex; flex-wrap: wrap; gap: 12px; font-family: var(--animal-font-family); }
.aiui-radio-group--vertical { flex-direction: column; flex-wrap: nowrap; gap: 8px; }
.aiui-radio {
  display: inline-flex; align-items: center; gap: 8px; cursor: pointer;
  transition: all 0.15s ease;
}
.aiui-radio__box {
  box-sizing: border-box; flex: none;
  display: inline-flex; align-items: center; justify-content: center;
  background: rgb(247,243,223); border: 2px solid #c4b89e;
  transition: all 0.15s ease;
}
.aiui-radio:hover:not(.aiui-radio--disabled) .aiui-radio__box { border-color: #19c8b9; transform: translateY(-1px); }
.aiui-radio__input:focus-visible + .aiui-radio__box { outline: 2px solid #f5c31c; outline-offset: 2px; }
.aiui-radio--checked .aiui-radio__box { background: #19c8b9; border-color: #11a89b; }
.aiui-radio__dot { background: #fff; border-radius: 50%; animation: aiui-pop 0.15s ease; }
.aiui-radio__label { color: #725d42; font-weight: 500; letter-spacing: 0.01em; }
.aiui-radio--checked .aiui-radio__label { color: #794f27; }
.aiui-radio--disabled { cursor: not-allowed; opacity: 0.55; }
.aiui-radio--disabled .aiui-radio__box { background: #f0ece2; border-color: #d4c9b4; transform: none !important; }
.aiui-radio--disabled .aiui-radio__label { color: #c4b89e; }
.aiui-radio__input { position: absolute; opacity: 0; width: 0; height: 0; }

.aiui-radio--small  .aiui-radio__box { width: 18px; height: 18px; border-radius: 12px; }
.aiui-radio--small  .aiui-radio__dot { width: 8px; height: 8px; }
.aiui-radio--small  .aiui-radio__label { font-size: 12px; }
.aiui-radio--middle .aiui-radio__box { width: 22px; height: 22px; border-radius: 14px; }
.aiui-radio--middle .aiui-radio__dot { width: 10px; height: 10px; }
.aiui-radio--middle .aiui-radio__label { font-size: 14px; }
.aiui-radio--large  .aiui-radio__box { width: 28px; height: 28px; border-radius: 16px; }
.aiui-radio--large  .aiui-radio__dot { width: 14px; height: 14px; }
.aiui-radio--large  .aiui-radio__label { font-size: 16px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-radio-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-radio-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Radio({
  options = [],
  value,
  defaultValue,
  size = 'middle',
  disabled = false,
  direction = 'horizontal',
  onChange,
  className = '',
  style,
  ...rest
}) {
  const controlled = value !== undefined;
  const [inner, setInner] = React.useState(defaultValue);
  const selected = controlled ? value : inner;
  const pick = val => {
    if (!controlled) setInner(val);
    onChange && onChange(val);
  };
  const groupCls = ['aiui-radio-group', direction === 'vertical' && 'aiui-radio-group--vertical', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: groupCls,
    style: style,
    role: "radiogroup"
  }, rest), options.map(opt => {
    const isChecked = selected === opt.value;
    const isDisabled = disabled || opt.disabled;
    const cls = ['aiui-radio', `aiui-radio--${size}`, isChecked && 'aiui-radio--checked', isDisabled && 'aiui-radio--disabled'].filter(Boolean).join(' ');
    return /*#__PURE__*/React.createElement("label", {
      className: cls,
      key: opt.value
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      className: "aiui-radio__input",
      checked: isChecked,
      disabled: isDisabled,
      onChange: () => pick(opt.value)
    }), /*#__PURE__*/React.createElement("span", {
      className: "aiui-radio__box"
    }, isChecked ? /*#__PURE__*/React.createElement("span", {
      className: "aiui-radio__dot"
    }) : null), /*#__PURE__*/React.createElement("span", {
      className: "aiui-radio__label"
    }, opt.label));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Radio/Radio.jsx", error: String((e && e.message) || e) }); }

// components/Select/Select.jsx
try { (() => {
/**
 * Select — controlled dropdown. Parchment pill trigger, cream dropdown panel,
 * mint-teal active option. Keyboard: ↑/↓ move, Enter confirm, Esc close.
 */

const CSS = `
.aiui-select { position: relative; display: inline-block; min-width: 140px; font-family: var(--animal-font-family); }
.aiui-select__trigger {
  box-sizing: border-box; width: 100%;
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  height: 40px; padding: 0 14px;
  background: rgb(247,243,223); border: 2px solid #c4b89e; border-radius: 14px;
  color: #725d42; font-size: 14px; font-weight: 500; letter-spacing: 0.01em;
  cursor: pointer; transition: all 0.15s cubic-bezier(0.4,0,0.2,1); text-align: left;
}
.aiui-select__trigger:hover:not(:disabled) { border-color: #a89878; }
.aiui-select__trigger:focus-visible { outline: none; border-color: #ffcc00; box-shadow: 0 0 0 3px rgba(255,204,0,0.15); }
.aiui-select--open .aiui-select__trigger { border-color: #ffcc00; box-shadow: 0 0 0 3px rgba(255,204,0,0.15); }
.aiui-select__trigger:disabled { opacity: 0.6; cursor: not-allowed; background: #ece8dc; border-color: #d4c9b4; }
.aiui-select__ph { color: #c4b89e; font-weight: 400; }
.aiui-select__chev { flex: none; color: #a0936e; font-size: 11px; transition: transform 0.2s; }
.aiui-select--open .aiui-select__chev { transform: rotate(180deg); }

.aiui-select__panel {
  position: absolute; top: calc(100% + 4px); left: 0; right: 0;
  max-height: 240px; overflow-y: auto;
  background: #fffcef; border: 2px solid #c4b89e; border-radius: 14px;
  box-shadow: 0 6px 18px rgba(61,52,40,0.12); z-index: 1000; padding: 5px;
  animation: aiui-fade-up 0.18s ease;
}
.aiui-select__opt {
  padding: 9px 12px; border-radius: 10px; cursor: pointer; color: #725d42; font-size: 14px; font-weight: 500;
  transition: background 0.12s;
}
.aiui-select__opt:hover, .aiui-select__opt--active { background: #e6f9f6; color: #19c8b9; }
.aiui-select__opt--selected { font-weight: 600; }
@keyframes aiui-fade-up { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-select-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-select-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Select({
  options = [],
  value,
  onChange,
  placeholder = 'Select…',
  disabled = false,
  className = '',
  style
}) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(-1);
  const rootRef = React.useRef(null);
  const selected = options.find(o => o.key === value);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const commit = key => {
    onChange && onChange(key);
    setOpen(false);
  };
  const onKey = e => {
    if (disabled) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) return setOpen(true);
      setActive(a => {
        const n = options.length;
        return e.key === 'ArrowDown' ? (a + 1) % n : (a - 1 + n) % n;
      });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (open && active >= 0) commit(options[active].key);else setOpen(o => !o);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: rootRef,
    className: ['aiui-select', open && 'aiui-select--open', className].filter(Boolean).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "aiui-select__trigger",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    onKeyDown: onKey,
    "aria-haspopup": "listbox",
    "aria-expanded": open
  }, selected ? /*#__PURE__*/React.createElement("span", null, selected.label) : /*#__PURE__*/React.createElement("span", {
    className: "aiui-select__ph"
  }, placeholder), /*#__PURE__*/React.createElement("span", {
    className: "aiui-select__chev"
  }, "\u25BC")), open && /*#__PURE__*/React.createElement("div", {
    className: "aiui-select__panel",
    role: "listbox"
  }, options.map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: o.key,
    role: "option",
    "aria-selected": o.key === value,
    className: ['aiui-select__opt', i === active && 'aiui-select__opt--active', o.key === value && 'aiui-select__opt--selected'].filter(Boolean).join(' '),
    onMouseEnter: () => setActive(i),
    onClick: () => commit(o.key)
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Select/Select.jsx", error: String((e && e.message) || e) }); }

// components/Switch/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — pill toggle. Track carries an inset shadow (no outer 3D shadow);
 * the handle is a flat bordered circle, vertically centered. Green when ON.
 */

const CSS = `
.aiui-switch {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  min-width: 52px;
  height: 28px;
  padding: 0;
  border: 2.5px solid #c4b89e;
  border-radius: 50px;
  background: #d4c9b4;
  box-shadow: inset 0 2px 4px rgba(114,93,66,0.15);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
  font-family: var(--animal-font-family);
  vertical-align: middle;
}
.aiui-switch:focus-visible { outline: 2px solid #ffcc00; outline-offset: 2px; }
.aiui-switch__handle {
  position: absolute; top: 50%; left: 2px;
  width: 21px; height: 21px;
  transform: translateY(-50%);
  background: rgb(247,243,223);
  border: 2.5px solid #bdaea0;
  border-radius: 50%;
  transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
}
.aiui-switch__inner {
  font-size: 11px; font-weight: 700; color: #fff; line-height: 1;
  letter-spacing: 0.02em; text-shadow: 0 1px 1px rgba(0,0,0,0.1);
  padding: 0 8px 0 28px; white-space: nowrap;
}
.aiui-switch--on { background: #86d67a; border-color: #6fba2c; box-shadow: inset 0 2px 4px rgba(90,158,30,0.2); }
.aiui-switch--on .aiui-switch__handle { left: calc(100% - 24px); border-color: #5a9e1e; }
.aiui-switch--on .aiui-switch__inner { padding: 0 28px 0 8px; }

.aiui-switch--small { min-width: 38px; height: 20px; border-width: 2px; }
.aiui-switch--small .aiui-switch__handle { width: 14px; height: 14px; top: 1px; left: 1px; transform: none; box-shadow: 0 2px 0 0 #bdaea0; border-width: 2px; }
.aiui-switch--small.aiui-switch--on .aiui-switch__handle { left: calc(100% - 16px); box-shadow: 0 2px 0 0 #5a9e1e; }
.aiui-switch--small .aiui-switch__inner { font-size: 9px; padding: 0 6px 0 20px; }
.aiui-switch--small.aiui-switch--on .aiui-switch__inner { padding: 0 20px 0 6px; }

.aiui-switch--disabled { opacity: 0.5; cursor: not-allowed; }

.aiui-switch__spin {
  position: absolute; top: 50%; left: 4px; transform: translateY(-50%);
  width: 11px; height: 11px; border: 2px solid #a89878; border-right-color: transparent;
  border-radius: 50%; animation: aiui-switch-spin 0.6s linear infinite;
}
.aiui-switch--on .aiui-switch__spin { border-color: #6fba2c; border-right-color: transparent; left: auto; right: 4px; }
@keyframes aiui-switch-spin { to { transform: translateY(-50%) rotate(360deg); } }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-switch-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-switch-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Switch({
  checked,
  defaultChecked = false,
  size = 'default',
  disabled = false,
  loading = false,
  checkedChildren,
  unCheckedChildren,
  onChange,
  className = '',
  style,
  ...rest
}) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(defaultChecked);
  const on = controlled ? checked : inner;
  const toggle = () => {
    if (disabled || loading) return;
    const next = !on;
    if (!controlled) setInner(next);
    onChange && onChange(next);
  };
  const cls = ['aiui-switch', size === 'small' && 'aiui-switch--small', on && 'aiui-switch--on', (disabled || loading) && 'aiui-switch--disabled', className].filter(Boolean).join(' ');
  const label = on ? checkedChildren : unCheckedChildren;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    className: cls,
    style: style,
    disabled: disabled,
    onClick: toggle
  }, rest), label != null ? /*#__PURE__*/React.createElement("span", {
    className: "aiui-switch__inner"
  }, label) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: '100%'
    }
  }), loading ? /*#__PURE__*/React.createElement("span", {
    className: "aiui-switch__spin"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "aiui-switch__handle"
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Switch/Switch.jsx", error: String((e && e.message) || e) }); }

// components/Table/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Table — borderless parchment data table. Dashed row dividers, optional
 * zebra striping, and a diagonal teal-stripe row hover. Empty + loading states.
 */

const CSS = `
.aiui-table-wrap {
  position: relative;
  box-sizing: border-box;
  background: rgb(247,243,223);
  border-radius: 20px;
  padding: 6px;
  font-family: var(--animal-font-family);
  overflow: auto;
}
.aiui-table { width: 100%; border-collapse: collapse; }
.aiui-table th {
  padding: 16px 20px; text-align: left;
  font-size: 14px; font-weight: 700; color: #725d42; letter-spacing: 0.02em;
  border-bottom: 1px dashed rgb(232,222,202); white-space: nowrap;
}
.aiui-table td {
  padding: 14px 20px;
  font-size: 14px; font-weight: 500; color: #725d42; line-height: 1.6;
  border-bottom: 1px dashed rgb(240,232,216);
}
.aiui-table tbody tr:last-child td { border-bottom: none; }
.aiui-table--striped tbody tr:nth-child(even) td { background: rgba(248,248,240,0.6); }
.aiui-table tbody tr:hover td {
  background: repeating-linear-gradient(-45deg, rgba(25,200,185,0.6) 0 10px, rgba(14,196,182,0.6) 10px 20px);
  background-size: 28.28px 28.28px;
  color: #3d2e1e;
}
.aiui-table tbody tr:hover td:first-child { border-top-left-radius: 16px; border-bottom-left-radius: 16px; }
.aiui-table tbody tr:hover td:last-child { border-top-right-radius: 16px; border-bottom-right-radius: 16px; }
.aiui-table__empty { padding: 60px 20px; text-align: center; color: #9f927d; font-weight: 500; }
.aiui-table__loading {
  position: absolute; inset: 6px; border-radius: 16px;
  background: rgba(247,243,223,0.8); backdrop-filter: blur(2px);
  display: flex; align-items: center; justify-content: center; z-index: 5;
}
.aiui-table__spin {
  width: 34px; height: 34px; border: 4px solid rgba(25,200,185,0.25);
  border-top-color: #19c8b9; border-radius: 50%; animation: aiui-table-spin 0.9s linear infinite;
}
@keyframes aiui-table-spin { to { transform: rotate(360deg); } }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-table-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-table-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Table({
  columns = [],
  dataSource = [],
  rowKey = 'key',
  striped = true,
  showHeader = true,
  loading = false,
  emptyText = 'No data yet',
  onRow,
  className = '',
  style
}) {
  const keyOf = (rec, i) => typeof rowKey === 'function' ? rowKey(rec) : rec[rowKey] ?? i;
  return /*#__PURE__*/React.createElement("div", {
    className: ['aiui-table-wrap', className].filter(Boolean).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("table", {
    className: ['aiui-table', striped && 'aiui-table--striped'].filter(Boolean).join(' ')
  }, showHeader && /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((col, ci) => /*#__PURE__*/React.createElement("th", {
    key: ci,
    style: {
      textAlign: col.align || 'left',
      ...col.style
    }
  }, col.title)))), /*#__PURE__*/React.createElement("tbody", null, dataSource.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "aiui-table__empty",
    colSpan: columns.length || 1
  }, emptyText)) : dataSource.map((rec, ri) => /*#__PURE__*/React.createElement("tr", _extends({
    key: keyOf(rec, ri)
  }, onRow ? onRow(rec, ri) : null), columns.map((col, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      textAlign: col.align || 'left',
      ...col.style
    }
  }, col.render ? col.render(col.dataIndex ? rec[col.dataIndex] : undefined, rec, ri) : col.dataIndex ? rec[col.dataIndex] : null)))))), loading && /*#__PURE__*/React.createElement("div", {
    className: "aiui-table__loading"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aiui-table__spin"
  })));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Table/Table.jsx", error: String((e && e.message) || e) }); }

// components/Tabs/Tabs.jsx
try { (() => {
/**
 * Tabs — parchment tab strip with a solid teal active pill and a soft
 * fade on content switch. Controlled or uncontrolled.
 */

const CSS = `
.aiui-tabs {
  background: rgb(247,243,223); border-radius: 20px; border: 2px solid #9f927d;
  overflow: hidden; font-family: var(--animal-font-family);
}
.aiui-tabs__list { display: flex; gap: 4px; padding: 12px; background: rgba(255,255,255,0.6); border-bottom: 2px solid #c4b89e; flex-wrap: wrap; }
.aiui-tabs__item {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 14px; background: transparent; border: none; border-radius: 50px;
  cursor: pointer; font-size: 14px; font-weight: 500; color: #8a7b66;
  transition: all 0.2s ease; font-family: inherit;
}
.aiui-tabs__item:hover { background: rgba(25,200,185,0.1); color: #725d42; }
.aiui-tabs__item--active { background: #0cc0b5; color: #fff9e3; font-weight: 600; }
.aiui-tabs__content { padding: 24px; color: #725d42; line-height: 1.6; animation: aiui-tabs-fade 0.25s ease; }
@keyframes aiui-tabs-fade { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-tabs-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-tabs-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Tabs({
  items = [],
  defaultActiveKey,
  activeKey,
  onChange,
  className = '',
  style
}) {
  const controlled = activeKey !== undefined;
  const [inner, setInner] = React.useState(defaultActiveKey ?? (items[0] && items[0].key));
  const current = controlled ? activeKey : inner;
  const pick = key => {
    if (!controlled) setInner(key);
    onChange && onChange(key);
  };
  const active = items.find(t => t.key === current) || items[0];
  return /*#__PURE__*/React.createElement("div", {
    className: ['aiui-tabs', className].filter(Boolean).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "aiui-tabs__list",
    role: "tablist"
  }, items.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.key,
    type: "button",
    role: "tab",
    "aria-selected": t.key === current,
    className: ['aiui-tabs__item', t.key === current && 'aiui-tabs__item--active'].filter(Boolean).join(' '),
    onClick: () => pick(t.key)
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    className: "aiui-tabs__content",
    role: "tabpanel",
    key: current
  }, active && active.children));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tabs/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/Tag/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — full-capsule label sharing the Card 12-color palette. 3 sizes ×
 * 3 variants (solid / outlined / dashed), optionally closable or clickable.
 */

const HUES = {
  'app-pink': '#f8a6b2',
  purple: '#b77dee',
  'app-blue': '#889df0',
  'app-yellow': '#f7cd67',
  'app-orange': '#e59266',
  'app-teal': '#82d5bb',
  'app-green': '#8ac68a',
  'app-red': '#fc736d',
  'lime-green': '#d1da49',
  'yellow-green': '#ecdf52',
  brown: '#9a835a',
  'warm-peach-pink': '#e18c6f'
};
const CSS = `
.aiui-tag {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  line-height: 1;
  font-family: var(--animal-font-family);
  font-weight: 600;
  border-radius: 999px;
  border: 1.5px solid transparent;
  transition: all 0.2s ease;
  user-select: none;
  white-space: nowrap;
}
.aiui-tag--small  { height: 24px; padding: 0 10px; font-size: 12px; }
.aiui-tag--medium { height: 29px; padding: 0 12px; font-size: 13px; }
.aiui-tag--large  { height: 34px; padding: 0 16px; font-size: 15px; }

.aiui-tag--clickable { cursor: pointer; }
.aiui-tag--clickable:hover { transform: translateY(-1px); box-shadow: 0 2px 6px rgba(61,52,40,0.12); }
.aiui-tag--clickable:active { transform: translateY(0); }
.aiui-tag--clickable:focus-visible { outline: 2px solid var(--animal-focus-yellow-radio); outline-offset: 2px; }
.aiui-tag--disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; }

.aiui-tag__close {
  display: inline-flex; align-items: center; justify-content: center;
  margin-left: 2px; margin-right: -4px;
  width: 16px; height: 16px; padding: 0;
  border: none; background: rgba(0,0,0,0.08); color: inherit;
  font-size: 14px; line-height: 1; border-radius: 50%; cursor: pointer;
  transition: background 0.15s ease;
}
.aiui-tag__close:hover { background: rgba(0,0,0,0.18); }
.aiui-tag__close:disabled { cursor: not-allowed; opacity: 0.5; }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-tag-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-tag-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function colorStyle(color, variant) {
  if (color === 'default') {
    if (variant === 'solid') return {
      background: 'rgb(247, 243, 223)',
      color: '#8f734f',
      borderColor: '#d4c4a8'
    };
    return {
      background: 'transparent',
      color: '#8f734f',
      borderColor: '#c4b89e',
      ...(variant === 'dashed' ? {
        borderStyle: 'dashed'
      } : null)
    };
  }
  const hue = HUES[color] || HUES['app-teal'];
  if (variant === 'solid') return {
    background: hue,
    color: '#fff',
    borderColor: hue
  };
  return {
    background: 'transparent',
    color: hue,
    borderColor: hue,
    ...(variant === 'dashed' ? {
      borderStyle: 'dashed'
    } : null)
  };
}
function Tag({
  children,
  size = 'medium',
  variant = 'solid',
  color = 'default',
  closable = false,
  onClose,
  onClick,
  disabled = false,
  className = '',
  style,
  ...rest
}) {
  const clickable = !!onClick && !disabled;
  const cls = ['aiui-tag', `aiui-tag--${size}`, clickable && 'aiui-tag--clickable', disabled && 'aiui-tag--disabled', className].filter(Boolean).join(' ');
  const handleKey = e => {
    if (clickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick(e);
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      ...colorStyle(color, variant),
      ...style
    },
    role: clickable ? 'button' : undefined,
    tabIndex: clickable ? 0 : undefined,
    onClick: clickable ? onClick : undefined,
    onKeyDown: clickable ? handleKey : undefined
  }, rest), children, closable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "aiui-tag__close",
    "aria-label": "close",
    disabled: disabled,
    onClick: e => {
      e.stopPropagation();
      onClose && onClose(e);
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tag/Tag.jsx", error: String((e && e.message) || e) }); }

// components/Time/Time.jsx
try { (() => {
/**
 * Time — self-contained HUD clock. Shows weekday + month/day + a live 12-hour
 * clock with a blinking colon. Updates every second from the local clock.
 */

const CSS = `
.aiui-time {
  display: inline-flex; align-items: center; gap: 20px;
  padding: 16px 36px;
  background: linear-gradient(180deg, #fff 0%, #f8f8f0 100%);
  border: 3px solid #d4cfc3; border-radius: 18px;
  font-family: var(--animal-font-family);
  animation: aiui-fade-up 0.5s ease-out;
}
.aiui-time__date { padding-right: 24px; border-right: 3px solid rgba(159,146,125,0.35); }
.aiui-time__weekday { color: #6fba2c; font-weight: 900; font-size: 14px; letter-spacing: 1.5px; text-transform: uppercase; }
.aiui-time__monthday { color: #8b7355; font-weight: 800; font-size: 22px; margin-top: 2px; }
.aiui-time__clock { color: #8b7355; font-weight: 900; font-size: 48px; letter-spacing: 2px; display: flex; align-items: baseline; }
.aiui-time__colon { animation: aiui-time-blink 1s step-end infinite; position: relative; top: -0.06em; margin: 0 1px; }
@keyframes aiui-time-blink { 50% { opacity: 0; } }
@keyframes aiui-fade-up { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-time-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-time-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function Time({
  className = '',
  style
}) {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const h12 = now.getHours() % 12 || 12;
  const mm = now.getMinutes().toString().padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  return /*#__PURE__*/React.createElement("div", {
    className: ['aiui-time', className].filter(Boolean).join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "aiui-time__date"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aiui-time__weekday"
  }, DAYS[now.getDay()]), /*#__PURE__*/React.createElement("div", {
    className: "aiui-time__monthday"
  }, MONTHS[now.getMonth()], " ", now.getDate())), /*#__PURE__*/React.createElement("div", {
    className: "aiui-time__clock"
  }, h12, /*#__PURE__*/React.createElement("span", {
    className: "aiui-time__colon"
  }, ":"), mm, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.5em',
      marginLeft: 6,
      alignSelf: 'flex-start',
      marginTop: '0.15em'
    }
  }, ampm)));
}
Object.assign(__ds_scope, { Time });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Time/Time.jsx", error: String((e && e.message) || e) }); }

// components/Title/Title.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Title — Animal-Crossing ribbon-banner section heading. A layered swallowtail
 * clip-path banner: back tails + fold-shadow triangles + a slightly 3D-tilted
 * front face. Everything is em-based so it scales from the wrapper font-size.
 * 13 NookPhone color schemes, each defining front/back/fold/text.
 */

// name -> [front, back tail, fold shadow, text]
const SCHEMES = {
  default: ['#27d039', '#20992a', '#115017', '#fff'],
  'app-pink': ['#f8a6b2', '#e07a8b', '#a84a5c', '#fff'],
  purple: ['#b77dee', '#9050d0', '#5a1a9a', '#fff'],
  'app-blue': ['#889df0', '#5f74d0', '#33469a', '#fff'],
  'app-yellow': ['#f7cd67', '#d4a030', '#8a6010', '#725d42'],
  'app-orange': ['#e59266', '#c56b3e', '#8a4218', '#fff'],
  'app-teal': ['#82d5bb', '#4fb595', '#1f7a5c', '#fff'],
  'app-green': ['#8ac68a', '#5ea15e', '#2f6b2f', '#fff'],
  'app-red': ['#fc736d', '#d84a44', '#9a2420', '#fff'],
  'lime-green': ['#d1da49', '#a8b02f', '#6b7015', '#3d5a1a'],
  'yellow-green': ['#ecdf52', '#c4b52f', '#7d7015', '#725d42'],
  brown: ['#9a835a', '#75603c', '#48381f', '#fff'],
  'warm-peach-pink': ['#e18c6f', '#c06344', '#86381f', '#fff']
};
const SIZE = {
  small: 14,
  middle: 20,
  large: 28
};
const CSS = `
.aiui-title {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2em;
  padding: 0 1.6em;
  font-family: var(--animal-font-family);
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.04em;
  color: var(--rt);
  filter: drop-shadow(0 0.08em 0.12em rgba(0,0,0,0.05));
}
.aiui-title__back { position: absolute; width: 1.7em; height: 1.7em; bottom: -0.4em; background: var(--rb); z-index: 1; }
.aiui-title__back--l { left: -0.55em; clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 30% 50%, 0% 0%); }
.aiui-title__back--r { right: -0.55em; clip-path: polygon(0% 0%, 100% 0%, 70% 50%, 100% 100%, 0% 100%); }
.aiui-title__fold { position: absolute; top: calc(100% - 0.04em); width: 0; height: 0; border-style: solid; z-index: 2; }
.aiui-title__fold--l { left: 0.2em; border-width: 0 0.95em 0.45em 0; border-color: transparent var(--rk) transparent transparent; }
.aiui-title__fold--r { right: 0.2em; border-width: 0 0 0.45em 0.95em; border-color: transparent transparent transparent var(--rk); }
.aiui-title__front {
  position: absolute; inset: 0 0.1em; border-radius: 0.2em; background: var(--rf); z-index: 3;
  transform: perspective(11.5em) rotateX(3deg);
  box-shadow: inset 0 -0.06em 0 rgba(0,0,0,0.05);
}
.aiui-title__text { position: relative; z-index: 4; font-weight: 900; padding-top: 0.11em; }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-title-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-title-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Title({
  size = 'middle',
  color = 'default',
  className = '',
  style,
  children,
  ...rest
}) {
  const [rf, rb, rk, rt] = SCHEMES[color] || SCHEMES.default;
  const vars = {
    '--rf': rf,
    '--rb': rb,
    '--rk': rk,
    '--rt': rt,
    fontSize: SIZE[size] || SIZE.middle
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['aiui-title', className].filter(Boolean).join(' '),
    style: {
      ...vars,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "aiui-title__back aiui-title__back--l"
  }), /*#__PURE__*/React.createElement("span", {
    className: "aiui-title__back aiui-title__back--r"
  }), /*#__PURE__*/React.createElement("span", {
    className: "aiui-title__fold aiui-title__fold--l"
  }), /*#__PURE__*/React.createElement("span", {
    className: "aiui-title__fold aiui-title__fold--r"
  }), /*#__PURE__*/React.createElement("span", {
    className: "aiui-title__front"
  }), /*#__PURE__*/React.createElement("span", {
    className: "aiui-title__text"
  }, children));
}
Object.assign(__ds_scope, { Title });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Title/Title.jsx", error: String((e && e.message) || e) }); }

// components/Tooltip/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tooltip — warm bubble (default) or transparent organic "island" bubble.
 * 12 placements, hover/focus/click triggers. Wraps a single trigger element.
 */

const CSS = `
.aiui-tt-wrap { position: relative; display: inline-flex; }
.aiui-tt {
  position: absolute; z-index: 100; pointer-events: none;
  animation: aiui-tt-in 0.16s ease; font-family: var(--animal-font-family);
}
.aiui-tt--default {
  background: rgb(247,243,223); border: 2px solid #c4b89e; border-radius: 16px;
  padding: 6px 12px; max-width: 240px;
  font-size: 12px; font-weight: 500; line-height: 1.5; letter-spacing: 0.01em; color: #725d42;
  box-shadow: 0 3px 10px rgba(61,52,40,0.1);
}
.aiui-tt--island {
  background: transparent; border: none; box-shadow: none;
  padding: 12px 20px; max-width: 280px;
  font-size: 13px; font-weight: 600; line-height: 1.55; text-align: center; color: #725d42;
}
.aiui-tt__arrow { position: absolute; width: 8px; height: 8px; background: rgb(247,243,223); border: 2px solid #c4b89e; border-radius: 2px; }
.aiui-tt__arrow--island { width: 14px; height: 14px; border: none; border-radius: 50%; background: #fffef8; filter: drop-shadow(0 4px 14px rgba(121,79,39,0.14)); }
@keyframes aiui-tt-in { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-tt-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-tt-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
const GAP = 10;
function bubblePos(side, align) {
  const s = {};
  if (side === 'top') Object.assign(s, {
    bottom: '100%',
    marginBottom: GAP
  });
  if (side === 'bottom') Object.assign(s, {
    top: '100%',
    marginTop: GAP
  });
  if (side === 'left') Object.assign(s, {
    right: '100%',
    marginRight: GAP
  });
  if (side === 'right') Object.assign(s, {
    left: '100%',
    marginLeft: GAP
  });
  if (side === 'top' || side === 'bottom') {
    if (align === 'start') s.left = 0;else if (align === 'end') s.right = 0;else {
      s.left = '50%';
      s.transform = 'translateX(-50%)';
    }
  } else {
    if (align === 'start') s.top = 0;else if (align === 'end') s.bottom = 0;else {
      s.top = '50%';
      s.transform = 'translateY(-50%)';
    }
  }
  return s;
}
function arrowPos(side, island) {
  const off = island ? -6 : -5;
  const s = {};
  if (side === 'top') Object.assign(s, {
    bottom: off,
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)'
  });
  if (side === 'bottom') Object.assign(s, {
    top: off,
    left: '50%',
    transform: 'translateX(-50%) rotate(45deg)'
  });
  if (side === 'left') Object.assign(s, {
    right: off,
    top: '50%',
    transform: 'translateY(-50%) rotate(45deg)'
  });
  if (side === 'right') Object.assign(s, {
    left: off,
    top: '50%',
    transform: 'translateY(-50%) rotate(45deg)'
  });
  return s;
}
function Tooltip({
  title,
  children,
  placement = 'top',
  trigger = 'hover',
  variant = 'default',
  bordered = true,
  className = '',
  style
}) {
  const [open, setOpen] = React.useState(false);
  const wrapRef = React.useRef(null);
  const [side, align] = placement.split('-');
  const island = variant === 'island';
  React.useEffect(() => {
    if (trigger !== 'click' || !open) return;
    const onDoc = e => wrapRef.current && !wrapRef.current.contains(e.target) && setOpen(false);
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [trigger, open]);
  const handlers = {};
  if (trigger === 'hover') {
    handlers.onMouseEnter = () => setOpen(true);
    handlers.onMouseLeave = () => setOpen(false);
  } else if (trigger === 'focus') {
    handlers.onFocusCapture = () => setOpen(true);
    handlers.onBlurCapture = () => setOpen(false);
  } else {
    handlers.onClick = () => setOpen(o => !o);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['aiui-tt-wrap', className].filter(Boolean).join(' '),
    style: style,
    ref: wrapRef
  }, handlers), children, open && title != null && /*#__PURE__*/React.createElement("span", {
    className: ['aiui-tt', island ? 'aiui-tt--island' : 'aiui-tt--default'].filter(Boolean).join(' '),
    role: "tooltip",
    style: bubblePos(side, align)
  }, title, !island && bordered && /*#__PURE__*/React.createElement("span", {
    className: "aiui-tt__arrow",
    style: arrowPos(side, false)
  }), island && /*#__PURE__*/React.createElement("span", {
    className: "aiui-tt__arrow aiui-tt__arrow--island",
    style: arrowPos(side, true)
  })));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tooltip/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/Typewriter/Typewriter.jsx
try { (() => {
/**
 * Typewriter — reveals children character-by-character while preserving the
 * ReactNode tree (elements, classNames, inline styles). Emits no wrapper node,
 * so it has zero layout impact.
 */

function countText(node) {
  if (node == null || node === false || node === true) return 0;
  if (typeof node === 'string' || typeof node === 'number') return String(node).length;
  if (Array.isArray(node)) return node.reduce((s, n) => s + countText(n), 0);
  if (React.isValidElement(node)) return countText(node.props.children);
  return 0;
}
function truncate(node, budget) {
  // budget is a mutable { n } counter of remaining characters
  if (node == null || node === false || node === true) return node;
  if (typeof node === 'string' || typeof node === 'number') {
    const str = String(node);
    if (budget.n >= str.length) {
      budget.n -= str.length;
      return str;
    }
    const slice = str.slice(0, Math.max(0, budget.n));
    budget.n = 0;
    return slice;
  }
  if (Array.isArray(node)) return node.map((n, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, truncate(n, budget)));
  if (React.isValidElement(node)) {
    return React.cloneElement(node, {}, truncate(node.props.children, budget));
  }
  return node;
}
function Typewriter({
  children,
  speed = 90,
  trigger,
  autoPlay = true,
  onDone
}) {
  const total = React.useMemo(() => countText(children), [children]);
  const [count, setCount] = React.useState(autoPlay ? 0 : total);
  const doneRef = React.useRef(false);
  React.useEffect(() => {
    if (!autoPlay) {
      setCount(total);
      return;
    }
    setCount(0);
    doneRef.current = false;
    const t = setInterval(() => {
      setCount(c => {
        if (c >= total) {
          clearInterval(t);
          return c;
        }
        return c + 1;
      });
    }, speed);
    return () => clearInterval(t);
  }, [total, speed, trigger, autoPlay]);
  React.useEffect(() => {
    if (count >= total && !doneRef.current && autoPlay) {
      doneRef.current = true;
      onDone && onDone();
    }
  }, [count, total, autoPlay, onDone]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, truncate(children, {
    n: count
  }));
}
Object.assign(__ds_scope, { Typewriter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Typewriter/Typewriter.jsx", error: String((e && e.message) || e) }); }

// components/Wallet/Wallet.jsx
try { (() => {
/**
 * Wallet — Animal-Crossing currency pill. Olive-yellow capsule with a coin-bag
 * icon overlapping ~70% above and stroked numerals. Three sizes; numbers auto
 * thousands-grouped. Bag bounces on hover.
 */

function assetBase(rel) {
  if (typeof document === 'undefined') return rel;
  const s = document.querySelector('script[src*="_ds_bundle.js"]');
  if (s && s.src) return s.src.replace(/_ds_bundle\.js.*$/, '') + rel;
  return rel;
}
const SIZES = {
  small: {
    w: 96,
    h: 32,
    bag: 38,
    text: 12,
    halo: 3
  },
  medium: {
    w: 132,
    h: 42,
    bag: 50,
    text: 17,
    halo: 4
  },
  large: {
    w: 176,
    h: 54,
    bag: 66,
    text: 22,
    halo: 6
  }
};
const CSS = `
.aiui-wallet {
  position: relative; display: inline-flex; flex-direction: column; align-items: center;
  user-select: none; line-height: 1; font-family: var(--animal-font-family);
}
.aiui-wallet__bag {
  position: absolute; left: 50%; top: 0; transform: translateX(-50%);
  display: flex; align-items: center; justify-content: center; pointer-events: none; z-index: 2;
  filter: drop-shadow(0 4px 6px rgba(91,78,30,0.18));
}
.aiui-wallet__bag img, .aiui-wallet__bag > * { width: 100%; height: 100%; object-fit: contain; }
.aiui-wallet__pill {
  position: relative; width: 100%; border-radius: 999px; background: #b3a046;
  box-shadow:
    inset 0 -6px 0 rgba(91,78,30,0.18),
    inset 0 0 0 2px rgba(91,78,30,0.12),
    0 0 0 var(--halo) #fffbe7,
    0 6px 14px rgba(91,78,30,0.18);
  display: flex; align-items: center; justify-content: center; overflow: visible;
}
.aiui-wallet__value {
  font-weight: 800; color: #fff; letter-spacing: 0.04em; padding: 0 12px; white-space: nowrap;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 2px 0 rgba(91,78,30,0.55), 0 0 1px rgba(91,78,30,0.55);
}
.aiui-wallet:hover .aiui-wallet__bag { animation: aiui-wallet-bounce 0.5s ease-in-out; }
@keyframes aiui-wallet-bounce {
  0%,100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
  35% { transform: translateX(-50%) translateY(-8px) rotate(-6deg); }
  70% { transform: translateX(-50%) translateY(-2px) rotate(3deg); }
}
`;
if (typeof document !== 'undefined' && !document.getElementById('aiui-wallet-style')) {
  const el = document.createElement('style');
  el.id = 'aiui-wallet-style';
  el.textContent = CSS;
  document.head.appendChild(el);
}
function format(value, sep) {
  if (value === undefined || value === null) return '00,000';
  if (typeof value === 'string') return value;
  const neg = value < 0;
  const digits = Math.abs(value).toString();
  const grouped = sep === '' ? digits : digits.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  return (neg ? '-' : '') + grouped;
}
function Wallet({
  value,
  icon,
  size = 'medium',
  thousandSeparator = ',',
  className = '',
  style
}) {
  const s = SIZES[size] || SIZES.medium;
  return /*#__PURE__*/React.createElement("div", {
    className: ['aiui-wallet', className].filter(Boolean).join(' '),
    style: {
      width: s.w,
      paddingTop: s.bag * 0.7,
      '--halo': s.halo + 'px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aiui-wallet__bag",
    style: {
      width: s.bag,
      height: s.bag
    }
  }, icon || /*#__PURE__*/React.createElement("img", {
    src: assetBase('assets/icons/items/item-022.png'),
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "aiui-wallet__pill",
    style: {
      height: s.h
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "aiui-wallet__value",
    style: {
      fontSize: s.text
    }
  }, format(value, thousandSeparator))));
}
Object.assign(__ds_scope, { Wallet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Wallet/Wallet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs-site/HomePage.jsx
try { (() => {
/* HomePage — hero + feature grid + install snippet for the docs site.
   Values mirror the source demo (demo/HomePage.tsx). */

const {
  Card: HP_Card,
  Button: HP_Button,
  CodeBlock: HP_CodeBlock,
  Wallet: HP_Wallet
} = window.AnimalIslandUIDesignSystem_ed2c2c;
const FEATURES = [{
  color: 'app-teal',
  title: '26 Components',
  body: 'Buttons, forms, tables, modals and cozy decorative widgets — all island-styled.'
}, {
  color: 'app-yellow',
  title: 'Warm Tokens',
  body: 'Parchment surfaces, earth-brown text and a mint-teal accent. Never cold grey.'
}, {
  color: 'app-pink',
  title: '3D Game Feel',
  body: 'Primary buttons press down like a physical Switch button. Pure joy to click.'
}, {
  color: 'purple',
  title: 'Nunito Rounded',
  body: 'Friendly chubby letterforms, weights 500 to 900. Soft, readable, playful.'
}];
const INSTALL = `import { Button, Card } from 'animal-island-ui';
import 'animal-island-ui/style';

function App() {
  return (
    <Card color="app-yellow">
      <Button type="primary">Start Adventure</Button>
    </Card>
  );
}`;
function HomePage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--animal-font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '56px 48px 48px',
      background: `url(${window.aiuiAssetUrl('assets/backgrounds/home_bg.webp')}) center/cover no-repeat, #7dc395`,
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 340px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 12px',
      fontSize: 50,
      fontWeight: 700,
      color: '#fff9e6',
      textShadow: '0 4px 1px rgba(0,0,0,0.4)',
      lineHeight: 1.05
    }
  }, "Animal Island UI"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 17,
      color: '#5c4a2f',
      lineHeight: 1.7,
      maxWidth: 520,
      fontWeight: 600
    }
  }, "A cozy React component library inspired by life on a deserted island \u2014 warm, rounded and friendly, with a satisfying 3D press on every button."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HP_Button, {
    type: "primary",
    size: "large"
  }, "Get Started"), /*#__PURE__*/React.createElement(HP_Button, {
    type: "default",
    size: "large"
  }, "GitHub"))), /*#__PURE__*/React.createElement("img", {
    src: window.aiuiAssetUrl('assets/logo/animal_icon.png'),
    alt: "",
    style: {
      width: 172,
      height: 172,
      filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.18))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '44px 48px',
      maxWidth: 960,
      margin: '0 auto',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: '#725d42',
      margin: '0 0 6px'
    }
  }, "Why Animal Island?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: '#7c5734',
      margin: '0 0 24px',
      fontWeight: 500
    }
  }, "Everything you need to build a warm, characterful interface."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
      gap: 16
    }
  }, FEATURES.map(f => /*#__PURE__*/React.createElement(HP_Card, {
    key: f.title,
    pattern: f.color
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 6
    }
  }, f.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.6,
      fontWeight: 500
    }
  }, f.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 48px 52px',
      maxWidth: 960,
      margin: '0 auto',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: '#725d42',
      margin: '0 0 16px'
    }
  }, "Quick Start"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 380px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(HP_CodeBlock, {
    code: INSTALL
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(HP_Wallet, {
    value: 19999
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: '#9f927d',
      fontWeight: 600
    }
  }, "Bells earned")))));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs-site/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs-site/Showcase.jsx
try { (() => {
/* Showcase — renders a live demo page for the selected component.
   Composes the design-system's own components from the bundle. */

const AI = window.AnimalIslandUIDesignSystem_ed2c2c;
const DESCRIPTIONS = {
  Button: 'Pill-shaped actions. Primary and danger-primary carry the 3D game-press shadow.',
  Icon: 'The ten built-in illustrated NookPhone app glyphs.',
  Input: 'Parchment pill fields with a yellow focus halo and optional 3D shadow.',
  Select: 'Controlled dropdown with a cream panel and keyboard navigation.',
  Switch: 'Inset-track toggle, green when on. Handle stays flat.',
  Checkbox: 'Rounded-square multi-select that pops mint-teal on check.',
  Radio: 'Single-select rounded squares with a white pop dot.',
  Form: 'Layout + validation with the conventional useForm / Form.Item API.',
  Card: 'Cozy containers — 13 solid colors and pastel dot wallpapers.',
  Title: 'Swallowtail ribbon-banner section headings in 13 schemes.',
  Tag: 'Capsule labels — solid, outlined and dashed across 12 colors.',
  Table: 'Borderless parchment tables with dashed dividers and teal-stripe hover.',
  Wallet: 'Nook-bag currency pill with stroked numerals.',
  Time: 'Live HUD clock with a blinking colon.',
  CodeBlock: 'Dark JSX/TS panel with a built-in tokenizer.',
  Modal: 'Organic blob-shaped dialog with a game-yellow confirm.',
  Drawer: 'Sliding panel that sinks the page behind it for depth.',
  Tooltip: 'Warm bubble or transparent island bubble, 12 placements.',
  Collapse: 'Accordion with a teal chevron and a smooth grid expand.',
  Loading: 'Full-bleed mint spinner scene with a radial mask fade.',
  Tabs: 'Parchment tab strip with a solid teal active pill.',
  Phone: 'Decorative NookPhone with a live clock and app grid.',
  Divider: 'Nine decorative separator bands.',
  Footer: 'Ocean-wave and forest-silhouette bottom art.',
  Cursor: 'Wrap a region to show the game finger cursor.',
  Typewriter: 'Reveals content character-by-character, markup preserved.'
};
function Panel({
  children,
  pad = 28
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgb(247,243,223)',
      borderRadius: 20,
      padding: pad,
      marginTop: 20
    }
  }, children);
}
function Lbl({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: '#9f927d',
      margin: '2px 0 12px'
    }
  }, children);
}
function Row({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      alignItems: 'center',
      marginBottom: 18
    }
  }, children);
}
const DEMOS = {
  Button: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Lbl, null, "Types"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(AI.Button, {
    type: "primary"
  }, "Primary"), /*#__PURE__*/React.createElement(AI.Button, null, "Default"), /*#__PURE__*/React.createElement(AI.Button, {
    type: "dashed"
  }, "Dashed"), /*#__PURE__*/React.createElement(AI.Button, {
    type: "text"
  }, "Text"), /*#__PURE__*/React.createElement(AI.Button, {
    type: "link"
  }, "Link")), /*#__PURE__*/React.createElement(Lbl, null, "States"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(AI.Button, {
    type: "primary",
    danger: true
  }, "Danger"), /*#__PURE__*/React.createElement(AI.Button, {
    type: "primary",
    loading: true
  }, "Loading"), /*#__PURE__*/React.createElement(AI.Button, {
    type: "primary",
    ghost: true
  }, "Ghost"), /*#__PURE__*/React.createElement(AI.Button, {
    type: "primary",
    disabled: true
  }, "Disabled"))),
  Icon: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Row, null, AI.ICON_LIST.map(i => /*#__PURE__*/React.createElement(AI.Icon, {
    key: i.name,
    name: i.name,
    size: 44,
    bounce: true
  })))),
  Input: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(AI.Input, {
    placeholder: "Your name",
    allowClear: true
  }), /*#__PURE__*/React.createElement(AI.Input, {
    prefix: "\u2315",
    placeholder: "Search"
  }), /*#__PURE__*/React.createElement(AI.Input, {
    status: "error",
    defaultValue: "Invalid"
  }), /*#__PURE__*/React.createElement(AI.Input, {
    disabled: true,
    defaultValue: "Locked"
  }))),
  Select: () => {
    const [v, setV] = React.useState('bells');
    return /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(AI.Select, {
      value: v,
      onChange: setV,
      options: [{
        key: 'bells',
        label: 'Bells'
      }, {
        key: 'miles',
        label: 'Nook Miles'
      }, {
        key: 'poki',
        label: 'Poki'
      }]
    }));
  },
  Switch: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(AI.Switch, {
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(AI.Switch, {
    checkedChildren: "ON",
    unCheckedChildren: "OFF",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(AI.Switch, {
    size: "small",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(AI.Switch, {
    disabled: true
  }))),
  Checkbox: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(AI.Checkbox, {
    options: [{
      label: 'Beach',
      value: 'b'
    }, {
      label: 'Forest',
      value: 'f'
    }, {
      label: 'Museum',
      value: 'm'
    }],
    defaultValue: ['b']
  })),
  Radio: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(AI.Radio, {
    options: [{
      label: 'Sunrise',
      value: 'a'
    }, {
      label: 'Sunset',
      value: 'p'
    }, {
      label: 'Night',
      value: 'n'
    }],
    defaultValue: "a"
  })),
  Form: () => {
    const [form] = AI.useForm();
    return /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 380
      }
    }, /*#__PURE__*/React.createElement(AI.Form, {
      form: form,
      layout: "vertical",
      requiredMark: true,
      onFinish: () => {}
    }, /*#__PURE__*/React.createElement(AI.FormItem, {
      label: "Island name",
      name: "i",
      rules: [{
        required: true,
        message: 'Required'
      }]
    }, /*#__PURE__*/React.createElement(AI.Input, {
      placeholder: "e.g. Aeaea",
      allowClear: true
    })), /*#__PURE__*/React.createElement(AI.FormItem, {
      label: "Subscribe",
      name: "s",
      valuePropName: "checked"
    }, /*#__PURE__*/React.createElement(AI.Switch, null)), /*#__PURE__*/React.createElement(AI.FormItem, null, /*#__PURE__*/React.createElement(AI.Button, {
      type: "primary",
      htmlType: "submit"
    }, "Submit")))));
  },
  Card: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(AI.Card, {
    color: "app-pink"
  }, "app-pink"), /*#__PURE__*/React.createElement(AI.Card, {
    color: "app-blue"
  }, "app-blue"), /*#__PURE__*/React.createElement(AI.Card, {
    pattern: "app-green"
  }, "pattern"), /*#__PURE__*/React.createElement(AI.Card, {
    type: "dashed"
  }, "dashed"))),
  Title: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(AI.Title, {
    color: "default"
  }, "Default"), /*#__PURE__*/React.createElement(AI.Title, {
    color: "app-yellow"
  }, "Yellow"), /*#__PURE__*/React.createElement(AI.Title, {
    color: "purple"
  }, "Purple"))),
  Tag: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(AI.Tag, {
    color: "app-pink"
  }, "Pink"), /*#__PURE__*/React.createElement(AI.Tag, {
    color: "app-teal",
    variant: "outlined"
  }, "Draft"), /*#__PURE__*/React.createElement(AI.Tag, {
    color: "app-blue",
    variant: "dashed"
  }, "Limited"), /*#__PURE__*/React.createElement(AI.Tag, {
    color: "app-red",
    closable: true,
    onClose: () => {}
  }, "Closable"))),
  Table: () => /*#__PURE__*/React.createElement(Panel, {
    pad: 12
  }, /*#__PURE__*/React.createElement(AI.Table, {
    rowKey: "id",
    columns: [{
      title: 'Item',
      dataIndex: 'name'
    }, {
      title: 'Price',
      dataIndex: 'price',
      align: 'right'
    }],
    dataSource: [{
      id: 1,
      name: 'Fishing Rod',
      price: '400'
    }, {
      id: 2,
      name: 'Golden Net',
      price: '10,000'
    }, {
      id: 3,
      name: 'Workbench',
      price: '2,500'
    }]
  })),
  Wallet: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(AI.Wallet, {
    value: 980,
    size: "small"
  }), /*#__PURE__*/React.createElement(AI.Wallet, {
    value: 124500
  }), /*#__PURE__*/React.createElement(AI.Wallet, {
    value: 9999999,
    size: "large"
  }))),
  Time: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(AI.Time, null)),
  CodeBlock: () => /*#__PURE__*/React.createElement(Panel, {
    pad: 0
  }, /*#__PURE__*/React.createElement(AI.CodeBlock, {
    code: `import { Button } from 'animal-island-ui';\n\n<Button type="primary">Go</Button>`
  })),
  Modal: () => {
    const [open, setOpen] = React.useState(false);
    return /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(AI.Button, {
      type: "primary",
      onClick: () => setOpen(true)
    }, "Open modal"), /*#__PURE__*/React.createElement(AI.Modal, {
      open: open,
      title: "Welcome!",
      typewriter: false,
      onClose: () => setOpen(false),
      onOk: () => setOpen(false),
      width: 420
    }, "Ready to start your island getaway?"));
  },
  Drawer: () => {
    const [open, setOpen] = React.useState(false);
    return /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(AI.Button, {
      type: "primary",
      onClick: () => setOpen(true)
    }, "Open drawer"), /*#__PURE__*/React.createElement(AI.Drawer, {
      open: open,
      title: "Settings",
      onClose: () => setOpen(false)
    }, "The page behind sinks and dims while the drawer is open."));
  },
  Tooltip: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(AI.Tooltip, {
    title: "Default bubble"
  }, /*#__PURE__*/React.createElement(AI.Button, null, "Hover me")), /*#__PURE__*/React.createElement(AI.Tooltip, {
    title: "A cozy island bubble",
    variant: "island"
  }, /*#__PURE__*/React.createElement(AI.Button, {
    type: "dashed"
  }, "Island")))),
  Collapse: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(AI.Collapse, {
    defaultExpanded: true,
    question: "How do I catch a rare fish?",
    answer: "Wait by the pier at night and watch for the largest shadow."
  }), /*#__PURE__*/React.createElement(AI.Collapse, {
    question: "Where do I sell turnips?",
    answer: "At Nook's Cranny, before Sunday."
  })),
  Loading: () => /*#__PURE__*/React.createElement(Panel, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 200,
      borderRadius: 20,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(AI.Loading, {
    active: true
  }))),
  Tabs: () => /*#__PURE__*/React.createElement(Panel, {
    pad: 0
  }, /*#__PURE__*/React.createElement(AI.Tabs, {
    defaultActiveKey: "fish",
    items: [{
      key: 'fish',
      label: 'Fish',
      children: 'Sea bass, red snapper, coelacanth on rainy nights.'
    }, {
      key: 'bugs',
      label: 'Bugs',
      children: 'Butterflies, beetles and the rare emperor.'
    }, {
      key: 'fossils',
      label: 'Fossils',
      children: 'Dig four a day and let Blathers assess them.'
    }]
  })),
  Phone: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'scale(0.6)',
      transformOrigin: 'top center',
      height: 480
    }
  }, /*#__PURE__*/React.createElement(AI.Phone, null)))),
  Divider: () => /*#__PURE__*/React.createElement(Panel, null, ['line-brown', 'line-teal', 'wave-yellow', 'dashed-teal'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(AI.Divider, {
    type: t
  })))),
  Footer: () => /*#__PURE__*/React.createElement(Panel, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(AI.Footer, {
    type: "sea"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(AI.Footer, {
    type: "tree"
  }))),
  Cursor: () => /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(AI.Cursor, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 26,
      border: '2px dashed #c4b89e',
      borderRadius: 20,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      fontWeight: 600,
      color: '#794f27'
    }
  }, "Move your pointer in here."), /*#__PURE__*/React.createElement(AI.Button, {
    type: "primary"
  }, "Tap me")))),
  Typewriter: () => {
    const [k, setK] = React.useState(0);
    React.useEffect(() => {
      const t = setInterval(() => setK(v => v + 1), 6000);
      return () => clearInterval(t);
    }, []);
    return /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 600,
        color: '#794f27',
        lineHeight: 1.6
      }
    }, /*#__PURE__*/React.createElement(AI.Typewriter, {
      speed: 55,
      trigger: k
    }, "Welcome to the island, traveler! Your tent is pitched.")));
  }
};
function Showcase({
  name
}) {
  const Demo = DEMOS[name];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px',
      fontFamily: 'var(--animal-font-family)'
    }
  }, /*#__PURE__*/React.createElement(AI.Title, {
    color: "app-teal",
    size: "large"
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: '#7c5734',
      fontWeight: 500,
      margin: '18px 0 0',
      maxWidth: 620,
      lineHeight: 1.6
    }
  }, DESCRIPTIONS[name]), Demo ? /*#__PURE__*/React.createElement(Demo, null) : null);
}
window.Showcase = Showcase;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs-site/Showcase.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs-site/Sidebar.jsx
try { (() => {
/* Sidebar — 220px leaf-textured navigation for the docs site.
   Values mirror the source demo (demo/App.tsx). */

const AIUI_NS = window.AnimalIslandUIDesignSystem_ed2c2c;
function aiuiAssetUrl(rel) {
  const s = document.querySelector('script[src*="_ds_bundle.js"]');
  if (s && s.src) return s.src.replace(/_ds_bundle\.js.*$/, '') + rel;
  return rel;
}
const NAV = [{
  cat: 'Get Started',
  items: [['overview', 'Overview']]
}, {
  cat: 'General',
  items: [['Button', 'Button'], ['Icon', 'Icon']]
}, {
  cat: 'Data Entry',
  items: [['Input', 'Input'], ['Select', 'Select'], ['Switch', 'Switch'], ['Checkbox', 'Checkbox'], ['Radio', 'Radio'], ['Form', 'Form']]
}, {
  cat: 'Data Display',
  items: [['Card', 'Card'], ['Title', 'Title'], ['Tag', 'Tag'], ['Table', 'Table'], ['Wallet', 'Wallet'], ['Time', 'Time'], ['CodeBlock', 'CodeBlock']]
}, {
  cat: 'Feedback',
  items: [['Modal', 'Modal'], ['Drawer', 'Drawer'], ['Tooltip', 'Tooltip'], ['Collapse', 'Collapse'], ['Loading', 'Loading']]
}, {
  cat: 'Navigation',
  items: [['Tabs', 'Tabs']]
}, {
  cat: 'Decoration',
  items: [['Phone', 'Phone'], ['Divider', 'Divider'], ['Footer', 'Footer'], ['Cursor', 'Cursor'], ['Typewriter', 'Typewriter']]
}];
function Sidebar({
  active,
  onSelect
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 220,
      minWidth: 220,
      height: '100%',
      boxSizing: 'border-box',
      background: `url(${aiuiAssetUrl('assets/backgrounds/menu_bg.svg')}) center/cover no-repeat, #eef1f6`,
      overflowY: 'auto',
      fontFamily: 'var(--animal-font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px 16px 12px',
      borderBottom: '1px solid #e8e2d6',
      fontWeight: 700,
      fontSize: 15,
      color: '#725d42',
      letterSpacing: '-0.3px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: aiuiAssetUrl('assets/logo/animal_icon.png'),
    alt: "",
    style: {
      width: 24,
      height: 24,
      marginRight: 8
    }
  }), "Animal Island UI", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontSize: 11,
      fontWeight: 600,
      padding: '2px 8px',
      borderRadius: 10,
      background: '#e6f9f6',
      color: '#19c8b9'
    }
  }, "v0.9")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 0 20px'
    }
  }, NAV.map(group => /*#__PURE__*/React.createElement("div", {
    key: group.cat
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px 4px',
      fontSize: 11,
      color: '#a0936e',
      fontWeight: 600,
      letterSpacing: '0.5px',
      textTransform: 'uppercase'
    }
  }, group.cat), group.items.map(([key, label]) => {
    const isActive = active === key;
    const isHover = hover === key && !isActive;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      onClick: () => onSelect(key),
      onMouseEnter: () => setHover(key),
      onMouseLeave: () => setHover(null),
      style: {
        margin: '1px 5px',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 26,
        fontWeight: 600,
        fontSize: 14,
        borderRadius: 12,
        cursor: 'pointer',
        transition: 'all 0.15s',
        color: isActive ? '#fff' : '#8a7b66',
        background: isActive ? '#b7c6e5' : isHover ? '#d6dff0' : 'transparent'
      }
    }, label);
  })))));
}
window.Sidebar = Sidebar;
window.aiuiAssetUrl = aiuiAssetUrl;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs-site/Sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.Collapse = __ds_scope.Collapse;

__ds_ns.Cursor = __ds_scope.Cursor;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Form = __ds_scope.Form;

__ds_ns.FormItem = __ds_scope.FormItem;

__ds_ns.ICON_LIST = __ds_scope.ICON_LIST;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Loading = __ds_scope.Loading;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Phone = __ds_scope.Phone;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Time = __ds_scope.Time;

__ds_ns.Title = __ds_scope.Title;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Typewriter = __ds_scope.Typewriter;

__ds_ns.Wallet = __ds_scope.Wallet;

})();
