
ALTER TABLE public.products
ADD COLUMN affiliate_link TEXT NULL,
ADD COLUMN product_website_link TEXT NULL,
ADD COLUMN price NUMERIC(10, 2) NULL;
