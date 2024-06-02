<template>
  <VScaleScreen width="1920" height="1080">
    <div class="app-container">
      <HeaderComponent title="退火炉监控应用平台" @tabChange="handleTabChange" />
      <ContentComponent v-if="tabIndex === 1" />
      <ChartComponent v-else />
    </div>
  </VScaleScreen>
</template>

<script>
import VScaleScreen from "v-scale-screen"
import { getData } from '@/api/dashboard'
import HeaderComponent from '@/components/HeaderComponent'
import ContentComponent from '@/views/dashboard/components/ContentComponent.vue'
import ChartComponent from '@/views/dashboard/components/ChartComponent.vue'

export default {
  name: 'DashBoard',
  components: {
    VScaleScreen,
    HeaderComponent,
    ContentComponent,
    ChartComponent
  },
  data() {
    return {
      tabIndex: 1,
    }
  },
  computed: {
    maxProgressValue() {
      // const { processData } = this
      return 1
    }
  },
  mounted() {
    // this.getDataFun(date.month)
  },
  methods: {
    handleTabChange(e) {
      this.tabIndex = e
    },
    getDataFun(month) {
      getData({
        month: month,
      }).then(res => {
        console.log('res', res)
      })
    },
    // monthChange(e) {
    //   console.log('===点击的柱子月份', e.month)
    //   this.selectedMonth = e.month
    // },
  }
}
</script>

<style lang="scss" scoped>
</style>
