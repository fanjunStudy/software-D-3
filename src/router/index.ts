import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// 路由组成component
const Login = () => import('../pages/login/login.vue');
const Index = () => import('../pages/index/index.vue');
const ElementPlus = () => import('../pages/elementPlus/elementPlus.vue');
const web3D = () => import('../pages/web3D/web3D.vue');

// 路由类型:RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/',
		name: 'Index',
		component: Index,
		redirect: '/elementPlus', //子页面默认加载路由
		children: [
			{
				path: '/elementPlus',
				name: 'ElementPlus',
				component: ElementPlus,
			},
			{
				path: '/web3D',
				name: 'web3D',
				component: web3D,
			},
		],
	},
];

const router = createRouter({
	// 路由模式
	history: createWebHistory(),
	routes,
});

export default router;
