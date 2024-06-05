<template>
  <VScaleScreen width="1920" height="1080">
    <div class="app-container">
      <HeaderComponent title="退火炉监控应用平台" @tabChange="handleTabChange" />
      <ContentComponent v-if="tabIndex === 1" :currFurnaceParaList="currFurnaceParaList" :currFurnaceParaInfo="currFurnaceParaInfo" @changeSelect="handleSelectChange" />
      <ChartComponent v-else :heatParaDataList="heatParaDataList" :heatParaDataInfo="heatParaDataInfo" @lineClick="handleClickLine" />
    </div>
  </VScaleScreen>
</template>

<script>
import VScaleScreen from "v-scale-screen"
import { getCurrFurnacePara, getCurrFurnaceParaInfo, getHeatParaData, getHeatParaDataInfo, getHeatSectionData } from '@/api/dashboard'
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
      furnaceNo: 1,
      currFurnaceParaList: [],
      currFurnaceParaInfo: {},
      heatParaDataList: [],
      heatParaDataInfo: {},
      paraId: null,
      dataNo: null,
    }
  },
  computed: {
  },
  watch: {
    tabIndex: {
      immediate: true,
      deep: true,
      handler(val) {
        this.handleTabIndexChange(val)
      }
    },
    furnaceNo: {
      immediate: true,
      deep: true,
      handler() {
        this.getCurrFurnaceParaFun();
        this.getCurrFurnaceParaInfoFun();
      }
    }
  },
  async mounted() {
  },
  methods: {
    handleTabChange(e) {
      this.tabIndex = e
    },
    async handleTabIndexChange(val) {
      switch(val) {
        case 1: 
          await this.getCurrFurnaceParaFun();
          await this.getCurrFurnaceParaInfoFun();
          break;
        case 2: 
          await this.getHeatParaDataFun();
          break;
      }
    },
    handleSelectChange(e) {
      this.furnaceNo = e
    },
    // 获取参数列表
    async getCurrFurnaceParaFun() {
      getCurrFurnacePara(this.furnaceNo).then(res => {
        this.currFurnaceParaList = res.rows
      })
    },
    // 获取详情数据
    async getCurrFurnaceParaInfoFun() {
      getCurrFurnaceParaInfo(this.furnaceNo).then(res => {
        this.currFurnaceParaInfo = res.data
      })
    },
    // 获取折线图数据
    async getHeatParaDataFun() {
      getHeatParaData({
        furnaceNo: this.furnaceNo,
        // date: 
      }).then(res => {
        this.heatParaDataList = res.rows
        // 默认显示第一个
        this.paraId = this.heatParaDataList[this.heatParaDataList.length - 1].paraId
        this.dataNo = this.heatParaDataList[this.heatParaDataList.length - 1].dataNo
        this.getHeatParaDataInfoFun()
        this.getHeatSectionDataFun()
      })
    },
    // 联动折线图 获取详情数据
    async getHeatParaDataInfoFun() {
      getHeatParaDataInfo(this.furnaceNo, this.dataNo).then(res => {
        this.heatParaDataInfo = res.data
      })
    },
    // 获取热力图数据
    async getHeatSectionDataFun() {
      getHeatSectionData(this.paraId).then(res => {
        console.log('----rows', res.rows)
        // this.heatParaDataInfo = res.rows
      })
    },
    async handleClickLine(e) {
      // console.log('===paraId', e)
      this.paraId = e.paraId
      this.dataNo = e.dataNo
      // 防抖
      await this.getHeatParaDataInfoFun()
      // await this.getHeatSectionDataFun()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
