<template>
      <ul class="app-header-nav">
        <li class="home"><RouterLink to="/">首页</RouterLink></li>   
             <!-- 没有id点击跳转的时候会跳转到首页👇router-link里面的三元 -->
        <li 
        v-for="item in list " 
        :key="item.id"
      
        @mousemove="cares.show(item.id)"
        @mouseleave="cares.hide(item.id)"
        >
        <router-link 
      
        :to="item.id? `/category/${item.id}` :'/'"
        @mouseleave="cares.hide(item.id)"
        >{{item.name}}</router-link>
        <!-- 这是渲染数据的盒子，所以添加的类是添加到这个盒子里面的 -->
        <div  :class="{show:item.open}" class="layer">
        <ul>
          <!-- 判断渲染的数内有没有children数据 -->
          <li v-for="sub in item.children" :key="sub.id" v-if="item.children"> 
            <router-link :to="`/category/sub/${sub.id}`">
              <img
                :src="sub.picture"
                alt=""
              />
              <p>{{sub.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
   
        </li>
        
      

      </ul>
</template>

<script setup lang="ts">
// 导入pinia的index
import category from '@/stores/modules/category';
import { storeToRefs } from 'pinia';

// 将组件赋值给cares
const cares = category()

// 将里面的数据解构出来，方便渲染,只能解构state的数据
const {list} = storeToRefs(cares)

// 调用组件内的方法
// cares.getCategoryList()

</script>

<style scoped lang="less">
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
      &:hover {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
    // 新增样式
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      // > .layer {
      //   height: 132px;
      //   opacity: 1;
      // }
    }
  }
}
// 新增样式
.layer {
  &.show{
     height: 132px;
     opacity: 1;
  }
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>