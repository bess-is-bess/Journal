# Journal — turn on cloud sync + backup (Supabase) & publish (Netlify)

Two one-time jobs: **(A)** create a free Supabase project and paste 2 keys, **(B)** drag the folder onto Netlify. ~10 minutes total. After that your data lives in the cloud, backed up and synced across every device that opens your site.

Until you do step A, the app keeps working on local (this-browser) storage — nothing breaks.

---

## A. Supabase — free cloud database + photo storage

### 1. Create the project
1. Go to **https://supabase.com** → sign up (free) → **New project**. Pick any name + a database password. Wait ~2 min for it to spin up.

### 2. Create the tables
2. Left sidebar → **SQL Editor** → **New query** → paste all of this → **Run**:

```sql
create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  color text not null default 'app-teal',
  created_at bigint not null
);

create table items (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references categories(id) on delete cascade,
  name text not null,
  quality text default '',
  quantity int not null default 1,
  collected boolean not null default false,
  photo text,
  created_at bigint not null
);
create index items_category_id_idx on items(category_id);

-- Personal-use access policies (see the security note at the bottom)
alter table categories enable row level security;
alter table items enable row level security;
create policy "journal categories" on categories for all using (true) with check (true);
create policy "journal items" on items for all using (true) with check (true);
```

### 3. Create the photo bucket
3. Left sidebar → **Storage** → **New bucket** → name it exactly `journal-photos` → toggle **Public bucket ON** → Create.
4. Back in **SQL Editor**, run this to allow uploads/deletes:

```sql
create policy "journal photos read"   on storage.objects for select using (bucket_id = 'journal-photos');
create policy "journal photos write"  on storage.objects for insert with check (bucket_id = 'journal-photos');
create policy "journal photos delete" on storage.objects for delete using (bucket_id = 'journal-photos');
```

### 4. Copy your keys into the app
5. Left sidebar → **Project Settings → API**. Copy **Project URL** and the **anon public** key.
6. Open **`config.js`** in this folder and paste them in:

```js
window.JOURNAL_CONFIG = {
    SUPABASE_URL: 'https://YOUR-PROJECT.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGci...your anon public key...',
};
```

That's it — the app now reads/writes the cloud automatically (you'll see “Cloud sync is ON” in the browser console).

---

## B. Publish it (Netlify Drop — free, ~30 seconds)
1. Go to **https://app.netlify.com/drop**
2. Drag this whole **`journal-app`** folder onto the page.
3. You get a live URL (e.g. `your-name.netlify.app`). Open it on your phone and laptop — same data everywhere.

> Re-deploy after editing `config.js`: just drag the folder again (Netlify makes a new version), or connect the folder to a GitHub repo for auto-deploys.

---

## Notes
- **Backup:** your data is safe in Supabase (Postgres). You can export any table from the Supabase dashboard (Table editor → ⋯ → Export CSV) anytime.
- **Security (important):** these policies let anyone who has your site URL **and** the public anon key read/write the data — fine for a private personal list on an unshared URL, but it is **not** locked to you. Want a real login (email magic-link) so only you can access it? Ask and I'll add Supabase Auth + per-user rules.
- **Offline:** the cloud version needs internet. If you want offline-first with background sync, that's a bigger build — happy to do it.
