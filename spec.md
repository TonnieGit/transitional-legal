# Transitional Legal — Website Audit & Rebuild Spec

## 1. Background

**Client:** Transitional Legal — a niche family law firm operating across Beenleigh & Brisbane (QLD) and Ballina (NSW). Principal: Roger Poed. Practice Manager: Louise Naris.

**Specialty:** High-conflict family law, domestic violence, complex parenting matters (narcissistic abuse, parental alienation, Magellan/Evatt list matters), mediation, criminal law (breaches of protection orders), wills & estates. Service promise includes 24/7 urgent legal support for clients in acute distress.

**Current agency:** Lift Legal Marketing Pty Ltd (ACN 167 389 853) — a digital marketing agency working exclusively with law firms. Roger signed a proposal with them on 14 May 2026 covering four services:

1. Website Upgrade — A$2,200 (2 × A$1,100), fixed price
2. Website Management — A$135/month, 12-month initial term
3. SEO Accelerator — A$750 setup + A$950/month, 12-month term
4. Google Ads — A$750 setup + A$750/month, 12-month term with 6-month exit option (NOT signed/accepted by Roger — box left unticked on the signed contract)

**Signed scope highlights (per the contract):**
- Website transfer to Lift Legal's WordPress hosting (WP Engine + Cloudflare)
- Restoration of "hidden" pages to public navigation + reindexing
- Replacement of "intimidating" imagery with calm, empathetic imagery
- Core technical SEO clean-up: security headers, URL length, image dimensions, **meta descriptions**, sitemap resubmission, no-index tag review
- Yoast SEO install/config, GA4 + Google Search Console connected
- SEO Accelerator: 4 bespoke content pieces/month via their "Intelligent Content Engine," described as reviewed for "Australian legal compliance" with "Australian English and legal disclaimer review in a supervised workflow," plus schema markup and "AI search optimisation" for inclusion in Google AI Overviews / Perplexity / ChatGPT-style results
- Their Feb 2026 SEO audit baseline: ~145 organic visits/month, 35 ranking keywords, ~14% top-10 visibility, Domain Authority 9/100, ~308 of 713 pages indexed, 85 high-priority crawl errors, AI search visibility: "Not appearing"

**Context for this engagement:** Roger is unhappy with the agency's delivery and is considering commissioning a new website build instead. I (the user) know Roger personally (he was previously my family lawyer). This spec captures the audit findings from a live review of `transitionallegal.com.au` (current site, built/managed by Lift Legal Marketing) to (a) document the gap between what was contracted/paid for and what's actually live, and (b) form the requirements baseline for a rebuild.

**Live site:** https://transitionallegal.com.au/ (WordPress, Divi theme v5.12.1)

---

## 2. Audit Findings

### 2.1 UI/UX Issues

- **Duplicate header/navigation rendering.** The page markup includes the full nav menu twice in sequence (a pre-load block, then the "real" sticky header with logo) — a template/build defect, not an intentional design pattern. Likely causes visible flicker or duplicate accessibility-tree entries.
- **Tone mismatch with audience.** The signed proposal explicitly states imagery/tone must be "calm, professional and reassuring, not confronting" for family law clients in distress. In practice, the long-form practice-area copy (e.g. `/family-law/`) is written as extended comedy — jokes referencing "Dazza at a barbecue," "spicy topics," memes about exes and Tupperware — embedded directly alongside content about child recovery orders, domestic violence, and contravention/enforcement proceedings. This is a brand-safety and trauma-sensitivity problem for a DV/high-conflict specialist firm, not a minor style note.
- **No scannability on long pages.** `/family-law/` alone covers Parenting Orders, Parenting Plans, Consent Orders, Property Settlement, BFAs, Child Support, Spousal Maintenance, Divorce, Urgent Applications, and Contravention Applications — thousands of words on one URL, no in-page anchor/jump navigation, minimal visual hierarchy, no supporting imagery or breakout components (accordions, cards, callouts) to aid scanning, especially on mobile.
- **Weak visual priority for the urgent/24/7 hotline.** Given "24/7 urgent legal support" is a headline service promise, the hotline is a small text link in the hero rather than a persistent, high-contrast element (sticky header button, floating action button, or dedicated banner).
- **Generic stock structure elsewhere** (stat counters, generic "who we are" team teaser, testimonial carousel) — functional but interchangeable with any small-firm WordPress/Divi template; nothing distinguishes Transitional Legal visually from a generic law firm site.

