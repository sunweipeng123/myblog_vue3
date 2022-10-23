### 引入样式和图片

public目录下新建css和img目录

vue文件中引用图片

```html
<img src="/img/i.jpg" alt="">
```

### 安装less

```
npm install --save less less-loader
```

### 配置路径别名

vue.config.js

```typescript
//配置路径
const path = require("path")
function resolve(dir){
  return path.join(__dirname,dir);
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  //校验关闭
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('@', resolve('src')) 
    
  }
})

```

### 阴影不起作用

```css
box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 6%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
```

改成下面写法

```css
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
```

完成index页面的搭建

### 目录结构

![image-20221014212158076](C:\Users\Administrator\Desktop\vue3博客项目\img\image-20221014212158076.png)

### 处理弹出框（自定义事件）

在App.vue引入弹出框

子父通信：使用自定义事件

App.vue

```vue
<PopupWindow @popupWindow="closePopupWindow"  v-if="isShow"></PopupWindow>
<SideBar @popupWindow="showPopupWindow"></SideBar>

//利用自定义事件，控制弹窗的显示与隐藏
    const showPopupWindow = ()=>{
      console.log('弹窗正在开启')
      isShow.value = !isShow.value
    }
    const closePopupWindow = ()=>{
      console.log('弹窗正在关闭')
      isShow.value = !isShow.value
    }
```

子组件用setup接收

```typescript
setup(props,context){
	const handleClose = ()=>{
            console.log('关闭弹窗')
            // popupWindow
            context.emit('popupWindow')
        }
}
```

### 函数而不是 `<script setup>`，则事件需要通过 [`emits`](https://cn.vuejs.org/api/options-state.html#emits) 选项来定义，`emit` 函数也被暴露在 `setup()` 的上下文对象上

```
emits: ['inFocus', 'submit'],
  setup(props, ctx) {
    ctx.emit('submit')
  }
```



### axios请求json数据

将posts.json上传到github的我的博客上

axios请求('https://sunweipeng123.github.io.posts.json')即可获取数据

### 安装路由和配置路由组件

整体组件完成搭建

![image-20221016232811333](C:\Users\Administrator\Desktop\vue3博客项目\img\image-20221016232811333.png)

安装路由

```
npm install --save vue-router
```

配置路由

```typescript
router/index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/Index/index.vue'
import About from '@/views/About/index.vue'

const routes:Array<RouteRecordRaw> =[
    {
        path:'/',
        redirect:'index',	//重定向
        children:[
            {
                path:'index',
                name:'index',
                component:Index,
            },
            {
                path:'about',
                name:'about',
                component:About
            },
            {
                path:'tags',
                name:'tags',	//路由懒加载
                component: () => import(/* webpackChunkName: "tags" */ '../views/Tags/index.vue')
            },
            {
                path:'categories',
                name:'categories',
                component: () => import(/* webpackChunkName: "categories" */ '../views/Categories/index.vue')
            },
            {
                path:'archives',
                name:'archives',
                component: () => import(/* webpackChunkName: "categories" */ '../views/Archives/index.vue')
            },
        ]
    },
    
    
]
//指定路由模式
const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router
```

```typescript
//引入路由
import router from './router'
app.use(router)
```

在app.vue下放置路由视图

```vue
<template>
  <Header @popupWindow="showPopupWindow"></Header>
  <div class="container">
    <div class="row">
      <SideBar @popupWindow="showPopupWindow"></SideBar>
      <router-view/>
    </div>
    <div class="row">
      <Footer></Footer>
    </div>
</template>
```

因为组件少，使用router-link跳转

```vue
<template>
<li><router-link :to="{name:'index'}" class="item">首页</router-link></li>
</template>
```

### 使用axio发送请求

```shell
#安装axios
npm install --save axios
```

在src的request文件夹下

index.ts

```typescript
import axios from 'axios'

//创建实例
const service = axios.create({
    baseURL:'https://sunweipeng123.github.io',
    timeout:5000,
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
})

//响应拦截,处理数据
service.interceptors.response.use((res)=>{
    if(res.status == 200){
        // console.log('返回数据',res.data)
        return res.data
    }
    return Promise.reject(res.data)
},(err)=>{
    console.log(err)
})

```

api.ts

```typescript
//定义请求函数
import service from ".";

//请求json数据
export function getJsonData(){
    return service({
        url:'/posts.json',
        method:'get'
    })
}
```

### 用pinia接收服务器返回的数据

```shell
npm install --save pinia
```

在mian.ts中使用pinia

```typescript
//引入pinia
import {createPinia} from 'pinia'

const app = createApp(App)
app.use(createPinia())
```

在src下的store下

index.ts

```typescript
import {defineStore} from 'pinia'
//引入api
import {getJsonData} from '@/request/api'
//引入接口
import { IArr,IArrobj } from './types'
//index是storeId,保证唯一
export const useIndexStore = defineStore('index',{
    state:():IArr=>{
        return {
            arr:[] as IArrobj[]
        }
    },
    getters:{
        
    },
    actions:{
        async getData(){
            let result:any = await getJsonData();
            // console.log(result)
            this.arr = result
            console.log('显示数据',this.arr)
          }
    // getData()
    }
})
```

