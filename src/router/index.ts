import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
import Publish from '../views/publish/publish.vue'
import Article from '../views/article/article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tab/:tab/page/:page',
      name: 'page',
      component: Home
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    }
  ]
})
