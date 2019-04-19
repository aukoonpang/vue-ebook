// mockjs只能返回text等简单数据，在点击阅读图书时阅读器需要请求下载epub资源，无法实现。
// 利用自定义方法取代mock
// function mock (app, url, data) {
//   app.get(url, (request, response) => {
//     response.json(data)
//   })
// }

// const homeData = require('./src/mock/bookHome.js')
// const shelfData = require('./src/mock/bookShelf.js')
// const listData = require('./src/mock/bookList.js')
// const flatListData = require('./src/mock/bookFlatList.js')

module.exports = {
  // 使打包后dist文件的路径正确
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  devServer: {
    // before (app) {
    //   mock(app, '/book/home', homeData)
    //   mock(app, '/book/shelf', shelfData)
    //   mock(app, '/book/list', listData)
    //   mock(app, '/book/flat-list', flatListData)
    // }
  },

  // vue-cli 3.0默认采用现在框架流行的零配置启动设计，无需配置
  // 文件即可启动，如果需要更改默认devServer端口等配置可添加
  // devServer:{
  //     host:'localhost',
  //     port:'xxx'
  // }

  configureWebpack: {
    performance: {
      hints: 'warning',
      maxAssetSize: 614400 * 10,
      maxEntrypointSize: 614400 * 10
    }
  }
}

//个人阿里云服务器，带宽1m
// VUE_APP_RES_URL=http://47.112.192.129
// VUE_APP_EPUB_URL=http://47.112.192.129/epub
// VUE_APP_BASE_URL=http://47.112.192.129:3000
// VUE_APP_BOOK_URL=http://47.112.192.129:3000
// VUE_APP_EPUB_OPF_URL=http://47.112.192.129/epub2 
// VUE_APP_VOICE_URL=http://47.112.192.129:3000