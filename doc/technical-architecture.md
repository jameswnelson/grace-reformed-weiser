# Technical Architecture & Implementation Plan

## Technology Stack

### Frontend Framework
- **Next.js 14+**: React-based framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions

### Content Management
- **Markdown Files**: Content stored in `/content` directory
- **Frontmatter**: YAML metadata for each content piece
- **MDX**: Enhanced markdown with React components when needed
- **Content Collections**: Organized content structure

### Data Management
- **Static Generation**: Pre-built pages at build time
- **Incremental Static Regeneration**: Dynamic content updates
- **API Routes**: Serverless functions for dynamic features

### Calendar System
- **Google Calendar API**: Integration for event management
- **Calendar Sync**: Automatic updates from Google Calendar
- **Event Display**: Custom calendar component with filtering

### File Management
- **Cloud Storage**: AWS S3 or Google Cloud Storage for media
- **File Upload**: Admin interface for sermon and article uploads
- **CDN**: Fast delivery of media files

### Deployment & Hosting
- **Primary Hosting**: Vercel (recommended) or Netlify for Next.js application
- **Domain Management**: Namecheap for domain registration and DNS
- **Email Hosting**: Namecheap or Google Workspace for church email
- **GitHub**: Version control and CI/CD
- **Domain**: gracereformedweiser.com

### Hosting Considerations
- **Next.js Compatibility**: Requires Node.js runtime and build processes
- **Static Generation**: Pre-built pages for optimal performance
- **API Routes**: Serverless functions for dynamic features
- **Content Updates**: Automatic deployments from content changes
- **Performance**: Global CDN and edge caching

## Project Structure

```
grace-reformed-weiser/
├── app/                    # Next.js App Router
│   ├── (pages)/          # Route groups
│   ├── api/              # API routes
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout
├── components/            # Reusable React components
│   ├── ui/               # Basic UI components
│   ├── layout/           # Layout components
│   └── content/          # Content-specific components
├── content/               # Markdown content
│   ├── pages/            # Static page content
│   ├── sermons/          # Sermon content
│   ├── articles/         # Article content
│   └── events/           # Event data
├── lib/                   # Utility functions
│   ├── content.ts        # Content loading utilities
│   ├── calendar.ts       # Calendar integration
│   └── utils.ts          # General utilities
├── public/                # Static assets
│   ├── images/           # Site images
│   └── uploads/          # User uploads
├── styles/                # Additional styles
└── docs/                  # Documentation
```

## Content Management System

### Content Types
1. **Pages**: Static content (About, Statement of Faith, etc.)
2. **Sermons**: Audio/video files with metadata
3. **Articles**: Blog posts and news
4. **Events**: Calendar entries
5. **Resources**: Documents and links

### Content Structure Example
```yaml
---
title: "Sunday Service"
date: "2024-01-14"
speaker: "Pastor Smith"
scripture: "John 3:16"
audioUrl: "/uploads/sermons/2024-01-14-service.mp3"
videoUrl: "/uploads/sermons/2024-01-14-service.mp4"
summary: "A message about God's love and salvation"
tags: ["salvation", "love", "gospel"]
---
```

## Calendar Integration

### Google Calendar Setup
1. **Service Account**: Create Google Cloud service account
2. **API Access**: Enable Google Calendar API
3. **Calendar ID**: Use church's Google Calendar
4. **Sync Frequency**: Update every 6 hours

### Calendar Features
- **Event Display**: Grid and list views
- **Filtering**: By category, date range, type
- **Export**: Add to personal calendar
- **Admin Interface**: Easy event management

## Admin Interface

### Content Management
- **Markdown Editor**: Rich text editing for articles
- **File Upload**: Drag-and-drop for sermons and media
- **Metadata Management**: Forms for content properties
- **Preview**: Live preview of content

### User Management
- **Role-based Access**: Admin, Editor, Viewer
- **Authentication**: Secure login system
- **Permissions**: Granular access control

## Performance Optimization

### Static Generation
- **Build-time Rendering**: Pre-generate all static pages
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Aggressive caching strategies

### SEO & Accessibility
- **Meta Tags**: Dynamic meta information
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Automatic XML sitemap generation
- **Accessibility**: WCAG 2.1 AA compliance

## Security Considerations

### Content Security
- **File Validation**: Type and size restrictions
- **Upload Limits**: Prevent abuse
- **Virus Scanning**: Scan uploaded files
- **Access Control**: Secure admin areas

