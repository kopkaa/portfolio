---
title: RePilot
img: /assets/projects/repilot.png
description: |
  Full-stack developer on a SaaS platform for rental property management.
tags:
  - Vue.js
  - TypeScript
  - Inertia.js
  - Laravel
  - PHP
  - MariaDB
  - Playwright
  - Docker
---

## Full-stack Developer at RePilot

RePilot is a Czech SaaS for landlords and property managers — properties and units, tenants and lease agreements, rent schedules and debts, meters, mortgages, and the yearly settlement of service and energy costs. Laravel modular monolith (~45 domain modules) with a Vue 3 + Inertia.js + TypeScript frontend. Frontend-leaning full-stack role, with a strong focus on tests.

<a href="https://www.repilot.cz" target="_blank" rel="noopener noreferrer">Visit the RePilot Website</a>

![Utility billing wizard — recap step with the generated PDF statement](/assets/projects/repilot/billing-recap.webp)

### What I built

- **Utility billing wizard** — multi-step settlement of costs, six allocation calculators (days, consumption, person-days, months, manual split…), meter readings, recap, corrective billings.
- **Billing PDFs** — per-tenant statements rendered via Gotenberg, Chart.js charts, Czech payment QR codes, in-app PDF viewer (pdf.js).
- **Admin billing console** — cross-portfolio overview, AI extraction status and history, service/repository layering.
- **Mortgages module** — new domain module end to end: collateral tracking, floating rates, spreadsheet-style grid with inline editing.
- **Meters** — nested meter hierarchies, drag & drop ordering, filterable tile overview, consumption pricing.

![Property meters with reading-interval monitoring](/assets/projects/repilot/meters.webp)

- **Tenants & finance** — redesigned tenant finance tab, rent schedule table, ARES company registry lookup & import, IBAN validation.
- **Tasks** — task list with filters and inline check-off, Tiptap WYSIWYG comments, emoji picker, attachments.
- **Dashboard & permissions** — stats and debt widgets, role management, per-property access matrix.
- **Design system** — shared data table, form, modal and tab components, reusable composables.
- **Testing & CI** — Playwright E2E suite in an isolated Docker Compose stack, Vitest component tests, PHPUnit, CI hardening.
