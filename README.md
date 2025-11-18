# Professor K. Kang - Academic Website

Professional bilingual academic website for Professor Kyung-Woo Kang from Hanyang University ERICA Campus.

## 🎓 Features

- **Bilingual Support**: Full Korean (한국어) and English support with seamless language switching
- **Publications Database**: 300+ research publications with advanced filtering and search
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Modern UI**: Clean, professional design with Hanyang University branding
- **Contact Form**: Integrated contact form for inquiries
- **SEO Optimized**: Full metadata and OpenGraph support for search engines

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
professor-website/
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── page.tsx       # Home page
│   │   ├── about/         # About page
│   │   ├── publications/  # Publications page
│   │   └── contact/       # Contact page
│   ├── api/
│   │   └── contact/       # Contact form API
│   └── globals.css        # Global styles
├── components/
│   ├── Navigation.tsx     # Header navigation
│   └── Footer.tsx         # Footer component
├── lib/
│   └── data/
│       └── publications.json  # Publications database
├── messages/
│   ├── en.json           # English translations
│   └── ko.json           # Korean translations
├── i18n.ts               # i18n configuration
└── middleware.ts         # Next.js middleware for locale routing
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The website will be available at `http://localhost:3000`

## 🌐 Language Support

The website automatically detects and supports:
- English (en): `http://localhost:3000/en`
- Korean (ko): `http://localhost:3000/ko`

Users can switch languages using the globe icon in the navigation bar.

## 📊 Publications Management

Publications are stored in `lib/data/publications.json`. The data structure includes:

```json
{
  "id": "pub-1",
  "authors": ["Author 1", "Author 2"],
  "year": 2020,
  "title": "Publication Title",
  "journal": "Journal Name",
  "type": "journal|conference|book|proceeding",
  "language": "en|ko",
  "pages": "1-10"
}
```

## 🎨 Customization

### Colors

University colors are defined in `app/globals.css`:
- Primary: `#003DA5` (Hanyang Blue)
- Accent: `#E31B23` (Hanyang Red)

### Content

Update translations in:
- `messages/en.json` for English content
- `messages/ko.json` for Korean content

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js and deploy

### Environment Variables

No environment variables required for basic functionality. For email functionality, add:

```env
SMTP_HOST=your-smtp-host
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
```

## 📈 SEO

The website includes:
- Dynamic metadata for each page
- OpenGraph tags for social sharing
- Robots.txt for search engines
- Sitemap generation
- Semantic HTML structure

## 📧 Contact Form

The contact form at `/contact` sends messages to:
- Email: kkw@hanyang.ac.kr
- Office: Hanyang University ERICA Campus

## 📝 License

© 2024 Professor Kyung-Woo Kang. All rights reserved.

## 👨‍💻 Development

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.

For questions or issues, please contact the development team.
