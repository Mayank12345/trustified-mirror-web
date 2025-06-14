
-- Create a policy that allows anyone to view (SELECT) products
CREATE POLICY "Anyone can view products"
  ON public.products
  FOR SELECT
  USING (true);
