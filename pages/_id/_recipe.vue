<template>
	<div class="recipe">
		<img class="recipe-image" :src="recipe[0].strMealThumb" alt="Image" />
		<p class="recipe-title">{{ recipe[0].strMeal }}</p>
		<p class="recipe-instructions">{{ recipe[0].strInstructions }}</p>
		<iframe
			class="recipe-video"
			v-if="recipe[0].strYoutube"
			width="700"
			height="380"
			:src="'https://www.youtube.com/embed/' + recipe[0].strYoutube.slice(-11)"
			frameborder="0"
		></iframe>
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

<style lang="scss" scoped>
.recipe {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.recipe-title {
	font-size: 36px;
	text-align: center;
}

.recipe-instructions {
	width: 70%;
	margin: 20px 0;
}

.recipe-image {
	width: 25%;
	margin: 20px 0;
	box-shadow: 7px 9px 16px 0px rgba(34, 60, 80, 0.3);
	-webkit-box-shadow: 7px 9px 16px 0px rgba(34, 60, 80, 0.3);
	-moz-box-shadow: 7px 9px 16px 0px rgba(34, 60, 80, 0.3);
}

.recipe-video {
	margin: 20px 0;
}

@media screen and (max-width: 700px) {
	.recipe-image {
		width: 80%;
	}

	.recipe-video {
		display: none;
	}
}
</style>
