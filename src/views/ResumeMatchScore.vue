<template>
  <div class="container">
    <!-- <v-row justify="center">
      <h2 style="font-size: 2rem;">Resume Match Score</h2>
    </v-row> -->
    <v-row justify="center">
      <v-card variant="elevated" color="#d3d3d3" style="margin-top: 32px">
        <v-card-title style="font-size: 1.5rem; font-weight: 600"
          >Your Resume Analysis</v-card-title
        >
        <hr style="opacity: 70%" />
        <v-row align="center" class="pa-10">
          <v-col cols="6">
            <v-progress-circular
              :rotate="300"
              :size="320"
              :width="20"
              :model-value="value"
              color="#0072CE"
            >
              <span style="color: black; font-size: 4rem; font-weight: 500">{{ value }}%</span>
            </v-progress-circular>
          </v-col>
          <v-col cols="6" class="details">
            <h3 style="text-transform: uppercase; font-size: 2rem; color: var(--red-color)">Great Start!</h3>
            <p>You'll be good candidate for this position if you update your resume.</p>
            <p>
              Review the recommendations below for the form the formatting, keywords, the best
              practices you need to get that interview.
            </p>
            <p>Then scan your updated resume to make sure you score 75% or higher.</p>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 60
    }
  }
}
</script>

<style scoped>
.container {
  width: 80vw;
  height: 87vh;
  background: #e8e9eb;
  margin: auto;
  padding: 40px;
}
.details p {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
}
</style>
