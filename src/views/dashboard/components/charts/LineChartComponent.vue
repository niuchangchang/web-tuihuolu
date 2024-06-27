<template>
  <div id="lineChart" class="charts-container" />
</template>

<script>
import * as echarts from 'echarts';
import { onMounted, onUnmounted, watch } from 'vue'
import _ from 'lodash';

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
        color: ['#FF260F', '#0AFF27', '#FFF607', '#01C0FF', '#FF02ED', '#00F8FF'],
        // color: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E8684A', '#6DC8EC'],
        grid: {
          left: 20,
          right: 32,
          // bottom: props.showDataZoom ? 60 : 40,
          bottom: 40,
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
            var str = `<div style="background:url( ${require("@/assets/line_tooltip_bg.png")}) no-repeat center center; background-size: 100% 100%; width: 200px; height: 220px; padding: 10px 12px 14px; display: flex; flex-direction: column; justify-content: space-between;">`;
            params.forEach(function (item) {
              str += `<div style="color:${item.color||''};font-size:20px;">${item.seriesName}:  ${item.value||'0'}</div>`;
            });
            str+='</div>'
            return str;
          }
        },
        toolbox:{
          feature:{
            dataZoom:{
              show: true,
              brushStyle: {
                color: "rgba(14, 45, 96, 0.7)",
                borderColor: '#10CBF1'
              }
            }
          },
          iconStyle: {
            borderColor: '#FFFFFF'
          },
          itemSize: 20,
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
          show: props.showDataZoom,
          type: 'inside'
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
          max: 1500,
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
          //console.log(item);
          return {
            type: 'line',
            symbol: 'none',
            ...item
          }
        })
      })

      myChart.getZr().on('click', function (params){
        params.event.stopPropagation(); 
        var pointInPixel= [params.offsetX, params.offsetY];
        if (myChart.containPixel('grid',pointInPixel)) {
          var xIndex=myChart.convertFromPixel({seriesIndex:0},[params.offsetX, params.offsetY])[0];
          // console.log(`=====点击里第${xIndex}个，值为`, props.heatParaDataList[xIndex])
          const clickItem = props.heatParaDataList[xIndex]
          debounceEmit(clickItem, emit);
        }
      });

      myChart.resize()
    }
    let lastClickTime = 0;
    const clickDelay = 1000;
    const debounceEmit = _.debounce((clickItem, emit) => {
      const currentTime = new Date().getTime();
        if (currentTime - lastClickTime < clickDelay) {
          return; // 如果点击间隔时间太短，则直接返回
         }
      lastClickTime = currentTime; // 更新最后点击时间
      emit('lineClick', {
        paraId: clickItem.paraId,
        dataNo: clickItem.dataNo
      });
    });
    return {
      initChart,
      debounceEmit
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
