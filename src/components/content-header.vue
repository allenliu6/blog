<template>
    <div class="header">
        <h1 class="header_title">
            <a :href="link">{{title}}</a>
        </h1>
        <div class="header_info">
            <span v-if="date">
                <i class="fa fa-calendar-o"></i>
                {{date}}
            </span>
            <span v-if="tab">
                <i class="fa fa-folder-o"></i>
                {{tab | transTab}}
            </span>
            <span v-if="pv">
                <i class="fa fa-eye"></i>
                {{pv}}
            </span>
            <span v-if="commentsCount">
                <i class="fa fa-commenting"></i>
                {{commentsCount}}
            </span>
        </div>
    </div>
</template>
<script  lang="ts">
export default {
    name: "content-header",
    data() {
        return {

        };
    },
    props: {
        title: {
            type: String,
            required: true
        },
        date: {
            type: String,
        },
        tab: {
            type: String,
        },
        pv: {
            type: Number
        },
        commentsCount: {
            type: Number
        },
        link: {
            type: String,
        }
    }
}
</script>
<style lang="postcss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    min-height: 40px;
    padding: 20px 0;
    flex-wrap: nowrap;

    & .header_title {
        flex-grow: 3;
        padding-right: 20px;

        & a {
            color: #333;
            font-size: 1.3em;
            font-weight: 300;
        }
    }

    & .header_info {
        max-width: 250px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size: 0.9em;
    }

    @media (width <=768px) {
        height: auto;
        display: block;

        & .header_info {
            flex-direction: row;
        }
    }
}
</style>