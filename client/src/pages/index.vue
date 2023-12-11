<script lang="ts">
import { onMounted } from "vue";
import { defineComponent } from "vue";
import { api } from "../utils/api";

export default defineComponent({
	name: "IndexPage",
});
</script>

<script setup lang="ts">
onMounted(async () => {
	const { data } = await api.get("test");
	console.log(data);
});
</script>

<template>
	<div class="index-page">
		<h1>Index Page</h1>
	</div>
</template>

<style lang="scss" scoped>
.index-page {
	@include flex(column, center, center);
	width: 100vw;
	height: 100vh;
}
</style>
