<template>
	<v-app>
		<Header></Header>
		<v-spacer></v-spacer>
		<v-container>
			<router-view></router-view>
		</v-container>
	</v-app>
</template>

<script>
import Header from './components/Header.vue';
export default {
	components: {Header}
}
</script>

<style>

</style>

