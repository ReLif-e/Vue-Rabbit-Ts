<template>
  <div class="category">分类组件


<XtxBread>
  <XtxBreadItem to="/">首页</XtxbreadItem>
  <XtxBreadItem>{{category.TopCategory.name}}</XtxBreadItem>
</XtxBread> 

  </div>
</template>

<script lang="ts" name="TopCategory" setup>
import userStore from '@/stores';
import { watch } from 'vue';
// 获取路由参数
import {useRoute} from 'vue-router'

const router = useRoute()
console.log(router.params.id);

const {category} = userStore()
 
//  监听路由id变化
 watch(()=>router.params.id,()=>{
  // 坑，未填
  if(!router.params.id) return
   category.getTopCategory(router.params.id as string) //路由id传进去1
 },{
  immediate:true  //第一次进入就开启
 })



</script>

<style></style>