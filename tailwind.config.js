/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': 'url("/foto2.jpg")',
        'cepram': 'url("/foto1.jpg")',
        'upami': 'url("/foto4.jpg")',
        'elIllia': 'url("/foto3.jpg")',
      },
      backgroundSize: {
        'cepram-size': '100% 550px',
      },
      backgroundColor: {
        'header-color': 'rgba(25, 77, 65, 0.712);',
        'cepram-color': 'rgba(94, 27, 156, 0.808)',
        'upami-color': 'rgba(0, 47, 111, 0.57)',
        'elIllia-color': 'rgba(20, 53, 17, 0.71)'
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

