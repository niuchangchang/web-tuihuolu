<template>
  <div class="data-container">
    <div class="data-title">TB_Curr_Heat_Furnace_Data</div>
    <div class="data-list">
      <div v-for="(item, index) in list" :key="index" class="data-list-item">
        <span class="name">{{ `${item.name}` }}:</span>
        <span>{{ `${item.value}` }}</span>
      </div>
    </div>
    <div class="data-chart">
      <div class="gauge-box">
        <GaugeBoxComponent v-for="(item, index) in gaugeData" :key="index" :title="item.name" :value="item.value"></GaugeBoxComponent>
      </div>
      <div class="bar-box">
        <div class="bar-title">Furnace_T_Inner</div>
        <BarChartComponent :barChartData="barData"></BarChartComponent>
      </div>
    </div>
  </div>
</template>
<script>
import GaugeBoxComponent from '@/views/dashboard/components/GaugeBoxComponent.vue'
import BarChartComponent from '@/views/dashboard/components/charts/BarChartComponent.vue'

export default {
  name: 'DataBoxComponent',
  components: {
    GaugeBoxComponent,
    BarChartComponent
  },
  data() {
    return {
      list: [{
        name: 'Data_ID',
        value: 0
      }, {
        name: 'Furnace_ID',
        value: 0
      }, {
        name: 'Furnace_No',
        value: 0
      }, {
        name: 'Furnace_Name',
        value: 0
      }, {
        name: 'Para_Num',
        value: 0
      }, {
        name: 'Common_T',
        value: 0
      }, {
        name: 'Seg_NO',
        value: 0
      }, {
        name: 'RT_TIMEa',
        value: 0
      }, {
        name: 'RT_TIMEb',
        value: 0
      }, {
        name: 'SP_TEMP',
        value: 0
      }, {
        name: 'SP_TIMEa',
        value: 0
      }, {
        name: 'SP_TIMEb',
        value: 0
      }, {
        name: 'SP_SteelType',
        value: 0
      }, {
        name: 'SP_MODEL',
        value: 0
      }, {
        name: 'Data_Datetime',
        value: '2024-05-26 09:30:12'
      }],
      gaugeData: [{
        name: '总设定时间',
        value: 7.5
      }, {
        name: '总运行时间',
        value: 7.5
      }, {
        name: '总剩余时间',
        value: 7.5
      }],
      barData: [{
        name: 'Inner01',
        value: 165
      }, {
        name: 'Inner02',
        value: 165
      }, {
        name: 'Inner03',
        value: 165
      }, {
        name: 'Inner04',
        value: 165
      }, {
        name: 'Inner05',
        value: 165
      }, {
        name: 'Inner06',
        value: 165
      }, {
        name: 'Inner07',
        value: 165
      }]
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.data {
  &-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 48px 48px;
    background: url(@/assets/data_bg.png) 100% 100% no-repeat;
    background-size: 100% 100%;
  }
  &-title {
    display: flex;
    justify-content: center;
    font-size: 28px;
    font-weight: bold;
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin: 58px 0 34px;
    &-item {
      width: 270px;
      height: 48px;
      padding: 10px;
      font-size: 14px;
      line-height: 24px;
      color: #FFFAF9;
      background: url(@/assets/data_item_bg.png) 100% 100% no-repeat;
      background-size: 100% 100%;
      .name {
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
  &-chart {
    flex: 1;
    display: flex;
    gap: 50px;
    padding: 0 24px 24px;
    .gauge-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .bar-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
      .bar-title {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
