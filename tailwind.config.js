/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': 'var(--dark-bg)',
        'dark-card': 'var(--dark-card)',
        'dark-border': 'var(--dark-border)',
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
          light: 'var(--primary-light)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          dark: 'var(--secondary-dark)',
          light: 'var(--secondary-light)',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 20s infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#9CA3AF',
            h1: {
              color: '#F3F4F6',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '700',
            },
            h2: {
              color: '#F3F4F6',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '600',
            },
            h3: {
              color: '#F3F4F6',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '600',
            },
            strong: {
              color: '#FF3E00',
            },
            a: {
              color: '#FF3E00',
              '&:hover': {
                color: '#CC3200',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};