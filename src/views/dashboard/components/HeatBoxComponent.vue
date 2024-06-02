<template>
  <div class="heat-container">
    <div class="heat-title">
      <img src="@/assets/heat_title_left.png" alt="">
      <span>横切面图</span>
      <img src="@/assets/heat_title_right.png" alt="">
    </div>    
    <div class="heat-content">
      <div class="heat-chart"></div>
      <div class="heat-list">
        <div class="heat-list-title">test</div>
        <div v-for="(item, index) in list" :key="index" :class="['heat-list-item', {'heat-list-item-selected': item.status === 1}]">
          <span>{{ `${item.name}` }}</span>
        </div>
      </div>
    </div>  
  </div>
</template>
<script>
export default {
  name: 'HeatBoxComponent',
  data() {
    return {
      list: [{
        name: '工艺炉温',
        status: 1
      }, {
        name: '计算炉温',
        status: 1
      }, {
        name: '表面温度',
        status: 1
      }, {
        name: '重心温度',
        status: 1
      }, {
        name: '中心温度',
        status: 0
      }, {
        name: '生产炉温',
        status: 0
      }]
    }
  },
  methods: {
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
  }
  &-chart {
    flex: 1;
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
      color: #436AC8;
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
