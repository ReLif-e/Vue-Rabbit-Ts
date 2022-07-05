import {defineStore} from 'pinia'
import axios from '@/utils/request'
import { ApiRes, CategoryRes } from '@/types'

// interface ApiRes {
// id:string
// name:string
// picture:string
// }

// interface CategoryRes<T> {
//   code:string
//   msg:string
//   result:T[]
// }

export default defineStore('categoy',{
  state() {
      return{
        list:[] as CategoryRes[]
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