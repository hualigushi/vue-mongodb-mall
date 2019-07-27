const mockdata = require('./mock/goods.json')

module.exports = {
  runtimeCompiler: true,
  devServer: {
    port: 4000,
    // before (app) {
    //   app.get('/goods/list', (req, res, next) => {
    //     res.json(mockdata)
    //   })
    // }
    proxy: {
      '/': {
        ws: false,
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  }

}
