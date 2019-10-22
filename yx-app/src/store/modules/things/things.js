// vuex中抽取的things模块
import {
  GET_MORE_RECOMMEND_DATA,
} from './mutation-type.js'
//引入发请求的文件
import {
  reqAutoRecommendData
} from '../../../api/index.js'
// 引入mutation-type的常量名文件

const state={
    // recommendData: [],
    moreRecommendData: []
      // hasMore: true,
      // result: []
    
    
}

const mutations={
[GET_MORE_RECOMMEND_DATA](state, {
  moreRecommendData
}) {
  // 严谨操作 此处判断一下
  // if (!state.moreRecommendData.hasMore) {
  //   state.moreRecommendData = moreRecommendData // 如果 autoRecommendData 还没有数据 则把actions提交来的数据给它
  // } else if (state.moreRecommendData.hasMore) {
  //   // state.moreRecommendData.result.push(...moreRecommendData.result) // 如果有数据向其中追加
  // }
//把上拉加载再次发请求的数组数据拼接到moreRecommendData里
  state.moreRecommendData = moreRecommendData.concat(moreRecommendData)
}

}

const actions={

async getMoreRecommendData({commit},{page,size}){
// 发送请求
const result1 = await reqAutoRecommendData(
  page,
  size
)
  // 判断请求是否成功
  if(result1.code==='200'){

  // 如果请求成功 获取请求的数据
  const moreRecommendData=result1.data.result
    // 提交到mutations
    commit(GET_MORE_RECOMMEND_DATA, {
      moreRecommendData
    })
  
  }
console.log(result1.data.result);
  
}

}

const getters={}


export default {
  state,
  mutations,
  actions,
  getters
}