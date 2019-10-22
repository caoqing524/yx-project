// 封装发送ajax模块

// 引入axios
import axios from 'axios'
export default function ajax(url, data = {}, method = 'GET') {
  //ajax函数的返回值是Promise对象
  return new Promise((resolve, reject) => {
    // 定义个Promise对象
    let promise
    // 执行异步的ajax请求
    // 判断请求方式
    if (method === 'GET') {
      promise = axios.get(url, {
      params:data
      })
    }else{
      promise=axios.post(url,data)
    }
   promise
   .then(
     response => { // 如果成功了, 调用resolve()
     resolve(response.data)
   })
   .catch(
     error=>{
       reject('----请求出错 :' + error.message)
     }
   )
  })
}



