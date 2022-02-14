<template>
  <section>
      <nuxt-link v-for="project in projects" :key="project.length" :to="'/work/' + project.id">
          <prismic-rich-text :field="project.data.projectName" class="title" />
      </nuxt-link>
  </section>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
    data() {
      return {
          projects: [],
      }
    },
    
    async asyncData({ $prismic, params, error }) {
      const document = await $prismic.api.query(
          $prismic.predicates.at('document.type', 'work-layout'),
      )
      if (document) {
        return { projects: document.results }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    },

    mounted() {
    },

    components: {
        SliceZone
    }
}
</script>

<style>

</style>