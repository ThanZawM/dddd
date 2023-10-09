<template>
  <v-app-bar app style="width: 100%; position: fixed; background: #e7eff3">
    <!-- <v-img
      alt="logo"
      src="src/assets/images/sorci1.png"
      class="custom-display"
      style="cursor: pointer;"
      @click="goToHome()"
    /> -->
    <div style="margin-left: 186px; margin-top: 20px;">
      <img
        alt="logo"
        src="src/assets/images/sorci1.png"
        class="custom-display"
        style="cursor: pointer; width: 95px"
        @click="goToHome()"
      />
    </div>
    <v-spacer />
    <v-toolbar-title style="margin-left: -400px">
      <h2 class="title-text" @click="goToHome()">
        <!-- <span style="color: #4285F4;">R</span>
          <span style="color: #DB4437;">e</span>
          <span style="color: #F4B400;">s</span>
          <span style="color: #4285F4;">u</span>
          <span style="color: #0F9D58;">m</span>
          <span style="color: #DB4437;">e</span> 
          <span style="color: #0072CE;">Match</span>
          <span style="color: #DB4437;"> Pro</span> -->
        ResumeMatch Pro
      </h2>
    </v-toolbar-title>
    <v-spacer />
    <div>
      <v-btn text @click="goToContact()">Contact</v-btn>
      <v-btn text @click="goToAbout()">About</v-btn>
    </div>
    <div>
      <v-btn text @click="clickLogin(true)"
        ><v-icon icon="mdi:mdi-login" color="#F9423A" size="20" />Log Out</v-btn
      >
      <!-- <v-btn text @click="clickLogin(false)"
        ><v-icon icon="mdi:mdi-account" color="#F9423A" size="20" />Sing Up</v-btn
      > -->
    </div>
  </v-app-bar>
  <Login :showDialog="dialog" :isLogin="login" @close="closeDialog()" @loginClick="textClick()" />
</template>

<script>
import { mdiAccount, mdiInformation, mdiHome, mdiMenu, mdiPhone, mdiCart, mdiLogin } from '@mdi/js'
import Login from './Login.vue'

export default {
  data() {
    return {
      drawer: false,
      items: [
        { text: 'Home', icon: mdiHome },
        { text: 'About', icon: mdiInformation },
        { text: 'Contact', icon: mdiPhone },
        { text: 'Products', icon: mdiCart }
      ],
      dialog: false,
      login: false
    }
  },
  components: {
    Login
  },
  methods: {
    closeDialog(val) {
      this.dialog = val
    },
    clickLogin(val) {
      this.dialog = true
      this.login = val
    },
    textClick(val) {
      this.login = !this.login
    },
    goToHome() {
      this.$router.push({ name: 'home' })
    },
    goToContact() {
      this.$router.push({ name: 'contact' })
    },
    goToAbout() {
      this.$router.push({ name: 'about' })
    }
  }
}
</script>

<style scoped>
.title-text {
  font-size: 32px;
  font-weight: 800;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  cursor: pointer;
}
@media (max-width: 680px) {
  .title-text {
    display: none;
  }
}
@media (min-width: 500px) and (max-width: 800px) {
  .title-text {
    font-size: 25px;
  }
}
</style>
