<template>
  <footer class="footer">
      <div class="footer__wrapper">
          <div class="footer__copyright">
              <span>Patrick Bradley &copy; {{ currentDate.getFullYear() }}</span>
          </div>
          <div class="footer__socials">
              <a href="https://www.instagram.com/oattyonfilm/" target="_blank"><img src="@/assets/icons/instagram.svg" alt="Instagram Icon"></a>
              <a href="https://www.linkedin.com/in/w-patrick-bradley/" target="_blank"><img src="@/assets/icons/linkedin.svg" alt="linkedIn Icon"></a>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
data(){
    return {
      currentDate: new Date,
    }
  },
}
</script>

<style>

</style>