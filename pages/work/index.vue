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

  directives: {
    swiper: directive,
  },
  
  data() {
    return {
        projects: [],
        mobile: false,

        banners: [
          "https://images.unsplash.com/photo-1645997941789-6816cfc741dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=695&q=80",
          "https://images.unsplash.com/photo-1646048032503-556be68ded9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "https://images.unsplash.com/photo-1645974356103-8f8c44581d8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"],
      swiperOption: {
        slidesPerView: 'auto',
        navigation: false,
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,

        breakpoints: {
          810: {
            spaceBetween: 30,
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

    if (window.innerWidth < 850) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }

    // on resize, check if mobile
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 850) {
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