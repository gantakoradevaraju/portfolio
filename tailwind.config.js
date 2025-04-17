/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        border: 'var(--border)',
        primary: {
          50: 'rgb(var(--primary-50) / <alpha-value>)',
          100: 'rgb(var(--primary-100) / <alpha-value>)',
          200: 'rgb(var(--primary-200) / <alpha-value>)',
          300: 'rgb(var(--primary-300) / <alpha-value>)',
          400: 'rgb(var(--primary-400) / <alpha-value>)',
          500: 'rgb(var(--primary-500) / <alpha-value>)',
          600: 'rgb(var(--primary-600) / <alpha-value>)',
          700: 'rgb(var(--primary-700) / <alpha-value>)',
          800: 'rgb(var(--primary-800) / <alpha-value>)',
          900: 'rgb(var(--primary-900) / <alpha-value>)',
        },
        secondary: {
          50: 'rgb(253, 244, 255 / <alpha-value>)',
          100: 'rgb(250, 232, 255 / <alpha-value>)',
          200: 'rgb(245, 208, 254 / <alpha-value>)',
          300: 'rgb(240, 171, 252 / <alpha-value>)',
          400: 'rgb(232, 121, 249 / <alpha-value>)',
          500: 'rgb(217, 70, 239 / <alpha-value>)',
          600: 'rgb(192, 38, 211 / <alpha-value>)',
          700: 'rgb(162, 28, 175 / <alpha-value>)',
          800: 'rgb(134, 25, 143 / <alpha-value>)',
          900: 'rgb(112, 26, 117 / <alpha-value>)',
        },
        neutral: {
          50: 'rgb(248, 250, 252 / <alpha-value>)',
          100: 'rgb(241, 245, 249 / <alpha-value>)',
          200: 'rgb(226, 232, 240 / <alpha-value>)',
          300: 'rgb(203, 213, 225 / <alpha-value>)',
          400: 'rgb(148, 163, 184 / <alpha-value>)',
          500: 'rgb(100, 116, 139 / <alpha-value>)',
          600: 'rgb(71, 85, 105 / <alpha-value>)',
          700: 'rgb(51, 65, 85 / <alpha-value>)',
          800: 'rgb(30, 41, 59 / <alpha-value>)',
          900: 'rgb(15, 23, 42 / <alpha-value>)',
        },
      },
      boxShadow: {
        'soft-xl': '0 20px 27px 0 rgba(0, 0, 0, 0.05)',
        'soft-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 