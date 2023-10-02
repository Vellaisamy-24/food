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
       
        
        
      },
      fontFamily: {
        'ibm-plex-sans': ['IBM Plex Sans', 'sans'],
        'montserrat': ['Montserrat', 'sans'],
        'ibmplex':['Ibm Plex Sans'],
        'poppins':['Poppins'],
        'inter': ['Inter', 'sans'],
      },

    },
  },
  plugins: [],
}

