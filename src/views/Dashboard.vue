<template>
  <div class="flex justify-center select-none">
    <div class="stats-container">
      <div>Points</div>
      <div>{{ points }}</div>
    </div>

    <div class="stats-container ml-12">
      <div>Count</div>
      <div>{{ count }}</div>
    </div>
    <div class="stats-container ml-12">
      <div>Percent</div>
      <div>{{ Number(((points / count) * 100).toFixed(1)) }}%</div>
    </div>
  </div>
</template>

<script lang="ts">
import { request } from "../api";
import { defineComponent } from "vue";

interface evaluation_interface {
  factor1: number;
  factor2: number;
  points: number;
  count: number;
}

export default defineComponent({
  name: "Dashboard",
  data() {
    return {
      evaluations: [] as evaluation_interface[],
      points: 0 as number,
      count: 0 as number,
    };
  },
  mounted(): void {
    request("/evaluations/get").then((evaluations: evaluation_interface[]) => {
      this.evaluations = evaluations;
      evaluations.forEach((evaluation: evaluation_interface) => {
        this.points += evaluation.points;
        this.count += evaluation.count;
      });
    });
  },
});
</script>

<style scoped lang="scss">
.stats-container {
  @apply flex;
  @apply flex-col;
  @apply bg-gray-600;
  @apply w-32;
  @apply justify-center;
  @apply py-5;
}

.stats-container:hover {
  @apply opacity-90;
}
</style>
