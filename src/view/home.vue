<template>
    <div class="content">
        <section class="topics" v-for="topic in topics">
            <div class="topics_header">
                <h1 class="topics_header-title">
                    <a href="">{{topic.title}}</a>
                </h1>
                <div class="topics_header-info">
                    <span>
                        <i class="fa fa-calendar-o"></i>
                        {{topic.date}}
                    </span>
                    <span>
                        <i class="fa fa-folder-o"></i>
                        {{topic.tab | transTab}}
                    </span>
                    <span>
                        <i class="fa fa-eye"></i>
                        {{topic.pv}}
                    </span>
                    <span>
                        <i class="fa fa-commenting"></i>
                        {{topic.commentCount}}
                    </span>
                </div>
            </div>
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
        <b-footer></b-footer>
    </div>
</template>

<script>
import axios from 'axios'
import bFooter from '../components/footer'

export default {
    data() {
        return {
            topics: []
        }
    },
    components: {
        bFooter
    },
    created() {
        let self = this
        axios.get('./topics')
            .then((response) => {
                console.log(response.data);
                this.topics = response.data.topics
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

</script>

<style lang="postcss" scoped>
.content {
    margin-left: 3rem;
    height: 100%;
    padding: 0 50px;

    @media (width <=768px) {
        margin: 0;
    }

    & a {
        color: #2479CC;
    }

    & .topics {
        text-align: left;
        padding: 40px 0;
        border-bottom: 1px solid #ddd;

        & .topics_header{
            display: flex;
            justify-content: space-between;
            height: 40px;
            padding: 20px 0;

            & a {
                color: #333;
                font-size: 1.3em;
                font-weight: 300;
            }

            & .topics_header-info {
                min-width: 250px;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: space-around;
                font-size: 0.9em;
            }

            @media (width <= 796px) {
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

    & .pagination {
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
}


</style>