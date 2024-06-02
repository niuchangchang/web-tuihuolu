<template>
  <div class="gauge-container">
    <div class="gauge-chart" :style="{width: `${width}px`, height: `${height}px`}">
    </div>
    <div class="gauge-content">
      <div class="value-box">
        <span class="value">{{ value }}</span>
        {{ unit }}
      </div>
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaugeBoxComponent',
  props: {
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
    width: {
      type: Number,
      default: 120
    },
    height: {
      type: Number,
      default: 110
    }
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
    background: url(@/assets/gauge_icon.png) 100% 100% no-repeat;
    background-size: 100% 100%;
  }
  &-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    .value-box {
      font-weight: bold;
      .value {
        font-size: 30px;
        color: #10CBF1;
      }
    }
  }
}
</style>
