<template lang="pug">
.reports-list
  router-link.reports-list__link(
    v-for="report in reports"
    :key="report.date"
    :to="{ name: 'Report', params: { date: report.date }}"
  )
    ReportCard(:date="report.date" :weight="report.weight")
  
  router-link.reports-list__link.reports-list__add(:to="{ name: 'AddReport'}") Add Report
</template>

<script>
import ReportCard from '@/components/ReportCard.vue'

import report from '@/api/report.js'

export default {
  components: { ReportCard },
  data() {
    return {
      reports: []
    }
  },
  created: async function() {
    try {
      this.reports = (await report.getReports()).data
    } catch (error) {
      this.reports = []
    }
  }
}
</script>

<style>
.reports-list__link {
  color: #fefefe;
  text-decoration: none;
}
.reports-list__link:hover {
  color: #955b8e;
}

.reports-list__add {
  display: block;
  text-align: center;
}
</style>
