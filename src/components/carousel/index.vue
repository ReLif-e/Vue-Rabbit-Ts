<script lang="ts" setup name="XtxCarousel">
// 

import { BannerItem } from '@/types';
import { log } from 'console';
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{
  sildes:BannerItem[]
}>()

const active = ref(0)

const prev = ()=>{
  active.value --
  if(active.value < 0){
    active.value = 0
  }
}

const next = ()=>{
active.value ++
  if(active.value >= props.sildes.length){
    active.value = 0
  }
    console.log(1);

}



let timerId = -1

// 鼠标进入
const stop = ()=>{
clearInterval(timerId)
}

// 鼠标移开·1
const start = ()=>{
    timerId = window.setInterval(()=>{
      next()
    },1000)
    console.log(1);
    
}

// 组件打开时执行
onMounted(() => {
     start()
})

// 组件关闭时
onUnmounted(()=>{
  // stop()
})

</script> 

<template>
  <div class="xtx-carousel" @mouseenter="stop" @mouseleave="start">
    <!-- 轮播图 -->
    <ul class="carousel-body">
      <li v-for="item,index in sildes" :key="item.id" class="carousel-item" :class="{fade:index === active}">
        <RouterLink to="/">
          <img
            :src="item.imgUrl"
            alt=""
          />
        </RouterLink>
      </li>
    </ul>

    <!-- 左右按钮 -->
    <a href="javascript:;" class="carousel-btn prev" @click="prev"
      ><i class="iconfont icon-angle-left"></i
    ></a>
    <a href="javascript:;" class="carousel-btn next" @click="next"
      ><i class="iconfont icon-angle-right"></i
    ></a>

    <!-- 底部圆点 -->
    <div class="carousel-indicator">
      <span v-for="(item,index) in sildes" :key="item.id" :class="{active: active === index}"></span>
    </div>

  </div>
</template>

<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>