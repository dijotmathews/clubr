import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_RUL,
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	routes: [
		{
			path: '',
			component: () => import('@/views/layout/MainPage.vue'),
			children: [],
		}
	],

})

export default router;