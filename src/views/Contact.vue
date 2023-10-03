<template>
  <div class="container">
    <h2 style="font-size: 1.5rem; text-transform: capitalize; font-weight: 700">Contact Us</h2>
    <p>
      I made this site for you. Have questions about anything you’ve read? Feel like you’re stuck in
      a rut and can’t make any progress on your goals? Feel free to reach out and let’s chat!
    </p>
    <br />
    <v-card class="pa-10" color="#EEEEEE">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="subject"
          class="mb-3"
          clearable
          label="Subject"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="name"
          :rules="[required]"
          class="mb-3"
          clearable
          label="Name"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[required]"
          class="mb-3"
          clearable
          label="Email"
          variant="outlined"
        ></v-text-field>
        <v-textarea
          v-model="message"
          :rules="[required]"
          class="mb-3"
          clearable
          label="Message"
          variant="outlined"
        ></v-textarea>
        <br />
        <v-btn block class="custom-color" size="large" type="submit" variant="elevated">
          Send
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: false,
    loading: false,
    subject: null,
    email: null,
    email: null,
    message: null
  }),
  methods: {
    onSubmit() {
      if (!this.form) return
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    required(v) {
      return !!v || 'This field is required.'
    }
  }
}
</script>

<style scoped>
.container {
  width: 80vw;
  /* height: 87vh; */
  height: 100%;
  margin: auto;
  background: #e8e9eb;
  padding: 40px 200px;
}
@media (max-width: 1024px) {
  .container {
    width: 90vw;
    padding: 40px;
  }
}
@media (max-width: 768px) {
  .container {
    width: 100vw;
    padding: 40px;
  }
}
.custom-color {
  background-color: #fb7813;
  color: white;
}
.container p {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  text-align: left;
  margin-top: 8px;
}
</style>
