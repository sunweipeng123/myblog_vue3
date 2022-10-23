<template>
  <div class="col-lg-9 col-md-9 col-sm-12">
    <div class="post-block">
      <div class="post-content">
          <h1>这是About组件</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.post-block{
    padding: 40px;
    background:#FFF;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    &:not(:first-child){
        margin-top: 12px;
    }
    .post-content{
        margin-bottom: 35px;
        margin-left: 35px;
        position: relative;
    }
}
</style>