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
    },
    showDataZoom: {
      type: Boolean,
      default: true
    },
    heatParaDataList: {
      type: Array,
      default: () => {
        return []
      }
    },
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
    watch(
      () => props.showDataZoom,
      () => initChart()
    );
    const initChart = function () {
      myChart.setOption({
        color: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E8684A', '#6DC8EC'],
        grid: {
          left: 20,
          right: 32,
          bottom: props.showDataZoom ? 60 : 40,
          top: 100,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: "#06031B",
          textStyle: {
            color: '#10CBF1'
          },
          borderWidth: 0,
          fontSize: 16,
          padding: [0],
          formatter: function(params) {
            var str = `<div style="background:url( ${require("@/assets/line_tooltip_bg.png")}) no-repeat center center; background-size: 100% 100%; width: 148px; height: 185px; padding: 10px 12px 14px; display: flex; flex-direction: column; justify-content: space-between;">`;
            params.forEach(function (item) {
              str += `<div> ${item.seriesName}:  ${item.value}</div>`;
            });
            str+='</div>'
            return str;
          }
        },
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
        dataZoom: {
          show: props.showDataZoom
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
            ...item
          }
        })
      })

      myChart.getZr().on('click',function (params){
        var pointInPixel= [params.offsetX, params.offsetY];
        if (myChart.containPixel('grid',pointInPixel)) {
          var xIndex=myChart.convertFromPixel({seriesIndex:0},[params.offsetX, params.offsetY])[0];
          // console.log(`=====点击里第${xIndex}个，值为`, props.heatParaDataList[xIndex])
          const clickItem = props.heatParaDataList[xIndex]
          emit('lineClick', {
            paraId: clickItem.paraId,
            dataNo: clickItem.dataNo
          })
        }
      });

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
