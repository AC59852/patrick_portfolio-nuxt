<template>
  <section class="buttonNav" v-if="$nuxt.$route.name !== 'work-id'">
      <span class="buttonNav__title" v-if="$nuxt.$route.name === 'index'">About</span>
      <span class="buttonNav__title" v-else-if="$nuxt.$route.name === 'work'">My Work</span>
      <span class="buttonNav__title" v-else-if="$nuxt.$route.name === 'contact'">Contact Me</span>
      <span class="buttonNav__title" v-else>{{ $nuxt.$route.name }}</span>
      <div class="buttonNav__wrapper">
        <nuxt-link class="buttonNav__link" to="/"></nuxt-link>
        <nuxt-link class="buttonNav__link" to="/work"></nuxt-link>
        <nuxt-link class="buttonNav__link" to="/contact"></nuxt-link>
      </div>
  </section>
</template>

<script>
export default {
}
</script>

<style>

</style>