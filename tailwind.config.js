module.exports = {
  mode: "jit",  
  purge: [
      './partials/**/*.hbs', 
      './pages/**/*.hbs',
      './templates/**/*.hbs',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {

      textColor: theme => theme('colors'),
    textColor: {
      primary: '#000',
      secondary: '#412946',
      white          :   '#fff',
      black          :   '#000',
      yellow         :   '#f87f00',
      yellowText      :  '#fecb00',
      lightYellow     :  '#f87c01',
      lgihtOrage      :  '#f84411',
      gray            :  '#8c8c8c',
      lightGray       :  '#e0e1e2',
      yellowBright    :  '#fecb00',
      transparent     :  'transparent',
      lightwhite      :   '#f4f4f4',
      lightPink       :   '#dee4e9',
      lightgray       :   '#6d6b6b',
    },

    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3e2d47',
      'secondrylight' : '#412946',
      'secondary': '#8b8b8b',
      'third': '#2f2e2e',
      'bodybg' : '#f4f4f4',
      'footerbg' : '#222'
     }),

    fontFamily: {
      'Josefin': ["Josefin Sans", "sans-serif"],
    },


    borderRadius: {
      'none': '0',
     'sm': '0.125rem',
     DEFAULT: '0.25rem',
     DEFAULT: '4px',
     'md': '0.375rem',
     'lg': '0.5rem',
     'full': '9999px',
     'large': '12px',
     'custom-radius' : '72px;'
    },
      extend: {},
    },
    variants: {
      extend: {
        backgroundImage: {
          'header-bg': "url('/images/header-bg.jpg')",
          'mission': "url('/images/mission.jpg')",
         }
      },
    },
    plugins: [],
  }
  