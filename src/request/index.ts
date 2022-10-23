import axios from 'axios'

//创建实例
const service = axios.create({
    baseURL:'https://sunweipeng123.github.io',
    timeout:5000,
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
})

//请求拦截
service.interceptors.request.use((config)=>{
    return config
})

//响应拦截
service.interceptors.response.use((res)=>{
    if(res.status == 200){
        // console.log('返回数据',res.data)
        return res.data
    }
    return Promise.reject(res.data)
},(err)=>{
    console.log(err)
})

export default service