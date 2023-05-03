import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'amfe-flexible';
createApp(App).use(router).mount('#app');
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app.use(ElementPlus);
const baseSize = 38;
// 设置 rem 函数
function setRem() {
	// 当前页面宽度缩放比例，可根据自己需要修改
	const scale = document.documentElement.clientWidth / 1920;
	// 设置页面根节点字体大小
	document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
}

// 初始化 rem
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
	setRem();
};
