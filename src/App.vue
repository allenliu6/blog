<template>
	<div id="app">
		<b-sidebar></b-sidebar>
		<div class="content">
			<b-header></b-header>
			<transition name="slide-fade">
				<router-view class="content_view" />
			</transition>
			<b-footer></b-footer>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import bSidebar from '@/components/sidebar/Sidebar.vue'
import bHeader from '@/components/header/header.vue'
import bFooter from '@/components/footer.vue'

@Component({
	components: {
		bSidebar,
		bHeader,
		bFooter
	}
})
export default class App extends Vue {
	
}
</script>

<style lang="postcss">
@import url('./assets/font-awesome.css');
.fa {
	margin-right: 5px;
}

#app {
	font-family: "Helvetica Neue", Arial, "Hiragino Sans GB", STHeiti, "Microsoft YaHei";
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	display: flex;
	height: 100vh;
}

.content {
	min-height: 100vh;
	text-align: left;
	flex: auto;
	display: flex;
	flex-direction: column;
	overflow-y: auto;

	& .content_view{
		padding: 0px 1.5rem;
		flex: auto;
	}

	@media (width <=768px) {
		margin: 0;
	}
}


/* postcss common css */

.clearFloat::after {
	content: ' ';
	display: block;
	clear: both;
	height: 0;
	overflow: hidden;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity .5s;
}

.slide-fade-enter,
.slide-fade-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
    opacity: 0;
}

/* reset */

html,
body {
	margin: 0;
	font-size: 16px;
	width: 100%;
	height: 100%;
}

ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

li {
	text-align: left;
}

a {
	text-decoration: none;
	color: #333;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
}

input,
textarea {
	outline: none;
	resize: none;
	box-shadow: none;
	border: 1px solid #ddd;
	transition: border .3s;
	border-radius: 4px;
}

button {
	appearance: none;
	background-color: #2479cc;
	color: #fff;
	border-radius: 2px;
	border: none;
	outline: none;
	cursor: pointer;
	transition: background-color .3s;
}

input:hover,textarea:hover{
    border-color: #007fff;
}

button:hover{
    background-color: #0371df;
}


/* responsive layout */

@media (width <=768px) {
	body {
		font-size: 20px;
	}
}
</style>
