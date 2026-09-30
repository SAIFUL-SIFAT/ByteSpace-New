# ByteSpace

ByteSpace is a modern online course marketplace designed for learners to discover and take courses, and creators to publish and manage them. This project implements the frontend landing page and authentication flow (login/register) following a highly polished and interactive Figma design.

## Live Demo

https://byte-space-new-rho.vercel.app/
## Tech Stack

- **Framework**: Next.js (App Router, Server Components)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations/Effects**: Custom CSS and minimal React state (micro-animations, gradients, glassmorphism)

## Features & Scope

### Core Requirements (Completed)
- **Landing Page**: Fully implemented based on the provided design specifications.
- **Hero Section**: Complete with search bar and decorative background shapes.
- **Course Discovery**: Category tabs and a grid of course cards reflecting the design.
- **Feature Sections**: Split sections for "Learners" and "Creators".
- **CTA Banner & Testimonials**: Fully responsive sections with visually rich gradient details.

### Bonus Requirements (Completed)
- **Register & Login Pages**: Created under the `(auth)` route group, sharing a common `AuthLayout`. Forms use custom inputs and buttons corresponding to the design system.

## Design Decisions

- **Color Palette & Typography**: Customized Tailwind theme with `neutral`, `primary` (blue), and `secondary` (lime) scales matching the exact hex values provided in the specifications. Typography utilizes `Satoshi` for body text and `Poppins` for headings via Next.js `next/font`.
- **Component Architecture**: 
  - Primitives in `src/components/ui/` (e.g., `Container`, `Grid`, `Button`).
  - Major page sections in `src/components/sections/`.
  - Layout pieces in `src/components/layout/`.
- **Responsive Layout**: Designed mobile-first. 
  - Mobile: 4 column grid / 20px padding / 20px gutter
  - Tablet (768px): 8 column grid / 40px padding / 32px gutter
  - Desktop (1280px+): 12 column grid / 120px padding / 40px gutter
- **No heavy animation libraries**: Implemented hover states, transforms, and interactions using pure CSS for optimal performance and Lighthouse scores.

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm i
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Known Limitations
- The authentication forms do not have backend logic yet (they are UI only).
- Interactive category tabs currently only visually filter the first static dataset; real logic will require a data fetching implementation.
- Some images and avatars use placeholder UI or static assets pending final asset handoff.

