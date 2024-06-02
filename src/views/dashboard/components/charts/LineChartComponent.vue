<template>
  <div id="lineChart" class="charts-container" />
</template>

<script>
import * as echarts from 'echarts';
import { onMounted, onUnmounted, watch } from 'vue'

export default {
  name: 'LineChartComponent',
  props: {
    chartData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props, { emit }) {
    let myChart = null
    onMounted(() => {
      myChart = echarts.init(document.getElementById("lineChart"));
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
        color: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E8684A', '#6DC8EC'],
        grid: {
          left: 0,
          right: 0,
          bottom: 40,
          top: 100,
          containLabel: true
        },
        // tooltip: {
        //   show: true,
        //   trigger: 'axis',
        //   axisPointer: {
        //     type: 'none',
        //   },
        //   backgroundColor: 'rgba(0,35,68,0.9)',
        //   borderColor: '#0085FF',
        //   textStyle: {
        //     color: '#A1B2CF'
        //   },
        //   fontSize: 16,
        //   padding: [14, 16],
        //   formatter: function (params) {
        //     var result = ''
        //     result += '<div style="display: flex; flex-direction: column;">'
        //     result += '<div style="margin-bottom: 5px;">'
        //     result += params[0].name + '月'
        //     result += '</div>'
        //     result += '<div style="flex: 1; display: flex; justify-content: space-between; margin-bottom: 5px;"><div style="flex: 1; margin-right: 10px;">'
        //     result += params[0].marker + params[0].seriesName
        //     result += '</div><div style="color: #FFFFFF;">'
        //     result += formatNumber(params[0].data, '元') + '元'
        //     result += '</div></div>'
        //     result += '<div style="flex: 1; display: flex; justify-content: space-between"><div style="flex: 1; margin-right: 10px;">'
        //     result += params[2].marker + params[2].seriesName
        //     result += '</div><div style="color: #FFFFFF;">'
        //     result += params[2].data ? (params[2].data + '%') : params[2].data
        //     result += '</div></div></div>'
        //     return result
        //   },
        //   label: {
        //     show: false
        //   },
        // },
        legend: {
          textStyle: {
            color: '#8C8C8C',
            fontSize: '14px'
          },
          itemWidth: 14,
          itemHeight: 14,
          borderRadius: 2,
          itemGap: 22,
          icon: 'rect'
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            color: '#FFFFFF',
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: [{
          type: 'value',
          axisLabel: {
            color: '#FFFFFF',
          },
          splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          }
        }],
        series: props.chartData.map(item => {
          return {
            type: 'line',
            symbol: 'none',
            // itemStyle: {
            //   color: '#E1D019',
            // },
            ...item
          }
        })
      })

      myChart.on('click', function (params) {
        emit('mix-month-change', {
          month: params.name.slice(0, params.name.indexOf('月')),
        })
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
  height: 540px;
}
</style>
