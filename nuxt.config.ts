export default defineNuxtConfig({
  css: [
    // CSS file in the project
    '@/assets/normalize.css',

  ],
    // ... other options
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData:  '@use "@/assets/_index.scss" as *;'
            
          }
        }
      }
    }
   
  })
