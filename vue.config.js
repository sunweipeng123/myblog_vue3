//配置路径
const path = require("path")
function resolve(dir){
  return path.join(__dirname,dir);
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  //校验关闭
  
})
