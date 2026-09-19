import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // VEERGATHA Design System
        parchment: {
          50: '#FDFBF9',
          100: '#FAF7F2', // Primary background - warm ivory/parchment
          200: '#F3EFE6',
          300: '#EAE2D3',
          400: '#DCD1BD',
          500: '#C7B79E',
          600: '#A8917F',
          700: '#8C7668',
          800: '#715F55',
          900: '#5A4B42',
        },
        ink: {
          50: '#F8F7F6',
          100: '#F0EEED',
          200: '#E2E0DE',
          300: '#D4D2D0',
          400: '#B8B5B2',
          500: '#9C9996',
          600: '#807D7A',
          700: '#64615F',
          800: '#494745',
          900: '#2D2B29',
          950: '#1C1917', // Primary - deep ink/almost-black
        },
        sand: {
          50: '#FCFBF9',
          100: '#F5F1E9', // Secondary - warm stone
          200: '#EBE5D3',
          300: '#DCD8BD',
          400: '#C2B7A3',
          500: '#A89A89',
          600: '#8F8371',
          700: '#776D5C',
          800: '#605647',
          900: '#4A4133',
        },
        // Heritage World Accents (subtle usage)
        brass: {
          50: '#FCFBF8',
          100: '#F7F3EE',
          200: '#EFE6DC',
          300: '#E0D2C1',
          400: '#C8B79A',
          500: '#B59D7D',
          600: '#9C8466',
          700: '#846E53',
          800: '#6C5940',
          900: '#55452E',
        },
        rajputana: {
          DEFAULT: '#C15332',
          dark: '#9B391C',
          light: '#FDF4F0',
          border: '#E8B6A7',
        },
        maratha: {
          DEFAULT: '#D97706',
          dark: '#A15303',
          light: '#FEF8EE',
          border: '#F6CD96',
        },
        chola: {
          DEFAULT: '#B07D33',
          dark: '#82581A',
          light: '#FBF6EE',
          border: '#E3C89C',
        },
        ahom: {
          DEFAULT: '#2A634B',
          dark: '#1C4533',
          light: '#EEF7F2',
          border: '#9DCBB5',
        },
        gupta: {
          DEFAULT: '#BFA047',
          dark: '#8B7127',
          light: '#FCF8EE',
          border: '#E8D499',
        },
        mauryan: {
          DEFAULT: '#726456',
          dark: '#4F4439',
          light: '#F6F3EF',
          border: '#C5B9AC',
        },
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'Georgia', 'serif'],
        display: ['var(--font-cormorant)', 'Cinzel', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        epic: '.28em',
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        prominent: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        xs: '0.125rem',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
    },
  },
  plugins: [],
}
export default config