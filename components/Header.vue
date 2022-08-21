<template>
	<div class="header">
		<div class="nav">
			<span class="material-icons md-36" @click="goPrev()"> arrow_back </span>
			<p class="title">
				<NuxtLink class="link" to="/">Nuxt Food App</NuxtLink>
			</p>
			<span class="material-icons md-36" @click="goNext()">
				arrow_forward
			</span>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		goPrev() {
			this.$router.go(-1);
		},
		goNext() {
			this.$router.go(1);
		},
	},
};
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	height: 80px;
	background-color: rgb(84, 104, 117);
	margin: 0;
	padding: 0;
}

.nav {
	position: relative;
	width: 60%;
	left: 20%;
	top: 25px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

.title {
	color: white;
	font-size: 20px;
}

.material-icons.md-18 {
	font-size: 18px;
}
.material-icons.md-24 {
	font-size: 24px;
}
.material-icons.md-36 {
	font-size: 36px;
	margin: -5px;
	color: white;
	cursor: pointer;
}
.material-icons.md-48 {
	font-size: 48px;
}
</style>
