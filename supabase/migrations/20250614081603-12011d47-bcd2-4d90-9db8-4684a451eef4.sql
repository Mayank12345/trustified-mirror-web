
-- Create a table to store newsletter/email signups
create table public.newsletter_signups (
  id uuid not null default gen_random_uuid() primary key,
  email text not null,
  created_at timestamp with time zone not null default now()
);

alter table public.newsletter_signups enable row level security;

-- Allow anyone to insert their email address
create policy "Allow all inserts" on public.newsletter_signups
  for insert with check (true);
