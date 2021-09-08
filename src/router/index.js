import { 
   createRouter, 
   createWebHistory 
} from 'vue-router';
import routes from './routes';

const router = createRouter({
	history: createWebHistory(),
      base: process.env.BASE_URL,
      relative: true,
      routes: routes
});

let access;

if(window.localStorage.getItem('access') == "true")
	access = true
else 
	access = false

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.authOnly)){
		if(access) {
			next()
      }
		else
         next({ name: 'Login'})
	} 		
	else if (to.matched.some(record => record.meta.guestOnly)){
		if(!access) 
			next()
		else
			next({ name: 'UserHome'})
	} else 
		next()
})

export default router;