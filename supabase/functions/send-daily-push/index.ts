import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import webpush from "npm:web-push@3";

// All 103 items ordered by tier (T0→T6), matching the ALL object in index.html
const ALL_ITEMS: string[] = [
  // T0
  "Idea", "Audience", "Content", "Tool",
  // T1
  "Niche", "Article", "Website", "Newsletter", "CRM", "Template",
  "Value Proposition", "Social Media",
  // T2
  "Keyword Research", "Landing Page", "Lead Magnet", "Persona", "Offer",
  "Blog", "Content Strategy", "Content Calendar", "Copywriting",
  "Email Capture", "Analytics", "Wireframe", "Email List",
  "Nurture Sequence", "Automation", "Web Design", "Headline", "Pitch Deck",
  "Subscriber", "Script", "Hosting", "Workflow",
  // T3
  "Brand Guide", "SEO", "Rank Tracker", "Sales Page", "Lead Generation",
  "Brand Voice", "Design System", "Prototype", "Editorial Plan",
  "Email Funnel", "Marketing Stack", "Webinar", "Video", "Ad Copy",
  "Dashboard", "Brand Identity", "Opt-in Page", "Sales Copy",
  "Organic Traffic", "Outreach", "Podcast", "Social Proof", "Tripwire",
  "A/B Test", "AI Writing",
  // T4
  "Sales Funnel", "Launch Sequence", "Inbound Sales", "Webinar Funnel",
  "High-Ticket Offer", "Authority Site", "Product Design", "Marketing OS",
  "Conversion", "Social Brand", "Content Machine", "Performance Report",
  "Ad Campaign", "Video Channel", "Checkout Page", "Retargeting",
  "AI Automation", "Discovery Call", "Online Course", "Referral Program",
  "Digital Product", "Partnership", "Portfolio",
  // T5
  "Automated Sales", "Thought Leadership", "Product Launch",
  "Automated Webinar", "Revenue Engine", "Premium Brand", "Influence",
  "Growth System", "Sales Machine", "SaaS Product",
  "Performance Marketing", "AI Content System", "Upsell",
  // T6
  "Passive Income", "Recurring Revenue", "Viral Growth", "Personal Brand",
  "Market Leader", "Financial Freedom", "Digital Empire", "AI Marketing OS",
];

const TOTAL_ITEMS = 103;

Deno.serve(async (req: Request) => {
  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const vapidPrivateKey = Deno.env.get("VAPID_PRIVATE_KEY")!;
    const vapidPublicKey = Deno.env.get("VAPID_PUBLIC_KEY")!;
    const vapidSubject = Deno.env.get("VAPID_SUBJECT") || "mailto:hello@serenichron.com";

    webpush.setVapidDetails(vapidSubject, vapidPublicKey, vapidPrivateKey);

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 1. Query active subscriptions not notified in last 20 hours
    const twentyHoursAgo = new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString();
    const { data: subs, error: subErr } = await supabase
      .from("push_subscriptions")
      .select("session_id, subscription, timezone")
      .eq("active", true)
      .or(`last_notified_at.is.null,last_notified_at.lt.${twentyHoursAgo}`);

    if (subErr) throw subErr;
    if (!subs || subs.length === 0) {
      return new Response(JSON.stringify({ sent: 0, skipped: 0 }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // 2. Fetch all hook texts once
    const { data: hookTexts, error: hookErr } = await supabase
      .from("push_hook_texts")
      .select("item, title, body");
    if (hookErr) throw hookErr;

    const hookMap = new Map<string, { title: string; body: string }>();
    for (const h of hookTexts || []) {
      hookMap.set(h.item, { title: h.title, body: h.body });
    }

    // 3. Fetch game_saves for all relevant sessions
    const sessionIds = subs.map((s) => s.session_id);
    const { data: saves, error: saveErr } = await supabase
      .from("game_saves")
      .select("session_id, discovered, updated_at")
      .in("session_id", sessionIds);
    if (saveErr) throw saveErr;

    const saveMap = new Map<
      string,
      { discovered: string[]; updated_at: string }
    >();
    for (const s of saves || []) {
      saveMap.set(s.session_id, {
        discovered: s.discovered || [],
        updated_at: s.updated_at,
      });
    }

    const now = new Date();
    const dayOfYear = getDayOfYear(now);
    let sent = 0;
    let skipped = 0;
    let deactivated = 0;

    for (const sub of subs) {
      // Check if user's local time is approximately noon (11:45–12:15)
      if (!isNearNoon(sub.timezone, now)) {
        skipped++;
        continue;
      }

      const save = saveMap.get(sub.session_id);
      const discovered = new Set(save?.discovered || []);

      // All 103 discovered → stop permanently
      if (discovered.size >= TOTAL_ITEMS) {
        skipped++;
        continue;
      }

      // Pick next undiscovered: walk tiers T0→T6, collect first 7 undiscovered
      const undiscovered: string[] = [];
      for (const item of ALL_ITEMS) {
        if (!discovered.has(item)) {
          undiscovered.push(item);
          if (undiscovered.length >= 7) break;
        }
      }

      if (undiscovered.length === 0) {
        skipped++;
        continue;
      }

      // Rotate daily
      const todayItem = undiscovered[dayOfYear % undiscovered.length];
      const hook = hookMap.get(todayItem);
      if (!hook) {
        skipped++;
        continue;
      }

      // Check if inactive (7+ days since last save update)
      const isInactive =
        save?.updated_at &&
        Date.now() - new Date(save.updated_at).getTime() > 7 * 24 * 60 * 60 * 1000;

      let title: string;
      let body: string;
      if (isInactive) {
        title = "Your marketing empire misses you";
        body = `It's been a while. ${hook.title.charAt(0).toLowerCase() + hook.title.slice(1)} \u2014 come back and discover ${todayItem}.`;
      } else {
        title = hook.title;
        body = hook.body;
      }

      // Send push notification
      try {
        await webpush.sendNotification(
          sub.subscription,
          JSON.stringify({ title, body })
        );

        // Update last_notified_at
        await supabase
          .from("push_subscriptions")
          .update({ last_notified_at: now.toISOString() })
          .eq("session_id", sub.session_id);

        sent++;
      } catch (err: unknown) {
        const pushErr = err as { statusCode?: number };
        if (pushErr.statusCode === 410 || pushErr.statusCode === 404) {
          // Subscription expired — deactivate
          await supabase
            .from("push_subscriptions")
            .update({ active: false })
            .eq("session_id", sub.session_id);
          deactivated++;
        } else {
          console.error(
            `Push failed for ${sub.session_id}:`,
            err
          );
          skipped++;
        }
      }
    }

    return new Response(
      JSON.stringify({ sent, skipped, deactivated }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("send-daily-push error:", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function isNearNoon(timezone: string, now: Date): boolean {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    const parts = formatter.formatToParts(now);
    const hour = parseInt(
      parts.find((p) => p.type === "hour")?.value || "0",
      10
    );
    const minute = parseInt(
      parts.find((p) => p.type === "minute")?.value || "0",
      10
    );
    const totalMinutes = hour * 60 + minute;
    // 11:45 (705) to 12:15 (735)
    return totalMinutes >= 705 && totalMinutes <= 735;
  } catch {
    // Invalid timezone — skip rather than send at wrong time
    return false;
  }
}
