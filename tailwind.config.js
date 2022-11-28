/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '608': '608px',
        '484': '484px'
      },
      height:{
        '720': '800px',
        '400': '400px'
      },
      colors: {
        'primary': '#303031',
        'green':'#71A894',
        "background":"#F9F9F9",
        "grey":"#66645E"
      },
      fontFamily: {
        'bely': ['Bely', 'sans-serif'],
        'proxima-nova': ['Proxima Nova','sans-serif'],
        'pt-mono':['PT Mono', 'monospace']
      },
      fontSize:{
        '6-4xl': ['4rem', {
          lineHeight: '80px',
          fontWeight: '500',
        }],
        '3-2xl':['32px',{
          lineHeight: '40px',
          fontWeight: '700',
        }]
      }
    },
  },
  plugins: [],
}
