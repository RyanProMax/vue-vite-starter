import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';
import plugin from 'windicss/plugin';

export default defineConfig({
  darkMode: 'class',
  attributify: {
    prefix: 'w:'
  },
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      colors: {
        gray: colors.coolGray,
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia
      }
    }
  },
  plugins: [
    plugin(({ addComponents }) => addComponents({
      '.btn': {
        padding: '.25rem 1rem',
        borderRadius: '.25rem'
      },
      '.btn-blue': {
        'backgroundColor': '#3490dc',
        'color': '#fff',
        '&:hover': {
          backgroundColor: '#2779bd'
        }
      },
      '.btn-red': {
        'backgroundColor': '#e3342f',
        'color': '#fff',
        '&:hover': {
          backgroundColor: '#cc1f1a'
        }
      }
    }))
  ]
});
