/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Monochrome + 1 Accent system
        accent: {
          DEFAULT: '#0F766E', // teal-700ish, professional technical green
          50: '#E6F4F3',
          100: '#CFEAE7',
          200: '#9FD5D0',
          300: '#6FC0B8',
          400: '#3FABA1',
          500: '#188F85',
          600: '#127A72',
          700: '#0F766E',
          800: '#0A524D',
          900: '#063B37',
        }
      },
      fontFamily: {
        heading: ['Lora', 'Georgia', 'Times New Roman', 'serif'],
        body: ['Lato', 'Roboto', 'Open Sans', 'Source Sans Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.375rem', // rounded-md feel across
      },
    },
  },
  plugins: [],
}
