
-- 1. Create 'products' table for main product data (matches ProductType)
CREATE TABLE public.products (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT,
  category TEXT NOT NULL,
  image_url TEXT,
  status TEXT NOT NULL CHECK (status IN ('PASS', 'FAIL', 'EXPIRED')),
  date DATE,
  description TEXT,
  rating REAL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Storage bucket for product images (public, everyone can read)
insert into storage.buckets (id, name, public) values ('product-images', 'product-images', true)
on conflict (id) do nothing;

-- Policy: anyone can read images
-- (You can restrict writes later if you wish)
CREATE POLICY "Allow read images" ON storage.objects
  FOR SELECT USING (bucket_id = 'product-images');

-- 3. Update product_pdfs: add FK to new products table (if not present)
ALTER TABLE public.product_pdfs
  ADD COLUMN IF NOT EXISTS product_id BIGINT REFERENCES public.products(id)
    ON DELETE CASCADE;

-- 4. Create 'admin_users' table for admin-only access
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL
);

-- 5. RLS: Only admins can insert/update/delete in products and product_pdfs
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage products" ON public.products
  FOR ALL USING (auth.uid() IN (SELECT id FROM public.admin_users));

ALTER TABLE public.product_pdfs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can manage product_pdfs" ON public.product_pdfs
  FOR ALL USING (auth.uid() IN (SELECT id FROM public.admin_users));

-- 6. Insert owner as admin (update this with the real admin user id/email later if needed)
-- insert into public.admin_users (id, email) values ('<ADMIN_USER_ID>', '<admin@email.com>');

