<template>
  <!-- 搜索弹出框 -->
  <div class="search-pop-overlay search-active">
    <!-- <div style="width: 100%;height: 20px;"></div> -->
    <div class="popup search-popup">
      <div class="search-header">
        <span class="search-icon ib">
          <i class="iconfont icon-fangdajing"></i>
        </span>
        <div class="search-input-container ib">
          <input
            v-model.trim="keyWord"
            type="search"
            maxlength="80"
            placeholder="搜索..."
            class="search-input"
          />
        </div>
        <span @click="handleClose" class="popup-btn-close ib">x</span>
      </div>
      <div class="search-result-container">
        <div class="search-stats">找到 {{searchData.length}} 个搜索结果</div>
        <hr />
        <ul class="search-result-list">
          <li v-for="item in searchData" :key="item.id">
            <a @click="toDetail(item.id)" class="search-result-title">{{item.title}}</a>
            <a @click="toDetail(item.id)">
              <p class="search-result">
                {{item.body}}
              </p>
            </a>
          </li>
          
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useIndexStore } from "@/stores";
import { IArrobj } from "@/stores/types";
import {useRouter} from 'vue-router'
export default defineComponent({
  name: "PopupWindow",
  emits: ["popupWindow"],
  setup(props, context) {
    //获取仓库
    const indexStore = useIndexStore();
    //获取路由
    const router = useRouter();

    //定义跳转方法，跳转到对应文章
    const toDetail = (id: number) => {
      router.push({ name: "article", params: { id: id } });
        //   跳转后关闭弹窗
      handleClose()
    };

    //通知父元素关闭弹窗
    const handleClose = () => {
      context.emit("popupWindow");
    };
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

    return {
      handleClose,
      keyWord,
      searchData,
      toDetail
    };
  },
});
</script>

<style lang='less' scoped>
/*搜索弹出框开始*/
body .search-active {
  background: rgba(0, 0, 0, 0.3);
  visibility: visible;
  .search-popup {
    //使弹出框具有缩放效果
    transform: scale(1);
  }
}
.search-pop-overlay {
  background: rgba(0, 0, 0, 0);
  visibility: hidden;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: visibility 0.4s, background 0.4s;
  // transition: visibility 0.4s, background 0.4s;
  // visibility: hidden;
  width: 100%;
  z-index: 1;
  // margin: 0;
}
.search-popup {
  position: absolute;
  top: 20px;
  bottom: 0;
  left: 0;
  right: 0;
  // margin-top: 20px;
  background: #f5f5f5;
  border-radius: 5px;
  height: 80%;
  margin: auto;
  transform: scale(0);
  transition: transform 0.4s;
  width: 700px;
  @media (max-width: 767px) {
    border-radius: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .search-header {
    background: #eee;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    // display: inline-block;
    padding: 5px;
    height: 36px;
    line-height: 36px;
    position: relative;
    .ib {
      display: inline-block;
    }
    .search-icon,
    .popup-btn-close {
      color: #999;
      font-size: 18px;
      padding: 0 10px;
      // width: 10%;
      line-height: 1;
    }
    .popup-btn-close {
      background-color: #999;
      border-radius: 50%;
      padding: 1px 4px 1px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      // vertical-align: middle;
      &:hover {
        background-color: #222;
      }
      //防止掉落
      position: absolute;
      margin-top: 8px;
      // margin-left: 20px;
      right: 10px;
    }
  }
  .search-input-container {
    width: 85%;
    padding: 2px;
    line-height: 1;
  }
  input.search-input {
    background: transparent;
    border: 0;
    outline: 0;
    width: 100%;
  }
  .search-result-container {
    //控制结果展示的高度
    height: calc(100% - 45px);
    overflow: auto;
    padding: 5px 25px;
    text-align: left;
    ul {
      margin: 0;
      padding: 0;
      li {
        margin-bottom: 25px;
      }
    }
    .search-stats {
      color: #555;
      line-height: 2;
      font-size: 1.2em;
    }
    hr {
      height: 3px;
      margin: 5px 0 10px;
      background: #ddd;
    }
    .search-result-list {
      width: 100%;
      margin: 0 5px;
      padding: 0;
    }
  }
  a.search-result-title {
    font-weight: bold;
    overflow-wrap: break-word;

    border-bottom: 1px solid;
  }
  p.search-result {
    margin-top: 10px;
    border-bottom: 1px dashed #ccc;
    // padding: 0px 0;
    padding: 0;
    //超过两行就省略
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    // margin-bottom: 10px;
  }
}

/*搜索弹出框结束*/
</style>