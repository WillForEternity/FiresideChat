/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'flicker': 'flicker 3s linear infinite',
          'flicker-intense': 'flicker-intense 2s linear infinite',
          'pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          flicker: {
            '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '0.99' },
            '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
          },
          'flicker-intense': {
            '0%, 39.999%, 42%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '0.99' },
            '40%, 41.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
          },
          pulse: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: .5 },
          },
        },
      },
    },
    variants: {
      extend: {
        ringWidth: ['focus-within'],
      },
    },
    plugins: [],
  }