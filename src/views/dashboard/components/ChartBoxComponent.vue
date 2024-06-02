<template>
  <div class="chart-container">
    <div class="bar-box">
      <VerBarChartComponent :barChartData="barData"></VerBarChartComponent>
    </div>
    <div class="gauge-box">
      <GaugeBoxComponent v-for="(item, index) in gaugeData" :key="index" :title="item.name" :value="item.value" :width="104" :height="95"></GaugeBoxComponent>
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
  data() {
    return {
      gaugeData: [{
        name: '总设定时间',
        value: 7.5
      }, {
        name: '总运行时间',
        value: 7.5
      }, {
        name: '总剩余时间',
        value: 7.5
      }],
      barData: [{
        name: 'Inner01',
        value: 165
      }, {
        name: 'Inner02',
        value: 15
      }, {
        name: 'Inner03',
        value: 65
      }, {
        name: 'Inner04',
        value: 105
      }, {
        name: 'Inner05',
        value: 65
      }, {
        name: 'Inner06',
        value: 45
      }, {
        name: 'Inner07',
        value: 125
      }]
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 8px 0;
    }
  }
}
</style>
