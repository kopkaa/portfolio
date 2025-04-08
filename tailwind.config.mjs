/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        green: {
          200: '#ccf381',
        },
        blue: {
          200: '#4831d4',
					800: '#06083d'
        },
				purple: {
					300: '#af43be',
					400: '#fe00fe'
				}
      },
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
        rethink: ['Rethink Sans', 'sans-serif'],
        lexend: ['Lexend Mega', 'sans-serif'],
      },
			dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
				'pop-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95) translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'pop-in': 'pop-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [
		require('tailwindcss-animate'),
	],
};
