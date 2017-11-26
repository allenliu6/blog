<template>
    <nav class="pagination">
        <router-link v-if="isRouterShow[0]" :to="params[0]" class="pagination_prev clearFloat">{{linkContent[0]}}</router-link>
		<a v-if="isCenterContentShow" :href="centerContentLink" class="pagination_timeline">博客归档</a>
        <router-link v-if="isRouterShow[1]" :to="params[1]" class="pagination_next clearFloat">{{linkContent[1]}}</router-link>
    </nav>
</template>
<script>
export default {
	name: "pagination",
	props:{
		params: {
			type: Array
		},
		linkContent: {
			type: Array
		},
		isRouterShow: {
			type: Array
		},
		isCenterContentShow: {
			type: Boolean,
			default: false
		},
		centerContentLink: {
			type: String,
			default: '/'
		},
	},
	
}
</script>
<style lang="postcss" scoped>
	.pagination {
		border-bottom: 1px solid #ddd;
		border-top: 1px solid #ddd;
		line-height: 20px;
		padding: 20px 0;
		overflow: hidden;
		text-align: center;
		display: flex;
		justify-content: space-between;

		& a{
			color: #2479CC;
		}

		& .pagination_timeline {
			margin: auto;
			text-align: center;
			flex: 2 0 200px;
		}

		& .pagination_next {
		}

		& .pagination_prev {
		}
	}
</style>