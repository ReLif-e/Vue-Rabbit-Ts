import {defineStore} from 'pinia'
import axios from '@/utils/request'
import { ApiRes, CategoryRes } from '@/types'
import {topCategory} from './constant'
const userCate = topCategory.map((item)=>{
  // 渲染一个假name数据代替请求结束后的
  return {name:item}
})

export default defineStore('categoy',{
  state() {
      return{
        list:userCate as CategoryRes[]
      }
  },
  
  actions:{
    async getCategoryList(){
      const res = await axios.get<ApiRes<CategoryRes>>('/home/category/head')
      console.log(res);
      this.list = res.data.result
      
    }  
  }
})