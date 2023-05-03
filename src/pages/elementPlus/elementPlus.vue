<template>
	<h1 class="title">{{ title }}</h1>
	<div class="elementBox">
		<!-- 基础组件 -->
		<BasicModel></BasicModel>
		<!-- 配置组件 -->
		<DispostModel></DispostModel>
	</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import DispostModel from '../../components/elementPlus/dispostModel.vue';
const title = ref('Element Plus');
</script>
<style lang="less">
.title {
	.commonTitle();
}
.elementBox {
	display: flex;
	flex-direction: column;
	padding: 0 40px;
}
</style>
