/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "navBarBg": "#003381",
        "navBarBtnBg": "#00BFBF",
        "navBarBtnBgHover": "#33CDCD"
      },
      height: {
        "storeImg": "35rem"
      }

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}