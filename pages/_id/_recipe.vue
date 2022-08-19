<template>
	<div>
		<img style="width: 500px" :src="recipe[0].strMealThumb" alt="Image" />
		<h2>{{ recipe[0].strMeal }}</h2>
		<p>{{ recipe[0].strInstructions }}</p>
	</div>
</template>

<script>
import {mapState} from 'vuex';

export default {
	async asyncData({store, params}) {
		const id = params.recipe;
		await store.dispatch('fetchRecipe', id);
	},
	computed: {
		...mapState({
			recipe: state => state.recipe,
		}),
	},
};
</script>

<style lang="scss" scoped></style>
