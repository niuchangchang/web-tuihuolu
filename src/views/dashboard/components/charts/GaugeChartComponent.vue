<template>
  <div :id='`gaugeChart_${index}`' class="charts-container" />
</template>

<script>
import * as echarts from 'echarts';
import { onMounted, onUnmounted, watch } from 'vue'

export default {
  name: 'GaugeChartComponent',
  props: {
    index: {
      type: Number,
      default: 0
    },
    chartData: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    let myChart = null
    onMounted(() => {
      myChart = echarts.init(document.getElementById(`gaugeChart_${props.index}`));
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
        // backgroundColor: '#0E1327',
        series: [{
          name: "外部线",
          type: "gauge",
          radius: '100%', // 动态
          startAngle: 225,
          endAngle: -45,
          axisLine: {
            lineStyle: {
              color: [
                  [1, '#31F3FF'] // 动态
              ],
              width: 1
            }
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          detail: {
            show: false
          },
          title: {
            show: false,
          }
        },
        {
          name: '外部刻度',
          type: 'gauge',
          radius: '95%',
          min: 0,
          max: 200,
          splitNumber: 10,
          startAngle: 225,
          endAngle: -45,
          axisLine: {
            show: false,
            lineStyle: {
              color: [
                [1, 'rgba(0,0,0,0)']
              ],
            }
          },
          axisLabel: {
            show: true,
            color: '#31F3FF',
            fontSize: 6, // 动态
            distance: -20, // 动态
          },
          axisTick: {
            show: false,
          }, 
          splitLine: {
            show: false,
          },
        },
        {
          name: "内部宽线条",
          type: "gauge",
          radius: '78%',
          startAngle: 225,
          endAngle: -45,
          axisLine: {
            lineStyle: {
              color: [
                [1, '#122B3C']
              ],
              width: 12
            }
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          detail: {
            show: false
          },
          title: {
            show: false,
          }
        },
        {
          name: "内部细线条",
          type: "gauge",
          radius: '50%',
          z: 4,
          startAngle: 225,
          endAngle: -45,
          axisLine: {
            lineStyle: {
              color: [
                [1, '#122B3C']
              ],
              width: 2
            }
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          detail: {
            show: false
          },
          title: {
            show: false,
          }
        },
        // {
        //   name: "间隔条形",
        //   type: "gauge",
        //   radius: '62%',
        //   z: 3,
        //   splitNumber: 35,
        //   startAngle: 225,
        //   endAngle: -45,
        //   axisLine: {
        //     lineStyle: {
        //       opacity: 0
        //     }
        //   },
        //   axisLabel: {
        //     show: false,
        //   },
        //   axisTick: {
        //     show: true,
        //     length: 50,
        //     splitNumber: 1,
        //     lineStyle: {
        //       color: '#122B3C',
        //       width: 1
        //     }
        //   },
        //   splitLine: {
        //     show: false
        //   },
        //   detail: {
        //     show: false
        //   },
        //   title: {
        //     show: false,
        //   }
        // },
        {
          name: "数据",
          type: "gauge",
          radius: '72%',
          z: 3,
          startAngle: 225,
          max: 200,
          endAngle: -45,
          axisLine: {
            lineStyle: {
              color: [
                [props.chartData / 200, '#31F3FF'], // 动态
                [1, '#185363']
              ],
              width: 6
            }
          },
          tooltip: {
            show: false  
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false
          },
          detail: {
            show: false,
            fontWeight: 'bold',
            fontSize: 14
          },
          pointer: {
            show: true,
            width: 3,
            itemStyle: {
              color: '#31F3FF'
            }
          },
          data: [{
            name: '',
            value: props.chartData
          }]
        },
        //内圆
        { 
          type: 'pie',
          radius: '30%',
          center: ['50%', '50%'],
          z: 1,
          itemStyle: {
            color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
              offset: 0,
              color: 'rgba(49,243,255,0.6)'
            },
            {
              offset: .5,
              color: 'rgba(49,243,255,0.2)'
            },
            {
              offset: 1,
              color: 'rgba(49,243,255,0.05)'
            }], false),
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
          hoverAnimation: false,
          label: {
            show: false,
          },
          tooltip: {
            show: false
          },
          data: [100],
          animationType: "scale"
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
    width: 105px;
    height: 105px;
  }
</style>
