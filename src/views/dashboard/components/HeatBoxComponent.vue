<template>
  <div class="heat-container">
    <div class="heat-title">
      <img src="@/assets/heat_title_left.png" alt="">
      <span>横切面图</span>
      <img src="@/assets/heat_title_right.png" alt="">
    </div>    
    <div class="heat-content">
      <div class="heat-chart">
        <div class="current-temp">当前温度：{{ temp || '-' }}℃</div>
        <HeatChartComponent :chartData="chartData" @heatClick="handleClickHeat"></HeatChartComponent>
      </div>
      <div class="heat-list">
        <!-- <div v-for="(item, index) in list" :key="index" :class="['heat-list-item', {'heat-list-item-selected': selectIndexList.includes(item)}]" @click="handleClickType(item)"> -->
        <div v-for="(item, index) in list" :key="index" :class="['heat-list-item']">
          <span>{{ `${item}` }}</span>
        </div>
      </div>
    </div>  
  </div>
</template>
<script>
import HeatChartComponent from '@/views/dashboard/components/charts/HeatChartComponent.vue'

export default {
  name: 'HeatBoxComponent',
  components: {
    HeatChartComponent
  },
  props: {
    heatSectionData: {
      type: Array,
      default: () => {
        return []
      } 
    },
  },
  data() {
    return {
      temp: null,
      list: ['工艺炉温', '计算炉温', '表面温度', '重心温度', '中心温度', '生产炉温'],
      selectIndexList: []
    }
  },
  computed: {
    chartData() {
      const { heatSectionData } = this
      // const list = heatSectionData
      //     .map(function (item) {
      //     return [Number(item[1]), Number(item[0]), Number(item[2]) || '-'];
      // });
      const list = heatSectionData
      return list
    }
  },
  methods: {
    // handleClickType(name) {
    //   const findIndex = this.selectIndexList.findIndex(item => item === name)
    //   if(findIndex !== -1) {
    //     this.selectIndexList.splice(findIndex, 1)
    //   } else {
    //     this.selectIndexList.push(name)
    //   }
    // },
    handleClickHeat(e) {
      this.temp = e
    }
  }
}
</script>
<style lang="scss" scoped>
.heat {
  &-container {
    width: 520px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 18px;
    background: url(@/assets/card_small_bg.png) 100% 100% no-repeat;
    background-size: 100% 100%;
  }
  &-title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    img {
      width: 82px;
      height: 22px;
    }
  }
  &-content {
    flex: 1;
    display: flex;
    gap: 35px;
    padding-top: 20px;
  }
  &-chart {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    .current-temp {
      position: relative;
      padding-left: 24px;
      font-size: 16px;
      color: #1C61F8;
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 24px;
        height: 24px;
        background: url(@/assets/temp_icon.png) 100% 100% no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  &-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
    &-title {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
    }
    &-item {
      position: relative;
      width: 140px;
      height: 40px;
      padding-left: 50px;
      line-height: 40px;
      background: url(@/assets/heat_card_bg.png) 100% 100% no-repeat;
      background-size: 100% 100%;
      font-size: 14px;
      // color: #436AC8;
      color: #77F7FF;
      cursor: pointer;
      &-selected {
        color: #77F7FF;
        &::before {
          position: absolute;
          top: 0px;
          left: 14px;
          content: '✓';
          color: #77F7FF;
        }
      }
    }
  }
}
</style>
