/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      screens: {
        'sm1':'360px',
        'sm2':'375px',
        'sm3':'390px',
        'sm4':'415px',
        'sm': '812px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1192px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
    
        'backgroundColor':"#fafafa",
        bgcolor:"#f5f5f5",
        navcolor:"#3498db",
        navcolor2:"#3366ff",
        nav1:"#3498db",
        textcolor:"#333",
        text:"#dcdcdc",
        bg1:" #01bcd5",
        bg2:"#8ecae6",

       
        
        
      },
    
      fontFamily: {
        'ibm-plex-sans': ['IBM Plex Sans', 'sans'],
        exquisite: ['ExquisiteFont', 'sans'],
        montserrat: ['Montserrat', 'sans'],
        ibmplex:['Ibm Plex Sans'],
        poppins:['Poppins'],
        inter: ['Inter', 'sans'],
      },

    },
  },
  plugins: [],
}

