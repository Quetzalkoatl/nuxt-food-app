<template>
	<v-card class="overflow-hidden">
		<v-app-bar
			absolute
			color="teal lighten-3"
			dark
			hide-on-scroll
			prominent
			scroll-target="#scrolling-techniques-4"
		>
			<v-toolbar-title>Nuxt.js / Vuetify Food App</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</v-app-bar>
		<v-sheet
			id="scrolling-techniques-4"
			class="overflow-y-auto"
			max-height="600"
		>
			<v-container style="height: 1000px"></v-container>
		</v-sheet>
	</v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
