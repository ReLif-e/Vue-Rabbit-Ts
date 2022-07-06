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
      res.data.result.forEach(item=>{
        item.open = false
      })
      this.list = res.data.result
      
    }  ,

    // 鼠标经过
    show(id:string){
     const res =  this.list.find(item=>item.id === id)
     res!.open = true
     console.log(1);
    },

    // 鼠标离开
    hide(id:string){
      const res =  this.list.find(item=>item.id === id)
      res!.open = false
      console.log(2);
    }
  }
})