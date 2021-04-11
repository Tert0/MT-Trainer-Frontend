<template>
  <div>
    <p class="wrong">Your solution is Wrong!</p>
    <button class="btn btn-primary" @click="next_exercise()">
      Next Exercise
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WrongSolution",
  methods: {
    next_exercise() {
      this.$router.push("/exercise");
    },
  },
});
</script>

<style scoped lang="scss">
.wrong {
    color: red;
    font-size: 2em;
}
</style>