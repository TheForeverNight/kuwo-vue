import Vue from 'vue'
import Router from 'vue-router'

import Index from './../components/index/Index'
import Rank from './../components/Rank'
import Category from './../components/Category'
import Singer from './../components/Singer'
import MusicVideo from './../components/MusicVideo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [{
      path: '/',
      component: Index
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/mv',
      component: MusicVideo
    }
  ]
})
