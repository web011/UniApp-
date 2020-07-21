// 写axios请求
import axios from 'axios'
import Vue from 'vue'

import { Toast } from 'mint-ui';


const http = axios.create({
    baseURL:'http://localhost:3000/web/'
});

http.interceptors.response.use(res =>{
    return res
},err => {
	Toast(err.response.data.message);
	return Promise.reject(err)
})


export default http