/* Journal — IndexedDB data layer.
   Two stores: `categories` and `items`. Photos are stored as real Blobs.
   Everything lives in the browser — free, offline, no account. */

(function () {
    const DB_NAME = 'journal-db';
    const DB_VERSION = 1;
    let _dbPromise = null;

    function open() {
        if (_dbPromise) return _dbPromise;
        _dbPromise = new Promise((resolve, reject) => {
            const req = indexedDB.open(DB_NAME, DB_VERSION);
            req.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains('categories')) {
                    db.createObjectStore('categories', { keyPath: 'id' });
                }
                if (!db.objectStoreNames.contains('items')) {
                    const s = db.createObjectStore('items', { keyPath: 'id' });
                    s.createIndex('categoryId', 'categoryId', { unique: false });
                }
            };
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error);
        });
        return _dbPromise;
    }

    function uid() {
        return typeof crypto !== 'undefined' && crypto.randomUUID
            ? crypto.randomUUID()
            : 'id-' + Date.now() + '-' + Math.random().toString(36).slice(2);
    }

    async function run(store, mode, fn) {
        const db = await open();
        return new Promise((resolve, reject) => {
            const t = db.transaction(store, mode);
            const os = t.objectStore(store);
            let result;
            const r = fn(os);
            if (r) r.onsuccess = () => (result = r.result);
            t.oncomplete = () => resolve(result);
            t.onerror = () => reject(t.error);
            t.onabort = () => reject(t.error);
        });
    }

    function getAll(store) {
        return run(store, 'readonly', (os) => os.getAll());
    }

    const JournalDB = {
        // ---------- Categories ----------
        async listCategories() {
            const rows = await getAll('categories');
            return rows.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
        },
        async addCategory({ name, color }) {
            const cat = { id: uid(), name: name.trim(), color: color || 'app-teal', createdAt: Date.now() };
            await run('categories', 'readwrite', (os) => os.put(cat));
            return cat;
        },
        async updateCategory(cat) {
            await run('categories', 'readwrite', (os) => os.put(cat));
            return cat;
        },
        async deleteCategory(id) {
            // remove the category and all of its items
            const db = await open();
            await new Promise((resolve, reject) => {
                const t = db.transaction(['categories', 'items'], 'readwrite');
                t.objectStore('categories').delete(id);
                const idx = t.objectStore('items').index('categoryId');
                const cur = idx.openCursor(IDBKeyRange.only(id));
                cur.onsuccess = (e) => {
                    const c = e.target.result;
                    if (c) {
                        c.delete();
                        c.continue();
                    }
                };
                t.oncomplete = () => resolve();
                t.onerror = () => reject(t.error);
            });
        },

        // ---------- Items ----------
        async listItems(categoryId) {
            const db = await open();
            return new Promise((resolve, reject) => {
                const t = db.transaction('items', 'readonly');
                const idx = t.objectStore('items').index('categoryId');
                const req = idx.getAll(IDBKeyRange.only(categoryId));
                req.onsuccess = () => resolve(req.result.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0)));
                req.onerror = () => reject(req.error);
            });
        },
        async countByCategory() {
            // returns { [categoryId]: count }
            const rows = await getAll('items');
            const map = {};
            rows.forEach((r) => {
                map[r.categoryId] = (map[r.categoryId] || 0) + 1;
            });
            return map;
        },
        async totalItems() {
            const rows = await getAll('items');
            return rows.length;
        },
        async addItem({ categoryId, name, quality, photo, quantity }) {
            const item = {
                id: uid(), categoryId, name: name.trim(), quality: quality || '',
                photo: photo || null, quantity: quantity == null ? 1 : Math.max(1, quantity),
                collected: false, createdAt: Date.now(),
            };
            await run('items', 'readwrite', (os) => os.put(item));
            return item;
        },
        // Every item, newest last — used by the To-Collect checklist.
        async allItems() {
            const rows = await getAll('items');
            return rows.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
        },
        // { [categoryId]: { count, qty } } — inventory existence + total quantity for the index.
        async statsByCategory() {
            const rows = await getAll('items');
            const map = {};
            rows.forEach((r) => {
                const m = map[r.categoryId] || (map[r.categoryId] = { count: 0, qty: 0 });
                m.count += 1;
                m.qty += r.quantity || 1;
            });
            return map;
        },
        async updateItem(item) {
            await run('items', 'readwrite', (os) => os.put(item));
            return item;
        },
        async deleteItem(id) {
            await run('items', 'readwrite', (os) => os.delete(id));
        },
    };

    window.JournalDB = JournalDB;
})();
