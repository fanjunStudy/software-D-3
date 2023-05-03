<template>
	<h1 id="DispostModel">{{ title }}</h1>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>输入框</span>
			</div>
		</template>
		<div class="text item">
			<el-row class="rowBox"></el-row>
		</div>
	</el-card>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>xxx</span>
			</div>
		</template>
		<div class="text item">
			<el-row class="rowBox"></el-row>
		</div>
	</el-card>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>xxx</span>
			</div>
		</template>
		<div class="text item">
			<el-row class="rowBox"></el-row>
		</div>
	</el-card>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>xxx</span>
			</div>
		</template>
		<div class="text item">
			<el-row class="rowBox"></el-row>
		</div>
	</el-card>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>xxx</span>
			</div>
		</template>
		<div class="text item">
			<el-row class="rowBox"></el-row>
		</div>
	</el-card>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>xxx</span>
			</div>
		</template>
		<div class="text item">
			<el-row class="rowBox"></el-row>
		</div>
	</el-card>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>xxx</span>
			</div>
		</template>
		<div class="text item">
			<el-row class="rowBox"></el-row>
		</div>
	</el-card>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>xxx</span>
			</div>
		</template>
		<div class="text item">
			<el-row class="rowBox"></el-row>
		</div>
	</el-card>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>xxx</span>
			</div>
		</template>
		<div class="text item">
			<el-row class="rowBox"></el-row>
		</div>
	</el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const title = ref('表单组件');
</script>
<style lang="less">
.card-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.box-card {
	width: 100%;
	margin-top: 10px;
}
</style>
