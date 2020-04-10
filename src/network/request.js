import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant';
import 'vant/lib/index.css';

Vue.use(Toast);
export function request(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://106.54.54.237:8000/api/h8',
      timeout: 5000
    })

    instance.interceptors.request.use(config => {
      //加载中
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        loadingType: "spinner",
        duration: 0
      })
      return config
    })

    instance.interceptors.response.use(data => {
      data = data.data;
      Toast.clear()
      return data
    })

    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}