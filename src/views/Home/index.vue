<script lang="ts" setup>
import HomeBanner from './components/home-banner.vue'
import HomeCategory from './components/home-category.vue'
import HomePanel from './components/home-panel.vue';
import HomeNew from './components/home-new.vue';
import HomeHot from './components/home-hot.vue';
import HomeBrand from './components/home-brand.vue';
import HomeProbuct from './components/home-probuct.vue';
import HomeSpecial from './components/home-special.vue';
</script>

<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
      </div>
    </div>
    
      <!-- 新鲜好物 -->
      <HomeNew />

      <!-- 人气推荐 -->
      <HomeHot />

      <!-- 热门品牌 -->
      <HomeBrand />

      <!-- 生鲜 -->
      <HomeProbuct />

      <!-- 专题 -->
      <HomeSpecial />
  </div>
</template>



<style lang="less" scoped>

</style>