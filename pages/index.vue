<template>
	<div class="content">
		<ul>
			<li v-for="category in foodCategories" :key="category.id">
				{{ category.strCategory }}
				<button>
					<NuxtLink :to="`/${category.strCategory}`">See more</NuxtLink>
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
import {mapState} from 'vuex';

export default {
	async asyncData({store}) {
		await store.dispatch('fetchFoodCategories');
	},
	methods: {},
	computed: {
		...mapState({
			foodCategories: state => state.foodCategories,
		}),
	},
};
</script>
