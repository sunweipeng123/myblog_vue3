import {defineStore} from 'pinia'
import { indexType } from './types'
//main是storeId,保证唯一
export const useIndexStore = defineStore('index',{
    state:():indexType=>{
        return {
            count:0,
        }
    },
    getters:{
        doubleCount(state):number{
            return state.count*2
        }
    },
    actions:{
        updateCount(val:number){
            this.count = val
        }
    }
})