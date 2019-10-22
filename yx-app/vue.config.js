const path = require('path')
function resolve (dir) {
  // return path.join(__dirname, '..', dir)
  return path.join(__dirname, dir)
}
// vue.config.js
//import Star from '../xyz/components/Star/Star.vue'
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'xyz': resolve('src'),
      }
    }
  },

css: {
  loaderOptions: {
    css: {},
    postcss: {
      plugins: [
        require('postcss-px2rem')({
          remUnit: 75
        })
      ]
    }
  }
},




  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  // 配置代理
  devServer: {
    proxy: {
      // 请求地址以/api开头
      '/api': {
        target: 'http://m.you.163.com',
        changeOrigin: true, //是否支持跨域
        pathRewrite: {
          '^/api': '', // rewrite path
        },
      },
     '/guigu': {
       target: 'http://localhost:5000', // 转发的目录地址
       changeOrigin: true, // 支持跨域
       pathRewrite: { // 重写路径: 让代理服务在转发请求, 对路径进行特定修改
         '^/guigu': '', // 去掉路径中的/login
       },
     },

    }
  }

}

