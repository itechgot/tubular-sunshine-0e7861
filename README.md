# Schoon Amsterdam — Premium Cleaning Company Website

A modern, conversion-focused marketing website for a professional cleaning service operating in Amsterdam, Netherlands.

## About

Schoon Amsterdam is a fictional cleaning company website built with a strong focus on:
- **Conversions**: Clear CTAs, pricing transparency, WhatsApp integration
- **Trust signals**: Reviews, certifications, statistics counters
- **Local SEO**: Amsterdam neighborhoods, Dutch language content
- **Mobile-first**: Fully responsive across all devices

## Tech Stack

- **Framework**: TanStack Start (React 19 + Vite)
- **Styling**: Tailwind CSS v4 with custom CSS animations
- **Routing**: TanStack Router (file-based)
- **Fonts**: Cormorant Garamond (display) + Outfit (body) via Google Fonts
- **Deployment**: Render

## Key Features

- Sticky navigation with blur backdrop
- Animated hero section with split layout and trust badges
- Animated statistics counters (intersection-observer triggered)
- Services grid with hover effects
- About section with image collage
- 4-step "How It Works" section
- Testimonials from Dutch customers
- 3-tier pricing table
- Contact/booking form with success state
- Floating WhatsApp button
- Amsterdam neighborhoods section
- Full footer with links

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

This project is configured for **Render** using the `render.yaml` file.

1. Connect your repository to Render.
2. Render will automatically detect the `render.yaml` and configure the **Static Site** for you.
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist/client`
