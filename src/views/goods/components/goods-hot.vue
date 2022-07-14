<script setup lang="ts">
import GoodsItem from '@/views/category/components/goods-item.vue'
import axios from '@/utils/request';
import { PropType, ref } from 'vue'
import { ApiRes, GoodItem } from '@/types';
import { useRoute } from 'vue-router';
const props = defineProps({
  type: {
    type: Number as PropType<1 | 2 | 3>,
    default: 1,
  },
})

const route = useRoute()

const id = route.params.id

const list = ref<GoodItem>()

  // 发送请求
async function getHotlist () {
   const res = await axios.get<ApiRes<GoodItem>>('/goods/hot',{
      params:{
        type:props.type,
        id
      }
   })
  //  console.log(res);
   list.value = res.data.result
   
  }
getHotlist()

// 标题对象
const titleObj = {
  1: '24小时热销榜',
  2: '周热销榜',
  3: '总热销榜',
}
</script>

<template>
  <div class="goods-hot">
    <h3>{{ titleObj[props.type] }}</h3>
    <div class="goods-list">
      <!-- 商品区块 -->
      <GoodsItem :goods="item" v-for="item in list" :key="item.id" />
    </div>
  </div>
</template>

<style scoped lang="less">
.goods-hot {
  background-color: #fff;
  margin-bottom: 20px;
  h3 {
    height: 70px;
    background: @helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  .goods-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>