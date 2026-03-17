/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'porto-blue': '#12314b',
        'porto-cream': '#f7f3ec',
        'porto-soft-terracotta': '#d48b6a',
        'porto-gold': '#c89b3c',
        'porto-offwhite': '#fbf7f0',
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.16)',
      },
    },
  },
  plugins: [],
  safelist: [
    'animate-spin',
    'rounded-full',
    'h-12',
    'w-12',
    'border-t-2',
    'border-b-2',
    'border-porto-blue',
  ],
};

