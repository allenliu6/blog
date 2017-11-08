<template>
    <footer class="footer">
        <div>
             © 2017&nbsp;-&nbsp; 
             <span class="with-love">
                <i class="fa fa-heart"></i>
            </span>
            <b>allen </b>的小站 &nbsp;-&nbsp;
            <a target="_blank" href="https://github.com/allenliu6/blog">博客源码</a>
        </div>
        Powered by  
        <a target="_blank" href="https://github.com/vuejs/vue">Vue2</a>  &  
        <a target="_blank" href="https://github.com/koajs/koa">Koa2</a>
    </footer>
</template>
<script>
   export default {
       name: "footer",
       data () {
           return {
               
           };
       }
   }
</script>
<style lang="postcss" scoped>
    a{
        color: #2479CC;
    }

    .footer{
        line-height: 1.8;
        padding: 15px 0;
        text-align: center;
    }
</style>