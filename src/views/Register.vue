<template>
  <div class="register">
    <form>
      <input
        class="input"
        placeholder="Username"
        type="text"
        v-model="username"
        autofocus
        autocomplete="new-username"
      />
      <br />
      <input
        class="input"
        placeholder="Password"
        type="password"
        v-model="password"
        autocomplete="new-password"
      />
      <br />
      <input
        class="input"
        placeholder="Repeat Password"
        type="password"
        v-model="repeat_password"
        autocomplete="new-password"
      />
      <br />
      <button class="button" @click.prevent="register()">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { register } from "../api";

export default defineComponent({
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      repeat_password: "",
    };
  },
  methods: {
    register() {
      if (this.username == '' || this.password == '') return;
      if (this.password != this.repeat_password) return;
      register(this.username, this.password).then((data) => {
        localStorage.setItem("token", data.access_token);
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

