<script lang="ts" setup name="XtxCity">
// 数据类型
 export type GetCity = {
    code:string
    level:number
    name:string
    areaList:GetCity[]
  }

    // 选择的城市结果类型
  export type CityResult = {
    provinceCode: string
    provinceName: string
    cityCode: string
    cityName: string
    countyCode: string
    countyName: string
  }

// 配送页面
  import { ref, watchEffect } from 'vue';
  import axios from 'axios'
  import {onClickOutside} from '@vueuse/core'


  // 接受数据
  defineProps<{
    adress?:string
  }>()

  // 将数据传输给父组件
 const emit =  defineEmits<{
    (e:'changeCity',city:CityResult):void
  }>()

// 定义数据
  const target = ref(null)
  const CityResult = ref<CityResult>({} as CityResult)

// 离开事件
  onClickOutside(target,()=>{
   active.value = false
  })

  const active = ref(false)
  const CityItem = ref<GetCity[]>([])
  const CacheItem = ref<GetCity[]>([])


// 发送请i去
  async function GetCityList(){
    const res = await axios.get<GetCity[]>('https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json')
    // console.log(res);
    CityItem.value = res.data
    CacheItem.value = res.data
  }
  // 调用方法
  GetCityList()
  
  // 点击事件
    const ChangeItem = (city:GetCity) =>{
      // console.log(city.name);
      if(city.level === 0){
        CityResult.value.provinceName = city.name
        CityResult.value.provinceCode = city.code
      }

      if(city.level === 1){
        CityResult.value.cityName = city.name
        CityResult.value.cityCode = city.code
      }

      if(city.level === 2){
        CityResult.value.countyName = city.name
        CityResult.value.countyCode = city.code
        emit('changeCity',CityResult.value)
      }

      if(!city.areaList) return active.value = false


     CityItem.value  = city.areaList 

    }
  
  // 监听事件
  watchEffect(()=>{
    if(!active.value) return 
    CityItem.value = CacheItem.value
  })

</script>
<template>
  <div ref="target" class="xtx-city">
    <!-- 因为active类和变量名一致可以简写 -->
    <div :class="{active}"  class="select">
      <span v-if="adress" @click="active = !active" class="placeholder">{{adress}}</span>
      <span v-else  @click="active = !active" class="placeholder">请选择配送地址</span>
      <span class="value"></span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div v-show="active" class="option">
      <span @click="ChangeItem(item)" class="ellipsis" v-for="item in CityItem" :key="item.name">{{item.name}}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>