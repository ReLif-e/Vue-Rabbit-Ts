<script lang="ts" setup>
import userStore from '@/stores';

const {home} = userStore()
home.GetBannerList()
</script>
<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <!-- 将数据传入组件内，方便以后使用轮播图复用 -->
    <xtx-carousel autoplay :duration="1500"  :sildes='home.BannerList'/>
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