<script setup lang="ts">
import HomePanel from './home-panel.vue';
import userStore from '@/stores';
import { useLazyData } from '@/utils/hooks';
import HomeSkeleton from './home-skeleton.vue';
const {home} = userStore()



// 数据懒加载
// const {stop} = useIntersectionObserver(target,([{isIntersecting}])=>{
//   if(isIntersecting){
//     home.GetHotList()
//     // 停止监听视图11
//     stop()
//   }
// })


// 将绑定的元素和调用接口的函数传递过去
// useLazyData(target,()=>home.GetNewList())

// hooks里面定义了一个ref的target 并在监听元素之前return了
// 相当与是这这边调用了target，并把这个元素传递进去，
//  这个变量默认是一个对象--因为他们共享的是同一个地址，修改一个另一个会一起变化
// const target = useLazyData(()=>home.GetNewList())


// 直接将这个函数当作参数传递进去，让另一边接收到了直接掉用
const target = useLazyData(home.GetNewList)



</script>

<template>
    <HomePanel ref="target" title="新鲜好物" subTitle="新鲜出炉 品质离谱" >
        <template #right>
            <XtxMore />
        </template>
        <Transition name="fade">
        <ul v-if="home.NewList.length" class="goods-list">
         <li v-for="item in home.NewList" :key="item.id">
           <RouterLink to="/">
                <img
                  v-lazy="item.picture"
                  alt=""
               />
                <p class="name ellipsis">{{item.name}}</p>
                <p class="price">&yen;{{item.price}}</p>
           </RouterLink>
         </li>
        </ul>
        <HomeSkeleton v-else :count="4" />
      </Transition>
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