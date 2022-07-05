import userCategory from './modules/category'


export default function userStore(){
  return{
    category:userCategory()
  }
}