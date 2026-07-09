/* Journal — root app: home (categories) + category (items) + to-collect checklist, wired to IndexedDB. */

const {
    NS: J_NS, jAsset: J_asset, HEX: J_HEX, journalStyles: JS,
    EmptyState: J_Empty, CategoryCard: J_CatCard, ItemCard: J_ItemCard,
    CategoryDrawer: J_CatDrawer, ItemDrawer: J_ItemDrawer,
    CollectRow: J_CollectRow, CollectDrawer: J_CollectDrawer, LoginScreen: J_LoginScreen, formatDay: J_formatDay, dayKey: J_dayKey,
} = window.JournalParts;
const { Title: J_Title, Button: J_Button, Modal: J_Modal, Footer: J_Footer, Cursor: J_Cursor } = J_NS;
const DB = window.JournalDB;

function JournalApp({ onSignOut }) {
    const [loading, setLoading] = React.useState(true);
    const [cats, setCats] = React.useState([]);
    const [stats, setStats] = React.useState({}); // { catId: { count, qty } } — collected items only
    const [view, setView] = React.useState({ name: 'home', cat: null });
    const [items, setItems] = React.useState([]); // items in the open category
    const [collectItems, setCollectItems] = React.useState([]); // every item (checklist)

    const [catDrawer, setCatDrawer] = React.useState({ open: false, editing: null });
    const [itemDrawer, setItemDrawer] = React.useState({ open: false, editing: null });
    const [collectDrawer, setCollectDrawer] = React.useState({ open: false, editing: null });
    const [confirm, setConfirm] = React.useState({ open: false });

    const loadHome = React.useCallback(async () => {
        const [c, all] = await Promise.all([DB.listCategories(), DB.allItems()]);
        // Home reflects only collected (ticked) items — count per category, collected only.
        const st = {};
        all.forEach((it) => {
            if (!it.collected) return;
            const m = st[it.categoryId] || (st[it.categoryId] = { count: 0, qty: 0 });
            m.count += 1;
            m.qty += it.quantity || 1;
        });
        setCats(c);
        setStats(st);
        setLoading(false);
    }, []);
    React.useEffect(() => {
        loadHome();
    }, [loadHome]);

    // Category detail shows only collected items (consistent with the Home card count).
    const loadItems = React.useCallback(async (catId) => setItems((await DB.listItems(catId)).filter((it) => it.collected)), []);
    const loadCollect = React.useCallback(async () => {
        const [all, c] = await Promise.all([DB.allItems(), DB.listCategories()]);
        setCollectItems(all);
        setCats(c);
    }, []);

    /* ----- navigation ----- */
    const goHome = async () => {
        setView({ name: 'home', cat: null });
        await loadHome();
    };
    const openCategory = async (cat) => {
        setView({ name: 'category', cat });
        await loadItems(cat.id);
    };
    const openCollect = async () => {
        setView({ name: 'tocollect' });
        await loadCollect();
    };

    /* ----- category CRUD ----- */
    const saveCategory = async ({ name, color }) => {
        if (catDrawer.editing) await DB.updateCategory({ ...catDrawer.editing, name: name.trim(), color });
        else await DB.addCategory({ name, color });
        setCatDrawer({ open: false, editing: null });
        await loadHome();
    };
    const removeCategory = async (cat) => {
        await DB.deleteCategory(cat.id);
        setConfirm({ open: false });
        await loadHome();
    };

    /* ----- item CRUD (category view) ----- */
    const saveItem = async ({ name, photo, quantity }) => {
        const catId = view.cat.id;
        // Items added straight to a category are things you already own → collected.
        if (itemDrawer.editing) await DB.updateItem({ ...itemDrawer.editing, name: name.trim(), photo, quantity });
        else await DB.addItem({ categoryId: catId, name, photo, quantity, collected: true });
        setItemDrawer({ open: false, editing: null });
        await loadItems(catId);
    };
    const removeItem = async (item) => {
        await DB.deleteItem(item.id);
        setConfirm({ open: false });
        await loadItems(view.cat.id);
    };

    /* ----- to-collect CRUD ----- */
    const saveCollect = async ({ name, quantity, categoryId, newCategory }) => {
        let catId = categoryId;
        if (!catId && newCategory && newCategory.name.trim()) {
            const created = await DB.addCategory(newCategory);
            catId = created.id;
        }
        if (!catId) return;
        // ToCollect items start un-ticked (a wishlist) — they reach Home only once collected.
        if (collectDrawer.editing) await DB.updateItem({ ...collectDrawer.editing, name: name.trim(), quantity, categoryId: catId });
        else await DB.addItem({ categoryId: catId, name, quantity });
        setCollectDrawer({ open: false, editing: null });
        await loadCollect();
    };
    const toggleCollect = async (item) => {
        await DB.updateItem({ ...item, collected: !item.collected });
        await loadCollect();
    };
    const removeCollect = async (item) => {
        await DB.deleteItem(item.id);
        setConfirm({ open: false });
        await loadCollect();
    };

    /* ----- confirm ----- */
    const askDeleteCategory = (cat) =>
        setConfirm({ open: true, title: 'Delete category?', body: `“${cat.name}” and all of its items will be removed. This can’t be undone.`, onOk: () => removeCategory(cat) });
    const askDeleteItem = (item) =>
        setConfirm({ open: true, title: 'Delete item?', body: `“${item.name}” will be removed. This can’t be undone.`, onOk: () => removeItem(item) });
    const askDeleteCollect = (item) =>
        setConfirm({ open: true, title: 'Delete item?', body: `“${item.name}” will be removed from your list and inventory. This can’t be undone.`, onOk: () => removeCollect(item) });

    /* ----- group the checklist by real day (newest day first; ticked rows sink to the bottom) ----- */
    const catById = React.useMemo(() => Object.fromEntries(cats.map((c) => [c.id, c])), [cats]);
    const groups = React.useMemo(() => {
        const byDay = {};
        collectItems.forEach((it) => {
            const k = J_dayKey(it.createdAt);
            (byDay[k] = byDay[k] || { key: k, ts: it.createdAt, items: [] }).items.push(it);
        });
        const arr = Object.values(byDay).sort((a, b) => b.ts - a.ts);
        arr.forEach((g) =>
            g.items.sort((a, b) => {
                if (!!a.collected !== !!b.collected) return a.collected ? 1 : -1;
                return (a.createdAt || 0) - (b.createdAt || 0);
            }),
        );
        return arr;
    }, [collectItems]);

    return (
        <J_Cursor>
            <div style={JS.page}>
                {/* Top bar */}
                <div style={JS.bar}>
                    <img src={J_asset('assets/logo/animal_icon.png')} alt="" style={{ width: 46, height: 46, cursor: 'pointer' }} onClick={goHome} />
                    <div style={{ flex: 1, cursor: 'pointer' }} onClick={goHome}>
                        <div style={{ fontSize: 26, fontWeight: 900, color: '#794f27', lineHeight: 1 }}>Journal</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#9f927d', marginTop: 3 }}>Your cozy little collection</div>
                    </div>
                    <J_Button type={view.name === 'tocollect' ? 'primary' : 'default'} onClick={openCollect}>ToCollect List</J_Button>
                    {onSignOut ? <J_Button type="text" onClick={onSignOut}>Sign out</J_Button> : null}
                </div>

                <div style={JS.content}>
                    {view.name === 'home' && (
                        <React.Fragment>
                            <div style={JS.sectionHead}>
                                <J_Title color="app-teal" size="large">Categories</J_Title>
                                <J_Button type="primary" onClick={() => setCatDrawer({ open: true, editing: null })}>+ New Category</J_Button>
                            </div>
                            {loading ? null : cats.length === 0 ? (
                                <J_Empty
                                    title="No categories yet"
                                    hint="Create your first category — Books, Plants, Tools, anything you like."
                                    action={<J_Button type="primary" onClick={() => setCatDrawer({ open: true, editing: null })}>+ New Category</J_Button>}
                                />
                            ) : (
                                <div style={JS.grid}>
                                    {cats.map((cat) => (
                                        <J_CatCard
                                            key={cat.id}
                                            cat={cat}
                                            count={(stats[cat.id] || {}).count || 0}
                                            qty={(stats[cat.id] || {}).qty || 0}
                                            onOpen={() => openCategory(cat)}
                                            onEdit={() => setCatDrawer({ open: true, editing: cat })}
                                            onDelete={() => askDeleteCategory(cat)}
                                        />
                                    ))}
                                </div>
                            )}
                        </React.Fragment>
                    )}

                    {view.name === 'category' && (
                        <React.Fragment>
                            <div style={{ marginBottom: 4 }}>
                                <J_Button type="text" onClick={goHome}>← All categories</J_Button>
                            </div>
                            <div style={JS.sectionHead}>
                                <J_Title color={view.cat.color} size="large">{view.cat.name}</J_Title>
                                <J_Button type="primary" onClick={() => setItemDrawer({ open: true, editing: null })}>+ Add Item</J_Button>
                            </div>
                            {items.length === 0 ? (
                                <J_Empty
                                    title="This category is empty"
                                    hint="Add your first item with a name, quantity and a photo."
                                    action={<J_Button type="primary" onClick={() => setItemDrawer({ open: true, editing: null })}>+ Add Item</J_Button>}
                                />
                            ) : (
                                <div style={JS.grid}>
                                    {items.map((item) => (
                                        <J_ItemCard key={item.id} item={item} onEdit={() => setItemDrawer({ open: true, editing: item })} onDelete={() => askDeleteItem(item)} />
                                    ))}
                                </div>
                            )}
                        </React.Fragment>
                    )}

                    {view.name === 'tocollect' && (
                        <React.Fragment>
                            <div style={{ marginBottom: 4 }}>
                                <J_Button type="text" onClick={goHome}>← Home</J_Button>
                            </div>
                            <div style={JS.sectionHead}>
                                <J_Title color="app-yellow" size="large">To Collect</J_Title>
                                <J_Button type="primary" onClick={() => setCollectDrawer({ open: true, editing: null })}>+ Add Item</J_Button>
                            </div>
                            {collectItems.length === 0 ? (
                                <J_Empty
                                    title="Nothing on the list yet"
                                    hint="Add something to collect — pick a category and how many. Tick it off once it’s yours."
                                    action={<J_Button type="primary" onClick={() => setCollectDrawer({ open: true, editing: null })}>+ Add Item</J_Button>}
                                />
                            ) : (
                                groups.map((g) => (
                                    <div key={g.key} style={{ marginBottom: 26 }}>
                                        <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.04em', color: '#9f927d', margin: '0 0 12px 4px' }}>{J_formatDay(g.ts)}</div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                            {g.items.map((item) => (
                                                <J_CollectRow
                                                    key={item.id}
                                                    item={item}
                                                    category={catById[item.categoryId]}
                                                    onToggle={() => toggleCollect(item)}
                                                    onEdit={() => setCollectDrawer({ open: true, editing: item })}
                                                    onDelete={() => askDeleteCollect(item)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )}
                        </React.Fragment>
                    )}
                </div>

                <J_Footer type="sea" seamless />

                {/* Drawers + confirm */}
                <J_CatDrawer open={catDrawer.open} editing={catDrawer.editing} onClose={() => setCatDrawer({ open: false, editing: null })} onSave={saveCategory} />
                <J_ItemDrawer open={itemDrawer.open} editing={itemDrawer.editing} onClose={() => setItemDrawer({ open: false, editing: null })} onSave={saveItem} />
                <J_CollectDrawer open={collectDrawer.open} editing={collectDrawer.editing} categories={cats} onClose={() => setCollectDrawer({ open: false, editing: null })} onSave={saveCollect} />
                <J_Modal
                    open={confirm.open}
                    title={confirm.title}
                    typewriter={false}
                    width={420}
                    onClose={() => setConfirm({ open: false })}
                    footer={
                        <>
                            <J_Button onClick={() => setConfirm({ open: false })}>Cancel</J_Button>
                            <J_Button type="primary" danger onClick={confirm.onOk}>Delete</J_Button>
                        </>
                    }
                >
                    {confirm.body}
                </J_Modal>
            </div>
        </J_Cursor>
    );
}

/* ----- Auth gate: cloud mode requires sign-in; local mode is open ----- */
function AuthGate() {
    const needsAuth = !!window.JOURNAL_CLOUD;
    const [session, setSession] = React.useState(needsAuth ? undefined : 'local'); // undefined = still checking

    React.useEffect(() => {
        if (!needsAuth) return;
        DB.auth.getSession().then((s) => setSession(s || null)).catch(() => setSession(null));
        const res = DB.auth.onChange((s) => setSession(s || null));
        const sub = res && res.data && res.data.subscription;
        // Safety net: never strand the user on a blank screen if auth init stalls.
        const t = setTimeout(() => setSession((prev) => (prev === undefined ? null : prev)), 8000);
        return () => { if (sub) sub.unsubscribe(); clearTimeout(t); };
    }, [needsAuth]);

    if (session === undefined) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, fontFamily: 'var(--animal-font-family)', color: '#9f927d' }}>
                <img src={J_asset('assets/logo/animal_icon.png')} alt="" style={{ width: 56, height: 56 }} />
                <div style={{ fontSize: 14, fontWeight: 700 }}>Loading…</div>
            </div>
        );
    }
    if (needsAuth && !session) {
        return <J_LoginScreen onSend={(email) => DB.auth.signInWithEmail(email).then(({ error }) => { if (error) throw error; })} />;
    }
    return <JournalApp onSignOut={needsAuth ? () => DB.auth.signOut() : null} />;
}

window.JournalApp = AuthGate;
