<template>
    <h2>当前求和为：{{sum}}</h2>
	<button @click="sum++">点我+1</button>
	<hr>
	<h2>当前点击时鼠标的坐标为：x：{{point.x}}，y：{{point.y}}</h2>
    <h3>工作：{{job}}</h3>
</template>

<script lang="ts">
import {ref,defineComponent,toRef,reactive} from 'vue'
import usePoint from '../hooks/usePoint'
export default defineComponent({
    name:'Demo',
    setup(){
        let sum = ref(0)
        let point = usePoint()
        let person = reactive({
            name:'张三',
            job:{
                type:'前端'
            }
        })

        // const job1 = toRef()
        // console.log(job1.value)
        console.log(person.job)

        return {
            sum,
            point,
            job:toRef(person,'job')
        }
    },
    
})
</script>

<style>

</style>