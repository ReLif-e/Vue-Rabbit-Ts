<script lang="ts" setup name="SubCategory">
import router from '@/router';
import userStore from '@/stores';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const {category} =  userStore()

const route = useRoute()

// 获取路由二级id
// let id = route.params.id as string


// 监听路由变化
watchEffect(()=>{
  if(route.fullPath !== '/category/sub/' + route.params.id) return

  // 变化之前按清空数据保证跳转后不延迟刷新
  category.RemoveList()

  category.getSubCategory(route.params.id as string)
})
const {SubCategory} = storeToRefs(category)

</script>
<template>
  <div class="category">
   <div class="container">
  <transition name="fade-in-out">
     <XtxBread v-if="SubCategory.parentId">
      <XtxBreadItem to="/">首页</XtxBreadItem>
      <XtxBreadItem :to="`/category/${SubCategory.parentId}`">{{SubCategory.parentName}}</XtxBreadItem>
      <XtxBreadItem>{{SubCategory.name}}</XtxBreadItem>
    </XtxBread>
      <!-- 骨架屏 -->
     <XtxBread v-else>
      <XtxBreadItem to="/">首页</XtxBreadItem>
      <XtxBreadItem > <XtxSkeleton opacity="0.3" animated bg="green" :width="30" :height="20" /> </XtxBreadItem>
      <XtxBreadItem>  <XtxSkeleton opacity="0.3" animated bg="green" :width="76" :height="20" /> </XtxBreadItem>
    </XtxBread>
  </transition>


   </div>
  </div>
</template>

<style></style>
