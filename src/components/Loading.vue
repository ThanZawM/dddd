<template>
    <v-dialog v-model="scanning" persistent width="300">
      <v-card color="#FFF4EB" dark>
        <v-card-text class="black--text xs-def-text">
          <span class="xs-def-text">Scanning...</span>
          <v-progress-linear
            indeterminate
            color="#03391F"
            class="mb-0"
            style="font-family: Helvethaica; font-size: 18px"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
    props: {loading: Boolean},
    computed: {
        scanning: {
      get() {
        return this.loading;
      },
      set(val) {}
    },
    }
}
</script>