<template>
	<div>
		<ul>
			<li v-for="meal in currentCategory" :key="meal.idMeal">
				{{ meal.strMeal }}
			</li>
		</ul>
	</div>
</template>

<script>
import {mapState} from 'vuex';

export default {
	async asyncData({store, params}) {
		const category = params.category;
		await store.dispatch('fetchCurrentCategory', category);
	},

	computed: {
		...mapState({
			currentCategory: state => state.currentCategory,
		}),
	},
};
</script>

<style lang="scss" scoped></style>
