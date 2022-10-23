<template>
    <div>
        <h2>Count组件</h2>
        <h4>count:{{count}}</h4>
        <h4>doubleCount:{{doubleCount}}</h4>
        <button @click="countChange">更新pinia->count</button>
    </div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue'
import {useIndexStore} from '../stores'
export default defineComponent({
    name:'Count',
    setup () {
        const indexStore = useIndexStore()
        let doubleCount = computed(()=>indexStore.doubleCount)

        let count = computed({
            get():number{
                return  indexStore.count
            },
            set(val:number):void{
                indexStore.updateCount(val)
            }
        })

        const countChange = ():void=>{
            console.log(Math.random())
            count.value = Math.floor(Math.random()*10)
        }

        return {
            count,
            doubleCount,
            countChange
        }
    }
})
</script>

<style scoped>

</style>