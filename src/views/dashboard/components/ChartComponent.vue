<template>
  <div class="app-box">
    <div class="top-box">
      <HeatBoxComponent></HeatBoxComponent>
      <SearchBoxComponent></SearchBoxComponent>
      <ChartBoxComponent></ChartBoxComponent>
    </div>
    <div class="bottom-box">
      <div class="switch-box">
        <div class="switch-item">
          <span>数据实时更新</span>
          <el-switch v-model="updateData"></el-switch>
        </div>
        <div class="switch-item">
          <span>游标显示</span>
          <el-switch v-model="updateData"></el-switch>
        </div>
      </div>
      <LineChartComponent :chartData="chartData"></LineChartComponent>
    </div>
  </div>
</template>

<script>
import HeatBoxComponent from '@/views/dashboard/components/HeatBoxComponent.vue'
import SearchBoxComponent from '@/views/dashboard/components/SearchBoxComponent.vue'
import ChartBoxComponent from '@/views/dashboard/components/ChartBoxComponent.vue'
import LineChartComponent from '@/views/dashboard/components/charts/LineChartComponent.vue'

export default {
  name: 'ChartComponent',
  components: {
    HeatBoxComponent,
    SearchBoxComponent,
    ChartBoxComponent,
    LineChartComponent
  },
  data() {
    return {
      updateData: true,
      chartData: [{
        name: 'Inner01',
        data: [100, 200, 300, 200, 100, 50, 160]
      }, {
        name: 'Inner02',
        data: [200, 300, 200, 100, 500, 150, 260]
      }, {
        name: 'Inner03',
        data: [300, 230, 300, 200, 100, 50, 160]
      }, {
        name: 'Inner04',
        data: [200, 120, 100, 200, 100, 50, 160]
      }, {
        name: 'Inner05',
        data: [50, 210, 200, 200, 100, 50, 160]
      }, {
        name: 'Inner06',
        data: [120, 160, 250, 200, 100, 50, 160]
      }, {
        name: 'Inner07',
        data: [150, 260, 130, 200, 100, 50, 160]
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.top-box {
  height: 370px;
  display: flex;
  gap: 28px;
}
.bottom-box {
  position: relative;
  flex: 1;
  width: 100%;
  padding: 28px 40px;
  background: url(@/assets/card_middle_bg.png) 100% 100% no-repeat;
  background-size: 100% 100%;
  font-size: 14px;
}
.switch {
  &-box {
    position: absolute;
    top: 28px;
    left: 28px;
    display: flex;
    gap: 60px;
    align-items: center;
    z-index: 2;
  }
  &-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
