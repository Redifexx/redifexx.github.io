module.exports = {
  content: [
    './src/*.{html,js,ts,tsx}',
    './*.html',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};