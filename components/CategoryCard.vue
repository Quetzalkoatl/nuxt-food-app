<template>
	<div>
		<v-card class="mx-auto" max-width="400">
			<v-img :src="poster" height="200px"></v-img>

			<v-card-title> {{ title }} </v-card-title>

			<v-card-subtitle class="card-subtitle">
				{{ description }}
			</v-card-subtitle>

			<v-card-actions>
				<v-btn class="ma-2" color="red">
					<NuxtLink class="link" :to="`/${title}`">See more</NuxtLink>
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
		subtitle: {
			type: String,
			require: true,
		},
	},
	computed: {
		description: function () {
			return this.subtitle.length > 50
				? this.subtitle.substring(0, 50) + '...'
				: this.subtitle;
		},
	},
};
</script>

<style lang="scss" scoped></style>
