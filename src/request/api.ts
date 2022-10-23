import service from ".";

//请求json数据
export function getJsonData(){
    return service({
        url:'/posts.json',
        method:'get'
    })
}