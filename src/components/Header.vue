<template>
    <header>
        <transition name="slide-fade">
            <nav class="header_nav">
                <ul>
                    <li>主页</li>
                    <li>归档</li>
                    <li>分类</li>
                    <li>关于</li>
                    <li>作品</li>
                    <li>友链</li>
                    <li>搜索</li>
                </ul>
                <h3>Allen's Blog</h3>
            </nav>
        </transition>
    </header>
</template>

<<script>
    import {mapGetters} from 'vuex'

    export default{
        computed: {
            ...mapGetters({
                mobile: 'mobile'
            })
        },
        created(){
            let timer = true,
                that = this

            this.resize()
            window.onresize = function(){
                if (timer) {
                    that.resize()
                    timer = false
                    timer = setTimeout(function() {
                        timer = true
                    }, 500)
                }
            }
        },
        methods: {
            resize(){
                if(window.innerWidth > 900 && this.mobile){
                    this.$store.dispatch('updataMobile', false)
                }else if(window.innerWidth <= 900 && !this.mobile){
                    this.$store.dispatch('updataMobile', true)
                }
            }
        }
    }
</script>

<style lang="postcss" scoped>

    header{
        width: 11rem;
        font-size: 0.2rem;
        margin: 0 auto;

        & .header_nav{
            display: flex;
            align-items: center;
            flex-direction: row-reverse;

            & ul{
                display: flex;
                justify-content: space-around;
                margin-left: 50px;

                & li{
                    padding: 10px;
                }
            }

            & h3{
                padding: 10px;
            }
        }

        & .header_toggle{
            position: fixed;
            right: 5px;
            top: 5px;
        }
    }

@media (width <= 900px){
    header{

        & .header_nav{
            flex-direction: column;

            & ul{
                flex-direction: column;
                position: fixed;
                right: 40px;
                top: 0;
            }
        }
    }

    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateX(10px);
    }
}
</style>