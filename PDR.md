# Project Design Reference (PDR) — Achilleas Leivadiotis

> Comprehensive documentation of all projects for portfolio redesign.
> Excludes: .NET projects, Ictinus, Kassandra Tech website, BrushQuest.

---

## Table of Contents

1. [Personal Profile](#1-personal-profile)
2. [COAV — Contrail Avoidance System (EUROCONTROL)](#2-coav--contrail-avoidance-system)
3. [Aviation Contrail Monitoring — Bachelor Thesis](#3-aviation-contrail-monitoring--bachelor-thesis)
4. [NeuraGallery — AI Image Organization Platform](#4-neuragallery--ai-image-organization-platform)
5. [Kassandra Properties VIP — Real Estate Platform](#5-kassandra-properties-vip--real-estate-platform)
6. [Polichroniadou Dental Booking System (Web)](#6-polichroniadou-dental-booking-system-web)
7. [3D MEP Component Predictor (Equans)](#7-3d-mep-component-predictor-equans)
8. [Byzantine DNA Ancestry Analyzer](#8-byzantine-dna-ancestry-analyzer)
9. [InvestorHub — Personal Finance Dashboard](#9-investorhub--personal-finance-dashboard)
10. [Confidential Client Project — Mobile Development](#10-confidential-client-project--mobile-development)
11. [HairlossAI — Scalp Analysis App](#11-hairlossai--scalp-analysis-app)
12. [AI Image Detector](#12-ai-image-detector)
13. [UNO Game with AI Bots](#13-uno-game-with-ai-bots)
14. [Skills & Technology Summary](#14-skills--technology-summary)

---

## 1. Personal Profile

**Name:** Achilleas Leivadiotis
**Title:** Data Science & AI Graduate | ML Engineer | Full-Stack Developer
**Contact:** achilleasleiv@gmail.com | [GitHub (Nonilas)](https://github.com/Nonilas) | [LinkedIn](https://linkedin.com/in/achilleas-leivadiotis)
**Location:** Greece (previously Netherlands)
**Languages:** Greek (native), English (fluent)
**Portfolio:** [achilleasleivadiotis.com](https://achilleasleivadiotis.com)

### Education

| Institution | Program | Period | Grade |
|---|---|---|---|
| Maastricht University | BSc Data Science & Artificial Intelligence | Sep 2022 – June 2025 | 7.16/10 |
| University of New Hampshire | Project SMART — Biotechnology | July 2020 | — |
| Anatolia College High School | IB Diploma Programme | Sep 2019 – July 2022 | IB Diploma |

**Notable Coursework Grades:** Calculus (9), Computer Security (9), Data Structures & Algorithms (9), Human Computer Interaction & Affective Computing (10), Bio-Informatics (8), Large Scale IT & Cloud Computing (8)

### Professional Experience

| Role | Organization | Period |
|---|---|---|
| Software Developer (Freelance) | Self-employed / Kassandra Technologies | July 2025 – Present |
| AI Research & Development | EUROCONTROL MUAC | Feb 2025 – July 2025 |
| Marketing Manager | SCOPE Maastricht | Sep 2024 – March 2025 |
| Software Developer Intern | Next Generation Sensors B.V. | June 2024 – August 2024 |

---

## 2. COAV — Contrail Avoidance System

**Category:** Real-time Aviation Systems / Climate Tech
**Organization:** EUROCONTROL MUAC (Maastricht Upper Area Control Center)
**Status:** Deployed internally at EUROCONTROL

### What It Is

A real-time air traffic management system that generates flight altitude advisories to minimize contrail climate impact. Contrails (aircraft-induced cirrus clouds) have a significant climate forcing effect — this system identifies flights crossing contrail-prone ice super-saturated regions (ISSR) and recommends altitude changes, only issuing advisories when the net climate benefit outweighs extra fuel burn.

### My Role & Contributions

Worked on the full system across multiple interconnected services:

**Backend Services (Python):**
- Built and maintained real-time processing services running on continuous loops
- Integrated with RTTS (Radar Tracking and Tactical System) for live flight trajectory data
- Worked with contrail prediction models to identify affected airspace
- Implemented data enrichment pipelines cross-referencing flights with contrail zones
- Built data compression and pub/sub messaging via Redis

**Scheduling & Monitoring (Node.js):**
- Cron-based scheduled tasks for fetching prediction data
- Metrics publishing, error notification pipelines, health monitoring

**Frontend Dashboard (Vue.js + D3.js):**
- CO2e Trajectory Analyzer with vertical profile visualizations
- Sector Prediction tables showing blocked flight levels per sector/hour
- Trial Logs for advisory history and performance metrics

**Data & Infrastructure:**
- MariaDB for flight plan storage
- NocoDB for advisory logging and history
- MinIO for storing generated vertical profile images
- Redis for real-time pub/sub and compressed data exchange between services

### What I Worked With

- Real-time radar trajectory data (RTTS XML snapshots)
- Contrail prediction polygons (NetCDF format)
- Aircraft Engine Model (AEM) API for fuel calculations
- Geospatial processing with Shapely, GeoPandas, SciPy
- Async Python microservice architecture

### Tech Stack

`Python` `Redis` `MariaDB` `NocoDB` `MinIO` `Node.js` `Vue.js` `D3.js` `Shapely` `GeoPandas` `SciPy` `NumPy` `Geopy` `Matplotlib` `asyncio`

---

## 3. Aviation Contrail Monitoring — Bachelor Thesis

**Category:** AI Research / Computer Vision
**Organization:** EUROCONTROL MUAC
**Period:** Feb 2025 – July 2025
**Grade:** 9/10
**Significance:** First validated end-to-end AI pipeline for ground-based contrail monitoring

### What It Is

A 3-stage AI pipeline that detects contrails from ground-based cameras, tracks them across frames, and attributes them to specific flights. This addresses ~40% of aviation's total warming effect — the portion caused by contrails and contrail-cirrus.

### The 3-Stage Pipeline

**Stage 1 — Detection (Mask R-CNN):**
- ResNet-101 FPN backbone optimized for contrail morphology
- Classifies contrails into: short, thin, wide, cirrus types
- ~65% mask mAP for segmentation
- \>90% class accuracy across all contrail types

**Stage 2 — Tracking (Multi-Object Tracking):**
- Evaluated DeepSORT vs Norfair head-to-head
- Norfair selected: MOTA 43.3% (vs 11.3% baseline), IDF1 67.9% (vs 45.5%)
- Maintains stable track identities across frames

**Stage 3 — Attribution (Novel 4D→2D Projection):**
- Two novel methods developed: Geometric projection & Convolution-based
- Projects 3D flight paths onto 2D camera images
- Matches tracked contrails to specific flights
- 71.75% overall attribution accuracy
- 95-100% for short contrails, 50-77% for thin contrails

### Deliverables

- Full thesis PDF (available for download)
- Multi-object tracking demonstration video
- Detection visualization images

### Tech Stack

`Python` `Detectron2` `DeepSORT` `Norfair` `Azure Databricks` `Apache Spark` `PyTorch` `Computer Vision` `Mask R-CNN`

---

## 4. NeuraGallery — AI Image Organization Platform

**Category:** Full-Stack AI Application
**Status:** Production deployed
**Live:** [dinov3-storyboard-app.vercel.app](https://dinov3-storyboard-app.vercel.app)
**Cost Achievement:** 95% cost reduction vs GPU instances (~$30/month vs ~$550/month)

### What It Is

An intelligent image clustering platform that automatically organizes image collections using Meta's DINOv3 vision transformer. Users upload photos, and the system groups them into coherent clusters (scenes, subjects, visual similarity) without any manual tagging.

### 3-Tier Microservices Architecture

**Tier 1 — Frontend (Next.js PWA):**
- Drag-and-drop upload interface
- Real-time processing progress tracking
- Interactive cluster visualization and management
- Hierarchical re-clustering (drill into any cluster)
- Mobile-responsive progressive web app

**Tier 2 — Backend API (FastAPI):**
- Azure Blob Storage integration with SAS token authentication
- MongoDB for session/cluster metadata + Redis for caching
- RESTful API with UUID session-based data isolation
- Upload management, job queue, results serving

**Tier 3 — ML Service (PyTorch + DINOv3):**
- Meta's DINOv3 self-supervised vision transformer for feature extraction
- K-Means & HDBSCAN clustering algorithms
- Embedding caching for instant re-clustering — once images are processed, rearranging clusters is near-instant
- CPU-optimized architecture (the key to the 95% cost reduction)

### Key Innovation

The embedding cache is the core differentiator. Traditional approaches re-run the vision model every time clustering parameters change. NeuraGallery computes embeddings once, caches them, and re-clusters in milliseconds. This eliminates GPU dependency for the interactive phase entirely.

### Tech Stack

`PyTorch` `DINOv3` `FastAPI` `Next.js` `TypeScript` `Azure Blob Storage` `Docker` `MongoDB` `Redis` `K-Means` `HDBSCAN` `Tailwind CSS`

---

## 5. Kassandra Properties VIP — Real Estate Platform

**Category:** Full-Stack Production Application
**Status:** ~80-90% complete, deployed
**Live:** [construction-company-gamma.vercel.app](https://construction-company-gamma.vercel.app)

### What It Is

An enterprise-grade construction company and real estate platform for E.G. Leivadiotis Construction. Built from scratch as a freelance project, it handles property listings (FOR_SALE and RENTAL), real-time booking with Stripe payments, and a full admin CMS.

### Features

| Feature | Details |
|---|---|
| Property Listings | Advanced filtering for sale/rental, image galleries, property details |
| Booking System | Real-time availability, Stripe payment integration |
| Admin CMS | Role-based access control via Supabase, full CRUD for properties |
| 3D Property Tours | Three.js integration for interactive 3D walkthroughs |
| Authentication | NextAuth with role-based permissions |
| Multi-language | Internationalization support |
| Image Optimization | Next.js Image with lazy loading, responsive sizes |
| SEO | Full meta tags, Open Graph, structured data |

### Tech Stack

`Next.js 15` `React 19` `TypeScript` `Prisma` `PostgreSQL` `Stripe` `Supabase` `NextAuth` `Three.js` `Tailwind CSS` `Vercel`

---

## 6. Polichroniadou Dental Booking System (Web)

**Category:** Production SaaS / Healthcare
**Status:** Production-ready

### What It Is

A production-ready appointment booking system built specifically for Polichroniadou Dental Clinic (Greek dental practice). Two-pane desktop-first dashboard with smart patient management, Google Calendar sync, and full notification pipeline.

### Features

| Feature | Details |
|---|---|
| Two-Pane Dashboard | 420px booking form + calendar view, desktop-first |
| Smart Patient Lookup | Auto-complete search by phone number or name |
| Real-time Updates | Supabase real-time subscriptions for live appointment changes |
| Status Tracking | Booked → Confirmed → Completed (+ Cancelled, No-show) |
| Conflict Detection | Overlapping appointment checks before booking |
| Google Calendar Sync | OAuth 2.0, auto event creation for every booking |
| Email Notifications | SendGrid integration for confirmations/reminders |
| SMS Notifications | Twilio integration for appointment reminders |
| PWA | Installable app with offline queue for unreliable connections |
| Greek Localization | Full Greek language UI |
| GDPR Compliance | EU-region Supabase hosting, Row Level Security policies |
| Magic Link Auth | Passwordless authentication via Supabase |

### Database Schema

Tables: `patients`, `appointments`, `messages`, `google_tokens`, `treatment_types`, `confirmation_tokens`, `audit_log`
Views: `upcoming_appointments`, `todays_appointments`

### API Endpoints

`/api/auth/*` (authentication) | `/api/book` (create appointment) | `/api/cancel` | `/api/confirm` | `/api/reminder` (send/process)

### Tech Stack

`Next.js 14` `TypeScript` `Tailwind CSS` `Supabase` `Google Calendar API` `SendGrid` `Twilio` `PWA` `Vercel`

---

## 7. 3D MEP Component Predictor (Equans)

**Category:** AI / Construction Automation
**Type:** University team project with Equans (industry partner)
**Impact:** >50% resource savings in MEP modeling time

### What It Is

An AI system that automatically places MEP (Mechanical, Electrical, Plumbing) components in 3D Revit building models. Given a building's architectural model, it predicts both the type and (x, y, z) coordinates of each MEP component — replacing hours of manual placement.

### Dual Neural Network Architecture

| Network | Purpose | Performance |
|---|---|---|
| Type Predictor | Determines which MEP component to place | ~70% accuracy |
| Location Predictor | Calculates precise (x, y, z) coordinates | 1.1m MAE |
| CNN Enhancement | Context window for spatial consistency around each prediction | Improves both |

### Performance vs Baselines

| Method | Mean Absolute Error |
|---|---|
| **AI System** | **1.1m** |
| Expert Rule-Based System | ~2.3m |
| Random Baseline | ~4.0m |

2x improvement over expert systems. The AI was trained on real Equans project data extracted from Revit via JSON export.

### Pipeline

1. **Data Extraction** — Revit → JSON (architectural elements, room data, dimensions)
2. **AI Processing** — PyTorch neural networks process room context
3. **Training** — On real Equans MEP placement data
4. **3D Visualization** — Custom GUI for reviewing placements in 3D (OBJ mesh rendering)
5. **Integration** — Results importable back into Revit

### Tech Stack

`PyTorch` `CNN` `Python` `Autodesk Revit` `JSON` `OBJ Mesh` `3D Visualization`

---

## 8. Byzantine DNA Ancestry Analyzer

**Category:** Bioinformatics / Data Science / Personal Project
**Status:** In development

### What It Is

A comprehensive genomic analysis pipeline that determines genetic proximity of the user's DNA to Byzantine-era populations (330–1453 CE). Takes raw DNA data from MyHeritage (~700K SNP markers) and runs it through PCA, admixture analysis, genetic distance calculations, and haplogroup determination — all visualized in an interactive web dashboard.

### Pipeline

**Step 1 — Data Preprocessing:**
- Parse MyHeritage CSV (RSID, Chromosome, Position, Result)
- Clean, validate, standardize alleles
- Convert to PLINK format (.bed, .bim, .fam)

**Step 2 — Reference Data Acquisition:**
- Download Allen Ancient DNA Resource (AADR) v54+
- Filter for Byzantine-era, Ancient Greek, Roman, Neolithic populations
- Build modern comparative outgroups (Greek, Turkish, etc.)
- Find 50K–100K+ overlapping SNPs

**Step 3 — PCA Analysis:**
- smartPCA / scikit-learn principal component analysis
- 4 interactive Plotly plots: West Eurasian overview, Mediterranean zoom, temporal animation (Neolithic → Modern), multi-PC views
- User plotted as distinct marker vs ancient samples

**Step 4 — Genetic Distance:**
- Euclidean distance in PCA space
- Rank top 20 closest ancient individuals
- Fst-based population distances
- Geographic heatmap with Byzantine Empire boundary overlay

**Step 5 — Admixture/Ancestry:**
- ADMIXTURE analysis K=2–12 with cross-validation
- User ancestry proportions vs reference populations
- qpAdm mixture modeling
- Ancestry timeline visualization

**Step 6 — Haplogroup Analysis:**
- Y-DNA and mtDNA haplogroup determination
- Common Byzantine haplogroups: J2, E-V13, R1b, G2a, I2a (Y-DNA); H, U, K, T, J, HV (mtDNA)
- Geographic distribution maps

**Step 7 — Interactive Dashboard (6 pages):**
1. Overview — "Byzantine Score", key stats, summary
2. PCA Explorer — Interactive plots with population toggling
3. Ancestry Composition — ADMIXTURE charts, timeline
4. Genetic Distance — Ranked list, geographic heatmap
5. Haplogroups — Y-DNA/mtDNA details, migration maps
6. Methodology — Explanation, citations, limitations

### Tech Stack

`Python` `NumPy` `Pandas` `SciPy` `scikit-learn` `pandas-plink` `cyvcf2` `Plotly` `Folium` `PLINK` `ADMIXTURE` `smartPCA` `FastAPI` `React` `Docker`

---

## 9. InvestorHub — Personal Finance Dashboard

**Category:** FinTech / Personal Dashboard
**Status:** In development

### What It Is

An all-in-one personal financial dashboard for tracking income, budgeting, multi-asset portfolio management (ETFs, stocks, crypto, REITs), and AI-powered market insights. Built for a Netherlands-based context with Dutch Box 3 wealth tax estimation.

### Key Features

- Centralized dashboard: salary, expenses, savings, investments
- Real-time portfolio tracking with P&L analytics
- AI market insights via Claude API (web search, sentiment analysis)
- Dutch tax estimation (Box 3 wealth tax)
- Multi-asset support: ETFs, stocks, crypto, REITs
- Dark/light mode

### Architecture

```
Frontend (Next.js) → API Routes → Supabase (PostgreSQL)
                   → Claude API (market analysis, sentiment)
                   → Yahoo Finance / CoinGecko (real-time prices)
                   → News APIs (financial news)
                   → Upstash Redis (caching)
```

### Tech Stack

`Next.js 14` `TypeScript` `Tailwind CSS` `shadcn/ui` `Recharts` `Supabase` `Prisma` `Claude API` `Yahoo Finance API` `CoinGecko API` `Upstash Redis` `Vercel`

---

## 10. Confidential Client Project — Mobile Development

**Category:** Mobile App / E-Commerce
**Status:** Under NDA

> Details of this project's product, client, and business logic are confidential. Below reflects the scope of work and technologies applied.

### Scope & Experience

- Designed and built a full cross-platform mobile application from the ground up
- Implemented complete authentication system with biometric support (fingerprint/face ID)
- Built a multi-step creation wizard (6 stages with validation at each step)
- Developed real-time in-app messaging system between users
- Created inventory/content management interface with filtering, sorting, and bulk operations
- Designed an animated onboarding flow for new users
- Built a custom OLED-optimized dark theme design system (8pt grid, 48x48px min touch targets)
- Implemented pull-to-refresh, skeleton loading states, and haptic feedback throughout
- Atomic design pattern: reusable component library (atoms → molecules → organisms)
- File-based routing architecture with protected and public route groups

### Technical Responsibilities

- Full frontend architecture and state management (Zustand for UI state, React Query for server state)
- Form validation pipelines (React Hook Form + schema validation)
- Camera and image manipulation integration
- Secure local storage and token management
- Responsive layouts with gesture handling and physics-based animations

### Tech Stack

`Expo SDK 54` `React Native 0.81.5` `React 19` `TypeScript` `Zustand` `React Query` `React Hook Form` `Yup` `Reanimated 4` `Expo Router v6` `Axios` `Expo Camera` `Expo SecureStore`

---

## 11. HairlossAI — Scalp Analysis App

**Category:** Mobile App / Health Tech / AI
**Status:** In development

### What It Is

An AI-powered hair loss tracking app. Users take scalp photos, the app analyzes them with OpenAI Vision API, tracks progress over time, and recommends personalized treatment routines. Gamification (streaks, achievements) and premium subscription via Stripe.

### Features

- AI scalp scanning via OpenAI Vision API
- Before/after progress comparisons
- Personalized treatment routines
- Gamification (achievements, streaks)
- Premium subscription (Stripe)

### Tech Stack

`Expo SDK 54` `React Native` `TypeScript` `Zustand` `MMKV` `Supabase` `OpenAI Vision API` `Stripe` `React Hook Form` `Zod`

---

## 12. AI Image Detector

**Category:** AI / Computer Vision / University Project
**Grade:** 9.5/10

### What It Is

A predictive model that identifies AI-generated images vs real photographs. Uses convolutional and residual neural networks with a front-end interface. Includes heatmap visualization showing which regions of an image the model considers artificial.

### Tech Stack

`CNN` `ResNet` `Python` `Computer Vision` `Heatmap Visualization`

---

## 13. UNO Game with AI Bots

**Category:** Game AI / University Project

### What It Is

A recreation of the UNO card game where AI-driven bots play against the user. Bots use Monte Carlo Tree Search algorithms combined with neural-network-based strategy to make intelligent card decisions. Full graphical user interface.

### Tech Stack

`Python` `Monte Carlo Tree Search` `Neural Networks` `Pygame` `Game AI`

---

## 14. Skills & Technology Summary

### Mastered Technologies (Core 12)

React, Next.js, Python, TypeScript, PyTorch, AWS, Node.js, MongoDB, PostgreSQL, Docker, Tailwind CSS, Jupyter

### Full Stack Breakdown

| Category | Technologies |
|---|---|
| **Frontend** | React, Next.js, TypeScript, Tailwind CSS, Vue.js, Angular, Expo/React Native, Framer Motion |
| **Backend** | Node.js, Python, FastAPI, Express.js, Next.js API Routes |
| **AI & ML** | PyTorch, TensorFlow, Detectron2, DeepSORT, Norfair, DINOv3, LangChain, OpenAI API, Hugging Face, scikit-learn, HDBSCAN, K-Means, Monte Carlo Tree Search |
| **Databases** | PostgreSQL, MongoDB, Supabase, MariaDB, Redis, Prisma |
| **Cloud & DevOps** | AWS, Azure (Blob, Databricks, Container Apps), Google Cloud, Docker, Kubernetes, Vercel, MinIO |
| **Specialized** | Computer Vision (Mask R-CNN, CNNs, ResNets), Bioinformatics (PLINK, ADMIXTURE, PCA), Geospatial (Shapely, GeoPandas, Folium), 3D (Three.js, OBJ Mesh, Autodesk Revit) |
| **Mobile** | Expo SDK 54, React Native, Reanimated, Zustand, MMKV |
| **Payments & Comms** | Stripe, SendGrid, Twilio, Nodemailer |

### Project Categories at a Glance

| Category | Projects |
|---|---|
| **Climate Tech / Aviation** | COAV (real-time contrail avoidance), Contrail Monitoring Thesis |
| **AI / Computer Vision** | NeuraGallery, AI Image Detector, 3D MEP Predictor, UNO AI |
| **Full-Stack Web** | Kassandra Properties VIP, Dental Booking, InvestorHub |
| **Mobile** | Confidential Client Project, HairlossAI |
| **Data Science** | Byzantine DNA Analyzer |
| **Research** | Bachelor Thesis (9/10), MEP Predictor (Equans) |

---

*Generated: Feb 24, 2026*
*For portfolio redesign reference — all .NET projects, Ictinus, Kassandra Tech website, and BrushQuest excluded.*
