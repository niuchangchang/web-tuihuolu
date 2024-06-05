<template>
  <div class="app-box">
    <div class="top-box">
      <HeatBoxComponent></HeatBoxComponent>
      <SearchBoxComponent :heatParaDataInfo="heatParaDataInfo"></SearchBoxComponent>
      <ChartBoxComponent :heatParaDataInfo="heatParaDataInfo"></ChartBoxComponent>
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
      <LineChartComponent :chartData="chartData" :showDataZoom="showDataZoom" :heatParaDataList="heatParaDataList" @lineClick="handleClickLine"></LineChartComponent>
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
      const list = [{
        name: '生产炉温',
        data: heatParaDataList.map(item => item.tCurr)
      }, {
        name: '工艺炉温',
        data: heatParaDataList.map(item => item.tfPara)
      }, {
        name: '计算炉温',
        data: heatParaDataList.map(item => item.t0Cal)
      }, {
        name: '表面温度',
        data: heatParaDataList.map(item => item.t1Surface)
      }, {
        name: '重心温度',
        data: heatParaDataList.map(item => item.deltaT2T3)
      }, {
        name: '中心温度',
        data: heatParaDataList.map(item => item.t3Center)
      }]
      return list
    }
  },
  methods: {
    handleClickLine(e) {
      this.$emit('lineClick', e)
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
