<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="600">
      <v-card style="background: #e8e9eb">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-icon icon="fab fa-times-circle" color="var(--red-color)" @click="close()" size="30" />
        </v-card-actions>
        <v-card-title>
          <h3 style="text-align: center; margin: 20px 0 20px 0; font-size: 28px">
            <span style="color: #4285f4">R</span>
            <span style="color: #db4437">e</span>
            <span style="color: #f4b400">s</span>
            <span style="color: #4285f4">u</span>
            <span style="color: #0f9d58">m</span>
            <span style="color: #db4437">e</span>
            <span style="color: var(--blue-color)">Match</span>
            <span style="color: #db4437"> Pro</span>
          </h3>
          <h3 v-if="isLogin" style="text-align: center; font-size: 30px; font-weight: 400">
            Login
          </h3>
          <h3 v-else style="text-align: center; font-size: 30px; font-weight: 400">Sing Up</h3>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  class="custom-field"
                  prepend-inner-icon="mdi:mdi-email-outline"
                  label="Email"
                  variant="outlined"
                  clearable
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  class="custom-field"
                  prepend-inner-icon="mdi:mdi-key"
                  label="Password"
                  variant="outlined"
                  clearable
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <!-- <v-col v-if="isLogin">
                <p
                  v-if="isLogin"
                  style="color: var(--blue-color); cursor: pointer;"
                >
                  Forgot Password?
                </p>
              </v-col> -->
              <v-col cols="12" style="">
                <div style="display: flex; justify-content: space-between">
                  <p v-if="isLogin" class="mobileText" @click="loginClick(true)">
                    Don't have an account?
                  </p>
                  <p v-else class="mobileText" @click="loginClick(false)">
                    Already have an account?
                  </p>
                  <v-btn
                    v-if="isLogin"
                    color="blue-darken-1"
                    variant="outlined"
                    @click="dialog = false"
                    class="mobileBtn"
                    >Login</v-btn
                  >
                  <v-btn
                    v-else
                    color="blue-darken-1"
                    variant="outlined"
                    @click="dialog = false"
                    class="mobileBtn"
                    >Sing Up</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    // activeColor: 'var(--blue-color)',
  }),
  props: {
    showDialog: Boolean,
    isLogin: Boolean
  },
  computed: {
    dialog: {
      get() {
        return this.showDialog
      },
      set(val) {}
    },
    login: {
      get() {
        return this.isLogin
      },
      set(val) {}
    }
  },
  methods: {
    close() {
      this.dialog = false
      this.$emit('close', this.dialog)
    },
    loginClick(val) {
      this.login = val
      this.$emit('loginClick', this.login)
    }
  }
}
</script>

<style scoped>
.mobileBtn {
  width: 150px;
}
.mobileText {
  color: var(--blue-color);
  margin-top: 5px;
  cursor: pointer;
}
@media (max-width: 424px) {
  .mobileBtn {
    width: auto;
  }
  .mobileText {
    margin-top: 0;
  }
}
</style>
