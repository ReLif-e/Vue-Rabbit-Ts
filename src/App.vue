<template>
  <div>
      1232
  </div>
  <h1>一二三</h1>
</template>

<script setup lang="ts">
import axios from '@/utils/request'
axios.get('/home/index').then(res => console.log(res))
</script>

<style scoped lang="less">
// 在vite 中导入，使用时不需要再导入
// 导入css
// @import '@/assets/styles/variables.less';
// @import '@/assets/styles/mixins.less';

h1 {
  // 颜色变量名@import '@/assets/styles/variables.less';
    background-color: @xtxColor;

    // 触碰往上移动@import '@/assets/styles/mixins.less';
    .hoverShadow()
}
</style>