<template>
    <div>
        <Login :showDialog="dialog" :isLogin="login" @close="closeDialog()" @loginClick="textClick()" />
    </div>
</template>

<script>
import Login from '../components/Login.vue'

export default {
  data() {
    return {
      dialog: true,
      login: true
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
  }
}
</script>