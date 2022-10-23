<template>
  <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstName">
	<br>
	名：<input type="text" v-model="person.lastName">
	<br>
	<span>全名：{{person.fullName}}</span>
	<br>
	全名：<input type="text" v-model="person.fullName">
</template>

<script lang="ts">
import {computed, defineComponent, reactive} from 'vue'
//定义接口
interface Itest{
    firstName:string,
    lastName:string,
    fullName?:any   //fullname可传可不传，可动态添加fulName
}
export default defineComponent({
    name:'Demo',
    setup(){
        let person = reactive<Itest>({
            firstName:'张',
            lastName:'三'
        })

        person.fullName = computed({
            get(){
                return person.firstName+"-"+person.lastName
            },
            set(value:string){
                const nameArr = value.split('-')
                person.firstName = nameArr[0];
                person.lastName = nameArr[1] 
            }
        })
        console.log(person.fullName)
        

        return {
            person,
            
        }
    }
})
</script>

<style>

</style>