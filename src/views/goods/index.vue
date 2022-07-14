<script lang="ts" setup>
import userStore from '@/stores';

import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import GoodsImages from './components/goods-images.vue';
import GoodsSales from './components/goods-sales.vue';
import GoodsName from './components/goods-name.vue';
import GoodsSku from './components/goods-sku.vue';
import GoodsDetail from './components/goods-detail.vue';
import GoodsHot from './components/goods-hot.vue';

const route = useRoute()
// console.log(route.params.id);

const {goods} =  userStore()

// 监听路由变化
watchEffect(()=>{
  // if(route.fullPath !== '/goods'+ route.params.id) return
    goods.removeInfo()
    goods.GetInfo(route.params.id as string)

})


  // 子组件传递数据给父组件，以渲染不同商品的价格
  const hChangeId = (id:string) =>{
    const sky = goods.Info.skus.find(item=>item.id === id)
    if(!sky) return

    goods.Info.price = sky.price
    goods.Info.oldPrice = sky.oldPrice
    // goods.changePrice(sky)
    
  }

  // 在Vue3中V-model的接受属性是modelValue
  // 默认事件是update:modelValue
  const count = ref(1)
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
            <GoodsSku @change-sku-id="hChangeId"  skuId="1369155864430120962"  :goods="goods.Info" />
            <XtxNumbox v-model="count" :min='1' :max="10"/>
         <XtxButton type="primary" style="margin-top:20px;">1</XtxButton>
          </div>
        </div>

      <!-- 商品详情 -->
      <div class="goods-footer" v-if="goods.Info.details">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs">
            <GoodsDetail :goods="goods.Info" />
          </div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside">
        <GoodsHot :type="1" />
        <GoodsHot :type="2" />
        <GoodsHot :type="3" />
        </div>
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