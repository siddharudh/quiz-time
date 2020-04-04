import Vue from 'vue'
import VueRouter from 'vue-router'

import Intro from '../components/Intro.vue'
import Question from '../components/Question.vue'
import FinalScore from '../components/FinalScore.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/question/:qnum',
    name: 'Question',
    component: Question
  },
  {
    path: '/final-score',
    name: 'FinalScore',
    component: FinalScore
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
