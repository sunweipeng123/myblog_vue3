<template>
    <div class="col-lg-9 col-md-9 col-sm-12">
                <!-- 主体内容开始 -->
                <div class="post-block-box">
                    <div class="post-block">
                        <article>
                            <header class="post-header">
                                <h2 class="post-title">
                                    <a class="post-title-link">{{articleObj.title}}</a>
                                </h2>
                                <div class="post-meta-container">
                                    <span class="post-meta-item">
                                        <span class="post-meta-item-icon"><i class="iconfont icon-calendar-full
                                            "></i></span>
                                        <span class="post-meta-item-text">发表于 {{articleObj.date}}</span>
                                    </span>
                                    <span class="post-meta-item">
                                        <span class="post-meta-item-icon"><i
                                                class="iconfont icon-wenjianjia"></i></span>
                                        <span class="post-meta-item-text">分类于 <a>{{articleObj.category}}</a></span>
                                    </span>
                                    <br>
                                    <span class="post-meta-item">
                                        <span class="post-meta-item-icon"><i class="iconfont icon-word"></i></span>
                                        <span class="post-meta-item-text">本文字数： 2k</span>
                                    </span>
                                    <span class="post-meta-item">
                                        <span class="post-meta-item-icon"><i class="iconfont icon-icon-"></i></span>
                                        <span class="post-meta-item-text">阅读时长 ≈ 2 分钟</span>
                                    </span>
                                </div>
                            </header>
                            <div class="post-body">
                                <p>{{articleObj.body}}</p>
                                <h2>Quick Start</h2>
                                <p>{{articleObj.body}}</p>
                            </div>
                        </article>
                        <div class="footer">
                            <p class="tip">- - - - - - - -本文结束，感谢您的阅读- - - - - - - -</p>
                            <div class="post-copyright">
                                <ul>
                                    <li>本文作者: <span >sunweipeng</span></li>
                                    <li>本文链接: <span><a >http://sunweipeng.com/article/{{articleObj.id}}</a></span></li>
                                    <li>版权声明: <span>本博客所有文章除特别声明外，均采用 BY-NC-SA 许可协议。转载请注明出处!</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- 主体内容结束 -->

            </div>
            
    
</template>

<script lang="ts">
import { defineComponent,computed } from "vue";
import {useRoute} from 'vue-router'
import {useIndexStore} from '@/stores'
export default defineComponent({
  name: "ArticleDetail",
  setup() {
    const route = useRoute();
    const indexStore = useIndexStore();
    //筛选文章
    const articleObj = computed(()=>{
        let artList = indexStore.arr.filter(item=>{
            return item.id === Number(route.params.id)
        })
        return artList[0]
    })
    // console.log(articleObj)
    
    
    return {
        articleObj
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
        cursor: initial;
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
  /*文章底部开始*/
  .tip {
    padding-top: 20px;
    text-align: center;
    color: #ccc;
    font-size: 14px;
  }
  .post-copyright {
    margin-bottom: 20px;
    ul {
      list-style: none;
      padding: 0.5em 1em;
      background: #f5f5f5;
      border-left: 3px solid #ff2a2a;
      margin: 1em 0 0;
      padding: 8px 16px;
      // font-size: 16p1x;
      li {
        color: #555;
        font-weight: bold;
        line-height: 1.8;
        font-size: 1.2em;
        span {
          margin-left: 7px;
        }
        span,
        a {
          font-weight: initial;
        }
        a {
          color: #555;
          border-bottom: 1px solid;
          &:hover {
            color: #222;
          }
        }
      }
    }
  }
  /*文章底部结束*/
}
/*主体内容结束*/
</style>