<template>
  <section class="about">
      <div class="about__wrapper">
          <h1 class="about__title">Patrick Bradley</h1>
          <p class="about__para">{{ aboutMe }}</p>
      </div>
      <img src="@/assets/images/newDOODLE.png" alt="Image of man holding chin" class="about__img">
  </section>
</template>

<script>
export default {
  name: 'About',
  transition: {
    name: 'router-anim',
    mode: ''
  },
  head() {
    return {
      title: `Patrick Bradley | UX/UI Designer`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Patrick Bradley is a London and Toronto, Ontario based UX/UI Designer, focusing on simplifying user interfaces to produce user friendly, engaging, and responsive websites and mobile applications."
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "Patrick Bradley | UX/UI Designer"
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: "Patrick Bradley is a London and Toronto, Ontario based UX/UI Designer, focusing on simplifying user interfaces to produce user friendly, engaging, and responsive websites and mobile applications."
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:  "https://raw.githubusercontent.com/AC59852/patrick_portfolio-nuxt/master/assets/icons/seo_photo.png"
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: "Hand drawn photo of Patrick Bradley"
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Patrick Bradley | UX/UI Designer`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: "Patrick Bradley is a London and Toronto, Ontario based UX/UI Designer, focusing on simplifying user interfaces to produce user friendly, engaging, and responsive websites and mobile applications."
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: "https://raw.githubusercontent.com/AC59852/patrick_portfolio-nuxt/master/assets/icons/seo_photo.png"
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: "Hand drawn photo of Patrick Bradley"
        },
        { property: "og:image:width", content: "500" },
        { property: "og:image:height", content: "500" },
      ]
    }
  },

  // 1080 landscape tablet font-size down, image moved to right

  data() {
        return {
            aboutMe: `Hey! I'm Patrick Bradley, a London and Toronto, Ontario based UX/UI Designer, focusing on simplifying user interfaces to produce user friendly, engaging, and responsive websites and mobile applications.`,
        }
    }
}
</script>
<style>

</style>