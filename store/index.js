export const state = () => ({
	foodCategories: [],
	currentCategory: [],
	recipe: [],
});

// export const getters = {
// 	getCategories: state => {
// 		return state.foodCategories;
// 	},
// };

export const mutations = {
	setFoodCategories: (state, payload) => {
		state.foodCategories = payload;
	},
	setCurrentCategory: (state, payload) => {
		state.currentCategory = payload;
	},
	setRecipe: (state, payload) => {
		state.recipe = payload;
	},
};

export const actions = {
	async fetchFoodCategories({commit}) {
		const response = await fetch(
			'https://themealdb.com/api/json/v1/1/categories.php'
		);

		const data = await response.json();

		commit('setFoodCategories', data.categories);
	},

	async fetchCurrentCategory({commit}, category) {
		const response = await fetch(
			`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
		);

		const data = await response.json();

		commit('setCurrentCategory', data.meals);
	},

	async fetchRecipe({commit}, id) {
		const response = await fetch(
			`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
		);

		const data = await response.json();

		commit('setRecipe', data.meals);
	},
};
