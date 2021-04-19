<template>
  <div class="login inline-block absolute top-0 right-0" v-if="!loggedIn" @click="login()">
      <button
      class="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
      Login
    </button>

  </div>
  
  <div class="logout inline-block absolute top-0 right-0" v-if="loggedIn" @click="logout()">
      <button
      class="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
      Logout
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { request } from '../api';

export default defineComponent({
  name: 'LoginNavbar',
  data() {
    return {
        loggedIn: null,
        interval: null
    }
  },
  mounted() {
    this.refresh();
    this.interval = setInterval(this.refresh, 10000)

  },
  unmounted() {
    clearInterval(this.interval);
  },
  methods: {
    login() {
        this.$router.push('/login');
    },
    logout() {
        localStorage.removeItem('token')
        this.$router.push('/login');
    },
    refresh() {
        request('/authenicated').then(() => {
            this.loggedIn = true;
        }).catch(() => {
            this.loggedIn = false;
        })
    }
  }
});
</script>

<style scoped lang="scss">
</style>
