<script lang="ts" setup>
import userStore from '@/stores';

const {home} = userStore()
home.GetBannerList()
</script>
<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <xtx-carousel />
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  background-color: pink;

  // 深度选择器1
  :deep(.carousel-btn.prev) {
  left: 270px!important;
}
  :deep(.carousel-indicator) {
    padding-left: 250px;
  }
}
</style>