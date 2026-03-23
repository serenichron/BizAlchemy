-- Enable pg_cron extension (requires superuser / Supabase dashboard)
-- CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Schedule send-daily-push edge function every 15 minutes
-- Run this in Supabase SQL editor with the correct project ref:
SELECT cron.schedule(
  'send-daily-push',
  '*/15 * * * *',
  $$
  SELECT net.http_post(
    url := 'https://srijjrsayrhkdoqjpmjf.supabase.co/functions/v1/send-daily-push',
    headers := jsonb_build_object(
      'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key'),
      'Content-Type', 'application/json'
    ),
    body := '{}'::jsonb
  ) AS request_id;
  $$
);
