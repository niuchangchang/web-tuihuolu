<template>
  <div class="app-box">
    <SelectComponent></SelectComponent>
    <div class="content-box">
      <ParamBoxComponent></ParamBoxComponent>
      <DataBoxComponent></DataBoxComponent>
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
  data() {
    return {
      data: {}
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
  }
}
</style>
