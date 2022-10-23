<template>
    <div class="post-block" >
        <article>
          <header class="post-header">
            <h2 class="post-title">
              <a class="post-title-link" @click="toDetail(article.id)">{{article.title}}</a>
            </h2>
            <div class="post-meta-container">
              <span class="post-meta-item">
                <span class="post-meta-item-icon"
                  ><i class="iconfont icon-calendar-full"></i
                ></span>
                <span class="post-meta-item-text">发表于 {{article.date}}</span>
              </span>
              <span class="post-meta-item">
                <span class="post-meta-item-icon"
                  ><i class="iconfont icon-wenjianjia"></i
                ></span>
                <span class="post-meta-item-text">分类于 <a>{{article.category}}</a></span>
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
              {{article.body}}
            </p>
            <h2>Quick Start</h2>
            <p >
              {{article.body.length>70?article.body.slice(0,65)+"...":article.body}}
            </p>
          </div>
        </article>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//引入路由
import {useRouter} from 'vue-router'

export default defineComponent({
    name:'Blog',
    props:['article'],
    //自定义指令截取字符串
    // directives:{
    //   snippet:{
    //     mounted(el,binding){
    //       console.log(el.innerText)
    //       el.innerText = binding.value.length>50?binding.value.slice(0,48)+"...":binding.value
          
    //     }
    //   }
    // },
    setup (props) {
        const router = useRouter();
        // const route = useRoute();
        // console.log(router)
        //定义跳转方法
        const toDetail = (id:number)=>{
          // console.log(id);
          router.push({name:'article',params:{id:id}})
        }

        return {
            article:props.article,
            toDetail
        }
    }
})
</script>

<style lang="less" scoped>
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