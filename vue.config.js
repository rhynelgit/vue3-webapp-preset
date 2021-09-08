module.exports = {
   devServer: {
         proxy: 'http://127.0.0.1:8000',
     },
     configureWebpack: {
       plugins: [
 
       ]
   },
   css: {
       loaderOptions: {
         sass: {
           additionalData: `
             @import "@/assets/sass/app.scss";
           `
         }
       }
   }
 }