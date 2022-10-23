<template>
  <div class="col-lg-9 col-md-9 col-sm-12" v-show="!isShowTag">
    <!-- 主体内容开始 -->
    <div class="post-block-box">
      <div class="post-block">
        <header class="post-header">
          <h1 class="post-title">tags</h1>
        </header>
        <div class="post-body">
          <div class="tag-cloud">
            <div class="tag-cloud-title">目前共计 {{tagList.length}} 个标签</div>
            <div class="tag-cloud-tags">
              <a class="tag-cloud-item" @click="toTag(tag)" v-for="(tag,index) in tagList" :key="index">{{tag}}</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体内容结束 -->
    
  </div>
  <Tag :tag="tag" v-if="isShowTag" />
  
</template>

<script lang="ts">
import { defineComponent, computed,ref,watch } from "vue";
import { useIndexStore } from "@/stores";
import Tag from "@/views/Tags/Tag/index.vue";
import {useRouter,useRoute} from 'vue-router'
export default defineComponent({
  name: "Tags",
  components:{
    Tag
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const tag = ref('')

    //控制tag组件的显示和隐藏
    const isShowTag = ref(false);
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
    

    //定义跳转方法
    const toTag = (tag:string)=>{
      
      router.push({name:'tags',params:{tag:tag}})
      // console.log(route)
    }

    //监听路由的params是否改变,从而控制tag组件的显示和隐藏
    watch(()=>route.params,(val)=>{
      isShowTag.value = val.tag?true:false
      if(val.tag){
        tag.value = val.tag as string
        // console.log(tag)
      }
    })
    
    return {
      tagList,
      toTag,
      isShowTag,
      route,
      tag
    };
  },
});
</script>

<style lang="less" scoped>
/*主体内容开始*/
.post-block {
  padding: 40px;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  &:not(:first-child) {
    margin-top: 12px;
  }
  .post-header {
    // font-size: 1em;
    margin-bottom: 60px;
    text-align: center;
  }
  .post-title {
    font-size: 2em;
    font-weight: normal;
    margin: initial;
    overflow-wrap: break-word;
    color: #555;
  }
  .post-body {
    @media (min-width: 992px) {
      text-align: justify;
    }
  }
  .tag-cloud {
    text-align: center;
    .tag-cloud-title {
      font-size: 1.4em;
      color: #555;
      margin-bottom: 10px;
    }
    a {
      display: inline-block;
      margin: 10px;
    }
    .tag-cloud-item {
      border-bottom: 1px solid;
      color: #666;
      &:hover {
        color: #222;
      }
      font-size: 1.6em;
    }
  }
}
/*主体内容结束*/
</style>