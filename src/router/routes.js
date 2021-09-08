import Welcome from '@/pages/Welcome';
import NotFound from '@/pages/errors/404';

export default [

   { name: 'Welcome', path: '/', component: Welcome },

   // Page not found - Error 404
   { name: 'NotFound', path: '/:pathMatch(.*)*', component: NotFound },

]