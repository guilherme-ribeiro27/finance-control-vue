/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        surface:'#e1ebe6',
        background: '#f2f7f5',
        'dark-surface':'#181a19',
        'dark-background': '#0a0a0a',

        container: '#e6e6e6',
        'on-background': '#fff5f5',
        'title': '#0f0f0f',
        'subtitle': '#292e2b',
        'secondary': '#4e5c5a',
        'dark-secondary': '#D8FFFB',
        'dark-title': '#ffffff',
        'dark-subtitle': '#b8b8b8',


        'dark-container': '#0a0a0a',
        'dark-on-background': '#242323',

        primary: '#22b56c',
        'dark-primary': '#22b56c',


        'dark-border': '#848484',
        'dark-hightlight': '#28282A',
      }
    },
  },
  plugins: [],
}

