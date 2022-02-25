<template>
  <section class="project__process">
    <prismic-rich-text :field="slice.primary.title" class="project__title project__title--small" />
    <div class="project__processWrapper">
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="project__processItem">    
      <prismic-image :field="item.ProcessImage" />
      <prismic-rich-text :field="item.ProcessContent" />
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProcessSlice",
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