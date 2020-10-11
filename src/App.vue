<template>
  <div id="app">
    <my-header></my-header>
    <my-homepage></my-homepage>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Homepage from './components/Homepage.vue'

export default {
  name: 'App',
  components: {
    'my-header':Header,
    'my-homepage':Homepage
  }
}
</script>

<style lang="scss">

</style>
