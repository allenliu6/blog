<template>
    <div>
        <content-header :title="article.title" :date="article.date" :tab="article.tab" :pv="article.pv" :commentsCount="Object.keys(article.comments).length"></content-header>
        <article class="detail" v-text="article.content"></article>
        <p>
            发表于
            <i>2017-06-26 16:28:43</i>，最后修改于
            <i>2017-06-28 12:17:46</i>
        </p>
        <nav class="pagination">
            <a href="" class="pagination_next clearFloat">下一页 »</a>
            <a href="" class="pagination_prev clearFloat">上一页 »</a>
        </nav>
        <section class="comments">
            <div class="comments_title">Comments</div>
            <div class="comments_box">
                <img class="comments_box-avatar" src="../assets/default-avatar.e30559a.svg" alt="默认头像">
                <textarea @focus="isSumbitBoxShow = true" @blur="isSumbitBoxShow = false" class="comments_box-textarea" placeholder="说说你的看法"></textarea>
                <transition name="slide-fade">
                    <div v-if="isSumbitBoxShow" class="submit-box">
                        <span class="submit-text">Ctrl or ⌘ + Enter</span>
                        <button class="submit-btn">评论</button>
                    </div>
                </transition>
            </div>
            <ul>
                <li class="comments_content" v-for="(comment, index) in article.comments">
                    <img class="comments_content-avatar" :src="comment.avatar" alt="avatar">
                    <div class="comments_content-detail">
                        <a href="" class="detail_title">{{comment.name}}</a>
                        <p class="detail_content">{{comment.content}}</p>
                        <div class="detail_foot">
                            <i class="fa fa-comment-o"></i>
                            <a @click="setShow(index)" class="detail_foot-reply">
                                <span v-if="!comment.isShow">{{comment.reply.length}}条评论</span>
                                <span v-else>收起评论</span>
                            </a>
                            <span class="detail_foot-date">{{comment.date | timeToNow}}</span>
                        </div>
                        <transition name="slide-fade">
                            <div v-if="comment.isShow" class="detail_reply">
                                <div class="reply_arrow"></div>
                                <ul>
                                    <li v-for="(reply, index2) in comment.reply">
                                        <img :src="reply.avatar" alt="" class="reply_avatar">
                                        <div class="reply_content">
                                            <a href="" class="content_title">{{reply.name}}</a>
                                            <p class="content_detail">{{reply.content}}</p>
                                            <div class="content_date">
                                                {{reply.date | timeToNow}}
                                                <span class="content_reply" @click="setInputReply(index, index2)">回复</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <form class="reply_submit">
                                    <input class="submit_input" type="text" :placeholder="comment.replyInput">
                                    <button class="submit-btn">评论</button>
                                </form>
                            </div>
                        </transition>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script  lang="ts">
import contentHeader from '../components/content-header.vue'

