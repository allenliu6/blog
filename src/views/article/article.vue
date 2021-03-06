<template>
    <div>
        <content-header :title="article.title" :date="article.date" :tab="article.tab" :pv="article.pv" :commentsCount="article.commentsCount"></content-header>
        <article class="detail" v-html="article.content"></article>
        <p>
            发表于
            <i>2017-06-26 16:28:43</i>，最后修改于
            <i>2017-06-28 12:17:46</i>
        </p>
        <pagination :isRouterShow="[prevTitle.title, nextTitle.title]" :linkContent="[`« 上一篇：${prevTitle.title}`, `» 下一篇：${nextTitle.title}`]" :params="[{name: 'article', params: {id: prevTitle._id}}, {name: 'article', params: {id: nextTitle._id}}]"></pagination>
        <section class="comments">
            <div class="comments_title">Comments</div>
            <div class="comments_box">
                <img class="comments_box-avatar" src="./default-avatar.e30559a.svg" alt="默认头像">
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
                                <span v-if="!items[index].isShow">{{comment.reply.length}}条评论</span>
                                <span v-else>收起评论</span>
                            </a>
                            <span class="detail_foot-date">{{comment.date | timeToNow}}</span>
                        </div>
                        <transition name="slide-fade">
                            <div v-if="items[index].isShow" class="detail_reply">
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
                                    <input class="submit_input" type="text" :placeholder="items[index].replyInput">
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
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import contentHeader from '@/components/content-header.vue'
import pagination from '../../components/pagination.vue'
import { Articles, Comment, Item } from './interface'
import $http from '@/services'

@Component({
    components: {
        contentHeader,
        pagination
    }
})
export default class Article extends Vue {
    article: any = {}
    isSumbitBoxShow: boolean =  false
    items: Item[] = []
    prevTitle: object = {}
    nextTitle: object = {}
    
    mounted() {
        this.getArticle(this.$route.params.id)
    }

    @Watch('$route')
    onRouteChange(val: any, oldVal: any){
        this.getArticle(val.params.id)
    }

    getArticle(id: string){
        $http(`article`, 'get', {id})
            .then((data: any) => {
                this.article = <Articles>data.article
                this.prevTitle = data.nearArticle.prevTitle || {}
                this.nextTitle = data.nearArticle.nextTitle || {}

                const commentsCount: number = this.article.commentsCount
                const { items } = this
                for (let index = 0; index < commentsCount; index++) {
                    items[index].isShow = false
                    items[index].replyInput = '输入评论'
                }
            })
            .catch((error: Error) => {
                console.log(error)
            })
    }

    setShow(index: number){
        const item = this.items[index]
        item.isShow = !item.isShow
    }
    setInputReply(index: number, index2: number){
        const item = this.items[index],
            replyContent = this.article.comments[index].reply[index2]
        
        item.replyInput = `回复 ${replyContent.name} ：`
    }
}
</script>
<style lang="postcss" scoped>
a {
    color: #2479CC;
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

.comments {
    text-align: center;
    padding: 0 50px;

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
</style>