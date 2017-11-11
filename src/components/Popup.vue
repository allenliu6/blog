<template>
    <div class="toggle" @click="transAnimation">
        <span class="toggle_line" :class="firstClass"></span>

        <transition name="slide-fade">
            <span class="toggle_line" v-if="!isShow"></span>
        </transition>
        
        <span class="toggle_line" :class="lastClass"></span>
    </div>
</template>

<script  lang="ts">
    export default {
        data(){
            return {
                isShow: this.status,
                firstClass: 'trans-down-leave-active',
                lastClass: 'trans-up-enter-active'
            }
        },
        props: {
            status:{
                type: Boolean,
                default: true,
            },
        },
        methods: {
            transAnimation(){
                this.isShow = !this.isShow
                this.firstClass = this.isShow ? 'trans-down-leave-active' : 'trans-down-enter-active'
                this.lastClass = this.isShow ? 'trans-up-enter-active' : 'trans-up-leave-active'
                this.$emit("postSideShow", this.isShow)
            }
        }
    }
</script>

<style lang="postcss" scoped>
    .toggle{
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        & .toggle_line{
            border: 2px solid #333;
            width: 24px;
        }
    }

//动画
    .trans-down-enter-active{
        animation: transdown-out .5s forwards;
        transform-origin: 0 0;
    }

    .trans-down-leave-active{
        animation: transdown-in .5s forwards;
        transform-origin: 0 0;
    }
    
    @keyframes transdown-in{
        0% {
            transform: rotate(0deg)
        }
        50% {
            transform: rotate(30deg)
        }
        100% {
            transform: rotate(45deg)
        }
    }

    @keyframes transdown-out{
        0% {
            transform: rotate(45deg)
        }
        50% {
            transform: rotate(30deg)
        }
        100% {
            transform: rotate(0deg)
        }
    }

    .trans-up-enter-active{
        animation: transup-in .5s forwards;
        transform-origin: 0 0;
    }

    .trans-up-leave-active{
        animation: transup-out .5s forwards;
        transform-origin: 0 0;
    }
    
    @keyframes transup-in{
        0% {
            transform: rotate(0deg)
        }
        50% {
            transform: rotate(-30deg)
        }
        100% {
            transform: rotate(-45deg)
        }
    }

    @keyframes transup-out{
        0% {
            transform: rotate(-45deg)
        }
        50% {
            transform: rotate(-30deg)
        }
        100% {
            transform: rotate(0deg)
        }
    }
</style>
