<template>
    <header>
            <nav class="header_nav">
                <b-button @postListShow="postListShow" class="header_nav-button"></b-button>
                <transition name="slide-fade">
                    <ul v-show="listShow" class="header_nav-list">
                        <li>主页</li>
                        <li>归档</li>
                        <li>分类</li>
                        <li>关于</li>
                        <li>作品</li>
                        <li>友链</li>
                        <li>搜索</li>
                    </ul>
                 </transition>
                <h2 class="header_nav-title">Allen's Blog</h2>
            </nav>
    </header>
</template>

<script>
import bButton from './button.vue'
export default {
    data(){
        return {
            listShow: true
        }
    },
    components: {
        bButton
    },
    methods: {
        postListShow(bool){
            this.listShow = bool
        }
    }
}
</script>

<style lang="postcss" scoped>
header {

    & .header_nav {
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
            justify-content: space-around;
            margin-right: 30px;

            & li {
                height: 50px;
                line-height: 50px;
                margin-right: 20px;
            }
        }

        & .header_nav-title {
            margin-right: 50px;
            line-height: 50px;
        }
    }

    & .header_toggle {
        position: fixed;
        right: 5px;
        top: 5px;
    }
}

@media (width <=768px) {
    header {

        & .header_nav {
            flex-direction: column-reverse;

            & .header_nav-list {
                flex-direction: column;
                border-top: solid 1px #85e1fd;
                margin: 0;

                & li {
                    color: #fff;
                    height: 30px;
                    line-height: 30px;
                    margin-left: 30px;
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

    .slide-fade-enter-active, .slide-fade-leave-active {
        transition: opacity .5s;
    }
    .slide-fade-enter, .slide-fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        opacity: 0;
    }
}
</style>