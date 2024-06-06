<template>
  <VScaleScreen width="1920" height="1080">
    <div class="app-container">
      <HeaderComponent title="退火炉监控应用平台" @tabChange="handleTabChange" />
      <ContentComponent v-if="tabIndex === 1" :selectedIndex="furnaceNo" @update:selectedIndex="updateSelectedIndex" :currFurnaceParaList="currFurnaceParaList" :currFurnaceParaInfo="currFurnaceParaInfo" />
      <ChartComponent v-else :heatParaDataList="heatParaDataList" :heatParaDataInfo="heatParaDataInfo" :heatSectionData="heatSectionData" @searchChange="handleSearchChange" @lineClick="handleClickLine" />
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
      tabIndex: 1,
      furnaceNo: 1,
      currFurnaceParaList: [],
      currFurnaceParaInfo: {},
      heatParaDataList: [],
      heatParaDataInfo: {},
      heatSectionData: [],
      paraId: null,
      dataNo: null,
      searchParams: null
    }
  },
  computed: {
  },
  watch: {
    tabIndex: {
      immediate: true,
      deep: true,
      handler(val) {
        // console.log('===点击tab', val, this.furnaceNo)
        this.handleTabIndexChange(val)
      }
    },
    furnaceNo: {
      immediate: true,
      deep: true,
      handler() {
        // console.log('===点击tab', this.tabIndex, this.furnaceNo)
        this.getCurrFurnaceParaFun();
        this.getCurrFurnaceParaInfoFun();
      }
    },
    searchParams: {
      immediate: true,
      deep: true,
      handler(val) {
        if(val) {
          // console.log('===searchParams val', val)
          this.getHeatParaDataFun();
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
    async handleTabIndexChange(val) {
      this.searchParams = null
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
    updateSelectedIndex(newIndex) {
      this.furnaceNo = newIndex
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
      this.heatParaDataInfo = {}
      this.heatSectionData = []
      getHeatParaData({
        furnaceNo: this.searchParams?.furnaceNo || this.furnaceNo,
        date: this.searchParams?.date
      }).then(res => {
        this.heatParaDataList = res.rows
        // 默认显示第一个
        this.paraId = this.heatParaDataList[this.heatParaDataList.length - 1]?.paraId
        this.dataNo = this.heatParaDataList[this.heatParaDataList.length - 1]?.dataNo
        this.getDataInfoFun()
      })
    },
    async getDataInfoFun() {
      
      if(this.furnaceNo && this.dataNo) await this.getHeatParaDataInfoFun()
      if(this.paraId) await this.getHeatSectionDataFun()
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
        this.heatSectionData = res.rows
      })
    },
    handleClickLine(e) {
      this.paraId = e.paraId
      this.dataNo = e.dataNo
      // toDo 防抖
      this.getDataInfoFun()
    },
    handleSearchChange(e) {
      this.searchParams = e
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
