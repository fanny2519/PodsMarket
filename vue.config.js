
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages:{
    index:{
      entry:"./src/pages/index/main.js",  // 配置入口js文件
      template:"./src/pages/index/index.html",  // 主页面
      filename:"index.html",
    },
    products:{
      entry:"./src/pages/products/main.js",  // 配置入口js文件
      template:"./src/pages/products/products.html",  // 主页面
      filename:"products.html",
    },
    details:{
      entry:"./src/pages/details/main.js",  // 配置入口js文件
      template:"./src/pages/details/details.html",  // 主页面
      filename:"details.html",
    },
    login:{
      entry:"./src/pages/login/main.js",  // 配置入口js文件
      template:"./src/pages/login/login.html",  // 主页面
      filename:"login.html",
    }
  }

})

