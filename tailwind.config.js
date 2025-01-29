/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // Cannabis green
        secondary: '#87CEEB', // Sky blue
        accent: '#87CEEB', // Hot pink
        yellow: '#FFD700', // Bright yellow
        dark: '#121212', // Very dark gray
        'cannabis': {
          100: '#E8F5E9',
          200: '#C8E6C9',
          300: '#A5D6A7',
          400: '#81C784',
          500: '#4CAF50', // Primary cannabis green
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        'sky': {
          100: '#E3F2FD',
          200: '#BBDEFB',
          300: '#90CAF9',
          400: '#64B5F6',
          500: '#87CEEB', // Primary sky blue
          600: '#42A5F5',
          700: '#1E88E5',
          800: '#1976D2',
          900: '#1565C0',
        }
      },
      fontFamily: {
        display: ['Righteous', 'cursive'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};