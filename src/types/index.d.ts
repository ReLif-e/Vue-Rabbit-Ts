// 类型声明文件

export interface ApiRes {
  id:string
  name:string
  picture:string
  }
  
  export interface CategoryRes<T> {
    code:string
    msg:string
    result:T[]
  }
  