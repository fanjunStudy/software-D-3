<template>
	<h1 id="DispostModel">{{ title }}</h1>
	<div ref="threeRef"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import {
	Color,
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
	AxesHelper,
	PlaneGeometry,
	BoxGeometry,
	SphereGeometry,
	SpotLight,
	MeshBasicMaterial,
	MeshLambertMaterial,
	MeshStandardMaterial,
	Mesh,
} from 'three';
import { pl } from 'element-plus/es/locale';
const title = ref('threeJs');
const threeRef = ref();
const init = () => {
	const scene = new Scene();
	const axes = new AxesHelper(20);
	scene.add(axes); // 场景轴线
	const geometry = new PlaneGeometry(60, 20); //几何体创建geometry 平面(Plane) 宽60，长20
	const basicMaterial = new MeshStandardMaterial({ color: 0x7777ff }); //几何体材质material
	const plane = new Mesh(geometry, basicMaterial); //绘制图形
	// 几何体旋转
	plane.rotation.x = -0.5 * Math.PI; // 绕x轴旋转90度
	// 几何体平移（中心位置坐标）
	plane.position.x = 30;
	plane.position.y = -10;
	plane.position.z = 0;
	plane.receiveShadow = true; // 接收阴影
	scene.add(plane);
	// 创建正方体，平移到墙角
	const box = new BoxGeometry(4, 4, 4);
	const boxMaterial = new MeshLambertMaterial({ color: 0xbbbbbb }); // wireframe 线条模式 镂空
	const boxMesh = new Mesh(box, boxMaterial);
	boxMesh.castShadow = true; // 投射阴影
	boxMesh.position.x = 2;
	boxMesh.position.y = 2;
	boxMesh.position.z = 2;
	scene.add(boxMesh);
	// 创建球体， 平移
	const sphere = new SphereGeometry(5);
	const sphereMaterial = new MeshLambertMaterial({ color: 0x6c928c });
	const sphereMesh = new Mesh(sphere, sphereMaterial);
	sphereMesh.castShadow = true;
	sphereMesh.position.x = 16;
	sphereMesh.position.y = 4;
	sphereMesh.position.z = 4;
	scene.add(sphereMesh);
	// 配置光源。基础材质自带光源
	const spot = new SpotLight(0xffffff);
	spot.position.set(-3, 60, 40);
	spot.castShadow = true;
	scene.add(spot);
	// 创建画布渲染器
	const render = new WebGLRenderer();
	render.setClearColor(new Color(0xeeeeee));
	render.setSize(window.innerWidth, window.innerHeight);
	render.shadowMap.enabled = true;
	// 创建摄像机
	const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
	// 摄像机位置
	camera.position.x = -30;
	camera.position.y = 40;
	camera.position.z = 30;
	camera.lookAt(scene.position); //启动摄像机

	threeRef.value.appendChild(render.domElement);

	// 画布渲染
	// render.render(scene, camera);
	let setup = 0;
	const renderScene = () => {
		boxMesh.rotation.x += 0.02;
		boxMesh.rotation.y += 0.02;
		boxMesh.rotation.z += 0.02;
		setup += 0.02;
		sphereMesh.position.x = 20 + 10 * Math.cos(setup);
		sphereMesh.position.y = 2 + 10 * Math.abs(Math.sin(setup));
		// requestAnimationFrame(renderScene); //重复调用，相当于递归
		render.render(scene, camera);
	};
	renderScene();
};
onMounted(() => {
	init();
});
</script>
<style lang="less"></style>
