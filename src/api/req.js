import axios from "axios";
const ajax = axios.create({
  baseURL: "http://nodeserve.emotionalflowers01.cn",
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})
// 添加请求拦截器
ajax.interceptors.request.use(function (config) {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = localStorage.getItem('token')
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


export default ajax