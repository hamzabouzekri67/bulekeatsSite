# BULEK EATS - Professional Multilingual Food Delivery Website

A complete, production-ready multilingual website for BULEK EATS, a licensed food delivery business operating in Algeria.

## Features

- **Multilingual Support**: Full support for English, French, and Arabic
- **Professional Design**: Red (#FF0000) and White (#FFFFFF) brand colors
- **Smooth Animations**: Modern fade, slide, and hover effects throughout
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Comprehensive meta tags and OpenGraph tags
- **Accessible**: ARIA attributes and semantic HTML
- **Facebook Business Ready**: All required information clearly displayed

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Lucide React** for icons

## Business Information

- **Legal Name**: BULEK EATS
- **Website**: https://bulekeats.com
- **Email**: contact@bulekeats.com
- **Phone**: 054009746
- **Country**: Algeria

## Project Structure

```
├── app/
│   ├── [locale]/          # Locale-based routing
│   │   ├── layout.tsx     # Locale layout with Header/Footer
│   │   ├── page.tsx       # Home page
│   │   ├── about/         # About Us page
│   │   ├── contact/       # Contact page
│   │   ├── privacy/       # Privacy Policy
│   │   └── terms/         # Terms of Service
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Root page (redirects to locale)
│   └── globals.css        # Global styles
├── components/
│   ├── header.tsx         # Site header with navigation
│   ├── footer.tsx         # Site footer
│   ├── language-switcher.tsx  # Language selector
│   ├── contact-form.tsx   # Contact form
│   └── ui/                # shadcn/ui components
├── lib/
│   └── i18n/
│       ├── config.ts      # i18n configuration
│       └── dictionaries.ts  # Translations (EN, FR, AR)
└── middleware.ts          # i18n routing middleware
```

## Pages

1. **Home** (`/`)
   - Hero section with animated title
   - Services showcase (Fast Delivery, Reliable, Quality, 24/7 Support)
   - Why Choose Us section
   - Contact information

2. **About Us** (`/about`)
   - Company description
   - Mission and Vision
   - Complete business information

3. **Contact** (`/contact`)
   - Contact information display
   - Working contact form
   - Email, phone, and location details

4. **Privacy Policy** (`/privacy`)
   - Comprehensive privacy policy
   - Data collection and protection information

5. **Terms of Service** (`/terms`)
   - Complete terms and conditions
   - Service description and user responsibilities

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

The site will automatically redirect to the default language (English) and you can switch languages using the language switcher in the header.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Multilingual Support

The website supports three languages:

- **English** (en) - Default
- **French** (fr)
- **Arabic** (ar) - RTL support included

Language can be changed using the language switcher in the header. The URL structure is:
- English: `/en/...`
- French: `/fr/...`
- Arabic: `/ar/...`

## Animations

The website includes smooth animations:

- **Fade-in**: Hero sections and content
- **Fade-in-up**: Animated entrance effects
- **Slide-in**: Left and right sliding animations
- **Scale-in**: Zoom-in effects
- **Hover effects**: Interactive button and link states

## SEO & Meta Tags

All pages include:
- Title tags
- Meta descriptions
- OpenGraph tags for social sharing
- Twitter Card tags
- Canonical URLs
- Language-specific meta tags

## Accessibility

- Semantic HTML structure
- ARIA labels and attributes
- Keyboard navigation support
- Screen reader friendly
- High contrast text (WCAG compliant)

## Color Scheme

- **Primary**: Red (#FF0000)
- **Secondary**: White (#FFFFFF)
- **Text**: Gray shades for optimal readability
- **Accents**: Red variations for hover states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 BULEK EATS - All rights reserved

## Contact

For any questions or support:
- Email: contact@bulekeats.com
- Phone: 054009746
- Location: Algeria
