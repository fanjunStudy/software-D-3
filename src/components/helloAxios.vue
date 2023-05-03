<template>
	<div v-loading.fullscreen.lock="false">
		<h1>Axios封装测试</h1>
		<IconEpFold class="v-icon" />
		<icon-ep-fold class="v-icon" />
		<icon-ep-add-location class="v-icon" />
		<div v-for="item of arr" :key="item.id">{{ item.name }}</div>
		<div @click="addOne">新增</div>
		<h2>书店class</h2>
		<div v-for="{ id, name } of bookList" :key="id">
			<span>{{ name }}</span>
			<span @click="removeBook(id)">删除</span>
		</div>
		<div class="inputBox">
			<input v-model="bookIpt" type="text" />
		</div>
		<div @click="addBook">上新图书</div>
	</div>
</template>

<script setup lang="ts">
import service from '../utils/request';
// import test from '../utils/test';
import BookShoop from '../utils/class-bookinfo';
import { onMounted, ref } from 'vue';
onMounted(() => {
	// let testx = test;
	// let bookShop = new BookShoop('bookName', 'id');
	// console.log(bookShop);
	// bookShop.addBook('哈利波特');
	let url = `/geocoder?postStr={'lon':116.37304,'lat':39.92594,'ver':1}&type=geocode&tk=708440f272077bcf5c9245e4955d037f`;
	service({
		url: url,
		method: 'get',
	})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
});
interface arrObj {
	id: number;
	name?: string;
}
interface arrObjTwo {
	name?: string;
	id: number;
}
const arr = ref<arrObj[]>([{ id: 0, name: '哈利波特0' }]);
const addOne = () => {
	arr.value.push({ id: arr.value.length + 1, name: `哈利波特${arr.value.length}` });
};
const bookShop = new BookShoop('bookName', 'id');
const bookList = ref<arrObjTwo[]>(bookShop.readBook()); // 书店列表
const bookIpt = ref('');
const addBook = () => {
	bookShop.addBook(bookIpt.value);
	bookList.value = bookShop.readBook();
	console.log(bookList);
};
const removeBook = (id: any) => {
	const removeFlag: boolean = bookShop.removeBook(id);
	bookList.value = bookShop.readBook();
	console.log(removeFlag);
};
</script>

<style scoped>
.read-the-docs {
	color: #888;
}
.aaa {
	/* width: 60vw;
	height: 60vh; */
}
.v-icon {
	display: inline-block;
	width: 1em;
	height: 1em;
	font-size: 1em;
}

.v-icon > svg {
	width: 100%;
	height: 100%;
}
</style>
