
<script setup lang="ts">
import HomePanel from './home-panel.vue';
import userStore from '@/stores';
import { useLazyData } from '@/utils/hooks';
// import { ref } from 'vue';
// import { useIntersectionObserver } from '@vueuse/core';

const {home} = userStore()

// const target = ref(null)

// 在视图中再获取数据，参数一是要监听的元素，参数二是回调-isIntersecting表示是否出现在视图中
// const {stop} = useIntersectionObserver(target,([{isIntersecting}])=>{
//   if(isIntersecting){
//     // 如果在视图里面就发送请求获取数据
//     home.GetHotList()
//     stop()
//   }
// })

// 数据懒加载
const target = useLazyData(home.GetHotList)



</script>

<template>
  <HomePanel ref="target" title="人气推荐" sub-title="人气爆款 不容错过">
    <ul ref="pannel" class="goods-list">
      <li v-for="item in home.HotList" :key="item.id">
        <RouterLink to="/">
          <img v-lazy="item.picture" alt="" />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>