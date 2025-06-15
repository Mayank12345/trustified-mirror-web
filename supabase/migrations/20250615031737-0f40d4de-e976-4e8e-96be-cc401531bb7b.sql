
-- First, let's clean up any existing policies and recreate them properly
DROP POLICY IF EXISTS "Allow authenticated uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated updates" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated deletes" ON storage.objects;
DROP POLICY IF EXISTS "Allow public access" ON storage.objects;

-- Create proper storage policies for the product-images bucket
CREATE POLICY "Anyone can upload to product-images"
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'product-images');

CREATE POLICY "Anyone can update product-images"
ON storage.objects FOR UPDATE 
USING (bucket_id = 'product-images');

CREATE POLICY "Anyone can delete from product-images"
ON storage.objects FOR DELETE 
USING (bucket_id = 'product-images');

CREATE POLICY "Anyone can view product-images"
ON storage.objects FOR SELECT 
USING (bucket_id = 'product-images');
