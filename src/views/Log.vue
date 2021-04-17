<template>
  <div>
      <table>
          <thead class="bg-gray-900 border-b-3 border-gray-700">
            <td class="w-1/16 border">ID</td>
            <td class="w-1/8 border">FACTOR 1</td>
            <td class="w-1/8 border">FACTOR 2</td>
            <td class="w-1/8 border">USER RESULT</td>
            <td class="w-1/8 border">CORRECT</td>
            <td class="w-1/8 border">TIME</td>
            <td class="w-1/8 border">DURATION</td>
          </thead>
          <tbody>
              <tr v-for="logentry in logs" :key="logentry">
                  <td class="border">{{ logentry.id }}</td>
                  <td class="border">{{ logentry.factor1 }}</td>
                  <td class="border">{{ logentry.factor2 }}</td>
                  <td class="border">{{ logentry.user_result }}</td>
                  <td class="border" :class="{green: logentry.correct, red: !logentry.correct}">{{ logentry.correct ? 'TRUE' : 'FALSE' }}</td>
                  <td class="border">{{ new Date(logentry.timestamp * 1000).toLocaleTimeString() }}</td>
                  <td  class="border" :class="{green: logentry.duration <= 5, orange: 5 < logentry.duration <= 7 && 5 < logentry.duration, red: logentry.duration > 7}">{{ logentry.duration }} Seconds</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script lang="ts">
import { request } from "../api";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Log",
  data(): Record<string, unknown> {
    return {
        logs: []
    };
  },
  mounted(): void {
    request('/log/get').
    then(logs => {
        this.logs = logs;
    })
  },

});
</script>

<style scoped lang="scss">
.green {
    color: green;
}

.orange {
    color: #f99339;
}

.red {
    color: red;
}

td {
    @apply px-10;
    @apply py-2;
    @apply border-r-2;
    @apply border-gray-700;
}

tr {
    @apply bg-gray-900;
    @apply border-b-1;
    @apply border-gray-700;
}

tr:hover {
    @apply bg-gray-800;
}
</style>
