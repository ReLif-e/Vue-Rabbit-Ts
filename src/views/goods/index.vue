<script lang="ts" setup>
import userStore from '@/stores';

import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import GoodsImages from './components/goods-images.vue';
import GoodsSales from './components/goods-sales.vue';
import GoodsName from './components/goods-name.vue';
import { CityResult } from '@/components/city/index.vue';
import GoodsSku from './components/goods-sku.vue';

const route = useRoute()
console.log(route.params.id);

const {goods} =  userStore()
watchEffect(()=>{
  // if(route.fullPath !== '/goods'+ route.params.id) return
    goods.removeInfo()
    goods.GetInfo(route.params.id as string)

})

const changeCity = (e:CityResult)=>{
  console.log(e);
  
}

</script>
<template>
  <div class="xtx-goods-page">
    <div class="container">

      <div style="height:70px ;">
      <!-- 面包屑 -->
    <transition name="fade">
      <XtxBread v-if="goods.Info.categories">
        <XtxBreadItem  to="/">首页</XtxBreadItem>
        <XtxBreadItem :to="`/category/${goods.Info.categories[0].id}`">{{goods.Info.categories[0].name}}</XtxBreadItem>
        <XtxBreadItem :to="`/category/sub/${goods.Info.categories[1].id}`">{{goods.Info.categories[1].name}}</XtxBreadItem>
        <XtxBreadItem  to="/">{{goods.Info.name}}</XtxBreadItem>
      </XtxBread>

      <XtxBread v-else>
        <XtxBreadItem  >首页</XtxBreadItem>
        <XtxBreadItem > <XtxSkeleton :width="40"  :height="20" animated bg="yellow"/></XtxBreadItem>
        <XtxBreadItem > <XtxSkeleton :width="40"  :height="20" animated bg="yellow"/></XtxBreadItem>
        <XtxBreadItem  > <XtxSkeleton :width="120"  :height="20" animated bg="yellow"/></XtxBreadItem>
      </XtxBread>
    </transition>
    </div>
        <!-- 商品信息 -->
        <div v-if="goods.Info.mainPictures"  class="goods-info">
          <div class="media">
           <GoodsImages :images='goods.Info.mainPictures'/>
           <GoodsSales />
          </div>
          <div class="spec">
            <GoodsName   :goods="goods.Info" />
            <GoodsSku    :goods="goods.Info" />
          </div>
        </div>

      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs"></div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>