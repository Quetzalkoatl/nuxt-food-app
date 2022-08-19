export const state = () => ({
	foodCategories: [],
	currentCategory: [],
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
};
