/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#e8fbf4',
          100: '#c7f2e3',
          200: '#9de5cd',
          300: '#6fd4b5',
          400: '#38b895',
          500: '#20a07e',
          600: '#168166',
          700: '#126552',
          800: '#0f5041',
          900: '#0d4236'
        }
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: []
};
