<template>
  <section class="project__research">
    <div class="project__textContent">
      <prismic-rich-text :field="slice.primary.researchTitle" class="project__title project__title--small" />
    </div>
    <prismic-image :field="slice.primary.researchImage" class="project__image project__image--research" />
    <div class="project__textContent">
      <prismic-rich-text :field="slice.primary.researchDescription" class="project__text project__text--small"/>
    </div>
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="project__researchItem">    
      <prismic-image :field="item.researchImage2" />
    </div>
  </section>
</template>

<script>
export default {
  name: "ResearchSlice",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.section {
  position: relative;
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>