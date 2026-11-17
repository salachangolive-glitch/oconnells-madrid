# Sports event campaigns (O'Connell St)

Reusable pipeline: one row in `lib/sports-event-registry.ts` drives home promo, agenda rows, and (when `pageMode: 'generated'`) static fan/meetup pages at `/campaign/[id]`.

## Register an event

Edit `SPORTS_EVENT_REGISTRY` with sport, teams, Madrid datetime, fan origin, `broadcastConfirmed`, `promoStart`, `homeTakeDown`, and `pageMode` (`external` | `generated`).

## Outputs per event

1. **Page** — `external`: keep existing `app/` route; `generated`: `app/campaign/[id]` + `app/es/campaign/[id]`.
2. **Home** — `HomeSportsEventHighlights` on `/` and `/es` (hidden after `homeTakeDown` via `data-show-until`).
3. **CTA** — GA4 `sports_event_cta_click` with `bar=oconnells`, `language`, `campaign_id` (no Ads).
4. **Agenda** — `campaignToFixtureRow()` in `lib/sportsEventCampaigns.ts`; merge into `lib/fixtures.ts`.
5. **Visit block** — NAP, hours, Maps, metro, no reservations on generated pages.
6. **Take-down** — home strip removed automatically; URLs stay indexable.

## Rules

- Distinct copy from Dubliners; no Four Corner / O'Reilly's on campaign pages.
- No channel name unless broadcast is confirmed for this pub.
- Banned: oficial/official, best, mejor, proyector.

## Demo entries (Nov 2026)

- `zalgiris-euroleague-2026-11-25` — external → `/news/real-madrid-zalgiris-wednesday-night-sol` (meeting point; arena game).
- `portugal-nations-league-meetup-2026-11-20` — generated meetup; screens **not** confirmed.