<template>
  <div id="verBarChart" class="charts-container" />
</template>

<script>
import * as echarts from 'echarts';
import { onMounted, onUnmounted, watch } from 'vue'

export default {
  name: 'VerBarChartComponent',
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
      myChart = echarts.init(document.getElementById("verBarChart"));
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
        grid: {
          left: 0,
          right: 42,
          bottom: 0,
          top: 0,
          containLabel: true
        },
        tooltip: {
          // trigger: 'axis',
          backgroundColor: "#06031B",
          textStyle: {
            color: '#10CBF1'
          },
          borderWidth: 0,
          fontSize: 16,
          padding: [0],
          formatter: function(params) {
            var str = `<div style="background:url( ${require("@/assets/bar_tooltip_bg.png")}) no-repeat center center; background-size: 100% 100%; width: 112px; height: 65px; padding: 10px; display: flex; flex-direction: column; justify-content: space-between;">`;
            str += `<div> ${params.name}</div>`;
            str += `<div> 温度:  ${params.data}℃</div>`;
            str+='</div>'
            return str;
          }
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            color: '#FFFFFF',
            formatter: '{value}℃',
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: props.barChartData.map(item => item.name),
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#1786EF',
          }
        },
        series: [{
          type: 'bar',
          data: props.barChartData.map(item => item.value),
          barWidth: '16px',
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: '#1B63CC' }, // 0% 处的颜色
                { offset: 1, color: '#03DFFC' } // 100% 处的颜色
              ],
              global: false // 缺省为 false
            }
          },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}℃',
            color: '#10CBF1',
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
    width: 100%;
    height: 100%;
  }
</style>
