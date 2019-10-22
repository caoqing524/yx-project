// vuex中抽取的home模块
// 引入发请求的模块
import {
  reqMockHome,
  reqMockCategory,
  reqMockCategoryList,
  reqSearch,
  reqSearchResult

} from '../../../api/index.js';

// 引入mutation-type常量名文件
import {
  GET_HOME_DATA,
  GET_MOCK_CATEGORY,
  GET_SEARCH_DATA,
  GET_SEARCH_RESULT,
  CET_MOCK_CATEGORY_LIST
} from './mutation-type'

const state = {
  // 初始化数据
  homeData: [],
  categoryData: [],
  categoryListData:[],
  searchData: [],
  searchResult: []
}

const mutations = {
  // mutations中直接修改state的数据状态
  // 得到homeData 用mock拦截
  [GET_HOME_DATA](state, {
    homeData
  }) {
    // 更新一下actions提交来的homeData数据
    state.homeData = homeData
  },
  // mock拦截 categoryData
  [GET_MOCK_CATEGORY](state, {
    categoryData
  }) {
    state.categoryData = categoryData
  },
// mock拦截 categoryListData
[CET_MOCK_CATEGORY_LIST](state, {
  categoryListData
}) {
  // 更新下 action提交来数据状态
 state.categoryListData = categoryListData
},
  // 根据关键字搜索 
  [GET_SEARCH_DATA](state, {
    searchData
  }) {
    state.searchData = searchData
  },
  // 搜索结果
  [GET_SEARCH_RESULT](state,
    {searchResult}
  ) {
    state.searchResult = searchResult
  }
}


const actions = {
  // actions中通过commit到mutations间接修改state中的数据状态
  // 调用api中对应的请求接口 发送ajax请求

  //mock拦截 homeData
  async getHomeData({
    commit
  }) {
    const result = await reqMockHome()
    // console.log(result);
    // 获取请求来的数据
    const homeData = result.data
    // 如果请求成功把 请求来的数据提交到actions
    if (result.code === 0) {
      commit(GET_HOME_DATA, {
        homeData
      })
    }
  },
  // mock拦截 categoryData
  async getMockCategory({
    commit
  }) {
    const result = await reqMockCategory()
    const categoryData = result.data.categoryL1List
    // console.log(result.data);
    if (result.code === 0) {
      commit(GET_MOCK_CATEGORY, {
        categoryData
      })
    }
  },

// mock拦截 categoryListData
async getMockCategoryList({commit}){
 const result = await reqMockCategoryList()
//  console.log(result);
 if(result.code===0){
  const categoryListData=result.data
  // 提交到mutations
  commit(CET_MOCK_CATEGORY_LIST, {
    categoryListData
  })
 }
},

  // 调用api里的reqSearch接口 真实发请求 得到getSearchData
  async getSearchData({
    commit
  }) {
    // 调用reqSearch()接口发请求
    const result = await reqSearch()
    // console.log(result.data.defaultKeywords);
    
    const searchData = result.data.defaultKeywords
    if (result.code === "200") {
      // 提交到mutations
      commit(GET_SEARCH_DATA, {
        searchData
      })
    }
  },
  // 调用接口发请求得到 搜索结果
  async getSearchResult({
    commit
  }, keyWord) {
    const result = await reqSearchResult(keyWord)
    // console.log(result);
    if (result.code === "200") {
      const searchResult = result.data
      commit(GET_SEARCH_RESULT,
        {searchResult}
      )
    }
  }


}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}