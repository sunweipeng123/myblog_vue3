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
                    <input type="search" maxlength="80" placeholder="搜索..." class="search-input">
                </div>
                <span class="popup-btn-close ib">x</span>
            </div>
            <div class="search-result-container">
                <div class="search-stats">找到 x 个搜索结果</div>
                <hr>
                <ul class="search-result-list">
                    <li>
                        <a class="search-result-title">Markdown</a>
                        <a>
                            <p class="search-result">
                                使用 Readme_XXX.md 来支持不同的语言，例如 Readme_en.md, Readme_zh.md
                                Gitee 官方博客 blog.gitee.com
                                你可以 https://gitee.com/explore 这个地址来了解 Gitee 上的优秀开源项目
                                GVP 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
                            </p>
                        </a>
                    </li>
                    <li>
                        <a class="search-result-title">The home for all developers — including you</a>
                        <a>
                            <p class="search-result">
                                Welcome to your personal dashboard, where you can find an introduction to how GitHub
                                works, tools to help you build software, and help merging your first lines of code.
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:'PopupWindow',
    setup () {
        

        return {}
    }
})
</script>

<style lang='less' scoped>
/*搜索弹出框开始*/
body .search-active{
    background: rgba(0,0,0,0.3);
    visibility: visible;
    .search-popup {
        //使弹出框具有缩放效果
        transform: scale(1);
    }
}
.search-pop-overlay{
    background: rgba(0,0,0,0);
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
    background: #F5F5F5;
    border-radius: 5px;
    height: 80%;
    margin: auto;
    transform: scale(0);
    transition: transform 0.4s;
    width: 700px;
    @media (max-width:767px) {
        border-radius: 0;
        top: 0;
        height: 100%;
        width: 100%;
        
    }
    .search-header{
        background: #eee;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        // display: inline-block;
        padding: 5px;
        height: 36px;
        line-height: 36px;
        position: relative;
        .ib{
            display: inline-block;
            
        }
        .search-icon,.popup-btn-close{
            color: #999;
            font-size: 18px;
            padding: 0 10px;
            // width: 10%;
            line-height: 1;
        }
        .popup-btn-close{
            background-color: #999;
            border-radius: 50%;
            padding: 1px 4px 1px;
            color: #FFF;
            font-size: 14px;
            cursor: pointer;
            // vertical-align: middle;
            &:hover{
                background-color: #222;
            }
            //防止掉落
            position: absolute;
            margin-top: 8px;
            // margin-left: 20px;
            right: 10px;
        }
    }
    .search-input-container{
        width: 85%;
        padding: 2px;
        line-height: 1;
    }
    input.search-input{
        background: transparent;
        border: 0;
        outline: 0;
        width: 100%;
    }
    .search-result-container{
        height: calc(100% - 45px);
        overflow: auto;
        padding: 5px 25px;
        text-align: left;
        ul{
            margin: 0;
            padding:0;
            li{
                margin-bottom: 25px;
            }
        }
        .search-stats{
            color: #555;
            line-height: 2;
            font-size: 1.2em;
        }
        hr{
            height: 3px;
            margin: 5px 0 10px;
            background: #ddd;
        }
        .search-result-list{
            width: 100%;
            margin: 0 5px;
            padding: 0;
            
        }
    }
    a.search-result-title{
        font-weight: bold;
        overflow-wrap: break-word;
        
        border-bottom: 1px solid;
        
    }
    p.search-result{
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