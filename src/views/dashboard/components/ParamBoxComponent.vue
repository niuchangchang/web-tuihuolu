<template>
  <div class="param-container">
    <div class="param-title">TB_Curr_Furnace_Para</div>
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
          name: 'Data_ID',
          value: item.dataId
        }, {
          name: 'Furnace_ID',
          value: item.furnaceId
        }, {
          name: 'Furnace_No',
          value: item.furnaceNo
        }, {
          name: 'Furnace_Name',
          value: item.furnaceName
        }, {
          name: 'Para_Num',
          value: item.paraNum
        }, {
          name: 'Common_T',
          value: item.commonT
        }, {
          name: 'Seg_NO',
          value: item.segNo
        }, {
          name: 'RT_TIMEa',
          value: item.rtTimea
        }, {
          name: 'RT_TIMEb',
          value: item.rtTimeb
        }, {
          name: 'SP_TEMP',
          value: item.spTemp
        }, {
          name: 'SP_TIMEa',
          value: item.spTimea
        }, {
          name: 'SP_TIMEb',
          value: item.spTimeb
        }, {
          name: 'SP_SteelType',
          value: item.spSteeltype
        }, {
          name: 'SP_MODEL',
          value: item.spModel
        }, {
          name: 'Data_Datetime',
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