### 2.2 Technical SEO Issues

- **Missing meta descriptions**, confirmed directly via page source on both the homepage and `/family-law/` — this is precisely the defect the agency's own Feb 2026 audit flagged as a "high-priority crawl error," and precisely what the signed Website Upgrade scope was paid to fix (commencement invoice paid, per signed contract dated 14 May 2026). It is not fixed as of this review (Sept 2026).
- **Broken outbound link in a live blog post.** `/how-a-family-domestic-violence-solicitor-can-help-in/` links to `https://www..qld.gov.au` (double-dot, malformed, dead URL), under the generic anchor "City Council – Domestic Violence Services" — never localized to an actual council (Logan City Council / Brisbane City Council / Ballina Shire).
- **Stray UTM tracking parameter hardcoded into an internal link.** The Family Law page's "Contravention Applications" section links to `.../contact-us/?utm_source=chatgpt.com` — clear evidence the copy was pasted from an AI chat tool without cleanup. This will misattribute genuine Contact Us conversions to "chatgpt.com" in GA4 reporting.
- **Duplicate/broken permalink structure.** On the homepage's "Our Recent Successes" feed, two different post titles — "How a Family Divorce Solicitor Can Simplify Your Case" and "Why a Prenuptial Agreement Before Marriage Is import in" — both resolve to the identical URL and identical teaser snippet. This creates duplicate-content signals and broken user navigation.
- **Audit baseline (agency's own numbers, Feb 2026):** 35 ranking keywords, ~14% top-10 visibility, DA 9/100, ~308/713 pages indexed, 85 high-priority crawl errors, no AI search visibility. Given the still-live defects above, there's reasonable basis to believe the paid technical remediation has not been substantively completed.
- **Unverified but worth checking in the detailed audit:** structured data/schema (LegalService, FAQPage, Article, LocalBusiness), robots.txt directives, XML sitemap freshness, Core Web Vitals / PageSpeed scores, security headers, canonical tag consistency, mobile usability, image alt text coverage, internal linking depth to the "hidden pages" the contract claims were restored.

### 2.3 Content Quality / AEO (Answer-Engine Optimisation) Issues

This is the most consequential category — it directly affects what Google AI Overviews, Perplexity, and ChatGPT-style engines would surface about the firm.

- **Unfilled AI-generation template placeholders published live.** `/how-a-family-domestic-violence-solicitor-can-help-in/` (published 10 Jul 2026, last modified 30 Aug 2026 — i.e. left live and "updated" without the defect being caught) repeatedly contains an empty location variable:
  - *"If you're facing a situation of domestic violence in , seeking legal help can feel daunting."*
  - *"...a family domestic violence Solicitor in is not just an advocate in court."*
  - Title itself: **"How a Family Domestic Violence Solicitor Can Help in"** — trails off mid-sentence, missing the intended location.
- **Grammatical/proofing errors throughout the same article**, submitted under Roger Poed's byline: "identify" for "identified," "inform" for "informed," "train" for "trained." This directly contradicts the contracted claim of "Australian English and legal disclaimer review in a supervised workflow."
- **Typo baked into a permanent published title**: "Why a Prenuptial Agreement Before Marriage Is import in" (missing "-ant," missing location).
- **Templated, low-E-E-A-T content structure.** The DV article follows a generic "Step 1 / Step 2..." pattern with a generic FAQ block and a vague benefits table (columns: Service / Benefit / Law-Regulation) — interchangeable with any generic law-firm content mill output, not demonstrating the specific expertise (Magellan list, narcissistic abuse, parental alienation) the firm claims as its differentiator. Google's and AI engines' quality systems are specifically designed to discount this kind of generic content in favour of pages showing genuine first-hand specificity — undermining the entire premise of the agency's "Intelligent Content Engine" / E-E-A-T pitch.
- **No visible schema markup** on reviewed pages despite this being a specific contracted deliverable ("AI search optimisation: structured content and schema markup to position pages for inclusion in Google AI Overviews, Perplexity and similar AI search results").

### 2.4 Contract vs. Delivery Gap (for reference / leverage)

| Contracted deliverable | Status observed live (Sept 2026) |
|---|---|
| Meta descriptions written/strengthened on priority pages | Missing on homepage and Family Law page |
| Technical SEO clean-up (security headers, URL length, etc.) | Unverified/likely incomplete — visible symptoms persist |
| Content reviewed for "Australian legal compliance" / Australian English | Multiple uncorrected grammar errors and unfilled template variables live for 1–2 months |
| Schema markup / AI search optimisation | No evidence found on reviewed pages |
| Imagery replaced to be "calm, professional, reassuring" | Tone of written copy runs directly counter to this stated goal (comedic content on trauma-adjacent topics) |
| Hidden pages restored to public navigation | Not independently verified — worth checking against a full crawl (indexed count, sitemap, nav audit) |

---

## 3. Goals for Next Steps

### 3.1 Detailed Audit (immediate next deliverable)
Build a comprehensive, evidence-based audit report covering:
- Full technical SEO crawl (indexation, crawl errors, Core Web Vitals, schema, canonicals, redirects, mobile usability, security headers)
- Full content inventory and quality review across every published page/post (grammar, unfilled placeholders, duplicate URLs, broken links, tone/brand fit)
- UI/UX review across desktop and mobile (navigation, CTA hierarchy, accessibility, page structure/scannability)
- AEO readiness review (structured data, content specificity/E-E-A-T signals, presence in AI Overviews/Perplexity/ChatGPT search results)
- A scored comparison against the agency's own Feb 2026 baseline audit and against what was contractually promised
- Presented as a clean, shareable document Roger can use in conversations with the current agency and/or as a business case for a rebuild

### 3.2 Eventual New Website Build
Requirements to carry forward from this audit (to be refined further):
- Calm, professional, trauma-informed visual and written tone throughout — no comedic/flippant copy on sensitive topics (DV, child recovery, contraventions)
- Clear, persistent 24/7 urgent-contact pathway (sticky CTA / floating action button), reflecting the firm's core differentiator
- Well-structured, scannable practice-area pages — break dense legal content into logical sub-pages or clearly navigable sections (anchor nav, accordions) rather than one giant page per practice area
- Technically sound SEO foundation from day one: proper meta titles/descriptions, schema (LegalService, FAQPage, Article, LocalBusiness per location — Beenleigh, Brisbane, Ballina), clean URL structure, fast hosting, correct indexation
- Genuine, specific, proofread content reflecting the firm's actual expertise (Magellan/Evatt list matters, narcissistic abuse, parental alienation) rather than generic AI-templated blog content — written or closely reviewed by someone with real legal/firm knowledge, not auto-published
- Location-specific pages/content for all three service areas (Beenleigh, Brisbane, Ballina) done properly (no unfilled location variables)
- Working analytics/tracking (GA4, Search Console) without contaminated UTM parameters on internal links
- No duplicate permalinks or broken outbound links

---

## 4. Source Material

- Signed proposal/contract: *Proposal_signed_by_RP_140526_Lift_Legal.pdf* (Lift Legal Marketing, dated 27 April 2026, signed by Roger Poed 14 May 2026)
- Live site reviewed: https://transitionallegal.com.au/
- Pages directly reviewed for this audit: Homepage, `/family-law/`, `/how-a-family-domestic-violence-solicitor-can-help-in/`
- Pages/areas flagged for deeper review in the full audit: About Us, Domestic Violence, Criminal Law, Wills & Estates, Mediation, Insights (all posts), For Men, Fact Sheets, Contact Us, Privacy Policy, Terms & Conditions, full technical crawl (robots.txt, sitemap.xml, PageSpeed/Core Web Vitals)
