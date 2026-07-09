/* Journal — a cozy Animal-Crossing 收纳 app.
   Categories -> items (name, quantity, photo). Data in IndexedDB (window.JournalDB).
   UI composed from the Animal Island UI design system bundle. */

const NS = window.AnimalIslandUIDesignSystem_ed2c2c;
const { Title, Card, Button, Input, Select, Tag, Modal, Drawer, Divider, Footer, Cursor } = NS;

function jAsset(rel) {
    const s = document.querySelector('script[src*="_ds_bundle.js"]');
    if (s && s.src) return s.src.replace(/_ds_bundle\.js.*$/, '') + rel;
    return rel;
}

const CAT_COLORS = ['app-teal', 'app-pink', 'purple', 'app-blue', 'app-yellow', 'app-orange', 'app-green', 'app-red', 'lime-green', 'warm-peach-pink'];
const HEX = {
    'app-teal': '#82d5bb', 'app-pink': '#f8a6b2', purple: '#b77dee', 'app-blue': '#889df0', 'app-yellow': '#f7cd67',
    'app-orange': '#e59266', 'app-green': '#8ac68a', 'app-red': '#fc736d', 'lime-green': '#d1da49', 'warm-peach-pink': '#e18c6f',
};

const journalStyles = {
    page: { minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'var(--animal-font-family)', color: '#725d42', background: '#f8f8f0' },
    bar: { display: 'flex', alignItems: 'center', gap: 16, padding: '22px 32px', flexWrap: 'wrap' },
    content: { flex: 1, width: '100%', maxWidth: 1040, margin: '0 auto', boxSizing: 'border-box', padding: '8px 32px 48px' },
    sectionHead: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, margin: '18px 0 22px', flexWrap: 'wrap' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 18 },
    cardActions: { display: 'flex', gap: 6, marginTop: 14 },
};

/* ---------- Photo helpers ---------- */
function PhotoImg({ blob, style, fallback }) {
    const [url, setUrl] = React.useState(null);
    React.useEffect(() => {
        if (!blob) {
            setUrl(null);
            return;
        }
        if (typeof blob === 'string') {
            // already a URL (e.g. a Supabase Storage public URL)
            setUrl(blob);
            return;
        }
        const u = URL.createObjectURL(blob);
        setUrl(u);
        return () => URL.revokeObjectURL(u);
    }, [blob]);
    if (!url) return fallback || null;
    return <img src={url} alt="" style={{ objectFit: 'cover', ...style }} />;
}

function PhotoPlaceholder({ style }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#efe7d4', color: '#c4b89e', ...style }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
                <circle cx="8.5" cy="10" r="1.7" fill="currentColor" />
                <path d="M4 17l4.5-4 3.5 3 3-2.5L20 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

/* ---------- Small action button ---------- */
function MiniBtn({ children, danger, onClick }) {
    return (
        <Button size="small" type="default" danger={danger} onClick={(e) => { e.stopPropagation(); onClick(e); }}>
            {children}
        </Button>
    );
}

/* ---------- Empty state ---------- */
function EmptyState({ title, hint, action }) {
    return (
        <Card type="dashed" style={{ textAlign: 'center', padding: '46px 24px' }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#794f27', marginBottom: 6 }}>{title}</div>
            <div style={{ fontSize: 14, color: '#8a7b66', marginBottom: action ? 20 : 0 }}>{hint}</div>
            {action}
        </Card>
    );
}

/* ============================================================
   Category card
   ============================================================ */
function CategoryCard({ cat, count, qty, onOpen, onEdit, onDelete }) {
    return (
        <div style={{ cursor: 'pointer' }} onClick={onOpen}>
            <Card pattern={cat.color}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                    <div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.2 }}>{cat.name}</div>
                    <span style={{ width: 14, height: 14, borderRadius: '50%', background: HEX[cat.color] || '#82d5bb', flex: 'none', marginTop: 4, boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.6)' }} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, opacity: 0.85, marginTop: 6 }}>{count === 1 ? '1 item' : count + ' items'}{qty > count ? ' · ' + qty + ' total' : ''}</div>
                <div style={journalStyles.cardActions}>
                    <MiniBtn onClick={onEdit}>Edit</MiniBtn>
                    <MiniBtn danger onClick={onDelete}>Delete</MiniBtn>
                </div>
            </Card>
        </div>
    );
}

/* ============================================================
   Item card
   ============================================================ */
function ItemCard({ item, onEdit, onDelete }) {
    return (
        <Card style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: 150 }}>
                <PhotoImg
                    blob={item.photo}
                    style={{ width: '100%', height: '100%', display: 'block' }}
                    fallback={<PhotoPlaceholder style={{ width: '100%', height: '100%' }} />}
                />
            </div>
            <div style={{ padding: '14px 16px 16px' }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#794f27', lineHeight: 1.25, wordBreak: 'break-word' }}>{item.name}</div>
                <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#8a7b66' }}>×{item.quantity || 1}</span>
                </div>
                <div style={journalStyles.cardActions}>
                    <MiniBtn onClick={onEdit}>Edit</MiniBtn>
                    <MiniBtn danger onClick={onDelete}>Delete</MiniBtn>
                </div>
            </div>
        </Card>
    );
}

