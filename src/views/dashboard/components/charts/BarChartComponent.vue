<template>
  <div ref="barChart" id="barChart" class="charts-container" />
</template>

<script>
import * as echarts from 'echarts';
import { onMounted, onUnmounted, watch } from 'vue'

export default {
  name: 'BarChartComponent',
  props: {
    barChartData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  setup(props) {
    let myChart = null
    onMounted(() => {
      myChart = echarts.init(document.getElementById("barChart"));
      initChart();
    });
    onUnmounted(() => {
      echarts.dispose;
    });
    watch(
      () => props.barChartData,
      () => initChart()
    );
    const initChart = function () {
      myChart.setOption({
        color: 'rgba(91,143,249,0.85)',
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 10,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: props.barChartData.map(item => item.name),
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#FFFFFF',
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#FFFFFF',
          },
          splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
          }
        },
        series: [{
          type: 'bar',
          data: props.barChartData.map(item => item.value),
          barWidth: '40%',
          label: {
            show: true,
            position: 'top',
            formatter: '{c}℃',
            color: '#FFFFFF',
          }
        }]
      })

      myChart.resize()
    }
    return {
      initChart
    }
  }
}
</script>
<style lang="scss" scoped>
  .charts-container {
    width: 800px;
    flex: 1;
  }
</style>
