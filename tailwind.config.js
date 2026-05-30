export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        remnara: {
          bg: '#FAFAF7',
          text: '#1A1A1A',
          green: '#1B4D3E',
          gold: '#C9A84C',
          red: '#C1392B',
          blue: '#2C5F8A',
          surface: '#F0EDE6',
          border: '#E2DDD5',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: []
}
