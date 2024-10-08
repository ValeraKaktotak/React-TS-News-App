/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBackground: 'var(--main-background)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          opacity: {
            50: 'var(--primary-opacity-50)'
          }
        },
        tertiary: {
          DEFAULT: 'var(--tertiary)'
        }
      }
    }
  },
  plugins: []
}
