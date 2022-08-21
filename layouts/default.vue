<template>
	<div class="mainApp">
		<div class="content">
			<Header />
			<Nuxt />
		</div>
		<Footer />
	</div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
	components: {
		Header,
		Footer,
	},
};
</script>

<style lang="scss" scoped>
.mainApp {
	max-width: 100%;
}
.content {
	min-height: 91.6vh;
}
</style>
