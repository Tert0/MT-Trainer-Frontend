<template>
  <div>
    <div id="nav">
      <router-link to="/log">Log</router-link> |
      <router-link to="/exercise">Exercise</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html, body {
  @apply bg-gray-800;
}
#app {
  @apply text-center;
  @apply text-gray-300;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
