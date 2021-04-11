<template>
  <div>
      {{ logs }}
      <table class="table table-dark table-hover">
          <thead>
              <tr>
                  <td>ID</td>
                  <td>FACTOR 1</td>
                  <td>FACTOR 2</td>
                  <td>USER RESULT</td>
                  <td>CORRECT</td>
                  <td>TIME</td>
                  <td>DURATION</td>
              </tr>
          </thead>
          <tbody>
              <tr v-for="logentry in logs" :key="logentry">
                  <td>{{ logentry.id }}</td>
                  <td>{{ logentry.factor1 }}</td>
                  <td>{{ logentry.factor2 }}</td>
                  <td>{{ logentry.user_result }}</td>
                  <td :class="{green: logentry.correct, red: !logentry.correct}">{{ logentry.correct ? 'TRUE' : 'FALSE' }}</td>
                  <td>{{ new Date(logentry.timestamp).toLocaleTimeString() }}</td>
                  <td :class="{green: logentry.duration <= 9, yellow: 9 > logentry.duration <= 14, red: logentry.duration > 14}">{{ logentry.duration }} Seconds</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script lang="ts">
import request from "../api";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dashboard",
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

.yellow {
    color: yellow;
}

.red {
    color: red;
}
</style>