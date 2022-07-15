<script lang="ts" setup name="XtxCheckbox">
//获取传输数据
defineProps<{
  modelValue?:boolean
}>()


// <!-- 修改状态 1-->
 const emit =  defineEmits<{
  (e:'update:modelValue',i:boolean):void
}>()
</script>

<template>
  <div class="xtx-checkbox" @click="emit('update:modelValue',!modelValue)">
    <i class="iconfont icon-checked" v-if="modelValue"></i>
    <i class="iconfont icon-unchecked" v-else></i>
    <span><slot /></span>
  </div>
</template>

<style scoped lang="less">
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
  .icon-checked {
    color: @xtxColor;
    ~ span {
      color: @xtxColor;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
  }
}
</style>
