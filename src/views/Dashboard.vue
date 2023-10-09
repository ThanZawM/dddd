<template>
  <v-app style="padding-top: 25px">
    <!-- Sidebar FB7813 -->
    <v-navigation-drawer app style="background: #ffd580">
      <!-- Sidebar Content -->
      <v-list dense>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          link
          style="display: flex"
          @mouseenter="showTooltip(item)"
          @mouseleave="hideTooltip(item)"
          @click="clickTab(item)"
        >
          <v-list-item-icon>
            <!-- Tooltip element -->
            <!-- <div v-if="hoveredItem === item" class="tooltip">{{ item.title }}</div> -->
            <v-tooltip text="Tooltip">
              <template v-slot:activator="{ props }">
                <v-icon
                  v-bind="props"
                  :style="{ transform: item.rotate ? 'rotate(180deg)' : 'rotate(0deg)', color: '' }"
                  size="25"
                  >{{ item.icon }}</v-icon
                >
              </template>
            </v-tooltip>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Contents -->
    <v-main>
      <h1 style="margin-left: 12px">Dashboard</h1>
      <v-container fluid v-if="selectedItem == null ? true : selectedItem.title == 'Dashboard'">
        <!-- <v-card>
          <v-card-title>Card</v-card-title>
          <v-card-text>This is simple text.</v-card-text>
        </v-card> -->
        <v-card style="background: lightgray">
          <apexchart type="donut" :options="chartOptions" :series="series" width="400"></apexchart>
        </v-card>
        <br />
        <v-card>
          <v-data-table
            style="background: lightgray"
            :items-per-page="itemsPerPage"
            :headers="headers"
            :items="users"
            item-value="id"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-container>

      <v-container
        v-if="selectedItem != null && selectedItem.title == 'Scan A Resume' ? true : false"
      >
        <div>{{ selectedItem.title }}</div>
      </v-container>

      <v-container
        v-if="selectedItem != null && selectedItem.title == 'Change My Password' ? true : false"
      >
        <div>{{ selectedItem.title }}</div>
      </v-container>

      <v-container v-if="selectedItem != null && selectedItem.title == 'Billing' ? true : false">
        <div>{{ selectedItem.title }}</div>
        <Price />
      </v-container>

      <v-container
        v-if="selectedItem != null && selectedItem.title == 'Privacy & Data Policy' ? true : false"
      >
        <div>{{ selectedItem.title }}</div>
      </v-container>

      <v-container
        v-if="
          selectedItem != null && selectedItem.title == 'Delete My Account & Data' ? true : false
        "
      >
        <div>{{ selectedItem.title }}</div>
      </v-container>

      <v-container v-if="selectedItem != null && selectedItem.title == 'Log Out' ? true : false">
        <div>{{ selectedItem.title }}</div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
import Price from '../components/Price.vue'
import {api} from '../api'
import axios from 'axios'

