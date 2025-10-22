import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Leslie-1900/vite',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')  // 这会请求完整的 URL: baseURL + '/events'
  }
}