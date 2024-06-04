<template>
  <div class="search-container">
    <div class="search-box">
      <div class="search-item">
        <span>Furnace_No</span>
        <el-input v-model="furnaceNo" size="small" placeholder=""></el-input>
      </div>
      <div class="search-item">
        <span>Furnace_ID</span>
        <el-input v-model="furnaceId" size="small" placeholder=""></el-input>
      </div>
      <div class="search-item">
        <span>Date</span>
        <el-input v-model="date" size="small" placeholder=""></el-input>
      </div>
      <div class="search-item">
        <el-button type="primary" size="small" icon="el-icon-search" class="search-item-button">查询</el-button>
      </div>
    </div>
    <div class="search-list">
      <div v-for="(item, index) in list" :key="index" class="search-list-row search-list-item">
        <span>{{ `${item.name}` }}</span>
        <span>{{ `${item.value}` }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchBoxComponent',
  data() {
    return {
      furnaceNo: '',
      furnaceId: '',
      date: '',
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
.search {
  &-container {
    width: 520px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 18px;
    background: url(@/assets/card_small_bg.png) 100% 100% no-repeat;
    background-size: 100% 100%;
  }
  &-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0 12px;
  }
  &-item {
    width: 220px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    span {
      width: 80px;
      text-align: right;
    }
    &-button {
      position: relative;
      background: #5B8FF9;
      &::before {
        position: absolute;
        top: 5px;
        left: 12px;
        content: '';
        width: 12px;
        height: 12px;
        background: url(@/assets/search_icon.png) 100% 100% no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  &-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    &-row {
      display: flex;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      span {
        flex: 1;
        text-align: center;
      }
      &:nth-child(odd) {
        background: url(@/assets/param_item_bg.png) 100% 100% no-repeat;
        background-size: 100% 100%;
      }
    }
    &-item {
      color: #FFFAF9;
    }
  }
}
</style>
