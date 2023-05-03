<template>
	<h1 class="title">{{ title }}</h1>
	<div class="elementBox">
		<!-- Three组件 -->
		<Three></Three>
	</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import DispostModel from '../../components/elementPlus/dispostModel.vue';
const title = ref('Web 3D');
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
