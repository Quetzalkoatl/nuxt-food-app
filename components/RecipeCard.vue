<template>
	<div>
		<v-card class="mx-auto" max-width="400">
			<v-img :src="poster" height="200px"></v-img>

			<v-card-title> {{ titleOverflow }} </v-card-title>

			<v-card-actions>
				<v-btn class="ma-2" color="red">
					<NuxtLink class="link" :to="`/id/${id}`">Recipe</NuxtLink>
				</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			require: true,
		},
		poster: {
			type: String,
			require: true,
		},
		id: {
			type: String,
			require: true,
		},
	},
	computed: {
		titleOverflow() {
			const overflowed = this.title.split(' ').slice(0, 4).join(' ');
			return overflowed.length > 35 ? overflowed.substring(0, 35) : overflowed;
		},
	},
};
</script>

<style lang="scss" scoped></style>
