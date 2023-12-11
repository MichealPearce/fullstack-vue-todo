<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "AppPage",
});
</script>

<script setup lang="ts"></script>

<template>
	<div class="app-page">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.app-page {
}
</style>