export default {
    name: "article",
    data() {
        return {
            article: {},
            isSumbitBoxShow: false,
        };
    },
    components: {
        contentHeader
    },
    created() {
        this.$http.get('./article')
            .then((response) => {
                response.data.comments.forEach((item) => {
                    item.isShow = false
                    item.replyInput = '输入评论'
                })
                console.log(response.data)
                this.article = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    },
    methods: {
        setShow(index){
            let comment = this.article.comments[index]
            comment.isShow = !comment.isShow
        },
        setInputReply(index, index2){
            let comment = this.article.comments[index]
            comment.replyInput = `回复 ${comment.reply[index2].name} ：`
            console.log(comment)
        }
    }
}
</script>
<style lang="postcss" scoped>
a {
    color: #2479CC;
}

input:hover,textarea:hover{
    border-color: #007fff;
}

button:hover{
    background-color: #0371df;
}

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

.pagination {
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    line-height: 20px;
    padding: 20px 0;
    overflow: hidden;
    margin: 40px 0;

    & .pagination_timeline {
        margin: auto;
        width: 100px;
        text-align: center;
    }

    & .pagination_next {
        float: right;
    }

    & .pagination_prev {
        float: left;
    }
}

.comments {
    text-align: center;

    & .comments_title {
        padding: 20px 0;
        color: #909090;
        line-height: 35px;
        font-weight: 500;
        font-size: 1.3em;
    }

    & .comments_box {
        background-color: #f8f9fa;
        border: 1px solid #f1f1f1;
        border-radius: 4px;
        padding: 20px 20px 20px 60px;
        position: relative;
        margin-bottom: 30px;

        & .comments_box-avatar {
            border-radius: 50%;
            position: absolute;
            top: 20px;
            left: 20px;
        }

        & .comments_box-textarea {
            overflow: hidden;
            word-wrap: break-word;
            padding: 10px;
            font-size: 1.05em;
            font-weight: 400;
            width: 100%;
            box-sizing: border-box;
        }

        & .submit-box {
            text-align: right;
            margin-top: 10px;

            & .submit-text {
                font-size: 0.8em;
                margin-right: 10px;
            }

            & .submit-btn {
                padding: 5px 20px;
                font-size: 1.05em;
            }
        }
    }

    & .comments_content {
        display: flex;
        flex-direction: row;
        
        & .comments_content-avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
        }

        & .comments_content-detail {
            flex-grow: 3;
            border-bottom: 1px solid #f5f5f5;
            padding-bottom: 20px;
            margin-bottom: 20px;

            & .detail_title {
                font-size: 1.1em;
                font-weight: 600;
                color: #333;
            }

            & .detail_content {
                margin: 5px 0 10px 0;
            }

            & .detail_foot {
                font-size: 0.9em;
                font-weight: 150;
                color: #909090;

                & .detail_foot-reply {
                    color: #909090;
                    margin-right: 10px;
                    cursor: pointer;
                }

                & .detail_foot-date {
                    font-size: 0.9em;
                }
            }

            & .detail_reply {
                border: 1px solid #eaeaea;
                padding: 15px;
                margin-top: 9px;
                position: relative;

                & .reply_arrow::before{
                    content: ' ';
                    display: block;
                    position: absolute;
                    top: -10px;
                    left: 25px;
                    width: 0;
                    height: 0;
                    border-width: 0 9px 9px;
                    border-style: none solid solid; 
                    border-color: transparent transparent #eaeaea;
                }

                & .reply_arrow::after{
                    content: ' ';
                    display: block;
                    position: absolute;
                    top: -9px;
                    left: 26px;
                    width: 0;
                    height: 0;
                    border-width: 0 8px 9px;
                    border-style: none solid solid; 
                    border-color: transparent transparent #fff;
                }

                & li {
                    display: flex;
                    border-bottom: 1px solid #eaeaea;
                    padding: 20px 0;

                    & .reply_avatar {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }

                    & .reply_content {
                        display: flex;
                        flex-direction: column;

                        & .content_title {
                            font-size: 1.1em;
                            font-weight: 600;
                            color: #333;
                        }

                        & .content_detail {
                            margin: 5px 0 10px 0;
                        }

                        & .content_date {
                            font-size: 0.8em;
                            font-weight: 150;
                            color: #909090;

                            & .content_reply{
                                margin-left: 10px;
                                color: #909090;
                                cursor: pointer;
                            }

                            & .content_reply:hover{
                                color: #2479CC;
                            }
                        }
                    }
                }

                & li:last-child{
                    border: none;
                }

                & .reply_submit{
                    display: flex;

                    & .submit_input{
                        height: 35px;
                        flex-grow: 3;
                        margin-right: 20px;
                        box-sizing: border-box;
                        font-size: 1.05em;
                        padding: 5px;
                    }

                    & .submit-btn{
                        padding: 5px 20px;
                        font-size: 1.05em;
                        height: 35px;
                    }
                }
            }
        }
    }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity .5s;
}

.slide-fade-enter,
.slide-fade-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
    opacity: 0;
}

</style>