<template>
  <div class="param-container">
    <div class="param-title">当前炉次的设定工艺参数</div>
    <div class="param-list">
      <div class="param-list-row param-list-title">
        <span>参数名称</span>
        <span>参数值</span>
      </div>
      <div class="param-list-content">
        <div v-for="(item, index) in dataList" :key="index" class="param-list-row param-list-item">
          <span>{{ `${item.name}` }}</span>
          <span>{{ `${item.value}` }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ParamBoxComponent',
  props: {
    currFurnaceParaList: {
      type: Array,
      default: () => {
        return []
      } 
    },
  },
  data() {
    return {
    }
  },
  computed: {
    dataList() {
      const { currFurnaceParaList } = this
      const list = currFurnaceParaList.map(item => {
        return [{
          name: '记录号', // Data_ID
          value: item.dataId
        }, {
          name: '退火炉炉次', // Furnace_ID
          value: item.furnaceId
        }, {
          name: '退火炉编号', // Furnace_No
          value: item.furnaceNo
        }, {
          name: '退火炉名称', // Furnace_Name
          value: item.furnaceName
        }, {
          name: '曲线号', // Para_Num
          value: item.paraNum
        }, {
          name: '常温', // Common_T
          value: item.commonT
        }, {
          name: '分段号', // Seg_NO
          value: item.segNo
        }, {
          name: '运行升温时间', // RT_TIMEa
          value: item.rtTimea
        }, {
          name: '运行保温时间', // RT_TIMEb
          value: item.rtTimeb
        }, {
          name: '设定温度', // SP_TEMP
          value: item.spTemp
        }, {
          name: '设定升温时间', // SP_TIMEa
          value: item.spTimea
        }, {
          name: '设定保温时间', // SP_TIMEb
          value: item.spTimeb
        }, {
          name: '设定钢种', // SP_SteelType
          value: item.spSteeltype
        }, {
          name: '设定锭型', // SP_MODEL
          value: item.spModel
        }, {
          name: '记录更新时间', // Data_Datetime
          value: item.dataDatetime
        }]
      })
      return list.flat()
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
    gap: 15px;
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
    &-box {
      display: flex;
      flex-direction: column;
    }
    &-title {
      color: #6C9BFF;
      font-weight: bold;
    }
    &-content {
      height: 100%;
      overflow-y: auto;
    }
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
    &-item {
      color: #FFFAF9;
    }
  }
}
</style>
