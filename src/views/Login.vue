<template>
  <div class="login">
    <form>
      <input
        class="input"
        placeholder="Username"
        type="text"
        v-model="username"
        autofocus
        autocomplete="username"
      />
      <br />
      <input
        class="input"
        placeholder="Password"
        type="password"
        v-model="password"
        autocomplete="current-password"
      />
      <br />
      <button class="button" @click.prevent="login()">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { login } from "../api";

export default defineComponent({
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username == '' || this.password == '') {return;}
      login(this.username, this.password).then((data) => {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        this.$router.push('/');
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.input {
  @apply text-center;
  @apply appearance-none;
  @apply w-half;
  @apply bg-gray-100;
  @apply text-gray-700;
  @apply border-gray-200;
  @apply rounded;
  @apply py-3;
  @apply px-4;
  @apply leading-tight;
  @apply mt-4;
}
.input:focus {
  @apply outline-none;
  @apply bg-white;
  @apply border-gray-400;
}
.button {
  @apply mt-2;
  @apply bg-blue-500;
  @apply text-white;
  @apply font-bold;
  @apply py-2;
  @apply px-4;
  @apply rounded;
}

.button:hover {
  @apply bg-blue-600;
}

.button:focus {
  @apply outline-none;  
}
</style>

