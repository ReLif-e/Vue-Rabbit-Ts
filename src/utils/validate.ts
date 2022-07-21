export function accountRule(val:string){
  if(!val) return '用户名不能为空'
  if(!/^[a-zA-Z]\w{5,10}$/.test(val)) return '用户名应是5~10位之间'
  return true
}
export function passwordRule(val:string){
  if(!val) return  '密码不能为空'
  if(!/^\w{6,12}$/.test(val)) return '密码应是六到十二位之间'

  return true
}
export function isArgeeRule(val:boolean){
  if(!val) return '请勾选协议'
  return true
}
export function mobileRule(val:string){
  if(!val) return '手机号不能为空'
  if(!/^1[3-9]\d{9}$/.test(val)) return "手机号格式错误"
  // !/^1[3-9]\d{9}$/.test(value)
  return true
}
export function codeRule(val:string){
  if(!val) return '验证码不能为空'
  if(!/^\d{6}$/.test(val)) return '验证码应是一到六位'
  return true
}
