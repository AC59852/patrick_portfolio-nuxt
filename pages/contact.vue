<template>
  <section class="contact">
      <h1 class="contact__title" v-html="emailMsg">{{ emailMsg }}</h1>
      <form class="contact__form" @submit.prevent="sendEmail">
          <div class="contact__formWrapper">
              <input class="contact__input" type="text" v-model="firstName" name="firstName" id="firstName" maxlength="25" placeholder="First Name" required>
              <label class="contact__label" for="firstName">First Name</label>
          </div>
          <div class="contact__formWrapper">
              <input class="contact__input" type="text" v-model="lastName" name="lastName" id="lastName" maxlength="25" placeholder="Last Name" required>
              <label class="contact__label" for="lastName">Last Name</label>
          </div>
          <div class="contact__formWrapper">
              <input class="contact__input" type="text" v-model="email" name="email" id="email" maxlength="25" placeholder="Email" required>
              <label class="contact__label" for="email">Email</label>
          </div>
          <div class="contact__formWrapper">
              <textarea class="contact__input contact__input--message" v-model="message" id="message" maxlength="400" placeholder="Message" name="message" required></textarea>
              <label class="contact__label" for="message">Message</label>
          </div>
          <input class="submit contact__submit" type="submit" value="Send">
      </form>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
    data() {
        return {
            emailMsg: '',
            emailSent: false,
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        }
    },

    mounted() {
        this.emailMsg = 'Need a Designer? <br> Send me an email!';
    },

    methods: {
        sendEmail(e) {
             try {
                emailjs.sendForm('service_de7n1qy', 'template_ikaxq3q', e.target, 'user_jnWGg4YSrmq07TzPzuzrR', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                message: this.message,
                },
                this.emailSent = true,
                this.firstName = '', this.lastName = '', this.email = '', this.message = ''
            )
            console.log(this.firstName)
            this.emailMsg = `Thanks for the message! I'll get back to you soon.`
            } 
            catch(err) {
                console.log(err)
                this.emailSent = false
            } 
        }
    }
}
</script>

<style>

</style>