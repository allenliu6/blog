<template>
    <div>
        <section class="topics" v-for="topic in topics">
            <content-header :title="topic.title" :date="topic.date" :tab="topic.tab" :pv="topic.pv" :commentsCount="topic.commentCount"></content-header>
            <p class="topics_summary">
                {{topic.summary}}
            </p>
            <p class="topics_more">
                <a class="topics_more-link" href="">阅读全文 »</a>
            </p>
        </section>
        <nav class="pagination">
            <a href="" class="pagination_next clearFloat">下一页 »</a>
            <div class="pagination_timeline">
                <a href="">博客归档</a>
            </div>
        </nav>
    </div>
</template>

<script  lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import contentHeader from '../components/content-header.vue'

interface Topic {
    date: string
    title: string
    summary: string
    id: number
    tab: string
    pv: number
    commentCount: number
    tags?: string[]
}

interface Response {
    data: {
        topics: Topic[]
    }
}

@Component({
    components: {
        contentHeader,
    },
})
export default class Home extends Vue {
    topics: Topic[] = []
    created() {
        this.$http.get('./topics')
            .then((response: Response) => {
                console.log(response.data);
                this.topics = response.data.topics
            })
            .catch((error: object) => {
                console.log(error);
            });
    }
}

</script>

<style lang="postcss" scoped>
a {
    color: #2479CC;
}

.topics {
    text-align: left;
    padding: 40px 0;
    border-bottom: 1px solid #ddd;

    & .topics_header {
        display: flex;
        justify-content: space-between;
        min-height: 40px;
        padding: 20px 0;
        flex-wrap: nowrap;

        & .topics_header-title {
            flex-grow: 3;
            padding-right: 20px;

            & a {
                color: #333;
                font-size: 1.3em;
                font-weight: 300;
            }
        }

        & .topics_header-info {
            max-width: 250px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            font-size: 0.9em;
        }

        @media (width <=768px) {
            height: auto;
            display: block;

            & .topics_header-info {
                flex-direction: row;
            }
        }
    }

    & .topics_more {
        margin: 20px 0;
    }
}

.pagination {
    border-bottom: 1px solid #ddd;
    line-height: 20px;
    padding: 20px 0;

    & .pagination_timeline {
        margin: auto;
        width: 100px;
        text-align: center;
    }

    & .pagination_next {
        float: right;
    }
}
</style>