# Grace Reformed Church of Weiser - Website

A modern, content-rich website for Grace Reformed Church of Weiser built with Next.js 15, TypeScript, and Tailwind CSS.

## Phase 1 Implementation Complete ✅

This implementation includes all Phase 1 requirements from the project roadmap:

### ✅ Project Setup
- Next.js 15 with TypeScript and App Router
- Tailwind CSS v4 with custom design system
- ESLint and Prettier configuration
- Static export configuration for traditional hosting

### ✅ Design System
- Custom color palette (primary blues, secondary browns/golds)
- Typography system (Inter, Merriweather, Playfair Display)
- Spacing, border radius, and shadow tokens
- Responsive design breakpoints

### ✅ UI Components
- Button (multiple variants and sizes)
- Card (with Header, Content, Footer)
- Input and Textarea (with labels and validation)
- Badge (multiple variants)

### ✅ Layout Components
- Header with responsive navigation
- Footer with comprehensive links
- Layout wrapper component

### ✅ Content Management
- Markdown-based content system
- Content loading utilities
- Sample content (pages, sermons, articles, events)
- TypeScript interfaces for content metadata

### ✅ Content Components
- SermonCard for displaying sermon information
- ArticleCard for blog posts and articles
- EventCard for calendar events

### ✅ Calendar Integration
- Calendar utility functions
- Mock data for development
- Event formatting and filtering

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with design system
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Basic UI components
│   ├── layout/           # Layout components
│   └── content/          # Content-specific components
├── content/               # Markdown content
│   ├── pages/            # Static page content
│   ├── sermons/          # Sermon content
│   ├── articles/         # Article content
│   └── events/           # Event data
└── lib/                   # Utility functions
    ├── content.ts        # Content loading utilities
    ├── calendar.ts       # Calendar integration
    └── utils.ts          # General utilities
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Opens [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```
Generates static files in the `out` directory for deployment to traditional hosting.

### Static Export
```bash
npm run export
```
Creates a static export ready for upload to Namecheap hosting.

## Design System

### Colors
- **Primary**: Deep blues (#1a365d, #2d5a87, #4299e1)
- **Secondary**: Warm browns/golds (#744210, #a0522d, #d69e2e)
- **Neutral**: Grays for text and backgrounds
- **Semantic**: Success, warning, error, info colors

### Typography
- **Sans**: Inter (body text, UI elements)
- **Serif**: Merriweather (content, articles)
- **Display**: Playfair Display (headings, titles)

### Components
All components are built with:
- TypeScript for type safety
- Tailwind CSS for styling
- Accessibility features
- Responsive design
- Consistent design tokens

## Content Management

### Adding Content
1. Create markdown files in the appropriate `content/` subdirectory
2. Add frontmatter metadata
3. Content will automatically appear on the website

### Content Types
- **Pages**: Static content (About, Contact, etc.)
- **Sermons**: Audio/video sermons with metadata
- **Articles**: Blog posts and news articles
- **Events**: Calendar events and activities

### Sample Content
The project includes sample content to demonstrate all features:
- About page with church information
- Sample sermon with audio/video links
- Welcome article for visitors
- Church potluck event

## Deployment

### Static Export (Recommended for Namecheap)
1. Run `npm run build` to generate static files
2. Upload the contents of the `out` directory to your hosting
3. Configure your domain to point to the uploaded files

### Development Deployment
For development and testing, the site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any static hosting provider

## Next Steps (Phase 2)

The foundation is now complete. Phase 2 will include:
- Additional page templates
- Enhanced content management
- Search functionality
- Media management
- Admin interface

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: Markdown with frontmatter
- **Icons**: Heroicons (via SVG)
- **Fonts**: Google Fonts (Inter, Merriweather, Playfair Display)

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is proprietary to Grace Reformed Church of Weiser.