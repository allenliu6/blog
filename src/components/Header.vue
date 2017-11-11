<template>
    <header class="header_nav">
        <b-button @postListShow="postListShow" class="header_nav-button"></b-button>
        <transition name="slide-fade">
            <nav v-show="listShow" class="header_nav-list">
                <a href="javascript: void(0)">主页</a>
                <a href="javascript: void(0)">归档</a>
                <a href="javascript: void(0)">分类</a>
                <a href="javascript: void(0)">关于</a>
                <a href="javascript: void(0)">作品</a>
                <a href="javascript: void(0)">友链</a>
                <a href="javascript: void(0)">搜索</a>
            </nav>
        </transition>
        <h2 class="header_nav-title">Allen's Blog</h2>
    </header>
</template>

<script  lang="ts">
import bButton from './button.vue'
export default {
    data() {
        return {
            listShow: true
        }
    },
    components: {
        bButton
    },
    methods: {
        postListShow(bool) {
            this.listShow = bool
        }
    }
}
</script>

<style lang="postcss" scoped>
.header_nav {
    width: 100%;
    display: flex;
    align-items: space-around;
    flex-direction: row-reverse;
    background-image: linear-gradient(to right, #1a6ec5, #21ccff);

    & .header_nav-button {
        display: none;
    }

    & .header_nav-list {
        display: flex;
        margin: 0 1.2rem;

        & a {
            height: 50px;
            line-height: 50px;
            padding: 0 0.5em;
        }
    }

    & .header_nav-title {
        line-height: 50px;
    }
}

& .header_toggle {
    position: fixed;
    right: 5px;
    top: 5px;
}

@media (width <=768px) {
    .header_nav {
        flex-direction: column-reverse;

        & .header_nav-list {
            flex-direction: column;
            border-top: solid 1px #85e1fd;
            margin: 0;

            & a {
                color: #fff;
                height: 30px;
                line-height: 30px;
                margin-left: 10px;
                text-align: left;
            }
        }

        & .header_nav-button {
            display: inline;
            position: absolute;
            right: 10px;
            top: 10px;
        }
    }
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
</style>