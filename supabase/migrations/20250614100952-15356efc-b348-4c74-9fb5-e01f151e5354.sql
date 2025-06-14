
-- Add amazon_price and website_price columns to products table
ALTER TABLE public.products
ADD COLUMN amazon_price numeric NULL;

ALTER TABLE public.products
ADD COLUMN website_price numeric NULL;