types.ts定义接收数据类型

```typescript
export interface IArrobj  {
    body: string,
    category: string,
    data: string,
    id: number,
    tag: string,
    title: string,
    userId: number
}

/*export interface IArr {
    arr:IArrobj[]
}*/
```

在App.vue中调用action发送请求

```typescript
import {useIndexStore} from './stores'

//获取仓库
    const indexStore = useIndexStore()
    //调用action,把数据存到仓库中
    indexStore.getData()


onMounted(()=>{
      let data = indexStore.arr;
      console.log('挂载',data)
      //data为proxy对象
    })
```

### 将数据渲染到index组件

每一篇章为一个blog组件，用props进行父子通信，用computed获取store的数据

```typescript
//index组件
<Blog v-for="(article) in artList" :key="article.id" :article=article />
const artList = computed(()=>{
      return indexStore.arr
    })
```

```typescript
//blog组件
props:['article'],
    setup (props) {
        return {
            article:props.article
        }
    }
```

### 渲染tags组件

```typescript
//获取仓库
    const indexStore = useIndexStore();
    const tagList = computed(() => {
      let tags: string[] = [];
      indexStore.arr.forEach((item) => {
        if (!tags.includes(item.tag)) {
          tags.push(item.tag);
        }
      });
      return tags;
    });
```

### 渲染categories组件

```typescript
//获取仓库
    const indexStore = useIndexStore();
    //统计每个分类的文章总数，返回的是对象
    const categoryList =reactive( computed(()=>{
      let categories:any = {};
      indexStore.arr.forEach((item)=>{
        if(item.category in categories){
          categories[item.category]++
        }else{
          categories[item.category] = 1
        }
      })
      return categories
    }))
    // objToArr将对象转为数组
    function objToArr(){
      interface IArrObj {
        name:string,
        count:number
      }
      let arr:IArrObj[] = [];
      for(const [key,value] of Object.entries(categoryList.value)){
        arr.push({name:key,count:value as number})
      }
      
      return arr
    }
    //获取获取好的数据
    const dataList = computed(()=>{
      return objToArr()
    })
    
    
```

### 数组按时间降序排序

```typescript
getters:{
         
        //数据按时间排序
        orderOfTime():IArrobj[]{
              return this.arr.sort((a, b) => {
                let time1 = Date.parse(a.date.replace(/-/g,"/"));
                let time2 = Date.parse(b.date.replace(/-/g,"/"));
                return time2-time1
              });
        }
    },
```

categories调用getter

```typescript
const archList = computed(() => {
      return indexStore.orderOfTime
    });
```

### 点击文章跳转到文章详情页

blog组件进行文章id获取（使用params携带参数），编程式导航进行跳转

```typescript
//引入路由
import {useRouter} from 'vue-router'

//定义跳转方法
        const toDetail = (id:number)=>{
          // console.log(id);
          router.push({name:'article',params:{id:id}})
        }
```

router的index.ts

```
{
                path:'article/:id',
                name:'article',
                component: () => import(/* webpackChunkName: "article" */ '../views/Index/ArticleDetail/index.vue')
            },
```

ArticleDetail组件获取params参数，进行判断，决定展示那一篇文章

```typescript
//筛选文章
    const articleObj = computed(()=>{
        let artList = indexStore.arr.filter(item=>{
            return item.id === Number(route.params.id)
        })
        return artList[0]
    })
```

### 点击tags跳转到具体的tag(监听路由)

在tags下新建tag组件，并在tags引入

当点击某个分类时，就显示该组件(使用路由，自己跳转自己)

```typescript
import Tag from "@/views/Tags/Tag/index.vue";

//控制tag组件的显示和隐藏
    const isShowTag = ref(false);
//定义跳转方法，
    const toTag = (tag:string)=>{
      
      router.push({name:'tags',params:{tag:tag}})
      // console.log(route)
    }
```

当点击的是tags组件不需要传参，点击为tag才需要传参，并显示组件和传递参数给该组件

router的index.ts

```typescript
{
                path:'tags/:tag?',
                name:'tags',
                component: () => import(/* webpackChunkName: "tags" */ '../views/Tags/index.vue')
            },
```

tags组件

```typescript
<Tag :tag="tag" v-if="isShowTag" />
    //监听路由的params是否改变,从而控制tag组件的显示和隐藏
    watch(()=>route.params,(val)=>{
      isShowTag.value = val.tag?true:false
      if(val.tag){
        tag.value = val.tag as string
        // console.log(tag)
      }
    })
```

tag组件接收父组件的参数，并展示具体数据

```typescript
props:['tag'],
    //获取该标签对应的数据
        const artList = computed(()=>{
            return indexStore.orderOfTime.filter(item=>{
                return item.tag === props.tag
            })
        })

//点击跳转到对应文章
        const toDetail = (id:number)=>{
            router.push({name:'article',params:{id:id}})
        }
        
```

### 点击categories跳转到具体的category，同tags一样

