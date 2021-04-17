<template>
  <div>
    <p class="right">Your solution is Right!</p>
    <button
      class="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      @click="next_exercise()"
      autofocus
      @keydown.enter="next_exercise()"
    >
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
    }
  },
});
</script>

<style scoped lang="scss">
.right {
  color: green;
  font-size: 2em;
}
</style>