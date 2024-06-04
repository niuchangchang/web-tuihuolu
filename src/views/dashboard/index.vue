<template>
  <VScaleScreen width="1920" height="1080">
    <div class="app-container">
      <HeaderComponent title="退火炉监控应用平台" @tabChange="handleTabChange" />
      <ContentComponent v-if="tabIndex === 1" :currFurnaceParaList="currFurnaceParaList" :currFurnaceParaInfo="currFurnaceParaInfo" />
      <ChartComponent v-else :heatParaDataList="heatParaDataList" :heatParaDataInfo="heatParaDataInfo" />
    </div>
  </VScaleScreen>
</template>

<script>
import VScaleScreen from "v-scale-screen"
import { getCurrFurnacePara, getCurrFurnaceParaInfo, getHeatParaData, getHeatParaDataInfo } from '@/api/dashboard'
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
      tabIndex: 2,
      currFurnaceParaList: [],
      currFurnaceParaInfo: {},
      heatParaDataList: [],
      heatParaDataInfo: {}
    }
  },
  computed: {
  },
  watch: {
    tabIndex: {
      immediate: true,
      deep: true,
      handler(val) {
        switch(val) {
          case 1: 
            this.getCurrFurnaceParaFun()
            this.getCurrFurnaceParaInfoFun()
          break;
          case 2: 
            this.getHeatParaDataFun()
            // this.getHeatParaDataInfoFun()
          break;
        }
      }
    }
  },
  async mounted() {
  },
  methods: {
    handleTabChange(e) {
      this.tabIndex = e
    },
    async getCurrFurnaceParaFun() {
      getCurrFurnacePara(1).then(res => {
        this.currFurnaceParaList = res.rows
      })
    },
    async getCurrFurnaceParaInfoFun() {
      getCurrFurnaceParaInfo(1).then(res => {
        this.currFurnaceParaInfo = res.data
      })
    },
    async getHeatParaDataFun() {
      getHeatParaData(0).then(res => {
        this.heatParaDataList = res.rows
      })
    },
    async getHeatParaDataInfoFun() {
      getHeatParaDataInfo(0).then(res => {
        this.heatParaDataInfo = res.data
      })
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
