<template>
  <div class="col-lg-9 col-md-9 col-sm-12" v-show="!isShowCategory">
    <!-- 主体内容开始 -->
    <div class="post-block-box">
      <div class="post-block">
        <header class="post-header">
          <h1 class="post-title">categories</h1>
        </header>
        <div class="post-body">
          <div class="category-cloud">
            <div class="category-cloud-title">目前共计 {{dataList.length}} 个分类</div>
            <ul class="category-list">
              <li class="category-list-item" v-for="(item) in dataList" :key="item.name">
                <a class="category-list-link" @click="toCategory(item.name)">{{item.name}}</a>
                <span class="category-list-count">({{item.count}})</span>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体内容结束 -->
  </div>
  <Category :category="category" v-if="isShowCategory" />
</template>

<script lang="ts">
import { defineComponent,computed,reactive,ref,watch} from "vue";
import {useIndexStore} from '@/stores';
import {useRouter,useRoute} from 'vue-router'
import Category from '@/views/Categories/Category/index.vue'
export default defineComponent({
  name: "Categories",
  components:{
    Category
  },
  setup() {
    //控制tag组件的显示和隐藏
    const isShowCategory = ref(false);
    const router = useRouter();
    const route = useRoute();
    const category = ref('')
    //定义跳转方法
    const toCategory = (categoryName:string)=>{
      
      router.push({name:'categories',params:{category:categoryName}})
      // console.log(category.name)
    }

    //监听路由的params是否改变,从而控制category组件的显示和隐藏
    watch(()=>route.params,(val)=>{
      isShowCategory.value = val.category?true:false
      if(val.category){
        category.value = val.category as string
        // console.log(category.value)
      }
    })

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
    
    const dataList = computed(()=>{
      return objToArr()
    })
    
    
    return {
      isShowCategory,
      dataList,
      toCategory,
      category
    };
  },
});
</script>

<style lang="less" scoped>
/*主体内容开始*/
.post-block {
  padding: 40px;
  background: #FFF;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
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
  .category-cloud {
    text-align: center;
    .category-cloud-title {
      font-size: 1.2em;
      color: #555;
      margin-bottom: 20px;
    }
    // a{
    //     display: inline-block;
    //     margin: 10px;
    // }
    .category-list {
      list-style: none;
      margin: 0;
      padding: 0;
      text-align: left;
    }
    .category-list-item {
      margin: 5px 10px;
      line-height: 1.8;
      a {
        font-size: 1.2em;
        color: #555;
        border-bottom: 1px solid;
        &:hover {
          color: #222;
        }
      }
    }
    .category-list-count {
      color: #bbb;
    }
  }
}
/*主体内容结束*/
</style>