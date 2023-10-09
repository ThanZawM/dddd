<template>
  <v-app style="background: #e8e9eb">
    <Nav v-if="isLoginPage ? false : true" />

    <v-main :style="isScorePage ? 'background: var(--orange-color);' : ''">
      <!-- Your main content or router view goes here -->
      <router-view></router-view>
    </v-main>

    <!-- <v-footer color="#ECEFF1" border height="100" style="width: 100%;">
      <span style="text-transform: uppercase;">&copy; 2023 <strong>Resume Scanner</strong>. All Rights Reserved.</span>
    </v-footer> -->

    <Footer v-if="isLoginPage ? false : true" />
  </v-app>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Nav,
    Footer
  },
  computed: {
    isScorePage() {
      return (
        this.$route.path == '/score' ||
        this.$route.path == '/contact' ||
        this.$route.path == '/about'
      )
    },
    isLoginPage() {
      return (
        this.$route.name == 'login'
      )
    }
  }
}
</script>
