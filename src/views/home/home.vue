<template>
    <div>
        <section class="topics" v-for="topic in topics">
            <content-header :id="topic._id" :title="topic.title" :date="topic.date" :tab="topic.tab" :pv="topic.pv" :commentsCount="topic.commentsCount"></content-header>
            <p class="topics_summary">
                {{topic.summary}}
            </p>
            <p class="topics_more">
                <a class="topics_more-link" href="">阅读全文 »</a>
            </p>
        </section>
        <nav class="pagination">
            <a v-if="page > 1" class="pagination_prev clearFloat" @click="setPage(-1)">« 上一页</a>
            <a v-if="page < allPage" class="pagination_next clearFloat" @click="setPage(1)">下一页 »</a>
            <div class="pagination_timeline">
                <a href="">博客归档</a>
            </div>
        </nav>
    </div>
</template>

<script  lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import contentHeader from '@/components/content-header.vue'
import { Topic } from './interface'
import $http from '@/services'

@Component({
    components: {
        contentHeader,
    },
})
export default class Home extends Vue {
    topics: Topic[] = []
    page: number
    tab: string
    allPage: number

    created() {
        const {page = 1, tab = 'all'} = this.$route.params
        this.allPage = this.page = page ? +page : this.page
        this.tab = tab ? tab : this.tab

        this.getTopics(this.page, this.tab)
    }

    getTopics(page: number, tab: string){
        $http('topics', 'get', {page, tab})
            .then((data: any) => {
                this.topics = <Topic[]>data.topics
                this.allPage = data.allPage
            })
            .catch((error: Error) => {
                console.log(error);
            });
    }

    setPage(change: number){
        this.page += change
        const {page, tab} = this
        this.$router.push({path: `/tab/${tab}/page/${+page}`})
        this.getTopics(this.page, this.tab)
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
        cursor: pointer;
        float: right;
    }

    & .pagination_prev {
        cursor: pointer;
        float: left;
    }
}
</style>