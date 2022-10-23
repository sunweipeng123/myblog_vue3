import {defineStore} from 'pinia'
//引入api
import {getJsonData} from '@/request/api'
//引入接口
import { IArrobj } from './types'
//index是storeId,保证唯一
export const useIndexStore = defineStore('index',{
    state:()=>{
        return {
            
            arr:[] as IArrobj[]
        }
    },
    getters:{
         
        //数据按时间排序
        orderOfTime():IArrobj[]{
              return this.arr.sort((a, b) => {
                let time1 = Date.parse(a.date.replace(/-/g,"/"));
                let time2 = Date.parse(b.date.replace(/-/g,"/"));
                return time2-time1
              });
        }
    },
    actions:{
        async getData(){
            let data:any = await getJsonData();
            // console.log(data)
            this.arr = data
            // console.log('显示数据',this.arr)
          }
    // getData()
    }
})