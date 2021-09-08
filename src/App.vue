<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
  div {
    display: block;
  }
</style>

<template>
    <router-view :key="$route.fullPath"></router-view>
</template>