<template>
    <div class="col-lg-9 col-md-9 col-sm-12">
                <!-- 主体内容开始 -->
                <div class="post-block-box">
                    <div class="post-block">
                        <div class="post-content">
                            <div class="collection-title">
                                <b class="dot"></b>
                                <h1 class="collection-header">
                                    {{tag}}
                                    <small>标签</small>
                                </h1>
                            </div>
                            <div class="collection-year">
                                <b class="dot"></b>
                                <span class="collection-header">2022</span>
                            </div>
                            <article v-for="(item) in artList" :key="item.id">
                                
                                <header class="post-header">
                                    <b class="dot"></b>
                                    <div class="post-meta-container">
                                        <span> {{item.date.slice(5)}} </span>
                                    </div>
                                    <div class="post-title">
                                        <a @click="toDetail(item.id)" class="post-title-link">
                                            <span>{{item.title}}</span>
                                        </a>
                                    </div>
                                </header>
                            </article>
                            
                        </div>  
                    </div>

                </div>
                <!-- 主体内容结束 -->

            </div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue'
import {useIndexStore} from '@/stores'
import { useRouter } from 'vue-router'
export default defineComponent({
    name:'Tag',
    props:['tag'],
    setup (props) {
        const router = useRouter();
        const indexStore = useIndexStore();

        //获取该标签对应的数据
        const artList = computed(()=>{
            return indexStore.orderOfTime.filter(item=>{
                return item.tag === props.tag
            })
        })
        
        //跳转到对应文章
        const toDetail = (id:number)=>{
            router.push({name:'article',params:{id:id}})
        }

        return {
            artList,
            toDetail
        }
    }
})
</script>

<style lang="less" scoped>
@h:12px;
@w:12px;
/*主体内容开始*/
.post-block{
    padding: 40px;
    background:#FFF;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    &:not(:first-child){
        margin-top: 12px;
    }
    .post-content{
        margin-bottom: 35px;
        margin-left: 35px;
        position: relative;
        //总线
        &::before{
            background: #f5f5f5;
            content: ' ';
            height: 100%;
            margin-left: -2px;
            position: absolute;
            top: 1.25em;
            width: 4px;
        }
        .dot{
            // display: block;
            position: absolute;
            height: @h;
            width: @w;
            border-radius: 50%;
            background:#999;
            top: 0;
            bottom: 0;
            margin: auto;
            // margin-left: -20px;
            left: -5px;
        }
        .collection-title,.collection-year{
            position: relative;
        }
    }
    .collection-title{
        .dot{
            height: @h;
            width: @w;
        }
    }
    
    .collection-header{
        font-size: 2em;
        color: #555;
        font-weight: bold;
        margin-left: 20px;
        small{
            color: #bbb;
            margin-left: 5px;
            font-weight: bold;
            font-size: 80%;
        }
        
    }
    .collection-year{
        // font-size: 1.5em;
        font-weight: bold;
        margin: 60px 0;
        span{
            display: block;
            margin-left: 20px;
            font-size: 2em;
        }
        .dot{
            width: @w - 2;
            height: @h - 2;
            
        }
    }
    .post-header{
        border-bottom: 1px dashed #ccc;
        margin: 30px 2px 0;
        padding-left: 15px;
        position: relative;
        transition: border 0.2s ease-in-out;
        .dot{
            height: @h - 4;
            width: @w - 4;
            left: -7px;
        }
        &:hover{
            border-bottom-color: #666;
            .dot{
                background:#666;
            }
        }
        .post-meta-container{
            display: inline;
            font-size: 0.85em;
            margin-right: 10px;
        }
        .post-title{
            display: inline;
            a{
                font-size: 1.2em;
                color: #555;
                &:hover{
                    color: #666;
                }
            }
        }
    }
}
/*主体内容结束*/
</style>