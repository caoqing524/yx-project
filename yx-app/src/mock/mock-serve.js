// 引入mock
 import Mock from 'mockjs'
 // 引入home中的data
 import homeData from './homeData.json';

 import categoryData from './category.json'
//  import categoryListData from './categoryList.json'

 // mock拦截ajax请求 生成随机的数据，使用mock方法 可以拦截地址 返回数据结构

 // 模拟数据 路由接口接口 - ajax("/mock/home")  会得到 {code:0, data: homeData}
Mock.mock('/mock/home',{
 code:0,
 data:homeData
});
Mock.mock('/mock/category', {
  code: 0,
  data: categoryData
});

// Mock.mock('/mock/category/list', {
//   code: 0,
//   data: categoryListData
// });




