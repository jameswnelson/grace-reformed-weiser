# Design System & Visual Identity

## Brand Identity

### Church Values & Personality
- **Welcoming**: Open and inviting to visitors and members
- **Traditional**: Rooted in Reformed theology and practice
- **Professional**: High-quality, trustworthy presentation
- **Accessible**: Easy to navigate and understand
- **Warm**: Friendly and approachable tone

### Color Palette
```css
/* Primary Colors */
--primary-900: #1a365d;    /* Deep Blue - Main brand color */
--primary-700: #2d5a87;    /* Medium Blue - Secondary brand */
--primary-500: #4299e1;    /* Bright Blue - Accents and links */
--primary-300: #90cdf4;    /* Light Blue - Backgrounds */
--primary-100: #ebf8ff;    /* Very Light Blue - Subtle backgrounds */

/* Secondary Colors */
--secondary-900: #744210;   /* Deep Brown - Traditional feel */
--secondary-700: #a0522d;   /* Medium Brown - Secondary elements */
--secondary-500: #d69e2e;   /* Warm Gold - Highlights */
--secondary-300: #f6e05e;   /* Light Gold - Subtle accents */

/* Neutral Colors */
--neutral-900: #1a202c;    /* Almost Black - Text */
--neutral-700: #4a5568;    /* Dark Gray - Secondary text */
--neutral-500: #718096;    /* Medium Gray - Borders */
--neutral-300: #e2e8f0;    /* Light Gray - Dividers */
--neutral-100: #f7fafc;    /* Very Light Gray - Backgrounds */

/* Semantic Colors */
--success-500: #48bb78;    /* Green - Success states */
--warning-500: #ed8936;    /* Orange - Warning states */
--error-500: #f56565;      /* Red - Error states */
--info-500: #4299e1;      /* Blue - Information */
```

### Typography
```css
/* Font Families */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-serif: 'Merriweather', Georgia, serif;
--font-display: 'Playfair Display', serif;

/* Font Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

## Component Library

### Layout Components

#### Header
- **Logo**: Church name and logo
- **Navigation**: Primary menu items
- **Mobile Menu**: Hamburger menu for mobile
- **Search**: Global search functionality
- **Call-to-Action**: "Join Us" or "Contact" button

#### Footer
- **Church Info**: Address, phone, email
- **Quick Links**: Important pages
- **Social Media**: Links to social platforms
- **Copyright**: Legal information
- **Newsletter**: Email signup

#### Sidebar
- **Navigation**: Secondary navigation
- **Widgets**: Calendar, recent posts, contact info
- **Call-to-Action**: Special announcements

### Content Components

#### Hero Section
- **Large Image**: Church building or worship service
- **Headline**: Welcoming message
- **Subheadline**: Brief description
- **Call-to-Action**: Primary button
- **Secondary Info**: Service times, location

#### Card Components
- **Event Card**: Date, title, description, image
- **Sermon Card**: Speaker, title, date, audio/video
- **Article Card**: Title, excerpt, author, date
- **Leadership Card**: Photo, name, role, bio

#### Form Components
- **Contact Form**: Name, email, message
- **Newsletter Signup**: Email, preferences
- **Event Registration**: Name, email, event selection
- **Prayer Request**: Name, request, contact info

### Interactive Components

#### Calendar
- **Month View**: Grid layout with events
- **List View**: Chronological event list
- **Event Details**: Modal or expandable details
- **Filtering**: By category, date range, type

#### Media Player
- **Audio Player**: Sermon audio with controls
- **Video Player**: Sermon video with controls
- **Playlist**: Related media suggestions
- **Download**: Direct file download links

#### Search
- **Global Search**: Site-wide content search
- **Filtered Search**: By content type, date, author
- **Search Results**: Paginated results with previews
- **Search Suggestions**: Auto-complete and suggestions

## Page Templates

### Home Page
```
┌─────────────────────────────────────┐
│ Header with Navigation              │
├─────────────────────────────────────┤
│ Hero Section                       │
│ - Large Image                      │
│ - Welcome Message                  │
│ - Service Times                    │
│ - Call-to-Action                  │
├─────────────────────────────────────┤
│ Welcome Section                    │
│ - Church Description               │
│ - Mission Statement               │
│ - Featured Image                  │
├─────────────────────────────────────┤
│ Upcoming Events                   │
│ - Event Cards (3-4)               │
│ - View All Events Button          │
├─────────────────────────────────────┤
│ Recent Sermons                    │
│ - Sermon Cards (3-4)              │
│ - View All Sermons Button         │
├─────────────────────────────────────┤
│ Footer                            │
└─────────────────────────────────────┘
```

### About Page
```
┌─────────────────────────────────────┐
│ Header                             │
├─────────────────────────────────────┤
│ Page Hero                          │
│ - Page Title                       │
│ - Breadcrumb Navigation            │
├─────────────────────────────────────┤
│ Content Area                       │
│ - Main Content                     │
│ - Sidebar with Quick Links         │
├─────────────────────────────────────┤
│ Leadership Section                 │
│ - Leadership Cards                 │
│ - Contact Information              │
├─────────────────────────────────────┤
│ Footer                            │
└─────────────────────────────────────┘
```

### Sermon Archive
```
┌─────────────────────────────────────┐
│ Header                             │
├─────────────────────────────────────┤
│ Page Hero                          │
│ - Page Title                       │
│ - Search and Filter Controls       │
├─────────────────────────────────────┤
│ Filter Sidebar                     │
│ - Date Range                       │
│ - Speaker                          │
│ - Series                           │
│ - Scripture                        │
├─────────────────────────────────────┤
│ Sermon Grid                        │
│ - Sermon Cards                     │
│ - Pagination                       │
├─────────────────────────────────────┤
│ Footer                            │
└─────────────────────────────────────┘
```

## Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Medium devices */
--breakpoint-lg: 1024px;  /* Large devices */
--breakpoint-xl: 1280px;  /* Extra large devices */
--breakpoint-2xl: 1536px; /* 2X large devices */
```

