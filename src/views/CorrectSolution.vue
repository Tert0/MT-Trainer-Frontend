<template>
  <div>
    <p class="right">Your solution is Right!</p>
    <button class="btn btn-primary" @click="next_exercise()">
      Next Exercise
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CorrectSolution",
  methods: {
    next_exercise() {
      this.$router.push("/exercise");
    },
  },
});
</script>

<style scoped lang="scss">
.right {
  color: green;
  font-size: 2em;
}
</style>