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
  </div>
  
  <PopupWindow @popupWindow="closePopupWindow"  v-if="isShow"></PopupWindow>
  
  
  <div class="to-top" :class="backTopFlag?'active':''" @click="toTop">⬆ {{distance}}%</div>
  
</template>

<script lang="ts">
import { defineComponent,ref,onMounted,onUnmounted } from 'vue'
import Footer from '@/components/Footer/index.vue'
import Header from '@/components/Header/index.vue'
import SideBar from '@/components/SideBar/index.vue'
import Index from "@/views/Index/index.vue"
import PopupWindow from "@/components/PopupWindow/index.vue"
import {useIndexStore} from './stores'
//把仓库的数据变成响应式
import {storeToRefs} from 'pinia'
export default defineComponent({
  components:{
    Footer,
    Header,
    SideBar,
    Index,
    PopupWindow
  },
  setup () {
    // let isShowToTop = ref(false)
    let isShow = ref(false);
    //获取仓库
    const indexStore = useIndexStore()
    //调用action,把数据存到仓库中
    indexStore.getData()
    
    //利用自定义事件，控制弹窗的显示与隐藏
    const showPopupWindow = ()=>{
      // console.log('弹窗正在开启')
      isShow.value = !isShow.value
    }
    const closePopupWindow = ()=>{
      // console.log('弹窗正在关闭')
      isShow.value = !isShow.value
    }
    
    
    //回到顶部方法
    const toTop = ()=>{      
      window.scrollTo({
            top:0,
            behavior:"smooth"
        })
      
    }
    //控制顶部样式的显示与隐藏
    const backTopFlag = ref(false);
    //距离顶部百分比
    const distance = ref(0)
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
    //监听滚动事件
    onMounted(()=>{
      window.addEventListener('scroll',handleScroll)
    })
    //移除滚动事件
    onUnmounted(()=>{
      window.removeEventListener('scroll',handleScroll)
    })

    return {
      isShow,
      showPopupWindow,
      closePopupWindow,
      toTop,
      backTopFlag,
      distance
    }
  }
})
</script>

<style lang="less" >
@black:#222;    //黑色
@tolBg:#EEE;    //整体背景
@contBg:#FFF;   //内容背景
@hoverBg:#F5F5F5;
@titleBg:#555;
//修改container在移动端的宽度
.container{
  @media (max-width:768px) {
    width: auto;
  }
}
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
  z-index:999;
  &:hover{
    color: #fc6423;
    opacity: 0.8;
  }
  transform: translateY(100px);
  transition:transform 0.5s ease-in-out;
}
.active{
  transform: translateY(0);
  // bottom:70px
  @media (max-width:768px) {
    bottom: 100px;
  }
}

li{
    list-style: none;
}
a {
    text-decoration: none !important;
    cursor: pointer;
}
//整体背景
body{
    background: @tolBg;
    // overflow: auto;
}
.row{
    
    //增加相对定位，固定info
    position: relative ;
    
    
}
.col-md-9{
    // border: 1px solid red;
    @media (max-width:992px) {
        padding: 0;
    }
    
}
.col-lg-3{
    // border: 1px solid red;
    
    @media (max-width:1200px) {
        padding: 0;
    }
}
.header{
    font-size: 30px;
    text-align: center;
}
//去掉position的relative
.col-lg-3 ,.col-md-3, .hidden-sm, .hidden-xs{
    position: initial;
} 
</style>