/* ============================================================
   Category form drawer
   ============================================================ */
function CategoryDrawer({ open, editing, onClose, onSave }) {
    const [name, setName] = React.useState('');
    const [color, setColor] = React.useState('app-teal');
    React.useEffect(() => {
        if (open) {
            setName(editing ? editing.name : '');
            setColor(editing ? editing.color : 'app-teal');
        }
    }, [open, editing]);

    const canSave = name.trim().length > 0;
    return (
        <Drawer
            open={open}
            title={editing ? 'Edit category' : 'New category'}
            width={400}
            onClose={onClose}
            footer={
                <>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" disabled={!canSave} onClick={() => onSave({ name, color })}>Save</Button>
                </>
            }
        >
            <div style={{ fontSize: 14, fontWeight: 600, paddingTop: 6 }}>
                <label style={{ display: 'block', marginBottom: 8, color: '#794f27' }}>Name</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Books, Plants, Tools" allowClear />

                <label style={{ display: 'block', margin: '22px 0 10px', color: '#794f27' }}>Colour</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {CAT_COLORS.map((c) => (
                        <button
                            key={c}
                            type="button"
                            onClick={() => setColor(c)}
                            aria-label={c}
                            style={{
                                width: 34, height: 34, borderRadius: '50%', cursor: 'pointer', background: HEX[c],
                                border: color === c ? '3px solid #794f27' : '3px solid rgba(0,0,0,0.06)',
                                boxShadow: color === c ? '0 0 0 3px rgba(255,204,0,0.35)' : 'none', transition: 'all 0.15s',
                            }}
                        />
                    ))}
                </div>
            </div>
        </Drawer>
    );
}

/* ============================================================
   Item form drawer (with photo upload)
   ============================================================ */
