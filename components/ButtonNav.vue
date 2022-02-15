<template>
  <section class="buttonNav">
      <span class="currentPage" v-if="$nuxt.$route.name === 'index'">About</span>
      <span class="currentPage" v-else>{{ $nuxt.$route.name }}</span>
      <nuxt-link to="/"></nuxt-link>
      <nuxt-link to="/work"></nuxt-link>
      <nuxt-link to="/contact"></nuxt-link>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>