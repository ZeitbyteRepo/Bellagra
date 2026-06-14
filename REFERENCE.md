# Bellagra — Project Reference

## Quick Facts
- **Property:** 163± acres, Amite, Louisiana (15 min east of Amite, off LA-16)
- **Owner:** Ron Bellagra
- **Website:** https://bellagra.land
- **Repo:** https://github.com/ZeitbyteRepo/Bellagra
- **Cloudflare Zone ID:** `d077166547c389e5a9e95da7092b23da`
- **Cloudflare Account:** `76865d7d884d88943ebaf47886cef1a1`
- **Working copy:** `/srv/www/rsm/bellagra/`

## Hosting Stack
- **GitHub Pages** — serves `main` branch root
- **Cloudflare DNS** — `bellagra.land` A records → GitHub Pages IPs
- **No build step, no server, no cost**

## DNS Records (Cloudflare)
| Type | Name | Content | TTL | Proxy |
|------|------|---------|-----|-------|
| A | @ | 185.199.108.153 | Auto | Off |
| A | @ | 185.199.109.153 | Auto | Off |
| A | @ | 185.199.110.153 | Auto | Off |
| A | @ | 185.199.111.153 | Auto | Off |
| CNAME | www | zeitbyterepo.github.io | Auto | Off |

## Site Structure
```
/srv/www/rsm/bellagra/
├── index.html          — Hero, stat bar, 4 feature cards, gallery, CTA
├── the-land.html       — Acreage, creeks, timber, pasture, wildlife, trails
├── the-structures.html — 4 buildings w/ spec grids, infrastructure list
├── outdoor-living.html — Belvedere, pond, decks, fire pit, pool, trails
├── css/style.css       — Design system (dark, serif, sage green accents)
├── js/main.js          — Scroll reveals, nav, video click-to-play
├── media/
│   ├── video/          — Placeholder: hero + 4 sub-videos (see inventory below)
│   └── photos/         — Placeholder: gallery images
├── ron-bellagra-transcript.txt   — Source transcript 1 (UTF-8 converted)
└── REFERENCE.md                  — This file
```

## Design System
- **Palette:** Warm near-black (#1a1817), cream text (#f0ebe3), sage green (#7a9a5c), gold highlights (#c4a44a)
- **Typography:** Cormorant Garamond (serif headlines), system sans-serif (body)
- **Tone:** Rustic luxury, minimal, editorial. No SaaS tropes, no cards-for-everything.
- **Font:** Google Fonts — Cormorant Garamond (400, 400i, 500, 600, 700)

## Media Inventory — What Needs Footage/Photos

### Videos (replace placeholders in `media/video/`)
1. **Hero video** — Aerial/drone sweeping over pines, following creek, establishing scale. 1920×1080, 16:9, H.264 MP4
2. **The Land** — Peaks Creek running, drone over pine plantation, wildlife (turkey/deer), trails through hardwoods
3. **The Structures** — Exterior walkthrough: cottage + porch, guest house + pool, studio, equipment building
4. **Outdoor Living** — Belvedere kitchen in use, pond + decks, fire pit at dusk, pool, trails
5. **The Lifestyle** — Wildlife, sunrise over pond, east porch in morning light, NOLA skyline (proximity)

### Photos (replace placeholders in `media/photos/`)
| Gallery Tile | Spec | Shot Needed |
|---|---|---|
| Creek & Hardwoods | 4:3 | Tight textured shot of creek through hardwoods |
| East Porch | 4:3 | Morning light on the porch |
| Pine Plantation | 4:3 | Aerial or drone over pine rows |
| Pond & Deck | 4:3 | Pond at golden hour with over-water deck |
| Belvedere Kitchen | 4:3 | Outdoor kitchen in use |
| Trails | 4:3 | Trail winding through pines |

## Source Transcripts
Three transcripts from Ron Bellagra conversations, converted from UTF-16BE → UTF-8:
1. `/srv/www/rsm/bellagra/ron-bellagra-transcript.txt` — Main property overview
2. `RSM Suppliment 1` — Cottage detail, flood zone, Airbnb, easements
3. `RSM supplement 2` — Structure specs (square footage, pool dimensions, Belvedere)

## Information Gaps (from gap analysis)
1. **Asking price** — never mentioned
2. **Timber** — do ~100 acres of pines convey? Any timber contract or cruise?
3. **Airbnb revenue** — "once a month by choice." No nightly rate.
4. **Internet / cell service** — critical for rural buyer
5. **Property taxes** — annual cost
6. **Parcel ID / survey acreage** — exact acreage? Single tax lot or multiple?

## How to Deploy
```bash
cd /srv/www/rsm/bellagra
git add -A && git commit -m "update" && git push origin main
```
GitHub Pages rebuilds automatically. DNS and SSL are handled.

## Pending
- [ ] DNS propagation complete → SSL cert auto-provisioned by GitHub
- [ ] Enable HTTPS enforcement (`https_enforced: true`)
- [ ] Gather and drop in all video/photos
- [ ] Fill information gaps (price, timber, revenue, internet, taxes)
- [ ] Add contact method to CTA section (phone/email/form)
