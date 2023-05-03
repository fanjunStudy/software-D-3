<template>
	<h1 id="BasicModel">{{ title }}</h1>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>按钮</span>
			</div>
		</template>
		<div class="text item">
			<el-row class="rowBox">
				<el-button>Default</el-button>
				<el-button type="primary">Primary</el-button>
				<el-button type="success">Success</el-button>
				<el-button type="info" plain>Info</el-button>
				<el-button type="warning" plain>Warning</el-button>
				<el-button type="danger" plain disabled>Danger</el-button>
				<el-button round>Round</el-button>
				<el-button type="danger" round disabled>Danger</el-button>
				<el-button :icon="Search" circle />
				<el-button type="primary" :icon="Edit" circle />
				<el-button type="success" :icon="Check" circle />
				<el-button type="info" :icon="Message" circle />
				<el-button type="warning" :icon="Star" circle />
				<el-button type="danger" :icon="Delete" circle disabled />
			</el-row>
			<el-row class="rowBox">
				<el-button link>链接1</el-button>
				<el-button type="success" link>链接2</el-button>
				<el-button type="primary" :icon="Delete" />
				<el-button type="primary" :icon="Search">Search</el-button>
				<el-button-group>
					<el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
					<el-button type="primary">
						Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon>
					</el-button>
				</el-button-group>
				<el-button type="primary" loading>Loading</el-button>
				<el-button type="primary" :loading-icon="Eleme" loading>Loading</el-button>
			</el-row>
		</div>
	</el-card>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>图标</span>
			</div>
		</template>
		<div class="text item">
			<el-row class="rowBox">
				<el-icon :size="20">
					<Edit />
				</el-icon>
				<el-icon color="#409EFC" class="no-inherit">
					<Share />
				</el-icon>
				<el-icon>
					<Delete />
				</el-icon>
				<el-icon class="is-loading">
					<Loading />
				</el-icon>
			</el-row>
		</div>
	</el-card>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>布局</span>
			</div>
		</template>
		<div class="text item">
			<el-row :gutter="10" class="rowBox">
				<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content ep-bg-purple" /></el-col>
				<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content ep-bg-lawngreen" /></el-col>
				<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content ep-bg-purple" /></el-col>
				<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content ep-bg-lawngreen" /></el-col>
			</el-row>
		</div>
	</el-card>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<span>滚动条</span>
			</div>
		</template>
		<div class="text item">
			<el-scrollbar ref="scrollbarRef" height="400px" always @scroll="scroll">
				<div ref="innerRef">
					<p v-for="item in 20" :key="item" class="scrollbar-demo-item">
						{{ item }}
					</p>
				</div>
			</el-scrollbar>

			<el-slider v-model="value" :max="max" :format-tooltip="formatTooltip" @input="inputSlider" />
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
import { Check, Delete, Edit, Message, Search, Star, ArrowLeft, Eleme, Share, Loading } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue';
import { ElScrollbar } from 'element-plus';
const title = ref('基础组件');
const max = ref(0);
const value = ref(0);
const innerRef = ref<HTMLDivElement>();
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();

onMounted(() => {
	max.value = innerRef.value!.clientHeight - 380;
});

const inputSlider = (value: any) => {
	scrollbarRef.value!.setScrollTop(value);
};
const scroll = ({ scrollTop }: any) => {
	value.value = scrollTop;
};
const formatTooltip = (value: number) => {
	return `${value} px`;
};
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
.rowBox {
	margin-top: 10px;
}
.el-col {
	border-radius: 4px;
}

.grid-content {
	border-radius: 4px;
	min-height: 36px;
}

.transBox {
	position: relative;
	.transBG {
		background-color: #ffffff;
		background-image: radial-gradient(transparent 1px, #ffffff, 1px);
		backdrop-filter: saturate(50%) blur(4px);
		z-index: 2;
	}
	.transCT {
		position: relative;
		bottom: 20px;
		z-index: 1;
	}
}
</style>
