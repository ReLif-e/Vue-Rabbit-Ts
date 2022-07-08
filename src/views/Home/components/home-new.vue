<script setup lang="ts">
import HomePanel from './home-panel.vue';

import userStore from '@/stores';
const {home} = userStore()
home.GetNewList()
</script>

<template>
    <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质离谱" >
        <template #right>
            <XtxMore />
        </template>
          <ul class="goods-list">
            <li v-for="item in home.NewList" :key="item.id">
              <RouterLink to="/">
                <img
                  :src="item.picture"
                  alt=""
               />
                <p class="name ellipsis">{{item.name}}</p>
                <p class="price">&yen;{{item.price}}</p>
              </RouterLink>
          </li>
        </ul>
      </HomePanel> 
</template>



<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>