<template>
  <div class="search-container">
    <!-- 这个搜索控制的竟是折线图 -->
    <div class="search-box">
      <div class="search-item">
        <span>退火炉编号</span>
        <el-select v-model="furnaceNo" placeholder="" clearable size="small">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <!-- <div class="search-item">
        <span>退火炉炉次</span>
        <el-input v-model="furnaceId" size="small" placeholder=""></el-input>
      </div> -->
      <div class="search-item">
        <span>日期</span>
        <el-date-picker v-model="date" type="date" :disabled-date="disabledDate" value-format="YYYY-MM-DD" size="small" placeholder="请选择"></el-date-picker>
      </div>
      <!-- <div class="search-item"> -->
        <el-button type="primary" size="small" icon="el-icon-search" class="search-item-button" @click="handleSearch">查询</el-button>
      <!-- </div> -->
    </div>
    <div class="search-list">
      <div v-for="(item, index) in dataList" :key="index" class="search-list-row search-list-item">
        <span>{{ `${item.name}` }}</span>
        <span>{{ `${item.value}` }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchBoxComponent',
  props: {
    heatParaDataInfo: {
      type: Object,
      default: () => {
        return {}
      } 
    },
  },
  data() {
    return {
      furnaceNo: '',
      options: [],
      // furnaceId: '',
      date: '',
    }
  },
  computed: {
    dataList() {
      const { heatParaDataInfo } = this
      const list = [{
        name: '记录号', // Para_ID
        value: heatParaDataInfo?.paraId
      }, {
        name: '退火炉炉次', // Furnace_ID
        value: heatParaDataInfo?.furnaceId
      }, {
        name: '退火炉编号', // Furnace_No
        value: heatParaDataInfo?.furnaceNo
      }, {
        name: '曲线号', // Para_Num
        value: heatParaDataInfo?.paraNum
      }, {
        name: 'Steel_Grade', // Steel_Grade
        value: heatParaDataInfo?.steelGrade
      }, {
        name: '数据点序号', // Date_NO
        value: heatParaDataInfo?.dataNo
      }, {
        name: '记录时间', // Split_Time
        value: heatParaDataInfo?.splitTime
      }, {
        name: '记录更新时间', // Data_Datetime
        value: heatParaDataInfo?.dataDatetime
      }]
      return list
    }
  },
  mounted() {
    this.options = []
    for (let index = 0; index < 10; index++) {
      this.options.push({
        value: index + 1,
        label: `${index + 1}号退火炉`
      })
    }
  },
  methods: {
    disabledDate(date) {
      return date.getTime() > new Date().getTime()
    },
    handleSearch() {
      this.$emit('searchChange', {
        furnaceNo: this.furnaceNo,
        date: this.date,
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.search {
  &-container {
    width: 520px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 18px;
    background: url(@/assets/card_small_bg.png) 100% 100% no-repeat;
    background-size: 100% 100%;
  }
  &-box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 15px;
    row-gap: 8px;
  }
  &-item {
    width: 190px;
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    span {
      // width: 80px;
      white-space: nowrap;
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
    border: 1px solid #455EBD;
    &-row {
      display: flex;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      span {
        flex: 1;
        text-align: center;
        &:nth-child(1) {
          border-right: 1px solid #4260C0;
        }
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
