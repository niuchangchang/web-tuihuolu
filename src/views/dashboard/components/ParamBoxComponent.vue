<template>
  <div class="param-container">
    <div class="param-title">TB_Curr_Furnace_Para</div>
    <div class="param-list">
      <div class="param-list-row param-list-title">
        <span>参数名称</span>
        <span>参数值</span>
      </div>
      <div v-for="(item, index) in list" :key="index" class="param-list-row param-list-item">
        <span>{{ `${item.name}` }}</span>
        <span>{{ `${item.value}` }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ParamBoxComponent',
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
        value: '2024-05-26  09:30:12'
      }]
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.param {
  &-container {
    width: 568px;
    display: flex;
    flex-direction: column;
  }
  &-title {
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 40px;
    font-size: 22px;
    font-weight: bold;
    background: url(@/assets/param_title_bg.png) 100% 100% no-repeat;
    background-size: 100% 100%;
  }
  &-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    background: rgba(82,125,243,0.14);
    &-row {
      display: flex;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      span {
        flex: 1;
        text-align: center;
      }
      &:nth-child(even) {
        background: url(@/assets/param_item_bg.png) 100% 100% no-repeat;
        background-size: 100% 100%;
      }
    }
    &-title {
      color: #6C9BFF;
      font-weight: bold;
    }
    &-item {
      color: #FFFAF9;
    }
  }
}
</style>
