<script setup lang="ts" name="GoodsSku">
import goods from '@/stores/modules/goods';
import { GoodsInfo, Skus, Values } from '@/types';
import bwPowerSet from '@/utils/Power-set';


 const props =  defineProps<{
    goods:GoodsInfo
  }>()

  // 点击事件，设置类得，获取高亮
  const ChangeSelected = (sub: Values,item:Skus) =>{
    if(sub.disabled) return
    // 排他思想，先删除全部得类，再赋值类
    item.values.filter(item=>item.name !== sub.name).forEach((item)=>item.selected = false)

    // 将类状态取反,设置高亮，设置类
    sub.selected = !sub.selected

    // 点击后获取选中状态的值
    getanyspecs()
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

  // 禁用状态
  const updateDisabled = () =>{
    props.goods.specs.forEach(item=>{
      // console.log(item);
      item.values.forEach(sub=>{
        // console.log(sub);
        
        // 如果映射表里面有就不禁用
        // if(sub.name in pathMap ){
        //   sub.disabled = false
        // }else{
        //   sub.disabled = true
        // }
          sub.disabled =!(sub.name in pathMap)
      })
      
    })
  }

  // 获取选中的状态
  const getanyspecs = () => {

    const arr :string[] = []

    props.goods.specs.forEach(v => {
      // 找到每一项选中的
     const result =  v.values.find(item => item.selected)

  // 将找到的添加到数组内,如果一行之间没有选中的添加一个空字符串
     arr.push(result?.name || '')
     console.log(arr);
    });
    
    // 返回一个数组对象
    return arr 
  }


const pathMap = getPathMap()
// console.log(pathMap);映射表
updateDisabled()

</script>
<template>
  <div class="goods-sku">
    <dl v-for="item in props.goods.specs">
      <dt>{{item.name}}</dt>
      <dd>
        <template v-for="sub in item.values" :key="sub.name">
        <!-- 判断有没有图片地址有就渲染图片，没有就渲染文字 -->
          <img
          v-if="sub.picture"
          :class="{selected:sub.selected,disabled:sub.disabled}"
          :src="sub.picture"
          :alt="sub.name"
          :title="sub.name"
          @click="ChangeSelected(sub,item)"
          />
       <span @click="ChangeSelected(sub,item)" :class="{selected:sub.selected, disabled:sub.disabled}"  v-else>{{sub.name}}</span>
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