export default {
  mounted(){
    this.getResumes();
  },
  data() {
    return {
      urs: null,
      selectedItem: null,
      hoveredItem: null,
      menuItems: [
        { title: 'Dashboard', icon: 'mdi:mdi-view-dashboard-outline', rotate: false },
        { title: 'Scan A Resume', icon: 'mdi:mdi-magnify-scan', rotate: false },
        { title: 'Change My Password', icon: 'mdi:mdi-key-change', rotate: false },
        { title: 'Billing', icon: 'mdi:mdi-currency-usd', rotate: false },
        { title: 'Privacy & Data Policy', icon: 'mdi:mdi-database-outline', rotate: false },
        { title: 'Delete My Account & Data', icon: 'mdi:mdi-delete-empty-outline', rotate: false },
        { title: 'Email', icon: 'mdi:mdi-email-outline', rotate: false },
        // { title: 'Log Out', icon: 'mdi:mdi-logout', rotate: true }
      ],
      users: [
        { id: 1, name: 'Samira Hadid', email: 'samira@gmail.com', score: 61 },
        { id: 2, name: 'Juliana Silva', email: 'juliana@gmail.com', score: 60 },
        { id: 3, name: 'Kim Chun Hei', email: 'kim@gmail.com', score: 65 },
        { id: 4, name: 'Olivia Wilson', email: 'olivia@gmail.com', score: 57 },
        { id: 5, name: 'Leo', email: 'leo@gmail.com', score: 66 },
        { id: 6, name: 'Bob', email: 'bob@gmail.com', score: 83 },
        { id: 7, name: 'Lisa', email: 'lisa@gmail.com', score: 45 },
        { id: 8, name: 'Smith', email: 'smith@gmail.com', score: 75 },
        { id: 9, name: 'William', email: 'william@gmail.com', score: 55 },
        { id: 10, name: 'Benjamin', email: 'benjamin@gmail.com', score: 71 }
      ],
      itemsPerPage: 5,
      headers: [
        { title: '', sortable: false, key: 'id' },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Email',
          key: 'email'
        },
        {
          title: 'Score',
          key: 'score',
          align: 'end'
        }
      ],
      labels: ['need to update', 'good', 'better', 'excellent'],
      datasets: {
        backgroundColor: ['red', 'green', 'blue', 'black'],
        data: ['0-50%', '51-70%', '71-80%', '81-100%']
      },
      chartData: {
        labels: ['need to update', 'good', 'better', 'excellent'],
        datasets: [
          {
            backgroundColor: ['red', 'green', 'blue', 'black'],
            data: ['0-50%', '51-70%', '71-80%', '81-100%']
          }
        ]
      },
      //  series: [44, 55, 41, 17, 15],
      // series: [50, 70, 80, 100,],
      chartOptions: {
        chart: {
          width: 380,
          type: 'donut'
        },
        // labels: ['need to update', 'good', 'better', 'excellent'],
        labels: ['0-50%', '51-70%', '71-80%', '81-100%'],
        colors: ['#EB5353', '#F9D923', '#187498', '#36AE7C']
        // responsive: [{
        //   breakpoint: 480,
        //   options: {
        //     chart: {
        //       width: 200
        //     },
        //     legend: {
        //       position: 'bottom'
        //     }
        //   }
        // }]
      }
    }
  },
  components: {
    apexchart: VueApexCharts,
    Price
  },
  methods: {
    clickTab(item) {
      this.selectedItem = item
    },
    showTooltip(item) {
      this.hoveredItem = item
    },
    hideTooltip(item) {
      this.hoveredItem = null
    },
    async getResumes() {
      const response = await api.getScannedResumes();
      this.urs = response.data.data
      console.log('users list' + this.urs[0])
    }
  },
  computed: {
    series() {
      const scoreRanges = ['0-50%', '51-70%', '71-80%', '81-100%']

      const scoreCounts = [0, 0, 0, 0]

      this.users.forEach((user) => {
        const score = user.score
        if (score >= 0 && score <= 50) {
          scoreCounts[0]++
        } else if (score >= 51 && score <= 70) {
          scoreCounts[1]++
        } else if (score >= 71 && score <= 80) {
          scoreCounts[2]++
        } else if (score >= 81 && score <= 100) {
          scoreCounts[3]++
        }
      })
      return scoreCounts
    }
  }
}
</script>

<style>
.theme-toggle {
  position: absolute;
  top: 10px;
  right: 10px;
}
.tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  border-radius: 4px;
  font-size: 12px;
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.2s,
    visibility 0.2s;
  z-index: 999;
  right: 30px;
}
.tooltip::before {
  content: '';
  position: absolute;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent rgba(0, 0, 0, 0.5) transparent;
  top: 30%;
  left: -10px;
  transform: translateY(-50%);
  transform: rotate(270deg);
}
/* Show the tooltip on hover */
.v-list-item:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
</style>
