<script lang="ts" setup name="AppHeaderSticky">
import { ref } from 'vue';
import AppHeaderNav from './app-header-nav.vue'
import {useWindowScroll} from '@vueuse/core'
const {y} = useWindowScroll()
// const Y = ref(0)
// // 获取页面滚动的距离
// window.addEventListener('scroll',()=>{
//   const scroll = document.documentElement.scrollTop
//   console.log(scroll);
//   Y.value = scroll
// })

</script>

<template>
<!-- 判断页面滚动的距离是否超过68 -->
  <div :class="{show:y > 78}" class="app-header-sticky">

  <!-- 如果页面滚动的距离超过了78第二类盒子才出现 -->
    <div class="container" v-if="y > 78">

      <RouterLink class="logo" to="/" />
      <AppHeaderNav />
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  &.show{
    transition: all .5s;
    transform: translateY(0%);
  }
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(@/assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>