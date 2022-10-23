<template>
  <Header></Header>
  <div class="container">
    <div class="row">
      <SideBar></SideBar>
      <Index></Index>
    </div>
    <div class="row">
      <Footer></Footer>
    </div>
  </div>
  <PopupWindow></PopupWindow>
  
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from '@/components/Footer/index.vue'
import Header from '@/components/Header/index.vue'
import SideBar from '@/components/SideBar/index.vue'
import Index from "@/views/Index/index.vue"
import PopupWindow from "@/components/PopupWindow/index.vue"
export default defineComponent({
  components:{
    Footer,
    Header,
    SideBar,
    Index,
    PopupWindow
  },
  setup () {
    

    return {}
  }
})
</script>

<style lang="less" >
@black:#222;    //黑色
@tolBg:#EEE;    //整体背景
@contBg:#FFF;   //内容背景
@hoverBg:#F5F5F5;
@titleBg:#555;
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