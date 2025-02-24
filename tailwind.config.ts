/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,vue}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1F1F1F',
      },
      fontFamily: {
        jost: ["Jost", 'serif'],
      },
    },
  },
  plugins: [],
}

