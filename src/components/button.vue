<template>
    <button @click="changeListShow">
        <span class="btn_bar"></span>
        <span class="btn_bar"></span>
        <span class="btn_bar"></span>
    </button>
</template>
<script>
export default {
    name: "button",
    data() {
        return {
            isMobile: false,
            isShow: true,
        };
    },
    methods: {
        changeListShow() {
            this.$emit('postListShow', !this.isShow)
            this.isShow = !this.isShow
        },
        listenWidth() {
            if (window.innerWidth <= 768) {
                this.isMobile = true
                this.isShow = false
                this.$emit('postListShow', false)
            } else {
                this.isMobile = false
                this.isShow = true
                this.$emit('postListShow', true)
            }
        }
    },
    created() {
        this.listenWidth()

        let bool = true

        window.addEventListener('resize', () => {
            if(bool){
                this.listenWidth()
                bool = false

                setTimeout(() => {
                    bool = true
                }, 500);
            }
        })
    }
}
</script>
<style lang="postcss" scoped>
button {
    width: 30px;
    height: 40px;
    background: transparent;
    border: none;

    & .btn_bar {
        border: solid 1px #333;
        display: block;
        width: 20px;
        margin-bottom: 7px;
    }
}
</style>
