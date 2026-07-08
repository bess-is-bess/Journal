/* Journal — Supabase cloud data layer.
   Exposes the SAME window.JournalDB API as db.js, but backed by Supabase
   (Postgres + Storage) so data persists in the cloud and syncs across devices.

   It only activates when config.js has SUPABASE_URL + SUPABASE_ANON_KEY filled
   AND the Supabase JS client is loaded. Otherwise it does nothing and the app
   keeps using the local IndexedDB store from db.js.

   Load order (see index.html):
     supabase-js CDN → config.js → db.js (local) → db-supabase.js (this file). */

(function () {
    const cfg = window.JOURNAL_CONFIG || {};
    if (!cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) return; // no keys → stay local
    if (!window.supabase || !window.supabase.createClient) {
        console.error('[Journal] Supabase client not loaded — falling back to local storage.');
        return;
    }

    const sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
    const BUCKET = 'journal-photos';

    function uid() {
        return typeof crypto !== 'undefined' && crypto.randomUUID
            ? crypto.randomUUID()
            : 'p-' + Date.now() + '-' + Math.random().toString(36).slice(2);
    }

    const publicUrl = (path) => (path ? sb.storage.from(BUCKET).getPublicUrl(path).data.publicUrl : null);

    const mapCat = (r) => ({ id: r.id, name: r.name, color: r.color, createdAt: r.created_at });
    const mapItem = (r) => ({
        id: r.id, categoryId: r.category_id, name: r.name, quality: r.quality,
        quantity: r.quantity, collected: r.collected, photo: publicUrl(r.photo),
        _photoPath: r.photo || null, createdAt: r.created_at,
    });

    async function uploadPhoto(blob) {
        const ext = (blob.type && blob.type.split('/')[1]) || 'png';
        const path = 'p/' + uid() + '.' + ext;
        const { error } = await sb.storage.from(BUCKET).upload(path, blob, { contentType: blob.type || 'image/png', upsert: false });
        if (error) throw error;
        return path;
    }
    async function removePhoto(path) {
        if (path) await sb.storage.from(BUCKET).remove([path]);
    }

    const CloudDB = {
        // ---------- Categories ----------
        async listCategories() {
            const { data, error } = await sb.from('categories').select('*').order('created_at', { ascending: true });
            if (error) throw error;
            return (data || []).map(mapCat);
        },
        async addCategory({ name, color }) {
            const row = { name: name.trim(), color: color || 'app-teal', created_at: Date.now() };
            const { data, error } = await sb.from('categories').insert(row).select().single();
            if (error) throw error;
            return mapCat(data);
        },
        async updateCategory(cat) {
            const { error } = await sb.from('categories').update({ name: cat.name, color: cat.color }).eq('id', cat.id);
            if (error) throw error;
            return cat;
        },
        async deleteCategory(id) {
            // remove photos for this category's items, then the rows (FK cascade removes item rows)
            const { data: its } = await sb.from('items').select('photo').eq('category_id', id);
            const paths = (its || []).map((i) => i.photo).filter(Boolean);
            if (paths.length) await sb.storage.from(BUCKET).remove(paths);
            const { error } = await sb.from('categories').delete().eq('id', id);
            if (error) throw error;
        },

        // ---------- Items ----------
        async listItems(categoryId) {
            const { data, error } = await sb.from('items').select('*').eq('category_id', categoryId).order('created_at', { ascending: true });
            if (error) throw error;
            return (data || []).map(mapItem);
        },
        async allItems() {
            const { data, error } = await sb.from('items').select('*').order('created_at', { ascending: true });
            if (error) throw error;
            return (data || []).map(mapItem);
        },
        async statsByCategory() {
            const { data, error } = await sb.from('items').select('category_id,quantity');
            if (error) throw error;
            const map = {};
            (data || []).forEach((r) => {
                const m = map[r.category_id] || (map[r.category_id] = { count: 0, qty: 0 });
                m.count += 1;
                m.qty += r.quantity || 1;
            });
            return map;
        },
        async totalItems() {
            const { count, error } = await sb.from('items').select('*', { count: 'exact', head: true });
            if (error) throw error;
            return count || 0;
        },
        async addItem({ categoryId, name, quality, photo, quantity, collected }) {
            let path = null;
            if (photo instanceof Blob) path = await uploadPhoto(photo);
            const row = {
                category_id: categoryId, name: name.trim(), quality: quality || '',
                quantity: quantity == null ? 1 : Math.max(1, quantity), collected: !!collected,
                photo: path, created_at: Date.now(),
            };
            const { data, error } = await sb.from('items').insert(row).select().single();
            if (error) throw error;
            return mapItem(data);
        },
        async updateItem(item) {
            let path = item._photoPath || null;
            if (item.photo instanceof Blob) {
                await removePhoto(path);
                path = await uploadPhoto(item.photo);
            } else if (item.photo == null) {
                await removePhoto(path);
                path = null;
            } // else: unchanged string URL → keep existing path
            const row = {
                name: item.name, quality: item.quality, quantity: item.quantity,
                collected: !!item.collected, category_id: item.categoryId, photo: path,
            };
            const { error } = await sb.from('items').update(row).eq('id', item.id);
            if (error) throw error;
            return item;
        },
        async deleteItem(id) {
            const { data } = await sb.from('items').select('photo').eq('id', id).single();
            if (data && data.photo) await removePhoto(data.photo);
            const { error } = await sb.from('items').delete().eq('id', id);
            if (error) throw error;
        },
    };

    window.JournalDB = CloudDB;
    window.JOURNAL_CLOUD = true;
    console.info('[Journal] Cloud sync is ON (Supabase).');
})();
