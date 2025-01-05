/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Quét tất cả các file trong `src`
  ],
  theme: {
    extend: {
      colors: {
        win: '#34d399',
        draw: '#9ca3af',
        lose: '#a78bfa',
      },
    },
  },
  plugins: [],
};
