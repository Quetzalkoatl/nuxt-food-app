<template>
	<div class="footer">
		<p class="title">
			{{ new Date().getFullYear() }}
		</p>
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
.footer {
	width: 100%;
	height: 80px;
	background-color: rgb(84, 104, 117);
	margin: 0;
	padding: 0;
	position: relative;
}

.title {
	color: white;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 24px;
}
</style>
