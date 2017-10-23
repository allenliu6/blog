<template>
    <div class="toggle" @click="transAnimation">
        <span class="toggle_line line_first" :class="firstClass"></span>

        <transition name="slide-fade">
            <span class="toggle_line line_second" v-if="show"></span>
        </transition>
        
        <span class="toggle_line line_third" :class="lastClass"></span>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                show: status,
                firstClass: '',
                lastClass: ''
            }
        },
        props: ['fatherName', 'status'],
        methods: {
            transAnimation(){
                this.firstClass = this.show ? 'trans-down-leave-active' : 'trans-down-enter-active'
                this.lastClass = this.show ? 'trans-up-enter-active' : 'trans-up-leave-active'
                this.show = !this.show
                this.$store.dispatch('updata' + this.fatherName, !this.show)
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
