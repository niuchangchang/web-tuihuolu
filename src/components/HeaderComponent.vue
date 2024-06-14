<template>
  <div class="header-container">
    <div class="header-content">
      <div class="header-left">
        <div class="logo"></div>
        <div class="tab-box">
          <div :class="['tab-item', 'tab-item1', {'tab-item1-selected': selectedIndex === 1}]" @click="handleSelect(1)">当前炉座的详细内容</div>
          <div :class="['tab-item', 'tab-item2', {'tab-item2-selected': selectedIndex === 2}]" @click="handleSelect(2)">图形</div>
        </div>
      </div>
      <div class="name">{{ title }}</div>
      <div class="header-right">
        <div class="date">
          <span>{{ timeValue }}</span>
          <span>{{ dateValue }}</span>
          <span>{{ weekValue }}</span>
        </div>
        <div class="divide"></div>
        <div class="logo2"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue'

defineProps({
  title: {
    type: String,
    default: '标题'
  },
});

const emit = defineEmits(['tabChange'])

onMounted(() => {
  updateDateTime();
  setInterval(updateDateTime, 1000);
})

const dateValue = ref('')
const timeValue = ref('')
const weekValue = ref('')
const updateDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const daysOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  dateValue.value = `${year}-${month}-${day}`
  timeValue.value = `${hours}:${minutes}:${seconds}`
  weekValue.value = daysOfWeek[now.getDay()];
}

const selectedIndex = ref(1);
const handleSelect = (index) => {
  selectedIndex.value = index
  emit("tabChange", selectedIndex.value)
};
</script>

<style lang="scss" scoped>
.header {
  &-container {
    position: relative;
    height: 120px;
    padding: 20px 40px 0;
    background: url(@/assets/header_bg.png) 100% 100% no-repeat;
    background-size: 100% 100%;
  }
  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    .name {
      color: #5EAEFF;
      font-size: 40px;
      font-weight: bold;
    }
  }
  &-left {
    position: absolute;
    left: 40px;
    display: flex;
    align-items: center;
    gap: 30px;
    .logo {
      width: 84px;
      height: 42px;
      margin-bottom: 8px;
      background: url(@/assets/logo.png) 100% 100% no-repeat;
      background-size: 100% 100%;
    }
    .tab {
      &-box {
        display: flex;
        align-items: center;
      }
      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 184px;
        height: 42px;
        color: #9294FF;
        cursor: pointer;
        font-size: 16px;
        cursor: pointer;
        &1 {
          background: url(@/assets/tab1.png) 100% 100% no-repeat;
          background-size: 100% 100%;
          &-selected {
            color: #77F7FF;
            background: url(@/assets/tab1_selected.png) 100% 100% no-repeat;
            background-size: 100% 100%;
          }
        }
        &2 {
          margin-left: -3px;
          background: url(@/assets/tab2.png) 100% 100% no-repeat;
          background-size: 100% 100%;
          &-selected {
            color: #77F7FF;
            background: url(@/assets/tab2_selected.png) 100% 100% no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
  &-right {
    position: absolute;
    right: 40px;
    display: flex;
    align-items: center;
    gap: 38px;
    padding-right: 40px;
    .date {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 20px;
    }
    .divide {
      width: 2px;
      height: 20px;
      background: #FFFFFF;
      opacity: 0.5;
    }
    .logo2 {
      width: 20px;
      height: 27px;
      background: url(@/assets/logo2.png) 100% 100% no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
