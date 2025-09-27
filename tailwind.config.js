module.exports = {
  content: [
    './src/*.{html,js,ts,tsx}',
    './src/**/*.{html,js,ts,tsx}',
    './*.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Questrial', 'ui-sans-serif'],
      serif: ['Merriweather', 'ui-serif', 'Georgia'],
      mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
    },
  },
  plugins: [],
};