function ItemDrawer({ open, editing, onClose, onSave }) {
    const [name, setName] = React.useState('');
    const [photo, setPhoto] = React.useState(null);
    const [quantity, setQuantity] = React.useState(1);
    const fileRef = React.useRef(null);

    React.useEffect(() => {
        if (open) {
            setName(editing ? editing.name : '');
            setPhoto(editing ? editing.photo : null);
            setQuantity(editing ? editing.quantity || 1 : 1);
        }
    }, [open, editing]);

    const onPick = (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) setPhoto(file);
        e.target.value = '';
    };
    const canSave = name.trim().length > 0;

    return (
        <Drawer
            open={open}
            title={editing ? 'Edit item' : 'Add item'}
            width={420}
            onClose={onClose}
            footer={
                <>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" disabled={!canSave} onClick={() => onSave({ name, photo, quantity })}>Save</Button>
                </>
            }
        >
            <div style={{ fontSize: 14, fontWeight: 600, paddingTop: 6 }}>
                <label style={{ display: 'block', marginBottom: 10, color: '#794f27' }}>Photo</label>
                <div
                    onClick={() => fileRef.current && fileRef.current.click()}
                    style={{
                        position: 'relative', height: 190, borderRadius: 18, overflow: 'hidden', cursor: 'pointer',
                        border: '2.5px dashed #c4b89e', background: '#efe7d4', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                >
                    {photo ? (
                        <PhotoImg blob={photo} style={{ width: '100%', height: '100%' }} />
                    ) : (
                        <div style={{ textAlign: 'center', color: '#a0936e' }}>
                            <PhotoPlaceholder style={{ width: 52, height: 52, borderRadius: 12, margin: '0 auto 8px' }} />
                            <div style={{ fontSize: 13, fontWeight: 600 }}>Tap to upload a photo</div>
                        </div>
                    )}
                </div>
                {photo ? (
                    <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
                        <Button size="small" onClick={() => fileRef.current && fileRef.current.click()}>Change</Button>
                        <Button size="small" danger onClick={() => setPhoto(null)}>Remove</Button>
                    </div>
                ) : null}
                <input ref={fileRef} type="file" accept="image/*" onChange={onPick} style={{ display: 'none' }} />

                <label style={{ display: 'block', margin: '22px 0 8px', color: '#794f27' }}>Name</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Ceramic mug" allowClear />

                <label style={{ display: 'block', margin: '22px 0 8px', color: '#794f27' }}>Quantity</label>
                <QtyStepper value={quantity} onChange={setQuantity} />
            </div>
        </Drawer>
    );
}

/* ============================================================
   To-Collect checklist pieces
   ============================================================ */
const MONTHS_FULL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function formatDay(ts) {
    const d = new Date(ts);
    return d.getFullYear() + ' ' + MONTHS_FULL[d.getMonth()] + ' ' + String(d.getDate()).padStart(2, '0');
}
function dayKey(ts) {
    const d = new Date(ts);
    return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
}

/* Quantity stepper */
function QtyStepper({ value, onChange, min = 1 }) {
    const set = (v) => onChange(Math.max(min, v));
    const btn = { width: 42, height: 42, borderRadius: 12, border: '2px solid #c4b89e', background: 'rgb(247,243,223)', color: '#794f27', fontSize: 22, fontWeight: 800, cursor: 'pointer', lineHeight: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' };
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button type="button" style={btn} onClick={() => set(value - 1)} aria-label="decrease">−</button>
            <div style={{ minWidth: 46, textAlign: 'center', fontSize: 19, fontWeight: 800, color: '#794f27', fontVariantNumeric: 'tabular-nums' }}>{value}</div>
            <button type="button" style={btn} onClick={() => set(value + 1)} aria-label="increase">+</button>
        </div>
    );
}

/* Animal-Crossing-style tick box */
function TickBox({ checked, onChange }) {
    return (
        <button
            type="button"
            onClick={onChange}
            aria-pressed={checked}
            style={{
                flex: 'none', width: 27, height: 27, borderRadius: 8, cursor: 'pointer', padding: 0,
                border: checked ? '2.5px solid #11a89b' : '2.5px solid #c4b89e',
                background: checked ? '#19c8b9' : 'rgb(247,243,223)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
            }}
        >
            {checked ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : null}
        </button>
    );
}

/* One checklist row (todo style) */
function CollectRow({ item, category, onToggle, onEdit, onDelete }) {
    const done = !!item.collected;
    return (
        <div
            style={{
                display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', borderRadius: 16,
                background: done ? '#efeadd' : 'rgb(247,243,223)', opacity: done ? 0.6 : 1,
                transition: 'opacity 0.25s ease, background 0.25s ease',
            }}
        >
            <TickBox checked={done} onChange={onToggle} />
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#794f27', textDecoration: done ? 'line-through' : 'none', wordBreak: 'break-word' }}>{item.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 5, flexWrap: 'wrap' }}>
                    {category ? <Tag size="small" color={category.color}>{category.name}</Tag> : <Tag size="small">Uncategorised</Tag>}
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#8a7b66' }}>×{item.quantity || 1}</span>
                </div>
            </div>
            <div style={{ display: 'flex', gap: 6, flex: 'none' }}>
                <Button size="small" onClick={onEdit}>Edit</Button>
                <Button size="small" danger onClick={onDelete}>Delete</Button>
            </div>
        </div>
    );
}

/* Add / edit a to-collect item (define its category here) */
function CollectDrawer({ open, editing, categories, onClose, onSave }) {
    const [name, setName] = React.useState('');
    const [catId, setCatId] = React.useState('');
    const [newCat, setNewCat] = React.useState('');
    const [newColor, setNewColor] = React.useState('app-teal');
    const [mode, setMode] = React.useState('existing');
    const [quantity, setQuantity] = React.useState(1);

    React.useEffect(() => {
        if (!open) return;
        setName(editing ? editing.name : '');
        setQuantity(editing ? editing.quantity || 1 : 1);
        setNewCat('');
        setNewColor('app-teal');
        if (editing) {
            setCatId(editing.categoryId);
            setMode('existing');
        } else if (categories.length) {
            setCatId(categories[0].id);
            setMode('existing');
        } else {
            setCatId('');
            setMode('new');
        }
    }, [open, editing, categories]);

    const catValid = mode === 'existing' ? !!catId : newCat.trim().length > 0;
    const canSave = name.trim().length > 0 && catValid;
    const lbl = { display: 'block', margin: '22px 0 8px', color: '#794f27' };

    const doSave = () =>
        onSave({
            name, quantity,
            categoryId: mode === 'existing' ? catId : null,
            newCategory: mode === 'new' ? { name: newCat, color: newColor } : null,
        });

    return (
        <Drawer
            open={open}
            title={editing ? 'Edit item' : 'Add to collect'}
            width={420}
            onClose={onClose}
            footer={
                <>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" disabled={!canSave} onClick={doSave}>Save</Button>
                </>
            }
        >
            <div style={{ fontSize: 14, fontWeight: 600, paddingTop: 6 }}>
                <label style={{ display: 'block', marginBottom: 8, color: '#794f27' }}>Name</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Star fragment" allowClear />

                <label style={lbl}>Category</label>
                {mode === 'existing' && categories.length ? (
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                        <Select value={catId} onChange={setCatId} options={categories.map((c) => ({ key: c.id, label: c.name }))} />
                        <Button size="small" onClick={() => setMode('new')}>+ New</Button>
                    </div>
                ) : (
                    <div>
                        <Input value={newCat} onChange={(e) => setNewCat(e.target.value)} placeholder="New category name" allowClear />
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                            {CAT_COLORS.map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    onClick={() => setNewColor(c)}
                                    aria-label={c}
                                    style={{ width: 28, height: 28, borderRadius: '50%', cursor: 'pointer', background: HEX[c], border: newColor === c ? '3px solid #794f27' : '3px solid rgba(0,0,0,0.06)', transition: 'all 0.15s' }}
                                />
                            ))}
                        </div>
                        {categories.length ? (
                            <div style={{ marginTop: 8 }}>
                                <Button size="small" type="text" onClick={() => setMode('existing')}>Use an existing category</Button>
                            </div>
                        ) : null}
                    </div>
                )}

                <label style={lbl}>Quantity</label>
                <QtyStepper value={quantity} onChange={setQuantity} />
            </div>
        </Drawer>
    );
}

