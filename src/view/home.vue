<template>
    <div class="content">
        <b-sidebar></b-sidebar>
        <b-abstract></b-abstract>
    </div>
</template>

<script>
    import bSidebar from '../components/Sidebar'
    import bAbstract from '../components/Abstract'
    
    export default {
        components: {
            bSidebar,
            bAbstract,
        },
        data(){
            return {

            }
        }
    }

</script>

<style lang="postcss" scoped>
    .content{
        width: 3rem;
        height: 100%;
        display: block;
        padding: 10px;
    }
</style>