### Data Protection
- **HTTPS**: Secure connections
- **Input Sanitization**: Prevent XSS attacks
- **Rate Limiting**: API abuse prevention
- **Backup Strategy**: Regular content backups

## Monitoring & Maintenance

### Performance Monitoring
- **Core Web Vitals**: Track user experience metrics
- **Error Tracking**: Monitor and alert on issues
- **Uptime Monitoring**: Ensure site availability
- **Analytics**: User behavior insights

### Content Backup
- **Version Control**: Git-based content tracking
- **Automated Backups**: Daily content backups
- **Disaster Recovery**: Content restoration procedures
- **Content Validation**: Regular content health checks

## Hosting & Deployment Strategy

### Static Export Implementation
Next.js supports static export, making it compatible with traditional hosting providers like Namecheap.

#### Static Export Configuration
```javascript
// next.config.js
module.exports = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

#### Build Process
```bash
# Development
npm run dev          # Local development server

# Build static site
npm run build        # Creates static files in /out directory

# Preview static build
npm run start        # Preview static build locally
```

#### Deployment Process
1. **Local Build**: Run `npm run build` to generate static files
2. **File Upload**: Upload `/out` directory contents to Namecheap hosting
3. **Content Updates**: Rebuild and re-upload when content changes
4. **Version Control**: Track changes in Git for rollback capability

#### Deployment Workflow for Non-Technical Staff
1. **Content Updates**: Edit markdown files locally
2. **Developer Build**: Developer runs build process
3. **File Preparation**: Organize files for upload
4. **Hosting Upload**: Upload via cPanel or FTP
5. **Verification**: Test live site functionality
6. **Backup**: Keep previous version for safety

### Recommended Hosting Solution
- **Website Hosting**: Vercel (primary) or Netlify
  - Built specifically for Next.js applications
  - Automatic deployments from GitHub
  - Global CDN and edge caching
  - Generous free tier for church websites
  - Easy content updates for non-technical staff

### Alternative Hosting Options
- **Traditional Shared Hosting** (Namecheap, Bluehost, etc.)
  - ✅ **Compatible with Static Export** of Next.js
  - ✅ Cost-effective hosting solution
  - ✅ Full control over hosting environment
  - ⚠️ Manual deployment process required
  - ⚠️ Limited dynamic features
  - ✅ Good for domain and email management

### Hybrid Approach (Recommended)
- **Domain & Email**: Namecheap
  - Domain registration and DNS management
  - Professional email hosting
  - Cost-effective for basic services
- **Website Hosting**: Vercel/Netlify
  - Modern web application hosting
  - Automatic deployments and updates
  - Professional performance and reliability

### Static Export Approach (Primary Recommendation)
- **Development**: Local Next.js development with full features
- **Build Process**: Static export to HTML/CSS/JS files
- **Hosting**: Namecheap shared hosting
- **Deployment**: Manual file upload via FTP/cPanel
- **Benefits**: Full control, cost-effective, familiar hosting, single provider
- **Limitations**: Manual updates, no dynamic features
- **Ideal For**: Church websites with moderate update frequency

#### Content Update Workflow (Static Export)
1. **Content Changes**: Update markdown files locally
2. **Local Testing**: Test changes with `npm run dev`
3. **Static Build**: Run `npm run build` to generate new files
4. **File Upload**: Upload new files to Namecheap hosting
5. **Verification**: Test live site to confirm updates
6. **Backup**: Keep previous version for rollback if needed

#### Calendar Integration (Static Export)
- **Build-time Updates**: Calendar data fetched during build
- **Scheduled Rebuilds**: Daily/weekly builds for fresh content
- **Manual Triggers**: Rebuild when events are added/updated
- **Fallback Content**: Static event list when calendar unavailable

### Migration Path
1. **Phase 1**: Keep current hosting for domain/email
2. **Phase 2**: Deploy new website to Vercel/Netlify
3. **Phase 3**: Update DNS to point to new hosting
4. **Phase 4**: Maintain domain/email on Namecheap

### Static Export Migration Path
1. **Phase 1**: Develop website locally with Next.js
2. **Phase 2**: Build and test static export locally
3. **Phase 3**: Upload static files to Namecheap hosting
4. **Phase 4**: Configure domain and test live site
5. **Phase 5**: Set up content update workflow
