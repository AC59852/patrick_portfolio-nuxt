<template>
  <header class="header">
      <nav class="header__nav nav">
          <img src="@/assets/images/logo.svg" alt="Patrick Bradley Portfolio Logo" class="nav__logo">
          <ul class="nav__list">
              <li class="nav__listItem"><nuxt-link to="/" class="nav__link">About</nuxt-link></li>
              <li class="nav__listItem"><nuxt-link to="/work" class="nav__link">Work</nuxt-link></li>
              <li class="nav__listItem"><nuxt-link to="/resume" class="nav__link">Resume</nuxt-link></li>
              <li class="nav__listItem"><nuxt-link to="/contact" class="nav__link">Contact</nuxt-link></li>
          </ul>
      </nav>
  </header>
</template>

<script>
export default {
}
</script>

<style>

</style>