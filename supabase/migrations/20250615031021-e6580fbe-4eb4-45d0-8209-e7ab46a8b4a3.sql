
-- Enable RLS for product_pdfs (if not enabled yet)
ALTER TABLE public.product_pdfs ENABLE ROW LEVEL SECURITY;

-- Allow ONLY admin users (from admin_users) to INSERT (with check) into product_pdfs
CREATE POLICY "Admin can insert product_pdfs"
  ON public.product_pdfs
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IN (SELECT id FROM public.admin_users));

-- Allow ONLY admin users to UPDATE product_pdfs
CREATE POLICY "Admin can update product_pdfs"
  ON public.product_pdfs
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM public.admin_users));

-- Allow ONLY admin users to DELETE product_pdfs
CREATE POLICY "Admin can delete product_pdfs"
  ON public.product_pdfs
  FOR DELETE
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM public.admin_users));

-- DOUBLE-CHECK for products table as well:

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin can insert products"
  ON public.products
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IN (SELECT id FROM public.admin_users));

CREATE POLICY "Admin can update products"
  ON public.products
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM public.admin_users));

CREATE POLICY "Admin can delete products"
  ON public.products
  FOR DELETE
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM public.admin_users));
