import axios from "axios";
import apis from "./apis";
import qs from 'qs'

const instance = axios.create({
    // baseURL:'' //基础的路径前缀
})

//设置拦截器
// instance.interceptors.request.use((config) => {
//     // 发送请求之前做某些操作
    
// })

export default {
    apiUrl:apis,
    get:(url, params)=>{
        return new Promise((resolve, reject) => {
            let newUrl = params?`${url}?${qs.stringify(params)}`:`${url}`
            instance.get(newUrl)
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    post:(url, params, ishint)=>{
        return new Promise((resolve, reject) => {
            instance.post(url, params)
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}
