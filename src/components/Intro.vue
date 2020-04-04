<template>
<div>

  <b-card
    title="Quiz Time"
    img-src="https://www.sentinelassam.com/wp-content/uploads/2019/04/quiz-653x408.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mt-3"
  >
    <b-card-text>
      Let's have some fun and learning together!
    </b-card-text>

    <b-button v-if="$root.questions.length" variant="primary" @click="$router.push('/question/1')">Let's Start</b-button>
  </b-card>

</div>
</template>

<script></script>

<style>

.card {
    margin: 0 auto;
    text-align: center;
}

</style>