import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import router from './router'

import axios from 'axios'
import _ from 'lodash'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,

  data: {
    questions: [],
    userAnswer: null,
    scores: [],
    loading: true
  },

  computed: {
    qnum() {
      return this.$route.params.qnum
    },

    currentQuestion() {
      return this.qnum <= this.questions.length ? this.questions[this.qnum - 1] : null;
    },

    currentQuestionAnswers() {
      var answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
      answers = _.shuffle(answers)
      return answers
    },

    score() {
      var count = 0
      for (var i = 0; i < this.scores.length; i++) {
        if (this.scores[i] !== undefined) {
          count += this.scores[i]
        }
      }
      return count
    }
  },

  methods: {
    submit() {
      if (this.userAnswer === this.currentQuestion.correct_answer) {
        Vue.set(this.scores, this.qnum - 1, 1)
      }
      else {
        Vue.set(this.scores, this.qnum - 1, 0)
      }
      if (this.qnum < this.questions.length) {
        this.$router.push({name: 'Question', params: {qnum: parseInt(this.qnum) + 1}})
      }
      else {
        this.$router.push({name: 'FinalScore'})
      }
      this.userAnswer = null;
    }
  },

  mounted() {
    this.loading = true
    axios.request("https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple").then(response => {
      this.questions = response.data.results
      this.scores.length = this.questions.length
      this.loading = false
    })
    
  },

  render: h => h(App)
}).$mount('#app')
