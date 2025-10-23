import axios from 'axios'
import Cookies from 'js-cookie'
import { useToast } from 'vue-toastification'
import router from '../router/index'

const toast = useToast()
// const router = useRouter()

// axios.defaults.withCredentials = true

const api = axios.create({
  baseURL: 'https://api.meyram.kz',
  headers: {
    "Authorization": "Bearer " + Cookies.get('admin-meyram-token'), // заменишь на свой токен
    "Content-Type": "application/json"
  }
  // 'Access-Control-Allow-Origin': '*',
  // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  // 'Access-Control-Allow-Headers': 'Content-Type',
  // 'Access-Control-Max-Age': 86400,
})


api.interceptors.response.use(
  (res) => {
    res.headers['Accept'] = 'application/json'
    res.headers['Authorization'] = 'Bearer ' + Cookies.get('admin-meyram-token')
    return res
  },
  (error) => {
    toast.error(error.response?.data?.error || 'Ошибка')
    if (error.response.status === 401) {
      Cookies.remove('admin-token')
      Cookies.remove('token_admin')
      router.push('/auth/signin')
    }
    throw new Error()
  }
)

export default api
