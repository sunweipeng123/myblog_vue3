<template>
  <div class="topbar"></div>
  <div class="row hidden-lg hidden-md header-box">
    <div id="header">
      <!-- brand和nav -->
      <div class="side-header">
        <div class="brand">
          <h1>Choose or Give up</h1>
          <p>It is never too old to learn.</p>
          <div class="brand-icon toggle">
            <a id="toggle-btn" @click="handleShowNav">
              <span class="toggle-line"></span>
              <span class="toggle-line"></span>
              <span class="toggle-line"></span>
            </a>
          </div>
          <div class="brand-icon search" @click="handleShow">
            <i class="iconfont icon-fangdajing"></i>
          </div>
        </div>
        <div class="header-nav" :class="{ show: isShow }">
          <ul class="nav-menu">
            <li>
              <router-link :to="{ name: 'index' }" class="item"
                >首页</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'about' }" class="item"
                >关于</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'tags' }" class="item"
                >标签</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'categories' }" class="item"
                >分类</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'archives' }" class="item"
                >归档</router-link
              >
            </li>
            <li>
              <a class="item search-btn" @click="handleShow"
                ><i class="iconfont icon-fangdajing"></i>搜索</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,watch } from "vue";
import {useRoute} from 'vue-router'
export default defineComponent({
  name: "Header",
  emits: ["popupWindow"],
  setup(props, context) {
    //接收路由
    const route = useRoute();
    
    //监听路由路径，如果发生改变，进行判断，isshow为true就把菜单栏隐藏
    watch(()=>route.path,(val)=>{
      if(isShow.value) isShow.value = false
      
    })

    let isShow = ref(false);
    const handleShowNav = () => {
      isShow.value = !isShow.value;
    };
    const handleShow = () => {
      // console.log('开启弹窗');
      context.emit("popupWindow");
    };

    return {
      isShow,
      handleShowNav,
      handleShow,
      
    };
  },
});
</script>

<style lang='less' scoped>
.topbar {
  background-color: #222;
  height: 3px;
}
/*头部开始*/
.header-box {
  //去除padding和margin，防止底部出现滚动条
  margin: 0;
  padding: 0;
}
#header {
  margin-bottom: 20px;
  /*头部brand和菜单*/
  .brand {
    height: 110px;
    background: #222;
    padding: 20px 10px 20px;
    text-align: center;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
    position: relative;
    h1 {
      color: #fff;
      font-size: 1.5em;
      margin-top: 10px;
    }
    p {
      color: #ddd;
      font-size: 1em;
    }
    .brand-icon {
      color: #fff;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      // top: 50%;
      // margin-top: -55px;
      line-height: 1;
    }
    .toggle {
      height: 20px;
      width: 22px;
      left: 20px;
      padding-top: 5px;
      // margin-top: 55px;
      a {
        display: block;
      }
      .toggle-line {
        display: block;
        height: 2px;
        background-color: #fff;
        margin-bottom: 3px;
      }
    }
    .search {
      height: 20px;
      right: 20px;
      // margin-top: -5px;
      i {
        font-size: 1.5em;
      }
    }
  }
  .show {
    height: 256px !important;
    padding: 20px !important;
  }

  .header-nav {
    box-sizing: border-box;
    overflow: hidden;
    padding: 0;
    height: 0;
    //显示与隐藏的动画
    transition: height 0.2s ease-in-out;
    background: #fff;

    // padding-bottom: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    .nav-menu {
      padding: 0;
      margin-bottom: 0;
      li {
        height: 36px;
        line-height: 36px;

        .item {
          // padding-left: 15px;
          display: inline-block;
          width: 100%;
          color: #555;
          text-decoration: none;
          font-size: 1em;
          &:hover {
            background: #f5f5f5;
            color: #222;
          }
          .icon-fangdajing {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
/*头部结束*/
</style>