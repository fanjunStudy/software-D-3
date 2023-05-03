<template>
	<h1>{{ aa }}</h1>
	<!-- 参数获取 -->
	<div>{{ $route.query.name }} : {{ $route.query.password }}</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const aa = ref('登录');
</script>
