<script lang="ts" setup name="HomeBrand">
import userStore from '@/stores';
import { useLazyData } from '@/utils/hooks';
import { computed, ref } from 'vue';
import HomePanel from './home-panel.vue'
const {home} = userStore()

const target = useLazyData(home.GetBrandList)

// 定义变量控制点击后该变得状态
const index = ref(0)

// 判断是否能点击得
const ByItem = computed(()=>{
  return Math.ceil(home.BrandList.length / 5)
})
</script>

<template>
  <HomePanel ref="target" title="热门品牌" sub-title="国际经典 品质保证">
      <template v-slot:right>
        <a href="javascript:;" :class="{disabled:index === 0 }" class="iconfont icon-angle-left prev"   @click="index > 0 && index--"></a>
        <a href="javascript:;" :class="{disabled: index === ByItem -1 }"  class="iconfont icon-angle-right next"  @click="index < ByItem -1 && index++" ></a>
      </template>
      <div class="box" ref="box">
        <transition name="fade">
        <ul 
        :style="{transform:`translateX(-${index * 1240}px)`,
        width:ByItem + '00%'
        }" 
        v-if="home.BrandList.length" 
         class="list"
         >
          <li v-for="item in home.BrandList" :key="item.id">
            <RouterLink to="/">
              <img
              v-lazy="item.picture"
                alt=""
              />
            </RouterLink>
          </li>
        </ul>
        <!-- 骨架屏 -->
        <div v-else class="skeleton">
              <XtxSkeleton
                class="item"
                v-for="i in 5"
                :key="i"
                animated
                bg="#e4e4e4"
                :width="240"
                :height="305"
              />
        </div>
        </transition>
      </div>
    </HomePanel>

</template>

<style scoped lang="less">
.home-panel {
  background: #f5f5f5;
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
</style>