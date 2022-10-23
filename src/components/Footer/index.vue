<template>
    <!-- 底部开始 -->
            <footer id="footer" class="col-lg-9 col-md-9 col-lg-offset-3 col-md-offset-3">
                <div class="copyright">
                    <i class="iconfont icon-banquan"></i>
                    <span>2022</span>
                    <span>sunweipeng</span>
                </div>
                <div class="wordcount">
                    <span class="post-meta-item">
                        <span class="post-meta-item-icon"><i class="iconfont icon-zhexiantu-xianxing"></i></span>
                        <span>站点总字数</span>
                        <span title="站点总字数">4k</span>
                    </span>
                    <span class="post-meta-item">
                        <span class="post-meta-item-icon"><i class="iconfont icon-pinweishenghuo"></i></span>
                        <span>站点阅读时长 ≈</span>
                        <span title="站点阅读时长">4 分钟</span>
                    </span>
                </div>
                <div class="busuanzi-count">
                    <span class="post-meta-item">71</span>
                    <span class="post-meta-item">256</span>
                </div>
                <div class="powered-by">
                    由 <a>sunweipeng</a> 强力驱动
                </div>
            </footer>
            <!-- 底部结束 -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:'Footer',
    setup () {
        

        return {}
    }
})
</script>

<style lang='less' scoped>
/*底部开始*/
#footer{
    
    text-align: center;
    padding: 40px 10px 20px;
    color: #999;
    font-size: 1em;
    line-height: 2;
    i {
        font-size: 1.2em;
    }
    .post-meta-item-icon {
        margin-right: 3px;
    }
    .post-meta-item{
        &:nth-of-type(2n)::before{
            content: "|";
            margin: 0 0.5em;
        }
    }   
    a{
        border-bottom:1px solid  ;
        font-size: 1.2em;
        color: #555;
        &:hover{
            color: #222;
        }
    }
    
}
/*底部结束*/
</style>