<template>
    <transition name="slide-fade">
        <aside>
            <section class="side" v-show="isShow">
                <img src="./img/avatar.png" alt="博主头像" class="side_avatar">
                <div>
                    <h3 class="side_name">Allen</h3>
                    <p class="side_sign">
                        <i>不会弹吉他的师范生不是好前端</i>
                    </p>
                </div>
                <ul class="side_link-social">
                    <li>
                        <i class="fa fa-github"></i>
                        <a href="">GitHub</a>
                    </li>
                    <li>
                        <i class="fa fa-twitter"></i>
                        <a href="">Twitter</a>
                    </li>
                    <li>
                        <i class="fa fa-facebook"></i>
                        <a href="">Facebook</a>
                    </li>
                    <li>
                        <i class="fa fa-wechat"></i>
                        <a href="">WeChat</a>
                    </li>
                </ul>
            </section>
            <b-popup @postSideShow="postSideShow" class="toggle" :status="isShow"></b-popup>
        </aside>
    </transition>
</template>

<script  lang="ts">
import bPopup from './component/popup.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
    components: {
        bPopup
    }
})
export default class Sidebar extends Vue {
    isShow: boolean = true
    
    postSideShow(bool: boolean) {
        this.isShow = bool
    }
}
</script>

<style lang="postcss" scoped>
a {
    color: #efefef;
    font-weight: bold;
}

aside {
    flex: none;
    background: url('img/bg2.jpg') center no-repeat;
    -webkit-filter: saturate(0.7);
    overflow-y: hidden;
    display: block;
    height: 100vh;
}

.side {
    width: 2.8rem;
    padding: 50px 0.1rem 0;
    color: #efefef;
    box-sizing: border-box;
    
    & img {
        width: 1.5rem;
        margin-bottom: 30px;
    }

    & .side_link-social {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        margin-top: 30px;

        & li {
            padding: 5px;
            text-align: center;
        }
    }
}

.toggle {
    position: fixed;
    left: 50px;
    bottom: 50px;
}

@media (width <=768px) {
    aside {
        display: none;
    }
}
</style>
