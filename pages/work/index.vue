<template>
  <section class="work work__container">
      <div v-swiper="swiperOption" :loadtheme="false" v-if="mobile === true">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="project.length" v-for="project in projects">
            <nuxt-link :to="'/work/' + project.id" >
              <!-- Render original HTML in server, render Swiper in browser (client) -->
              <prismic-image class="swiper-image" :style="{ backgroundColor: project.data.colour }" :field="project.data.previewImage"/>
            </nuxt-link>
            <nuxt-link :to="'/work/' + project.id" class="work__title">
              <h2>{{ project.data.projectName[0].text }}</h2>
            </nuxt-link>
          </div>
        </div>
      </div>
        <ul class="work__wrapper" v-if="mobile === false">
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
import SliceZone from 'vue-slicezone';
import { directive } from "vue-awesome-swiper";

// 810px carousel, smaller size, swiper-wrapper 60vh, swiper-image 6% padding
// swiper-title 18px

// 1024px tablet has desktop projects, centered scaled down with gap in between

export default {
  transition: {
    name: 'router-anim',
    mode: ''
  },
  head() {
    return {
      title: `Patrick Bradley | My Work`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Patrick Bradley is a London and Toronto, Ontario based UX/UI Designer, focusing on simplifying user interfaces to produce user friendly, engaging, and responsive websites and mobile applications."
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "Patrick Bradley | My Work"
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
          content: `Patrick Bradley | My Work`
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

  directives: {
    swiper: directive,
  },
  
  data() {
    return {
        projects: [],
        mobile: false,
      swiperOption: {
        slidesPerView: 'auto',
        navigation: false,
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,

        breakpoints: {
          800: {
            spaceBetween: 55,
          },
        }
      },
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
    console.log(this.projects);

    // check for a project with project.data.projectName[0].text === 'Roboeats'
    if (this.projects.length > 0) {
      this.projects.forEach(project => {
        if (project.data.projectName[0].text === 'Roboeats') {
          // set project.data.colour to '#f5f5f5'
          project.data.colour = '#E0DADA';
        }
      });
    }

    if (window.innerWidth < 1023) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }

    // on resize, check if mobile
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1023) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    });
  },

  components: {
      SliceZone
  }
}
</script>