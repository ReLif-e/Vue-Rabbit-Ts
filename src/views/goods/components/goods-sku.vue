<script setup lang="ts" name="GoodsSku">
import { GoodsInfo, Skus, Values } from '@/types';

  defineProps<{
    goods:GoodsInfo
  }>()

  // 点击事件，设置类得，获取高亮
  const ChangeSelected = (sub: Values,item:Skus) =>{
    // 排他思想，先删除全部得类，再赋值类
    item.values.forEach((item)=>item.selected = false)

    // 将类状态取反,设置高亮，设置类
    sub.selected = !sub.selected
  }

</script>
<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs">
      <dt>{{item.name}}</dt>
      <dd>
        <template v-for="sub in item.values" :key="sub.name">
        <!-- 判断有没有图片地址有就渲染图片，没有就渲染文字 -->
          <img
          v-if="sub.picture"
          :class="{selected:sub.selected}"
          :src="sub.picture"
          :alt="sub.name"
          :title="sub.name"
          @click="ChangeSelected(sub,item)"
          />
       <span @click="ChangeSelected(sub,item)" :class="{selected:sub.selected}"  v-else>{{sub.name}}</span>
        </template>
      </dd>
    </dl>

  </div>
</template>

<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      > img {
        width: 50px;
        height: 50px;
        margin-top: 5px;
        .sku-state-mixin ();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
        margin-top: 5px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>
