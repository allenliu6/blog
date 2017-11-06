<template>
    <div class="content">
        <section class="topics" v-for="topic in topics">
            <h1 class="topics_title">
                <a href="">{{topic.title}}</a>
            </h1>
            <p class="topics_summary">
                {{topic.summary}}
            </p>
            <p class="topics_more">
                <a class="topics_more-link" href="">阅读全文 »</a>
            </p>
            <div class="topics_foot">
                <span>
                    <i class="fa fa-calendar-o"></i>
                    发布于：{{topic.date}}
                </span>
                <span>
                    <i class="fa fa-folder-o"></i>
                    归档于：{{topic.tab | transTab}}
                </span>
                <span>
                    <i class="fa fa-eye"></i>
                    pv：{{topic.pv}}
                </span>
                <span>
                    <i class="fa fa-commenting"></i>
                    comment：{{topic.commentCount}}
                </span>
            </div>
        </section>
        <nav class="pagination">
            <a href="" class="pagination_next">下一页 »</a>
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
            .then(function(response) {
                console.log(response.data);
                self.topics = response.data.topics
            })
            .catch(function(error) {
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
    
    & a {
        color: #2479CC;
    }

    & .topics {
        text-align: left;
        padding: 40px 0;
        border-bottom: 1px solid #ddd;

        & .topics_title {
            line-height: 35px;
            margin-bottom: 30px;

            & a{
                color: #333;
                font-size: 1.3em;
                font-weight: 300;
            }
        }

        & .topics_more {
            margin: 20px 0 30px 0;
        }

        & .topics_summary, & .topics_more{
        }

        & .topics_foot {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }

    & .pagination {
        border-bottom: 1px solid #ddd;
        line-height: 20px;
        padding: 20px 0;

        & .pagination_timeline{
            margin: auto;
            width: 100px;
            text-align: center;
        }

        & .pagination_next {
            float: right;
        }
    }
}

@media (width <=768px) {
    .content {
        margin: 0;
    }
}
</style>