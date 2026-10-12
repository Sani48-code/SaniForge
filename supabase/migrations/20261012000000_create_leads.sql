-- Leads captured from the /book-a-call form.
-- Safe and additive: creates objects only if they do not already exist. Nothing is dropped.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  website_url text,
  service text not null,
  budget text,
  project_details text not null,
  -- 'booked' must only be set after a verified Calendly confirmation (manual, or a future webhook).
  status text not null default 'new',
  source text not null default 'book-a-call',
  ip_hash text,
  constraint leads_status_check check (status in ('new', 'contacted', 'booked', 'closed', 'spam')),
  constraint leads_full_name_len check (char_length(full_name) between 2 and 100),
  constraint leads_email_len check (char_length(email) between 5 and 254),
  constraint leads_details_len check (char_length(project_details) between 10 and 3000)
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_created_idx on public.leads (lower(email), created_at desc);
create index if not exists leads_ip_hash_created_idx on public.leads (ip_hash, created_at desc);

-- RLS on with NO policies: anon/authenticated roles cannot read or write.
-- The Next.js server route uses the service-role key, which bypasses RLS.
alter table public.leads enable row level security;
revoke all on public.leads from anon, authenticated;
