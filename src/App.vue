<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/log">Log</router-link> |
      <router-link to="/exercise">Exercise</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html, body {
  @apply bg-gray-700;
}
#app {
  @apply text-center;
  @apply text-gray-300;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    @apply text-gray-300;

    &.router-link-exact-active {
      @apply text-green-500;
    }
  }

  a:hover {
    @apply opacity-70;
  }

}
</style>
