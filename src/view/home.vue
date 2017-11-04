<template>
    <div class="content">
        <article></article>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    components: {

    },
    data() {
        return {

        }
    },
    created() {
        axios.get('./topics')
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

</script>

<style lang="postcss" scoped>
.content {
    width: 3rem;
    height: 100%;
    display: block;
    padding: 10px;
}
</style>