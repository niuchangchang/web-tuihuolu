<template>
  <div id="heatChart" class="charts-container" />
</template>

<script>
import * as echarts from 'echarts';
import { onMounted, onUnmounted, watch } from 'vue'

export default {
  name: 'HeatChartComponent',
  props: {
    chartData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  setup(props, { emit }) {
    let myChart = null
    
    onMounted(() => {
      myChart = echarts.init(document.getElementById("heatChart"));
      initChart();
    });
    onUnmounted(() => {
      echarts.dispose;
    });
    watch(
      () => props.chartData,
      () => initChart()
    );
    const initChart = function () {
      myChart.setOption({
        color: 'rgba(91,143,249,0.85)',
        grid: {
          left: 80,
          right: 0,
          bottom: 10,
          top: 20,
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
            var str = `<div style="background:url( ${require("@/assets/heat_tooltip_bg.png")}) no-repeat center center; background-size: 100% 100%; width: fit-content; height: 24px; line-height: 24px; padding: 0 8px; display: flex; flex-direction: column; justify-content: space-between;">`;
            str += `<div>${params.data[2]}℃</div>`;
            str+='</div>'
            return str;
          }
        },
        xAxis: {
          type: 'category',
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255, 255, 255, 0.5)"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
        },
        yAxis: {
          type: 'category',
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255, 255, 255, 0.5)"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
        },
        visualMap: {
          // min: 0,
          max: 1200,
          calculable: true,
          orient: 'vertical',
          left: 0,
          bottom: 0,
          itemHeight: 220,
          textStyle: {
            color: "#5B8FF9"
          }
        },
        series: [{
          type: 'heatmap',
          data: props.chartData,
          // emphasis: {
          //   itemStyle: {
          //     shadowBlur: 10,
          //     shadowColor: 'rgba(0, 0, 0, 0.5)'
          //   }
          // }
        }]
      })

      myChart.on('mouseover',function (params){
        emit('heatClick', params.value?.[2])
      })
      myChart.on('mouseout',function (){
        emit('heatClick', null)
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
    // flex: 1;
  }
</style>
