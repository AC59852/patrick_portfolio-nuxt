<template>
  <footer class="footer">
      <div class="footer__wrapper">
          <div class="footer__copyright">
              <span>Patrick Bradley &copy; {{ currentDate.getFullYear() }}</span>
          </div>
          <div class="footer__socials">
              <img src="/" alt="Instagram Icon">
              <img src="/" alt="linkedIn Icon">
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