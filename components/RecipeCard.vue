<template>
	<div>
		<v-card class="mx-auto" max-width="400">
			<v-img :src="poster" height="200px"></v-img>

			<v-card-title> {{ title }} </v-card-title>

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
};
</script>

<style lang="scss" scoped></style>
