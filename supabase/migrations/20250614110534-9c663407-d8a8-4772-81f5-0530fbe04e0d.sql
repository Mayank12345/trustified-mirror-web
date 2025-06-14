
-- Helper function to update statuses to 'EXPIRED' after a year
CREATE OR REPLACE FUNCTION public.auto_expire_products()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE public.products
  SET status = 'EXPIRED',
      updated_at = now()
  WHERE status IN ('PASS','FAIL')
    AND date IS NOT NULL
    AND date <= (CURRENT_DATE - INTERVAL '1 year');
END;
$$;

-- Schedule the function daily at midnight UTC
SELECT cron.schedule(
  'auto-expire-products',
  '0 0 * * *',
  $$ SELECT public.auto_expire_products(); $$
);
