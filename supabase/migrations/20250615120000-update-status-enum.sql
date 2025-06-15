
-- Update the status column check constraint to include GOLD
ALTER TABLE public.products 
DROP CONSTRAINT IF EXISTS products_status_check;

ALTER TABLE public.products 
ADD CONSTRAINT products_status_check 
CHECK (status IN ('PASS', 'FAIL', 'EXPIRED', 'GOLD'));
