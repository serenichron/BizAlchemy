-- Push subscriptions table for web push notifications
CREATE TABLE IF NOT EXISTS push_subscriptions (
  session_id TEXT PRIMARY KEY,
  subscription JSONB NOT NULL,
  timezone TEXT NOT NULL DEFAULT 'UTC',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_notified_at TIMESTAMPTZ,
  active BOOLEAN NOT NULL DEFAULT true
);

CREATE INDEX IF NOT EXISTS idx_push_active_last
  ON push_subscriptions (active, last_notified_at);

-- RLS: allow anon inserts and updates
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_push_subscriptions"
  ON push_subscriptions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "anon_update_push_subscriptions"
  ON push_subscriptions FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "service_role_all_push_subscriptions"
  ON push_subscriptions FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
