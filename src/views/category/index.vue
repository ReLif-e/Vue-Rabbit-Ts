<template>
  <div class="top-category">

      <div class="container">
        <XtxBread>
          <XtxBreadItem to="/">首页</XtxbreadItem>
          <XtxBreadItem>{{category.TopCategory.name}}</XtxBreadItem>
        </XtxBread> 
 

    <!-- 轮播图 -->
    <XtxCarousel style="height:500px;" :sildes="home.BannerList" />

          <!-- 所有二级分类 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="item in TopCategory.children" :key="item.id">
            <a href="javascript:;">
              <img v-lazy="item.picture" >
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
      </div>

      <!-- 分类关联商品 -->
      <div class="ref-goods" v-for="item in TopCategory.children">
        <div class="head">
          <h3>- {{item.name}} -</h3>
          <p class="tag">温暖柔软，品质之选</p>
          <XtxMore />
        </div>
        <div class="body">
          <GoodsItem :goods="sub" v-for="sub in item.goods" :key="sub.id" />
        </div>
      </div>



  </div>
 </div>
</template>

<script lang="ts" name="TopCategory" setup>
import userStore from '@/stores';
import { storeToRefs } from 'pinia';
import { watch, watchEffect } from 'vue';
// 获取路由参数
import {useRoute} from 'vue-router'
import GoodsItem from './components/goods-item.vue'
const router = useRoute()
console.log(router.params.id);

const {category,home} = userStore()
 
//  监听路由id变化
//  watch(()=>router.params.id,()=>{
//   // 坑，未填
//   if(!router.params.id) return
//    category.getTopCategory(router.params.id as string) //路由id传进去1
//  },{
//   immediate:true  //第一次进入就开启
//  })


// 类似于计算属性，里面使用得数据变化会执行
watchEffect(()=>{
   if(!router.params.id) return
   category.getTopCategory(router.params.id as string) 
})

const {TopCategory} = storeToRefs(category)

</script>
<style scoped lang="less">
 .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
}
</style>