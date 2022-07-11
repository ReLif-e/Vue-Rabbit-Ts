import {defineStore} from 'pinia'
import axios from '@/utils/request'
import { ApiRes, CategoryRes, SubItem, TopCategory } from '@/types'
import {topCategory} from './constant'
const userCate = topCategory.map((item)=>{
  // 渲染一个假name数据代替请求结束后的
  return {name:item}
})

export default defineStore('categoy',{
  state() {
      return{
        list:userCate as CategoryRes[],
        TopCategory:{} as TopCategory,
        SubCategory:{} as SubItem
      }
  },
  
  actions:{
    async getCategoryList(){
      const res = await axios.get<ApiRes<CategoryRes[]>>('/home/category/head')
      // console.log(res);
      res.data.result.forEach(item=>{
        item.open = false
      })
      this.list = res.data.result
      
    }  ,

    // 鼠标经过
    show(id:string){
     const res =  this.list.find(item=>item.id === id)
     res!.open = true
    //  console.log(1);
    },

    // 鼠标离开
    hide(id:string){
      const res =  this.list.find(item=>item.id === id)
      res!.open = false
      // console.log(2);
    },

    async getTopCategory(id:string){
      const res = await axios.get('/category',{
        params:{
          id
        }
      })
      this.TopCategory = res.data.result

      
    },

   async getSubCategory(id:string){
      const res = await axios.get<ApiRes<SubItem>>('/category/sub/filter',{
        params:{
          id
        }
      })
      this.SubCategory = res.data.result
    },

    // 清空数据
    RemoveList(){
      this.SubCategory = {} as SubItem
    }
  }
})