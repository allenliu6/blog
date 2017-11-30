<template>
    <header class="header_nav">
        <b-button @postListShow="postListShow" class="header_nav-button"></b-button>
        <transition name="slide-fade">
            <nav v-show="listShow" class="header_nav-list">
                <router-link :to="{name: 'home'}"><i class="fa fa-home"></i> 主页 </router-link>
                <a href="javascript: void(0)"><i class="fa fa-archive"></i> 归档 </a>
                <a href="javascript: void(0)"><i class="fa fa-tags"></i> 分类 </a>
                <a href="javascript: void(0)"><i class="fa fa-user"></i> 关于 </a>
                <a href="javascript: void(0)"><i class="fa fa-file-code-o"></i> 作品 </a>
                <a href="javascript: void(0)"><i class="fa fa-link"></i> 友链 </a>
                <a href="javascript: void(0)"><i class="fa fa-search"></i> 搜索 </a>
            </nav>
        </transition>
        <h2 class="header_nav-title">Allen's Blog</h2>
    </header>
</template>

<script  lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import bButton from './component/button'

@Component({
    components: {
        bButton
    }
})
export default class Header extends Vue {
    listShow: boolean = true

    postListShow(bool: boolean) {
        this.listShow = bool
    }
    }
</script>

<style lang="postcss" scoped>
.header_nav {
    min-height: 50px;
    display: flex;
    align-items: space-around;
    flex-direction: row-reverse;
    background-image: linear-gradient(to right, #1a6ec5, #21ccff);

    & .header_nav-button {
        display: none;
    }

    & .header_nav-list {
        display: flex;
        margin: 0 0.3rem 0 0.5rem;

        & a {
            line-height: 50px;
            margin: 0 0.5em;
        }
    }

    & .header_nav-title {
        line-height: 50px;
    }
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
</style>