/* ============================================================
   Sign-in screen (email magic-link)
   ============================================================ */
function LoginScreen({ onSend }) {
    const [email, setEmail] = React.useState('');
    const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error
    const [err, setErr] = React.useState('');
    const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim());

    const submit = async () => {
        if (!valid || status === 'sending') return;
        setStatus('sending');
        setErr('');
        try {
            await onSend(email.trim());
            setStatus('sent');
        } catch (e) {
            setErr((e && e.message) || 'Something went wrong. Please try again.');
            setStatus('error');
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, boxSizing: 'border-box', fontFamily: 'var(--animal-font-family)', color: '#725d42' }}>
            <div style={{ width: '100%', maxWidth: 380 }}>
                <div style={{ textAlign: 'center', marginBottom: 22 }}>
                    <img src={jAsset('assets/logo/animal_icon.png')} alt="" style={{ width: 64, height: 64 }} />
                    <div style={{ fontSize: 28, fontWeight: 900, color: '#794f27', marginTop: 8 }}>Journal</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#9f927d', marginTop: 4 }}>Your cozy little collection</div>
                </div>
                <Card>
                    {status === 'sent' ? (
                        <div style={{ textAlign: 'center', padding: '8px 4px' }}>
                            <div style={{ fontSize: 40, marginBottom: 8 }}>✉️</div>
                            <div style={{ fontSize: 17, fontWeight: 800, color: '#794f27', marginBottom: 6 }}>Check your email</div>
                            <div style={{ fontSize: 14, color: '#8a7b66', marginBottom: 18 }}>We sent a sign-in link to <b>{email.trim()}</b>. Open it on this device to come in.</div>
                            <Button type="text" onClick={() => { setStatus('idle'); setEmail(''); }}>Use a different email</Button>
                        </div>
                    ) : (
                        <div style={{ fontSize: 14, fontWeight: 600 }}>
                            <div style={{ fontSize: 16, fontWeight: 800, color: '#794f27', marginBottom: 4 }}>Sign in</div>
                            <div style={{ fontSize: 13, color: '#8a7b66', marginBottom: 16 }}>Enter your email and we’ll send you a magic link — no password needed.</div>
                            <label style={{ display: 'block', marginBottom: 8, color: '#794f27' }}>Email</label>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" onKeyDown={(e) => { if (e.key === 'Enter') submit(); }} />
                            {status === 'error' ? <div style={{ color: '#e05a5a', fontSize: 13, marginTop: 10 }}>{err}</div> : null}
                            <div style={{ marginTop: 18 }}>
                                <Button type="primary" block disabled={!valid || status === 'sending'} onClick={submit}>
                                    {status === 'sending' ? 'Sending…' : 'Email me a sign-in link'}
                                </Button>
                            </div>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
}

window.JournalParts = { NS, jAsset, CAT_COLORS, HEX, journalStyles, PhotoImg, PhotoPlaceholder, MiniBtn, EmptyState, CategoryCard, ItemCard, CategoryDrawer, ItemDrawer, QtyStepper, TickBox, CollectRow, CollectDrawer, LoginScreen, formatDay, dayKey };
