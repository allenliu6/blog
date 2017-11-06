<template>
    <content class="publish">
        <section class="body">
            <textarea v-model="md" class="body_edit" @keydown.tab.prevent="changeDefault"></textarea>
            <article v-html="markdown(md)" class="body_show markdown-body"></article>
        </section>
         <section class="header">
            <input type="text" class="header_title" placeholder="文章标题" v-model="title">
            <button class="header_submit">发表博客</button>
            <ul class="header_tool">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </section>
    </content>
</template>

<script>
    import marked from 'marked'
    export default {
        data(){
            return {
                md: '',
                mark: '',
                title: "欢迎使用markdown编辑器，点击编辑"
            }
        },
        methods: {
            markdown(){
                return marked(this.md)
            },
            changeDefault(){
                this.md += '    '
            }
        }
    }
</script>

<style lang="postcss" scoped>
    @import "../assets/github-markdown.css";

    .publish{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #f1f1f1;
        display: flex;
        flex-direction: column-reverse;

        & .header{
            width: 80%;
            margin: 0 auto;
            display: flex;
            height: 20%;
            justify-content: space-around;
            align-items: center;
            background-color: #fff;
            flex-wrap: wrap;
            margin-top: 5%;

            & .header_title{
                width: 60%;
                height: 40px;
                font-size: 22px;
                border: 0;
                color: #b1b1b1;

                &:focus{
                    color: #333;
                }
            }

            & .header_submit{
                background-color: #fb5a5a;
                color: #fff;
                border: 0;
                border-radius: 5px;
                padding: 5px 10px;
                font-size: 18px;
            }

            & .header_tool{
                background-color: #f1f1f1;
                height: 50px;
                width: 100%;
            }

        }

        & .body{
            background-color: #fff;
            width: 80%;
            margin: 0 auto;
            display: flex;
            height: 75%;
            justify-content: space-around;

            & .body_edit{
                width: 45%;
                resize: none;
                overflow: scroll;
                border: 0;
                font-size: 20px;
                border-right: 1px solid #333;
            }

            & .body_show{
                width: 45%;
                overflow: scroll;
                font-size: 20px;
                text-align: left;
            }
        }
    }
</style>