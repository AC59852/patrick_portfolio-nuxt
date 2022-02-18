<template>
  <section class="project">
    <style>
      :root {
      --main-color: {{ work.colour }};
      }
    </style>
      <section class="project__hero">
        <prismic-image :field="work.previewImage" class="project__heroImage"/>
        <prismic-rich-text :field="work.projectName" class="project__title"/>
        <prismic-rich-text :field="work.projectSubheading" class="project__text"/>
      </section>
      <slice-zone type="work-layout" :uid="workUID" work-colour="blue"/>
  </section>
</template>

<script>
import SliceZone from 'vue-slicezone';
export default {
  data() {
    return {
      workUID: '',
      work: {}
    }
  },

  head() {
    return {
      title: `Patrick Bradley | ${this.work.projectName[0].text}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.work.projectSubheading[0].text
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.work.projectName[0].text
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.work.projectSubheading[0].text
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:  this.work.previewImage.url
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.work.projectName[0].text
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Patrick Bradley | ${this.work.projectName[0].text}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.work.projectSubheading[0].text
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.work.previewImage.url
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: this.work.projectName[0].text
        },
        { property: "og:image:width", content: "500" },
        { property: "og:image:height", content: "500" },
      ]
    }
  },
  
  async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const work = (await $prismic.api.getByID(params.id))
      console.log(work)
      // Returns data to be used in template
      
      return {
        work: work.data,
        workUID: work.uid
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

  components: {
    SliceZone
  },

}
</script>

<style>
  
</style>