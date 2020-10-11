<template>
  <div id="app">
    <my-header></my-header>
    <main></main>

  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    'my-header':Header,
    'main':main
  }
}
</script>

<style lang="scss">

</style>
