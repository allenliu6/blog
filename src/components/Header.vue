<template>
    <header>
        <transition name="slide-fade">
            <nav class="header_nav">
                <ul class="header_nav-list">
                    <li>主页</li>
                    <li>归档</li>
                    <li>分类</li>
                    <li>关于</li>
                    <li>作品</li>
                    <li>友链</li>
                    <li>搜索</li>
                </ul>
                <h2 class="header_nav-title">Allen's Blog</h2>
            </nav>
        </transition>
    </header>
</template>

<script>

    export default{
        
    }
</script>

<style lang="postcss" scoped>

    header{
        
        & .header_nav{
            width: 15rem;
            display: flex;
            align-items: space-around;
            flex-direction: row-reverse;
            background-image: linear-gradient(to right, #1a6ec5, #21ccff);
            margin: 0;

            & .header_nav-list{
                display: flex;
                justify-content: space-around;
                margin-right: 30px;

                & li{
                    height: 60px;
                    line-height: 60px;
                    margin-right: 20px;
                }
            }

            & .header_nav-title{
                margin-right: 50px;
                line-height: 60px;
            }
        }

        & .header_toggle{
            position: fixed;
            right: 5px;
            top: 5px;
        }
    }

@media (width <= 768px){
    header{

        & .header_nav{
            flex-direction: column-reverse;

            & .header_nav-list{
                flex-direction: column;
                border-top: solid 1px #85e1fd;
                margin: 0;
                
                & li{
                    color: #fff;
                    height: 30px;
                    line-height: 30px;
                    margin-left: 30px;
                }
            }
        }
    }

    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateX(10px);
    }
}
</style>