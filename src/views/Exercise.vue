<template>
  <div>
    <p class="exercise">{{ factor1 }} * {{ factor2 }} = ?</p>
    <input v-model="user_result" type="number" class="form-control input" autofocus @keydown.enter="check_result()"/>
    <button class="btn btn-primary" @click="check_result()">Check</button>
  </div>
</template>

<script lang="ts">
import request from "../api";
import { defineComponent } from "vue";

interface execise_response {
  exercise: {
    factor1: number;
    factor2: number;
  };
}

export default defineComponent({
  name: "Exercise",
  data(): Record<string, unknown> {
    return {
      factor1: '?',
      factor2: '?',
      startTime: performance.now(),
      user_result: '',
    };
  },
  mounted(): void {
    request("/exercise/generate").then(() => {
      request("/exercise/get").then((response: execise_response) => {
        this.factor1 = response.exercise.factor1;
        this.factor2 = response.exercise.factor2;
      });
    });
  },
  methods: {
      check_result() {
          if (this.user_result === '' || this.user_result === undefined) {
              return;
          }
          const endTime = performance.now();
          request('/exercise/check', {user_result: this.user_result}, 'POST').then(response => {
              request('/log/add', {
                  factor1: this.factor1,
                  factor2: this.factor2,
                  user_result: this.user_result,
                  duration: Math.round((Number(endTime)- Number(this.startTime))/1000)
                },
                'POST'
                ) 
              if(response.result) {
                  this.$router.push("/correct")
              } else {
                  this.$router.push("/wrong")
              }
          })
      }
  },
});
</script>

<style scoped lang="scss">
.exercise {
  font-size: 2em;
}
.input {
    width: 40%;
    margin-left: 30%;
    margin-bottom: 10px
}
</style>