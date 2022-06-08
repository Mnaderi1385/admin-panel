module.exports = {
  darkMode: 'class',
  content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      animation: {
        'loading': 'loading 1.3s linear infinite',
      },

      keyframes: {
        loading: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
