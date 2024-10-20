/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': 'url("./foto2.jpg")',
        'cepram': 'url("./foto1.jpg")',
      },
      backgroundColor: {
        'header-color': 'rgba(25, 77, 65, 0.712);',
        'cepram-color': 'rgba(94, 27, 156, 0.808)',
        'upami-color': 'rgba(0, 47, 111, 0.27)',
        'elIllia-color': 'rgba(25, 126, 0, 0.54)'
      },
      colors: {
        'texto': 'rgb(255, 255, 255)',
        'darkBlue': '#0B2344',
        'darkGreen': '#197E00'
      }
    },
  },
  plugins: [],
}

