<template>
  <section class="about">
      <div class="about__wrapper">
          <h1 class="about__title">Patrick Bradley</h1>
          <p class="about__para">{{ aboutMe }}</p>
      </div>
      <img src="@/assets/images/man_1.png" alt="Image of man holding chin" class="about__img">
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
        return {
            aboutMe: `Hey! I'm Patrick Bradley, a London and Toronto, Ontario based UX/UI Designer, focusing on simplifying user interfaces to produce user friendly, engaging, and responsive websites and mobile applications.`,
        }
    }
}
</script>