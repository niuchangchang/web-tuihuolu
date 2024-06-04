const { defineConfig } = require('@vue/cli-service')
const port = process.env.port || 8086 // dev port
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // lintOnSave: process.env.ENV === 'development',
  // productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    proxy: {
      '/backend/': {
        target: 'http://101.34.15.44:8011',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/backend': '' }
      }
    }
  },
})
