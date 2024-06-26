<template>
  <div class="chart-container">
    <div class="bar-box">
      <VerBarChartComponent :barChartData="barData"></VerBarChartComponent>
    </div>
    <div class="gauge-box">
      <GaugeBoxComponent v-for="(item, index) in gaugeData" :key="index" :index="index" :title="item.name" :value="item.value"></GaugeBoxComponent>
    </div>
  </div>
</template>
<script>
import VerBarChartComponent from '@/views/dashboard/components/charts/VerBarChartComponent.vue'
import GaugeBoxComponent from '@/views/dashboard/components/GaugeBoxComponent.vue'

export default {
  name: 'ChartBoxComponent',
  components: {
    VerBarChartComponent,
    GaugeBoxComponent,
  },
  props: {
    heatParaDataInfo: {
      type: Object,
      default: () => {
        return {}
      } 
    },
  },
  data() {
    return {
    }
  },
  computed: {
    gaugeData() {
      const { heatParaDataInfo } = this
      const list = [{
        name: '总设定时间',
        value: heatParaDataInfo?.allSpTime
      }, {
        name: '总运行时间',
        value: heatParaDataInfo?.allRtTime
      }, {
        name: '总剩余时间',
        value: heatParaDataInfo?.allRemainTime
      }]
      return list
    },
    barData() {
      const { heatParaDataInfo } = this
      const list = [{
        name: '生产炉温', // T_Curr
        value: heatParaDataInfo?.tCurr
      }, {
        name: '工艺炉温', // Tf_Para
        value: heatParaDataInfo?.tfPara
      }, {
        name: '计算炉温', // TO_Cal
        value: heatParaDataInfo?.t0Cal
      }, {
        name: '表面温度', // T1_Surface
        value: heatParaDataInfo?.t1Surface
      }, {
        name: '0.707处温度', // T2_W707
        value: heatParaDataInfo?.t2W707
      }, {
        name: '中心温度', // T3_Center
        value: heatParaDataInfo?.t3Center
      }, {
        name: '炉膛-表面', // Delta_Tf_T1
        value: heatParaDataInfo?.deltaTfT1
      }, {
        name: '表面-重心', // Delta_T1_T2
        value: heatParaDataInfo?.deltaT1T2
      }, {
        name: '表面-中心', // Delta_T1_T3
        value: heatParaDataInfo?.deltaT1T3
      }, {
        name: '重心-中心', // Delta_T2_T3
        value: heatParaDataInfo?.deltaT2T3
      }]
      return list
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.chart {
  &-container {
    flex: 1;
    display: flex;
    gap: 20px;
    padding: 18px;
    background: url(@/assets/card_middle_bg.png) 100% 100% no-repeat;
    background-size: 100% 100%;
    .bar-box {
      flex: 1;
    }
    .gauge-box {
      width: 215px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 8px 0;
    }
  }
}
</style>
