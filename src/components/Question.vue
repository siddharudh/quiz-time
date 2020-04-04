<template>
  <div v-if="$root.currentQuestion">
    <b-card header-tag="header" :header="'Question ' + $root.$route.params.qnum"
    style="max-width: 20rem;"
    class="mt-3" footer-tag="footer" :footer="'Your score: ' + $root.score"
  >
    <b-card-text v-html="$root.currentQuestion.question">
    </b-card-text>

    <b-list-group>
      <b-list-group-item class="answer" v-for="(answer, index) in $root.currentQuestionAnswers" :key="index" href="#" @click="$root.userAnswer = answer" :class="{'user-selected':$root.userAnswer === answer}" v-html="answer"></b-list-group-item>
    </b-list-group>

    <b-button v-if="$root.userAnswer" class="mt-3" variant="primary" @click="$root.submit()">Submit</b-button>
    </b-card>
  </div>
  <b-jumbotron header="Oops.." bg-variant="warning" class="text-center" v-else-if="!$root.loading">Sorry, no more questions at the moment.</b-jumbotron>
</template>

<script>

export default {
  name: 'Question',

}
</script>

<style scoped>

.user-selected {
background-color: lightblue !important;
}

</style>
