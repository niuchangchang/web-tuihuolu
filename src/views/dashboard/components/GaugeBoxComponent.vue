<template>
  <div class="gauge-container">
    <div class="gauge-chart">
      <GaugeChartComponent :index="index" :chartData="value"></GaugeChartComponent>
    </div>
    <div class="gauge-content">
      <div class="value-box">
        <span class="value">{{ value||'' }}</span>
        {{ unit }}
      </div>
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
import GaugeChartComponent from '@/views/dashboard/components/charts/GaugeChartComponent.vue'

export default {
  name: 'GaugeBoxComponent',
  components: {
    GaugeChartComponent,
  },
  props: {
    index: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: 'h'
    },
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.gauge {
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  &-chart {
    width: 105px;
    height: 105px;
    // background: url(@/assets/gauge_icon.png) 100% 100% no-repeat;
    // background-size: 100% 100%;
  }
  &-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    .value-box {
      white-space: nowrap;
      font-weight: bold;
      .value {
        font-size: 30px;
        color: #10CBF1;
      }
    }
  }
}
</style>
