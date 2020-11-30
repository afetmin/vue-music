import axios from 'axios'
import { Toast } from 'vant'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
      Toast({
        message: res.message || 'Error',
        position: 'top'
      })
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Toast({
      message: '数据获取失败',
      position: 'top'
    })
    return Promise.reject(error)
  }
)

export default service