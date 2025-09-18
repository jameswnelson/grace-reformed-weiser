/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#4F0300', /* Maroon/Dark Red */
          700: '#674230', /* Brown */
          500: '#536678', /* Blue-Gray */
          300: '#D5E6E5', /* Pale Blue-Green/Mint */
          100: '#E3E4DF', /* Cream/Off-White */
        },
        secondary: {
          900: '#2D2B1C', /* Dark Olive Green/Brown-Green */
          700: '#444849', /* Charcoal Gray */
          500: '#536678', /* Blue-Gray */
          300: '#D5E6E5', /* Pale Blue-Green/Mint */
        },
        neutral: {
          900: '#2D2B1C', /* Dark Olive Green/Brown-Green */
          700: '#444849', /* Charcoal Gray */
          500: '#536678', /* Blue-Gray */
          300: '#D5E6E5', /* Pale Blue-Green/Mint */
          100: '#E3E4DF', /* Cream/Off-White */
        },
        success: {
          500: '#48bb78',
        },
        warning: {
          500: '#ed8936',
        },
        error: {
          500: '#f56565',
        },
        info: {
          500: '#536678', /* Blue-Gray */
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#2D2B1C', /* Dark Olive Green/Brown-Green */
            h1: {
              color: '#2D2B1C', /* Dark Olive Green/Brown-Green */
              fontWeight: '700',
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              marginTop: '0',
              marginBottom: '1.5rem',
            },
            h2: {
              color: '#2D2B1C', /* Dark Olive Green/Brown-Green */
              fontWeight: '600',
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              color: '#2D2B1C', /* Dark Olive Green/Brown-Green */
              fontWeight: '600',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            h4: {
              color: '#2D2B1C', /* Dark Olive Green/Brown-Green */
              fontWeight: '600',
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
            },
            p: {
              marginTop: '1rem',
              marginBottom: '1rem',
              lineHeight: '1.75',
            },
            blockquote: {
              borderLeftColor: '#536678', /* Blue-Gray */
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#444849', /* Charcoal Gray */
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            ul: {
              marginTop: '1rem',
              marginBottom: '1rem',
              paddingLeft: '1.5rem',
            },
            ol: {
              marginTop: '1rem',
              marginBottom: '1rem',
              paddingLeft: '1.5rem',
            },
            li: {
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
            },
            strong: {
              fontWeight: '600',
              color: '#2D2B1C', /* Dark Olive Green/Brown-Green */
            },
            em: {
              fontStyle: 'italic',
            },
            code: {
              backgroundColor: '#FFFFE6', /* Cream/Off-White */
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#536678', /* Blue-Gray */
            },
            pre: {
              backgroundColor: '#2D2B1C', /* Dark Olive Green/Brown-Green */
              color: '#FFFFE6', /* Cream/Off-White */
              padding: '1rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
