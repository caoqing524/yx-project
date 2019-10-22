// 引入封装的ajax
import ajax from './ajax.js';
// 使用代理
const BASE='/api'
// 该文件是根据封装好的请求接口 发请求的模块
// 首页数据的请求
export const reqMockHome = () => ajax('/mock/home') // 请求mock数据 用mock模拟服务器拦截的数据 返给前端（服务器） 

// 搜索 的请求  搜索页面 默认显示keyword && hotkeyword接口
export const reqSearch = () => ajax(`${BASE}/xhr/search/init.json`,'POST')


// 获取搜索结果的请求 根据关键字搜索的请求结果
export const reqSearchResult = (keywordPrefix) => ajax(`${BASE}/xhr/search/searchAutoComplete.json`, {
  keywordPrefix
})

// 分类列表数据  前端（服务器 ）再通过 actions--->mutations--->state 更新数据状态
export const reqMockCategory = () => ajax('/mock/category'); // 请求mock数据 用mock模拟服务器拦截的数据 返给前端

// 分类列表数据之二 
export const reqMockCategoryList = () => ajax('/mock/category/list')

// 识物-推荐数据 上拉加载 ---- http://m.you.163.com/topic/v1/find/recAuto.json
export const reqAutoRecommendData = (page, size) => ajax(`${BASE}/topic/v1/find/recAuto.json`, {
  page,
  size
})

// 实物发现页上拉加载接口
// export const reqGetThings = () => ajax(`${BASE}/topic/v1/find/recAuto.json`,{
// page,
// size,
// })


// 使用代理
const GUIGU = '/guigu'

// 发送短信验证码得请求
export const reqSendCode = (phone) => ajax(GUIGU + `/sendcode/`, {
  phone
})

//  手机号验证码登陆的请求  POST
export const reqSmsLogin = (phone, code) => ajax(GUIGU + `/login_sms`, {
  phone,
  code
}, 'POST')

// 一次性验证码的请求
export const reqCaptcha = () => ajax(GUIGU + `/captcha`)


//用户名密码登录 的请求 POST
export const reqPwdLogin = ({
  name,
  pwd,
  captcha
}) => ajax(GUIGU + `/login_pwd`, {
  name,
  pwd,
  captcha
}, 'POST')
// 根据会话获取用户信息自动登录的请求  持久登录---cookie---session
export const reqUserInfo = () => ajax(GUIGU + `/userinfo`)

// 用户退出的请求
export const reqLoginOut = () => ajax(GUIGU + `/logout`)
