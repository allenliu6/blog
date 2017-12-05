<template>
    <div>
        <div class="header">
            <span class="header_title"><i class="fa fa-bookmark"></i> 标题 </span>
            <span class="header_time"><i class="fa fa-calendar-o"></i> 日期 </span>
            <span class="header_pv"><i class="fa fa-eye"></i> 阅读 </span>
            <span class="header_count"><i class="fa fa-commenting"></i> 评论 </span>
        </div>
        <ul class="list">
            <li :key="index" v-for="(topic, index) in topics" @mouseenter="setShowDetail(index, true)" @mouseleave="setShowDetail(index, false)">
                <div class="list_item">
                    <router-link class="item_info" :to="{name: 'article', params: {id: topic._id}}" :title="topic.summary">
                        {{topic.title}} 
                    </router-link>
                    <time class="item_time">{{ topic.date | formatDate }}</time>
                    <span class="item_pv">{{topic.pv}}</span>
                    <span class="item_count">{{topic.commentCount}}</span>
                </div>
                <transition name="slide-fade">
                    <div class="list_plus" v-visib="isShowDetail[index]">
                        <span :key="index2" v-for="(tag, index2) in topic.tab" class="plus_tags">
                            <i class="fa fa-tag"></i>{{tag}}
                        </span>
                        <button @click="emitEdit(topic._id)">编辑</button>
                        <button @click="emitDelete(topic._id, index)">删除</button>
                        <button @click="emitSetTop">置顶</button>
                        <button @click="emitSetTab">分类</button>
                    </div>
                </transition>
            </li>
        </ul>
        <nav class="pagination">
            <ul class="page_list">
                <li>
                    <router-link :to="{name: 'list', params: { page: page - 1, tab}}"> « </router-link>
                </li>
                <li v-for="(item, index) in pages" :key="index">
                    <router-link v-if="typeof item === 'number'" :to="{name: 'list', params: { page: item, tab}}"> {{item}} </router-link>
                    <span v-else>{{item}}</span>
                </li>
                <li>
                    <router-link :to="{name: 'list', params: { page: allPage, tab}}"> {{allPage}} </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'list', params: { page: page + 1, tab}}"> » </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator'
    import { Topic } from '../home/interface'
    import $http from '@/services'

    @Component
    export default class List extends Vue {
        page: number
        tab: string
        allPage: number
        pages: any = []
        topics: Topic[] = []
        isShowDetail: boolean[] = []

        created(){
            const {page = 1, tab = 'all'} = this.$route.params
            this.allPage = this.page = page ? +page : this.page
            this.tab = tab ? tab : this.tab
            for (let index = 0; index < 10; index++) {
                Vue.set(this.isShowDetail, index, false)
            }
        }
        
        mounted() {
            this.getTopics(this.page, this.tab)
        }

        @Watch('$route')
        onRouteChange(val: any, oldVal: any){
            const {page, tab} = val.params
            this.getTopics(page, tab)
            this.page = page
            this.tab = tab
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

        setShowDetail(index: number, bool: boolean){
            Vue.set(this.isShowDetail, index, bool)
        }

        updatePages(){
            const { page, allPage } = this

            if(page <= 0 || allPage <=0) {
                throw new Error(`page is limitless. page: ${page}, allPage: ${allPage}`)
            }

            if(page === allPage) {
                this.pages = ['...', page - 1, page]
            } else if(page < allPage) {
                if(page < allPage - 2) {
                    this.pages = [page - 1, page, '...']
                } else {
                    const newPages = [page - 1]
                    for (let i = page; i < allPage; i++) {
                        newPages.push(i)
                    }
                    this.pages = newPages
                }
            }
        }

        emitEdit(id: string){
            this.$router.push({
                name: 'publish',
                params: {id}
            })
        }

        emitDelete(id: string, index: number){
            const { topics } = this
            $http('/article/delete', 'post', {id})
                .then((data: any) => {
                    if(data.success){
                        topics.splice(index, 1)
                    }
                })
                .catch((error: Error) => console.log(error))
        }

        emitSetTop(){
            
        }

        emitSetTab(){
            
        }
    }
</script>
<style lang="postcss" scoped>
    a{
        color: #2479CC;
    }

    .header{
        display: flex;
        border-bottom: solid 1px #ccc;
        margin-top: 30px;

        & .header_title{
            width: 50%;
        }

        & .header_time{
            width: 25%;
        }

        & .header_pv{
            width: 15%;
        } 

        .header_count{
            width: 10%;
        }
    }

    .list{
        margin-bottom: 30px;

        &>li{
            padding: 10px 0;
            border-top: 1px solid #eee;
        }

        &>li:nth-child(2n){
            background-color:#f9f9f9;
        }

        & .list_item{
            display: flex;
            padding-bottom: 5px;

            & .item_info{
                width: 50%;
            }

            & .item_time{
                width: 25%;
                color: #999;
            }

            & .item_pv, & .item_count{
                width: 10%;
            }
        }

        & .list_plus{

            & .plus_tags{
                margin-right: 10px;
            }

            & button{
                margin-left: 20px;
                font-size: 0.95em;
            }
        }

        & .list_plus::after{
            content: '';
            height: 100%;
            width: 100%;
        }
    }

    .pagination{
        max-width: 6rem;
        margin: 0 auto;

        & .page_list {
            // 未生效
            min-width: 1rem;
            display: flex;
            justify-content: space-between;
            font-size: 1.2em;

            & li{
                
            }   
        }
    }
</style>