### 为archives组件的每篇文章设置点击跳转事件

```typescript
//跳转到对应文章
    const toDetail = (id: number) => {
      router.push({ name: "article", params: { id: id } });
    };
```

### 调整首页文章显示

内容过长的省略显示

```vue
{{article.body.length>70?article.body.slice(0,65)+"...":article.body}}
```

### 为搜索组件实现搜索功能

展示搜索数据

PopupWindow组件

```typescript
//定义搜索关键字
    const keyWord = ref("");
    //筛选方法
    const search = () => {

      let searchList: IArrobj[] = [];
      if (keyWord.value) {        
        indexStore.arr.forEach((item) => {
          if (item.title.indexOf(keyWord.value) != -1) {
            searchList.push(item);
          } else if (item.body.indexOf(keyWord.value) != -1) {
            searchList.push(item);
          }
        });
      }
      return searchList;
    };
    //返回筛选结果
    const searchData = computed(() => {
      return search();
    });

```

实现文章跳转

```typescript
//定义跳转方法，跳转到对应文章
    const toDetail = (id: number) => {
      router.push({ name: "article", params: { id: id } });
        //   跳转后关闭弹窗
      handleClose()
    };
```

### 回到顶部功能开发

1. 样式

   ```less
   //回到顶部定位
   .to-top{
     position: fixed;
     right: 30px;
     bottom:70px;
     font-size: 14px;
     box-sizing: border-box;
     color: #fff;
     padding:2px 6px;
     cursor: pointer;
     background-color: #222;
     opacity: 0.5;
     
     &:hover{
       color: #fc6423;
       opacity: 0.8;
     }
      //动画过渡，通过transformY进行
     transform: translateY(100px);
     transition:transform 0.5s ease-in-out;
   }
   .active{
     transform: translateY();
     // bottom:70px
   }
   
   ```

2. 控制顶部样式的显示与隐藏、计算距离顶部百分比

```typescript
//控制顶部样式的显示与隐藏
    const backTopFlag = ref(false);
    //距离顶部百分比
    const distance = ref(0)
    const handleScroll = () =>{
      if(document.documentElement.scrollTop>250){
        //计算距离顶部百分比
        distance.value = Math.ceil((document.documentElement.scrollTop / document.body.scrollHeight)*100)
        backTopFlag.value = true
      }else{
        backTopFlag.value = false
      }
    }
```

3. 定义回到顶部方法

```typescript
//回到顶部方法
    const toTop = ()=>{
      let top = document.documentElement.scrollTop  //获取滚动距离
      //定义回到顶部方法，时间
      const timeTop = setInterval(()=>{
        document.documentElement.scrollTop = top -= 50;
        if(top<=0){
          clearInterval(timeTop)
        }
      },5)
      // console.log(document.body.scrollHeight)
    }
```

4. 监听scroll滚动

```typescript
 //监听滚动事件
    onMounted(()=>{
      window.addEventListener('scroll',handleScroll)
    })
    //移除滚动事件
    onUnmounted(()=>{
      window.removeEventListener('scroll',handleScroll)
    })
```

### 问题：路由跳转时，页面没有回到顶部

解决办法：https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#%E5%BB%B6%E8%BF%9F%E6%BB%9A%E5%8A%A8

添加router后置守卫，当跳转后，滚动到顶部

```typescript
router.afterEach((to,from)=>{
    if(document.documentElement.scrollTop>50){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    
})
```

### 手机端出现两个问题：

1. 回到顶部模块没有出现

   ```typescript
   //回到顶部方法
       const toTop = ()=>{      
         window.scrollTo({
               top:0,
               behavior:"smooth"
           })
         
       }
       //滚动事件
   const handleScroll = () =>{
         //scrollTop在移动端为0，采用window.pageYOffset计算
         if(document.documentElement.scrollTop>250||window.pageYOffset>250){
           //计算距离顶部百分比
           if(document.documentElement.scrollTop){   //pc端
             distance.value = Math.ceil((document.documentElement.scrollTop / document.body.scrollHeight)*100)
           }else if(window.pageYOffset){   //移动端
             distance.value = Math.ceil((window.pageYOffset / document.body.scrollHeight)*100)
           }
           
           backTopFlag.value = true
         }else{
           backTopFlag.value = false
         }
       }
   ```

   

2. 路由跳转没有回到顶部

   推测：与document.documentElement.scrollTop有关

```typescript
//移动端采取scrollBehavior
const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to,from,scrollBehavior){
        if(document.documentElement.scrollTop){
            return
        }
        return {top:0}
    }
})
//pc端采取后置守卫
router.afterEach((to,from)=>{
    if(document.documentElement.scrollTop>50){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    
})
```

### 问题：用移动端跳转时，一旦菜单展开，就跳转后也是展开状态

在header组件中进行路由监听

```typescript
//接收路由
    const route = useRoute();
    
    //监听路由路径，如果发生改变，进行判断，isshow为true就把菜单栏隐藏
    watch(()=>route.path,(val)=>{
      if(isShow.value) isShow.value = false
      
    })
```



