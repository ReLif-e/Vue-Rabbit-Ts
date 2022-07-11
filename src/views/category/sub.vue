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
  category.getSubCategory(route.params.id as string)
})
const {SubCategory} = storeToRefs(category)

</script>
<template>
  <div class="category">
   <div class="container">
     <XtxBread>
      <XtxBreadItem to="/">首页</XtxBreadItem>
      <XtxBreadItem :to="`/category/${SubCategory.parentId}`">{{SubCategory.parentName}}</XtxBreadItem>
      <XtxBreadItem>{{SubCategory.name}}</XtxBreadItem>
    </XtxBread>

   </div>
  </div>
</template>

<style></style>
