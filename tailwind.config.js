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
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        'custom-green': '#1EC089',
        'custom-orange': '#FF7865',
        'custom-back':'#FAFAFA',
        'custom-gray': '#F0F0F0',
        'linear-green-2': 'var(--Linear-Green-2, #1EC089)',
        'gray-3': 'var(--Gray-3, #828282)',
        'custom-gray-2': 'var(--Grey, #6A778B)',
        'mountcolor':'#33D69F',
        'dlxcolor':'#6A778B',
        'breakcolor':'#FF7865',
        'packtextcolor':'#FF7865',
        'packplacecolor':'#6B7280',
        'bookingtext':'#6A778B',
        'bookingticket':'#FF7865',
        'backgroundColor':"#fafafa",
        'snowcolor':'#FF7865;',
        
        
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

