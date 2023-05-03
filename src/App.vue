<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
const router = useRouter();
// 定义 userInfo值 并规定类型 interface 会让query报错 所以用type
interface userInfo {
	name: string;
	password: string;
}
const toPath = (url: string, userInfo: userInfo) => {
	router.push({
		path: url,
		query: userInfo as any,
	});
};
const toName = (name: string, userInfo: userInfo) => {
	router.push({
		name: name,
		query: userInfo as any,
	});
};
function isDeviceMobile() {
	//判断函数 返回值true为移动端 false为PC端
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if (isiOS || isAndroid) {
		return true;
	} else {
		return false;
	}
}
</script>

<template>
	<!-- 切换路由 声明式路由跳转 两种方式 加replace不会留下历史记录 传参 -->
	<!-- <router-link replace to="/">登录(声明式)</router-link>
	<router-link :to="{ name: 'Index' }">首页(声明式)</router-link> -->
	<!-- 切换路由 编程式路由跳转 两种方式 传参（方式1 query)-->
	<!-- <button @click="toPath('/', { name: 'fanjun', password: '123123aabb' })">登录(编程式)</button>
	<button @click="toName('Index', { name: 'fanjun', password: '123123aabb' })">首页(编程式)</button> -->
	<!-- 路由出口 -->
	<!--  :style="[{ minWidth: !isDeviceMobile() ? '1200px' : 0 }]" -->
	<div class="appBox">
		<router-view></router-view>
	</div>
	<!-- <HelloWorld msg="Vite + Vue" /> -->
	<!-- <HelloAxios /> -->
	<!-- <HelloLoad /> -->
</template>

<style scoped>
.appBox {
	/* min-width: 100rem; */
}
</style>
