<template>
  <div class="app-box">
    <div class="top-box">
      <HeatBoxComponent></HeatBoxComponent>
      <SearchBoxComponent></SearchBoxComponent>
      <ChartBoxComponent></ChartBoxComponent>
    </div>
    <div class="bottom-box">
      <div class="switch-box">
        <div class="switch-item">
          <span>数据实时更新</span>
          <el-switch v-model="updateData"></el-switch>
        </div>
        <div class="switch-item">
          <span>游标显示</span>
          <el-switch v-model="showDataZoom"></el-switch>
        </div>
      </div>
      <LineChartComponent :chartData="chartData" :showDataZoom="showDataZoom" :heatParaDataList="heatParaDataList" @line-click="clickLine"></LineChartComponent>
    </div>
  </div>
</template>

<script>
import HeatBoxComponent from '@/views/dashboard/components/HeatBoxComponent.vue'
import SearchBoxComponent from '@/views/dashboard/components/SearchBoxComponent.vue'
import ChartBoxComponent from '@/views/dashboard/components/ChartBoxComponent.vue'
import LineChartComponent from '@/views/dashboard/components/charts/LineChartComponent.vue'

export default {
  name: 'ChartComponent',
  components: {
    HeatBoxComponent,
    SearchBoxComponent,
    ChartBoxComponent,
    LineChartComponent
  },
  props: {
    heatParaDataList: {
      type: Array,
      default: () => {
        return []
      } 
    },
    heatParaDataInfo: {
      type: Object,
      default: () => {
        return {}
      } 
    },
  },
  data() {
    return {
      updateData: true,
      showDataZoom: true
    }
  },
  computed: {
    chartData() {
      const { heatParaDataList } = this
      // toDo 优化
      const chartList = {
        Inner01: [],
        Inner02: [],
        Inner03: [],
        Inner04: [],
        Inner05: [],
        Inner06: [],
      }
      heatParaDataList.map(item => {
        chartList.Inner01.push(item.tCurr)
        chartList.Inner02.push(item.tfPara)
        chartList.Inner03.push(item.t0Cal)
        chartList.Inner04.push(item.t1Surface)
        chartList.Inner05.push(item.deltaT1T2)
        chartList.Inner06.push(item.t3Center)
      })
      const list = [{
        name: '生产炉温',
        data: chartList.Inner01
      }, {
        name: '工艺炉温',
        data: chartList.Inner02
      }, {
        name: '计算炉温',
        data: chartList.Inner03
      }, {
        name: '表面温度',
        data: chartList.Inner04
      }, {
        name: '重心温度',
        data: chartList.Inner05
      }, {
        name: '中心温度',
        data: chartList.Inner06
      }]
      return list
    }
  },
  methods: {
    clickLine(e) {
      console.log('===paraId', e)
    }
  }
}
</script>
<style lang="scss" scoped>
.top-box {
  height: 370px;
  display: flex;
  gap: 28px;
}
.bottom-box {
  position: relative;
  flex: 1;
  width: 100%;
  padding: 28px 40px;
  background: url(@/assets/card_middle_bg.png) 100% 100% no-repeat;
  background-size: 100% 100%;
  font-size: 14px;
}
.switch {
  &-box {
    position: absolute;
    top: 28px;
    left: 28px;
    display: flex;
    gap: 60px;
    align-items: center;
    z-index: 2;
  }
  &-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
