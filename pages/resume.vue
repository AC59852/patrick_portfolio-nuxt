<template>
  <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <!-- Render original HTML in server, render Swiper in browser (client) -->
        <img class="swiper-image" :src="banner" />
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  name: "Slider",
  directives: {
    swiper: directive,
  },
  data() {
    return {
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
      },
    };
  },
};
</script>
<style>
    .swiper-slide, .wiper-slide-duplicate, .swiper-slide-duplicate-prev, .swiper-slide-duplicate-next {
        width: 70% !important;
        filter: grayscale(1);
        transition: filter 1s ease !important;
    }

    .swiper-slide-active, .swiper-slide-duplicate-active {
        filter: grayscale(0);
    }
    .swiper-image {
        width: 100%;
        height: 70vh;
        object-fit: cover;
        /* center the object */
        object-position: center;
    }
</style>