<template>
  <div class="data-container">
    <div class="data-title">TB_Curr_Heat_Furnace_Data</div>
    <div class="data-list">
      <div v-for="(item, index) in dataList" :key="index" class="data-list-item">
        <span class="name">{{ `${item.name}` }}: </span>
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
  props: {
    currFurnaceParaInfo: {
      type: Object,
      default: () => {
        return {}
      } 
    },
  },
  data() {
    return {
    }
  },
  computed: {
    dataList() {
      const { currFurnaceParaInfo } = this
      const list = [{
        name: 'Data_ID',
        value: currFurnaceParaInfo?.dataId
      }, {
        name: 'Furnace_ID',
        value: currFurnaceParaInfo?.furnaceId
      }, {
        name: 'Furnace_No',
        value: currFurnaceParaInfo?.furnaceNo
      }, {
        name: 'Furnace_Name',
        value: currFurnaceParaInfo?.furnaceName
      }, {
        name: 'Furnace_T',
        value: currFurnaceParaInfo?.furnaceT
      }, {
        name: 'Gas_Press',
        value: currFurnaceParaInfo?.gasPress
      }, {
        name: 'Gas_flux',
        value: currFurnaceParaInfo?.gasFlux
      }, {
        name: 'Gas_Temp',
        value: currFurnaceParaInfo?.gasTemp
      }, {
        name: 'Gas Accum',
        value: currFurnaceParaInfo?.gasAccum
      }, {
        name: 'PCV503 PV',
        value: currFurnaceParaInfo?.pcv503Pv
      }, {
        name: 'Start stop_flag',
        value: currFurnaceParaInfo?.startStopFlag
      }, {
        name: 'Start_Stop_time',
        value: currFurnaceParaInfo?.startStopTime
      }, {
        name: 'PONO',
        value: currFurnaceParaInfo?.pono
      }, {
        name: 'HTNO',
        value: currFurnaceParaInfo?.htno
      }, {
        name: 'MoldModel',
        value: currFurnaceParaInfo?.moldModel
      }, {
        name: 'MoldNumber',
        value: currFurnaceParaInfo?.moldNumber
      }, {
        name: 'SteelType',
        value: currFurnaceParaInfo?.steelType
      }, {
        name: 'Para Num',
        value: currFurnaceParaInfo?.paraNum
      }, {
        name: 'Heat TO',
        value: currFurnaceParaInfo?.heatT0
      }, {
        name: 'Data Datetime',
        value: currFurnaceParaInfo?.dataDatetime
      }]
      return list
    },
    gaugeData() {
      const { currFurnaceParaInfo } = this
      const list = [{
        name: '总设定时间',
        value: currFurnaceParaInfo?.allSpTime
      }, {
        name: '总运行时间',
        value: currFurnaceParaInfo?.allRtTime
      }, {
        name: '总剩余时间',
        value: currFurnaceParaInfo?.allRemainTime
      }]
      return list
    },
    barData() {
      const { currFurnaceParaInfo } = this
      const list = [{
        name: 'Inner01',
        value: currFurnaceParaInfo?.furnaceTInner01
      }, {
        name: 'Inner02',
        value: currFurnaceParaInfo?.furnaceTInner02
      }, {
        name: 'Inner03',
        value: currFurnaceParaInfo?.furnaceTInner03
      }, {
        name: 'Inner04',
        value: currFurnaceParaInfo?.furnaceTInner04
      }, {
        name: 'Inner05',
        value: currFurnaceParaInfo?.furnaceTInner05
      }, {
        name: 'Inner06',
        value: currFurnaceParaInfo?.furnaceTInner06
      }, {
        name: 'Inner07',
        value: currFurnaceParaInfo?.furnaceTInner07
      }, {
        name: 'Inner08',
        value: currFurnaceParaInfo?.furnaceTInner08
      }]
      return list
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
    justify-content: space-between;
    gap: 16px;
    margin: 48px 0 34px;
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
        font-size: 14px;
      }
    }
  }
  &-chart {
    flex: 1;
    display: flex;
    gap: 50px;
    padding: 0 24px 20px;
    .gauge-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 16px;
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
