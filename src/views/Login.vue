<template>
  <div class="home">
    This is a Empty Home Page! {{ login }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { login } from '../api';

export default defineComponent({
  name: 'Login',
  data() {
    return {
        login: ''
    }
  },
  mounted() {
    login('mik', '123').then((data) => {
        this.login = data;
        localStorage.setItem('token', data.access_token)
    })
  }
});
</script>

