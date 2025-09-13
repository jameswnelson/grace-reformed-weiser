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
          900: '#1a365d',
          700: '#2d5a87',
          500: '#4299e1',
          300: '#90cdf4',
          100: '#ebf8ff',
        },
        secondary: {
          900: '#744210',
          700: '#a0522d',
          500: '#d69e2e',
          300: '#f6e05e',
        },
        neutral: {
          900: '#1a202c',
          700: '#4a5568',
          500: '#718096',
          300: '#e2e8f0',
          100: '#f7fafc',
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
          500: '#4299e1',
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
            color: '#1a202c',
            h1: {
              color: '#1a202c',
              fontWeight: '700',
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              marginTop: '0',
              marginBottom: '1.5rem',
            },
            h2: {
              color: '#1a202c',
              fontWeight: '600',
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              color: '#1a202c',
              fontWeight: '600',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            h4: {
              color: '#1a202c',
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
              borderLeftColor: '#4299e1',
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#4a5568',
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
              color: '#1a202c',
            },
            em: {
              fontStyle: 'italic',
            },
            code: {
              backgroundColor: '#f7fafc',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#2d5a87',
            },
            pre: {
              backgroundColor: '#1a202c',
              color: '#f7fafc',
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
