<template>
      <ul class="app-header-nav">
        <li class="home"><RouterLink to="/">首页</RouterLink></li>
        <li v-for="item in list " :key="item.id"><router-link to="/">{{item.name}}</router-link></li>


      </ul>
</template>

<script setup lang="ts">
// 导入pinia的index
import category from '@/stores/modules/category';
import { storeToRefs } from 'pinia';

// 将组件赋值给cares
const cares = category()

// 将里面的数据解构出来，方便渲染,只能解构state的数据
const {list,} = storeToRefs(cares)

// 调用组件内的方法
cares.getCategoryList()

</script>

<style scoped lang="less">
  .app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;
    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;
      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
          &:hover {
            color: @xtxColor;
            border-bottom: 1px solid @xtxColor;
          }
      }
    }
  }
</style>