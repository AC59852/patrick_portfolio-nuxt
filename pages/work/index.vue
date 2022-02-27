<template>
  <section class="work work__container">
        <ul class="work__wrapper">
          <li v-for="project in projects" :key="project.length" class="work__item">
              <nuxt-link :to="'/work/' + project.id" class="work__image">
                <prismic-image :field="project.data.previewImage" :style="{ backgroundColor: project.data.colour }"/>
              </nuxt-link>
              <nuxt-link :to="'/work/' + project.id" class="work__title">
                <h2>{{ project.data.projectName[0].text }}</h2>
              </nuxt-link>
          </li>
        </ul>
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
      console.log(this.projects)
    },

    components: {
        SliceZone
    }
}
</script>