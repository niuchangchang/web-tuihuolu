<template>
  <div class="select-container">
    <div v-for="item in selectNum" :key="item" :class="['select-item', {'select-item-selected': selectedIndex === item}]" @click="handleSelect(item)">
      {{ `${item}号退火炉` }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  data() {
    return {
      selectNum: 10,
      selectedIndex: 1
    }
  },
  methods: {
    handleSelect(item) {
      this.selectedIndex = item
    }
  }
}
</script>
<style lang="scss" scoped>
.select {
  &-container {
    height: 40px;
    display: flex;
    justify-content: space-evenly;
  }
  &-item {
    position: relative;
    color: #8A8A9A;
    font-weight: bold;
    font-size: 18px;
    padding-left: 20px;
    cursor: pointer;
    &::before {
      position: absolute;
      top: 6px;
      left: 0;
      width: 12px;
      height: 12px;
      content: '';
      background: #8A8A9A;
    }
    &-selected {
      color: #4CA2FF;
      &::before {
        background: #77F7FF;
      }
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 88px;
        height: 6px;
        content: '';
        background: url(@/assets/selected_icon.png) 100% 100% no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