### Mobile Considerations
- **Touch Targets**: Minimum 44px for interactive elements
- **Navigation**: Collapsible mobile menu
- **Content**: Single column layout on small screens
- **Images**: Responsive images with appropriate sizing (static export compatible)
- **Forms**: Mobile-optimized input fields
- **Performance**: Optimized for traditional hosting performance

### Tablet Considerations
- **Layout**: Two-column layout where appropriate
- **Navigation**: Expanded navigation with dropdowns
- **Content**: Balanced text and image proportions
- **Forms**: Multi-column forms when space allows

### Desktop Considerations
- **Layout**: Multi-column layouts with sidebars
- **Navigation**: Full horizontal navigation
- **Content**: Rich media and interactive elements
- **Forms**: Advanced form layouts and validation

## Accessibility

### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 for normal text
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Proper semantic markup
- **Focus Indicators**: Visible focus states
- **Alt Text**: Descriptive alt text for images

### Semantic HTML
- **Headings**: Proper heading hierarchy (h1-h6)
- **Landmarks**: ARIA landmarks for navigation
- **Lists**: Proper list markup (ul, ol, dl)
- **Tables**: Accessible table structure
- **Forms**: Proper form labels and validation

### Interactive Elements
- **Buttons**: Proper button semantics
- **Links**: Descriptive link text
- **Forms**: Clear error messages and validation
- **Media**: Captions and transcripts
- **Navigation**: Clear navigation structure

## Animation & Transitions

### Micro-interactions
- **Hover Effects**: Subtle hover states
- **Button States**: Loading, success, error states
- **Form Feedback**: Real-time validation feedback
- **Page Transitions**: Smooth page loading

### Performance
- **CSS Transitions**: Hardware-accelerated animations
- **Reduced Motion**: Respect user preferences
- **Loading States**: Skeleton screens and spinners
- **Progressive Enhancement**: Graceful degradation
- **Static Optimization**: Pre-built assets for fast loading
- **Traditional Hosting**: Optimized for shared hosting performance

## Design Tokens

### Spacing System
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Border Radius
```css
--radius-sm: 0.125rem;  /* 2px */
--radius-md: 0.375rem;  /* 6px */
--radius-lg: 0.5rem;    /* 8px */
--radius-xl: 0.75rem;   /* 12px */
--radius-2xl: 1rem;     /* 16px */
--radius-full: 9999px;  /* Full circle */
```

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```
