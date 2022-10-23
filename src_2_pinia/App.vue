<template>
  <button @click="reset">重置store</button>
 <h1>app组件:{{num}}</h1>
 <Count />
</template>

<script lang="ts">
//引入响应式
import {storeToRefs} from 'pinia'
import { defineComponent,computed } from 'vue';
import Count from './components/Count.vue'
import {useIndexStore} from './stores'
export default defineComponent({
  name: 'App',
  components:{
    Count
  },
  setup(){
    const indexStore = useIndexStore()
    // console.log(indexStore)
    const {count} = storeToRefs(indexStore)

    //重置方法
    const reset = ()=>{
      indexStore.$reset()
    }

    return {
      num:count,
      reset
    }
  }
  
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
