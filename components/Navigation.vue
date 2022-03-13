<template>
  <header class="header">
      <nav class="header__nav nav">
          <nuxt-link to="/" class="nav__logo"><img src="@/assets/images/logo.svg" alt="Patrick Bradley Portfolio Logo" class="nav__logo"></nuxt-link>
          <img src="@/assets/icons/close.svg" @click="toggleNav(); removeOverlay()" alt="Navigation Drop Down Icon" class="nav__menuIcon nav__close hide">
          <img src="@/assets/icons/menu.svg" @click="toggleNav(); addOverlay()" alt="Navigation Drop Down Icon" class="nav__menuIcon nav__hamMenu">
          <ul class="nav__list">
              <li class="nav__listItem" @click="toggleNav2(); removeOverlay()"><nuxt-link to="/" class="nav__link">About</nuxt-link></li>
              <li class="nav__listItem" @click="toggleNav2(); removeOverlay()"><nuxt-link to="/work" class="nav__link">Work</nuxt-link></li>
              <li class="nav__listItem" @click="toggleNav2(); removeOverlay()"><a href="https://drive.google.com/file/d/1YcXtYx3-O5AdTLqI0zZZFtzjqSmO454F/view" target="_blank" class="nav__link">Resume</a></li>
              <li class="nav__listItem" @click="toggleNav2(); removeOverlay()"><nuxt-link to="/contact" class="nav__link">Contact</nuxt-link></li>
          </ul>
      </nav>
  </header>
</template>

<script>
// nav link font-size tablet 28px 

export default {
    
    methods: {
        toggleNav() {
            let nav = document.querySelector('.nav__list');
            if (nav.classList.contains("nav__list--open")) {
                nav.classList.remove("nav__list--open");
                nav.classList.add("nav__list--close");
            } else {
                nav.classList.remove("nav__list--close");
                nav.classList.add("nav__list--open");
            }

            document.querySelector(".nav__close").classList.toggle("hide");
            document.querySelector(".nav__hamMenu").classList.toggle("hide");
            
        },

        toggleNav2() {
            let nav = document.querySelector('.nav__list');
            nav.classList.remove("nav__list--open");
            nav.classList.add("nav__list--close");

            // on animation end remove the close class
            nav.addEventListener("animationend", () => {
                nav.classList.remove("nav__list--close");
            });

            document.querySelector(".nav__close").classList.toggle("hide");
            document.querySelector(".nav__hamMenu").classList.toggle("hide");
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