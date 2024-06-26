<template>
  <div class="data-container">
    <div class="data-title">当前炉次的生产数据</div>
    <div class="data-list">
      <div v-for="(item, index) in dataList" :key="index" class="data-list-item">
        <span class="name">{{ `${item.name}` }}: </span>
        <span>{{ `${item.value}` }}</span>
      </div>
    </div>
    <div class="data-chart">
      <div class="gauge-box">
        <GaugeBoxComponent v-for="(item, index) in gaugeData" :key="index" :index="index" :title="item.name" :value="item.value"></GaugeBoxComponent>
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
        name: '记录号', // Data_ID
        value: currFurnaceParaInfo?.dataId
      }, {
        name: '退火炉炉次', // Furnace_ID
        value: currFurnaceParaInfo?.furnaceId
      }, {
        name: '退火炉编号', // Furnace_No
        value: currFurnaceParaInfo?.furnaceNo
      }, {
        name: '退火炉名称', // Furnace_Name
        value: currFurnaceParaInfo?.furnaceName
      }, {
        name: '内部测温点平均值', // Furnace_T
        value: currFurnaceParaInfo?.furnaceT
      }, {
        name: '天然气压力', // Gas_Press
        value: currFurnaceParaInfo?.gasPress
      }, {
        name: '瞬时流量', // Gas_flux
        value: currFurnaceParaInfo?.gasFlux
      }, {
        name: '天然气温度', // Gas_Temp
        value: currFurnaceParaInfo?.gasTemp
      }, {
        name: '累计流量', // Gas_Accum
        value: currFurnaceParaInfo?.gasAccum
      }, {
        name: '炉膛压力', // PCV503_PV
        value: currFurnaceParaInfo?.pcv503Pv
      }, {
        name: '退火开始/结束', // Start_stop_flag
        value: currFurnaceParaInfo?.startStopFlag
      }, {
        name: '开停时间', // Start_Stop_time
        value: currFurnaceParaInfo?.startStopTime
      }, {
        name: 'PONO号', // PONO
        value: currFurnaceParaInfo?.pono
      }, {
        name: 'HTNO炉号', // HTNO
        value: currFurnaceParaInfo?.htno
      }, {
        name: '锭盘编号', // MoldModel
        value: currFurnaceParaInfo?.moldModel
      }, {
        name: '数量', // MoldNumber
        value: currFurnaceParaInfo?.moldNumber
      }, {
        name: '钢种', // SteelType
        value: currFurnaceParaInfo?.steelType
      }, {
        name: '曲线号', // Para_Num
        value: currFurnaceParaInfo?.paraNum
      }, {
        name: '动态变化炉温', // Heat_TO
        value: currFurnaceParaInfo?.heatT0
      }, {
        name: '记录更新时间', // Data_Datetime
        value: currFurnaceParaInfo?.dataDatetime
      }, {
        name: '断面类型', // Section_Type
        value: currFurnaceParaInfo?.sectionType ? '矩形' : '圆'
      }, {
        name: '断面宽', // Section_a
        value: currFurnaceParaInfo?.sectionA
      }, {
        name: '断面厚', // Section_b
        value: currFurnaceParaInfo?.sectionB
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
        name: '内部测温点1', // Furnace_T_Inner01
        value: currFurnaceParaInfo?.furnaceTInner01
      }, {
        name: '内部测温点2', // Furnace_T_Inner02
        value: currFurnaceParaInfo?.furnaceTInner02
      }, {
        name: '内部测温点3', // Furnace_T_Inner03
        value: currFurnaceParaInfo?.furnaceTInner03
      }, {
        name: '内部测温点4', // Furnace_T_Inner04
        value: currFurnaceParaInfo?.furnaceTInner04
      }, {
        name: '内部测温点5', // Furnace_T_Inner05
        value: currFurnaceParaInfo?.furnaceTInner05
      }, {
        name: '内部测温点6', // Furnace_T_Inner06
        value: currFurnaceParaInfo?.furnaceTInner06
      }, {
        name: '内部测温点7', // Furnace_T_Inner07
        value: currFurnaceParaInfo?.furnaceTInner07
      }, {
        name: '内部测温点8', // Furnace_T_Inner08
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
    row-gap: 16px;
    column-gap: 18px;
    margin: 40px 0 30px;
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 274px;
      height: 48px;
      padding: 10px;
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
      color: #FFFAF9;
      background: url(@/assets/data_item_bg.png) 100% 100% no-repeat;
      background-size: 100% 100%;
      // .name {
      //   font-weight: bold;
      //   font-size: 16px;
      // }
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
