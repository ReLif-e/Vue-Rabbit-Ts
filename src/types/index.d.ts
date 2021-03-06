// 类型声明文件11

export interface CategoryRes {
  id:string
  name:string
  picture:string
  children:CategoryRes[]
  open:boolean
  goods:GoodItem[]
  }
  

 export interface ApiRes<T> {
    code:string
    msg:string
    result:T
    
  }

export interface GoodItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum?: any;
}

// 轮播图
export interface BannerItem {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}

// 新鲜好物
export interface NewItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

// 人气推荐
export interface HotItem {
  id: string;
  picture: string;
  title: string;
  alt: string;
}


// 热门品牌
export type BrandItem = {
  id: string
  name: string
  nameEn: string
  logo: string
  picture: string
  type?: any
  desc: string
  place: string
}


// 生鲜
export interface GoodsItem {
  id: string;
  name: string;
  picture: string;
  saleInfo: string;
  children: Child[];
  goods: Good[];
}

export interface Good {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

export interface Child {
  id: string;
  name: string;
  layer: number;
  parent?: any;
}





// 专题
export interface specialItem {
  creator: string;
  isDelete: number;
  createTime: string;
  updateTime: string;
  id: string;
  classificationId: string;
  title: string;
  summary: string;
  lowestPrice: number;
  cover: string;
  detailsUrl: string;
  collectNum: number;
  viewNum: number;
  replyNum: number;
}

// 顶级分类类型
export type TopCategory = {
  id: string
  name: string
  picture: string
  children: CategoryRes[]
}






// // 二级面包屑
// export interface SubItem {
//   code: string;
//   msg: string;
//   result: Result;
// }

// interface Result {
//   id: string;
//   name: string;
//   picture?: any;
//   parentId: string;
//   parentName: string;
//   goods: Good[];
//   categories: Category[];
//   brands: Brand[];
//   saleProperties: SaleProperty[];
// }

// interface SaleProperty {
//   id: string;
//   name: string;
//   properties: Property[];
// }

// interface Property {
//   id: string;
//   name: string;
// }

// interface Brand {
//   id: string;
//   name: string;
//   nameEn: string;
//   logo: string;
//   picture: string;
//   type?: any;
//   desc: string;
//   place: string;
// }

// interface Category {
//   id: string;
//   name: string;
//   layer: number;
//   parent?: any;
// }

// interface Good {
//   id: string;
//   name: string;
//   desc: string;
//   price: string;
//   picture: string;
//   discount?: any;
//   orderNum: number;
// }



export type SaleProperty = {
  id: string
  name: string
  properties: {
    id: string
    name: string
  }[]
}

export type SubItem = {
  id: string
  name: string
  picture?: any
  parentId: string
  parentName: string
  brands: {
    id: string
    name: string
    nameEn: string
    logo: string
    picture: string
    type?: any
    desc: string
    place: string
  }[]
  saleProperties: SaleProperty[]
  goods:GoodItem[]
}



// 三级面包屑
// 商品模块的类型声明
export type GoodsInfo = {
  id: string
  name: string
  spuCode: string
  desc: string
  price: string
  oldPrice: string
  discount: number
  inventory: number
  salesCount: number
  commentCount: number
  collectCount: number
  mainVideos: any[]
  videoScale: number
  mainPictures: string[]
  isPreSale: boolean
  isCollect?: any
  recommends?: any
  userAddresses?: any
  evaluationInfo?: any
  categories: {
    id: string
    name: string
  }[]
  specs:Skus[]
  skus:Sku[]
  details: GoodsDetail
}

export type Sku = {
  id: string
  inventory: number
  oldPrice: string
  price: string
  skuCode: string
  specs: {
    name: string
    valueName: string
  }[]
}

export type Skus = {
  name: string
  values: Values[]
}


export type Values = {
  desc: string
  name: string
  picture: string
  selected:boolean
  disabled:boolean
}

export type GoodsDetail = {
  pictures: string[]
  properties: {
    name: string
    value: string
  }[]
}




// 登入
interface userItem {
  id: string;
  account: string;
  mobile: string;
  token: string;
  avatar: string;
  nickname: string;
  gender: string;
  birthday?: any;
  cityCode: string;
  provinceCode: string;
  profession: string;
}



// QQ信息-用户详情
export interface QQUserInfo {
  ret: number
  msg: string
  is_lost: number
  nickname: string
  gender: string
  gender_type: number
  province: string
  city: string
  year: string
  constellation: string
  figureurl: string
  figureurl_1: string
  figureurl_2: string
  figureurl_qq_1: string
  figureurl_qq_2: string
  figureurl_qq: string
  figureurl_type: string
  is_yellow_vip: string
  vip: string
  yellow_vip_level: string
  level: string
  is_yellow_year_vip: string
}
// QQ返回信息
export interface QQUserInfoRes {
  status: string
  fmt: string
  ret: number
  code: number
  data: QQUserInfo
  seq: string
  dataText: string
}