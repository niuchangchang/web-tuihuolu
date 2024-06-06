<template>
  <div class="app-box">
    <!-- toDo 公共部分须提到上一层 -->
    <SelectComponent :selectedIndex="selectedIndex" @update:selectedIndex="updateSelectedIndex"></SelectComponent>
    <div class="content-box">
      <ParamBoxComponent :currFurnaceParaList="currFurnaceParaList"></ParamBoxComponent>
      <DataBoxComponent :currFurnaceParaInfo="currFurnaceParaInfo"></DataBoxComponent>
    </div>
  </div>
</template>

<script>
import SelectComponent from '@/views/dashboard/components/SelectComponent.vue'
import ParamBoxComponent from '@/views/dashboard/components/ParamBoxComponent.vue'
import DataBoxComponent from '@/views/dashboard/components/DataBoxComponent.vue'

export default {
  name: 'ContentComponent',
  components: {
    SelectComponent,
    ParamBoxComponent,
    DataBoxComponent
  },
  props: {
    selectedIndex: {
      type: Number,
      required: true
    },
    currFurnaceParaList: {
      type: Array,
      default: () => {
        return []
      } 
    },
    currFurnaceParaInfo: {
      type: Object,
      default: () => {
        return {}
      } 
    },
  },
  data() {
    return {
      data: {
      }
    }
  },
  computed: {
  },
  methods: {
    updateSelectedIndex(newIndex) {
      this.$emit('update:selectedIndex', newIndex);
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  &-box {
    flex: 1;
    display: flex;
    gap: 24px;
    overflow: hidden;
  }
}
</style>
