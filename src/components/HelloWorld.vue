<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style scoped></style>
