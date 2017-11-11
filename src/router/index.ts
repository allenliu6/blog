import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home.vue'
import Publish from '../view/Publish.vue'
import Article from '../view/article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    }
  ]
})
