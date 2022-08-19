<template>
	<div class="content">
		<v-container class="grey lighten-5">
			<v-row>
				<v-col
					v-for="category in foodCategories"
					:key="category.id"
					md="4"
					offset-md="4"
				>
					<CategoryCard
						:title="category.strCategory"
						:poster="category.strCategoryThumb"
						:subtitle="category.strCategoryDescription"
					/>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import {mapState} from 'vuex';
import CategoryCard from '../components/CategoryCard.vue';

export default {
	async asyncData({store}) {
		await store.dispatch('fetchFoodCategories');
	},
	components: {
		CategoryCard,
	},
	methods: {},
	computed: {
		...mapState({
			foodCategories: state => state.foodCategories,
		}),
	},
};
</script>
