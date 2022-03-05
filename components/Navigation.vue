<template>
  <header class="header">
      <nav class="header__nav nav">
          <nuxt-link to="/" class="nav__logo"><img src="@/assets/images/logo.svg" alt="Patrick Bradley Portfolio Logo" class="nav__logo"></nuxt-link>
          <img src="@/assets/icons/close.svg" @click="toggleNav(); removeOverlay()" alt="Navigation Drop Down Icon" class="nav__menuIcon nav__close hide">
          <img src="@/assets/icons/menu.svg" @click="toggleNav(); addOverlay()" alt="Navigation Drop Down Icon" class="nav__menuIcon nav__hamMenu">
          <ul class="nav__list">
              <li class="nav__listItem" @click="toggleNav(); removeOverlay()"><nuxt-link to="/" class="nav__link">About</nuxt-link></li>
              <li class="nav__listItem" @click="toggleNav(); removeOverlay()"><nuxt-link to="/work" class="nav__link">Work</nuxt-link></li>
              <li class="nav__listItem" @click="toggleNav(); removeOverlay()"><nuxt-link to="/resume" class="nav__link">Resume</nuxt-link></li>
              <li class="nav__listItem" @click="toggleNav(); removeOverlay()"><nuxt-link to="/contact" class="nav__link">Contact</nuxt-link></li>
          </ul>
      </nav>
  </header>
</template>

<script>
export default {
    
    methods: {
        toggleNav() {
            document.querySelector(".nav__list").classList.toggle("nav__list--open");

            document.querySelector(".nav__close").classList.toggle("hide");
            document.querySelector(".nav__hamMenu").classList.toggle("hide");
            

            // if the screen size is less than 768px
            if (window.innerWidth <= 1400) {
                document.querySelector(".container").classList.toggle("container--slide");
            }
        },

        addOverlay() {
            let overlay = document.querySelector(".overlay") 

            overlay.classList.add("overlay--open");
            overlay.classList.remove("overlay--close");
        },

        removeOverlay() {
            let overlay = document.querySelector(".overlay") 

            overlay.classList.remove("overlay--open");
            overlay.classList.add("overlay--close");
        }
    }
}
</script>

<style>

</style>