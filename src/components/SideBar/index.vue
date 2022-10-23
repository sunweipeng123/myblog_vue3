<template>
    <!-- 宽度大于992px就显示侧边栏 -->
            <div class="col-lg-3 col-md-3 hidden-sm hidden-xs">
                <!-- 侧边栏开始 -->
                <div class="side-bar">
                    <!-- brand和nav -->
                    <div class="side-header">
                        <div class="brand">
                            <h1>Learn to choose,learn to give up</h1>
                            <p>It is never too old to learn.</p>
                        </div>
                        <div class="nav">
                            <ul class="nav-menu">
                                <li><router-link :to="{name:'index'}" class="item">首页</router-link></li>
                                <li><router-link :to="{name:'about'}" class="item">关于</router-link></li>
                                <li><router-link :to="{name:'tags'}" class="item">标签</router-link></li>
                                <li><router-link :to="{name:'categories'}" class="item">分类</router-link></li>
                                <li><router-link :to="{name:'archives'}" class="item">归档</router-link></li>
                                <li><a class="item search-btn" @click="handleShow"><i class="iconfont icon-fangdajing"></i>搜索</a></li>

                            </ul>
                        </div>
                    </div>
                    <!-- 个人信息 -->
                    <div class="info-box">
                        <div class="info">
                            <div class="info-author">
                                <img src="/img/i.jpg" alt="">
                                <p class="author-name">sunweipeng</p>
                                <div class="description">经历一个过程然后成为更好的自己</div>
                            </div>
                            <div class="info-state">
                                <nav>
                                    <div class="state-item">
                                        <a>
                                            <span class="state-item-count">6</span>
                                            <span class="state-item-name">日志</span>
                                        </a>
                                    </div>
                                    <div class="state-item">
                                        <a>
                                            <span class="state-item-count">4</span>
                                            <span class="state-item-name">分类</span>
                                        </a>
                                    </div>
                                    <div class="state-item">
                                        <a>
                                            <span class="state-item-count">5</span>
                                            <span class="state-item-name">标签</span>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 侧边栏结束 -->
            </div>
            <!-- 宽度大于992px就显示侧边栏 -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:'SideBar',
    emits:['popupWindow'],
    setup (props,context) {
        // console.log(props,context)
        const handleShow = ()=>{
            // console.log(context)
            // console.log('开启弹窗');
            context.emit('popupWindow')
        }
        return {
            handleShow
        }
    }
})
</script>

<style lang='less' scoped>
/*侧边栏开始*/
.side-bar{
    width: 100%;
    
    /*头部brand和菜单*/
    .brand{
        height: 110px;
        background: #222;
        padding: 20px 10px 20px;
        text-align: center;
        h1 {
            color: #FFF;
            font-size: 1.5em;
            margin-top: 10px;
        }
        p{
            color: #ddd;
            font-size: 1em;
        }
    }
    .nav{
        
        background: #FFF;
        padding-top: 10px;
        padding-bottom: 5px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        .nav-menu{
            padding: 0;
            margin-bottom: 0;
            li{
                height: 36px;
                line-height: 36px;
                
                .item{
                    padding-left: 15px;
                    display: inline-block;
                    width: 100%;
                    color: #555;
                    text-decoration: none;
                    font-size: 1em;
                    &:hover{
                        background: #F5F5F5;
                        color: #222;
                    }
                    .icon-fangdajing{
                        margin-right: 10px;
                    }
                }
            }
        }
    }
    /*个人信息*/
    .info-box{
        
        position: absolute;
        left: 0;
        top: 350px;
        bottom: 0;
        left: 1px;
        right: 0;
        
        max-width: 292px;
        @media (max-width:1200px) {
            max-width: 240px;
        }
        .info{
            padding: 18px 10px;
            margin-top: 12px;
            background: #FFF;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            position: sticky;
            top: 12px;
            width: 100%;
            text-align: center;
            .info-author{
                img{
                    border: 1px solid #eee;
                    max-width: 120px;
                    padding: 2px;
                    border-radius: 50%;
                    transition: transform 1s ease-out;
                    &:hover{
                        transform: rotateZ(360deg);
                    }
                }
                .author-name{
                    color: #555;
                    font-size: 1.4em;
                    font-weight: 600;
                    line-height: 1.2;
                }
                .description{
                    color: #999;
                    font-size: 1em;
                    margin-top: 0;
                }
            }
            .info-state{
                margin-top: 15px;
                nav{
                    .state-item{
                        display: inline-block;
                        padding: 0 10px;
                        a{
                            display: block;
                            border-bottom: 0;
                            color: #555;
                            &:hover{
                                color: #222;
                            }
                        }
                        .state-item-count {
                            display: block;
                            font-size: 1.2em;
                            font-weight: 600;
                        }
                        .state-item-name {
                            color: #999;
                            font-size: 1em;
                        }
                    }
                }
            }
        }
        
        
    }
    
}
/*侧边栏结束*/
</style>