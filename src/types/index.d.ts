// 类型声明文件

export interface CategoryRes {
  id:string
  name:string
  picture:string
  children:CategoryRes[]
  open:boolean
  }
  

 export interface ApiRes<T> {
    code:string
    msg:string
    result:T[]

  }
  