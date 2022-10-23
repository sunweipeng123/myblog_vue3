<template>
  <div class="col-lg-9 col-md-9 col-sm-12">
    <!-- 主体内容开始 -->
    <div class="post-block-box">
      <Blog v-for="(article) in artList" :key="article.id" :article=article />
      
    </div>
    <!-- 主体内容结束 -->
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from "vue";
import {useIndexStore} from '@/stores';
import Blog from "@/views/Index/Blog/index.vue"
export default defineComponent({
  name: "Index",
  components:{
    Blog
  },
  setup() {
    //获取仓库
    const indexStore = useIndexStore();
    const artList = computed(()=>{
      return indexStore.orderOfTime
    })
    // console.log(artList)
    return {
      artList
    };
  },
});
</script>

<style lang='less' scoped>
/*主体内容开始*/
.post-block {
  padding: 40px;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  &:not(:first-child) {
    margin-top: 12px;
  }
  .post-header {
    margin-bottom: 60px;
    text-align: center;
    .post-title {
      font-size: 2.2em;
      font-weight: normal;
      margin: 0;
      .post-title-link {
        color: #555;
        display: inline-block;
        position: relative;

        &::before {
          background: #555;
          bottom: 0;
          content: "";
          height: 2px;
          left: 0;
          position: absolute;
          transform: scaleX(0);
          transition: transform 0.2s ease-in-out;
          width: 100%;
        }
        &:hover::before {
          transform: scaleX(1);
        }
      }
    }
    .post-meta-container {
      margin-top: 8px;
      color: #999;
      font-size: 1em;
      .post-meta-item {
        &:nth-of-type(2n)::before {
          content: "|";
          margin: 0 0.5em;
        }
        .post-meta-item-icon {
          margin-right: 3px;
        }
        .post-meta-item-text {
          a {
            color: #555;
            border-bottom: 1px solid #555;
            &:hover {
              color: #222;
              border-bottom-color: #222;
            }
          }
        }
      }
    }
  }
  .post-body {
    text-align: justify;
    @media (max-width: 991px) {
      text-align: justify;
    }
    p {
      margin: 0 0 20px;

      line-height: 1.6;
      font-size: 1.4em;
    }
    h2 {
      border-bottom: 1px solid #eee;
      font-size: 1.6em;
      font-weight: bold;
      margin: 30px 0 15px;
      line-height: 1.5;
      color: #555;
    }
  }
}
/*主体内容结束*/
</style>