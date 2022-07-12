<script setup lang="ts" name="GoodsSku">
import { GoodsInfo, Skus, Values } from '@/types';
import bwPowerSet from '@/utils/Power-set';
import { join } from 'path';

 const props =  defineProps<{
    goods:GoodsInfo
  }>()

  // 点击事件，设置类得，获取高亮
  const ChangeSelected = (sub: Values,item:Skus) =>{
    // 排他思想，先删除全部得类，再赋值类
    item.values.forEach((item)=>item.selected = false)

    // 将类状态取反,设置高亮，设置类
    sub.selected = !sub.selected
  }
  
  // 测试算法
  // const arr = ['1','2','3']
  // const reslet = bwPowerSet(arr)
  // // console.log(reslet);
  
  // 定义函数价格数据转换成字符串数组
  const  getPathMap = () =>{
    // 筛选出没有存货的数据
    const skus = props.goods.skus.filter(item=>item.inventory > 0)
    // console.log(skus);

    // 创建一个映射表
    const ArrFn :any = {}

    // 遍历有效数据并提取初里面的值
  skus.forEach((item)=>{
    // 将值赋值给数组
    const arr = item.specs.map((sub)=>sub.valueName)
    // console.log(arr);
    // 通过第三方库转换
    const result = bwPowerSet(arr)
    // console.log( result);
    
    // 遍历转换后的数据，转换成-拼接
    result.forEach(arrItem=>{
      const arr = arrItem.join('🗡')
      // console.log(arr);
      // 添加到对象中
      // 判断，如果映射表里面有要添加的数据玖给后面添加id
      // 如果再映射表里面有要添加的数据
      if(arr in ArrFn){
        ArrFn[arr].push(item.id)
      }else{
        // 如果没有就添加元素并赋值id
        ArrFn[arr]=[item.id]
      }


    })
  })
     return ArrFn
  }
getPathMap()
console.log(getPathMap());


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
