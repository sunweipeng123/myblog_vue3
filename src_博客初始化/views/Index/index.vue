<template>
  <div class="col-lg-9 col-md-9 col-sm-12">
    <!-- 主体内容开始 -->
    <div class="post-block-box">
      <div class="post-block">
        <article>
          <header class="post-header">
            <h2 class="post-title">
              <a class="post-title-link">pinia</a>
            </h2>
            <div class="post-meta-container">
              <span class="post-meta-item">
                <span class="post-meta-item-icon"
                  ><i class="iconfont icon-calendar-full"></i
                ></span>
                <span class="post-meta-item-text">发表于 2022-08-29</span>
              </span>
              <span class="post-meta-item">
                <span class="post-meta-item-icon"
                  ><i class="iconfont icon-wenjianjia"></i
                ></span>
                <span class="post-meta-item-text">分类于 <a>前端</a></span>
              </span>
              <br />
              <span class="post-meta-item">
                <span class="post-meta-item-icon"
                  ><i class="iconfont icon-word"></i
                ></span>
                <span class="post-meta-item-text">本文字数： 2k</span>
              </span>
              <span class="post-meta-item">
                <span class="post-meta-item-icon"
                  ><i class="iconfont icon-icon-"></i
                ></span>
                <span class="post-meta-item-text">阅读时长 ≈ 2 分钟</span>
              </span>
            </div>
          </header>
          <div class="post-body">
            <p>
              Welcome to Hexo! This is your very first post. Check documentation
              for more info. If you get any problems when using Hexo, you can
              find the answer in troubleshooting or you can ask me on GitHub.
            </p>
            <h2>Quick Start</h2>
            <p>
              Welcome to Hexo! This is your very first post. Check documentation
              for more info. If you get any problems wh
            </p>
          </div>
        </article>
      </div>
      <div class="post-block">
        <article>
          <header class="post-header">
            <h2 class="post-title">
              <a class="post-title-link"
                >Maybe you can find the solution here</a
              >
            </h2>
            <div class="post-meta-container">
              <span class="post-meta-item">
                <span class="post-meta-item-icon"><i></i></span>
                <span class="post-meta-item-text">发表于 2022-08-29</span>
              </span>
              <span class="post-meta-item">
                <span class="post-meta-item-icon"><i></i></span>
                <span class="post-meta-item-text">分类于 <a>个人博客</a></span>
              </span>
              <br />
              <span class="post-meta-item">
                <span class="post-meta-item-icon"><i></i></span>
                <span class="post-meta-item-text">本文字数： 2k</span>
              </span>
              <span class="post-meta-item">
                <span class="post-meta-item-icon"><i></i></span>
                <span class="post-meta-item-text">阅读时长 ≈ 2 分钟</span>
              </span>
            </div>
          </header>
          <div class="post-body">
            <p>
              //引入响应式 import {storeToRefs} from 'pinia' const indexStore =
              useIndexStore() const {count} = storeToRefs(indexStore) Welcome to
              Hexo! This is your very first post. Check documentation for more
              info. If you get any problems when using Hexo, you can find the
              answer in troubleshooting or you can ask me on GitHub.
            </p>
            <h2>Quick Start</h2>
          </div>
        </article>
      </div>
    </div>
    <!-- 主体内容结束 -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Index",
  setup() {
    return {};
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