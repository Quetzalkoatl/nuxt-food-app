<template>
	<div class="content">
		<v-container class="grey lighten-5">
			<v-row>
				<v-col
					v-for="recipe in currentCategory"
					:key="recipe.idMeal"
					md="4"
					offset-md="4"
				>
					<RecipeCard
						:title="recipe.strMeal"
						:poster="recipe.strMealThumb"
						:id="recipe.idMeal"
					/>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import {mapState} from 'vuex';
import RecipeCard from '../components/RecipeCard.vue';

export default {
	async asyncData({store, params}) {
		const category = params.category;
		await store.dispatch('fetchCurrentCategory', category);
	},
	components: {RecipeCard},
	computed: {
		...mapState({
			currentCategory: state => state.currentCategory,
		}),
	},
};
</script>

<style lang="scss" scoped></style>
