<template>
  <div>
    <b-card header-tag="header" header="Your final score"
    style="max-width: 20rem;"
    class="mt-3">
    <span class="h1">{{$root.score}}</span> <span class="h5 text-muted">/ {{$root.questions.length}}</span>

    <br><br>
    <div>
        <b-button variant="primary" @click="$router.push('/')">Play Again!</b-button>
    </div>

    </b-card>
  </div>
</template>

<script>
</script>