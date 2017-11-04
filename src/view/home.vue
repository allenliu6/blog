<template>
    <div class="content">
        <section class="topics" v-for="topic in topics">
            <h1 class="topics_title">
                {{topic.title}}
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
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            topics: []
        }
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

    & .topics {
        text-align: left;
        padding: 40px 0;
        border-bottom: 1px solid #ddd;

        & .topics_title{
            line-height: 35px;
            font-weight: 600;
            margin-bottom: 30px;
        }

        & .topics_more-link{
            color: #2479CC;
            display: block;
            margin: 20px 0 40px 0;
        }

        & .topics_foot{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }
}

@media (width <= 768px) {
    .content{
        margin: 0;
    }
}
</style>