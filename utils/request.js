import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    timeout: 10000
})
service.interceptors.response.use(response => response.data?.data, error => Promise.reject(error))
export default service