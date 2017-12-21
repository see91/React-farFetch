import axios from 'axios'

axios.defaults.baseURL = "http://localhost:6066";



export function reg(user) {
    return axios.post('/signup',user)
}

export function login(user) {
    return post('/api/login',user)
}

export function logout() {
    return get('/api/logout')
}

export function validate() {
    return get('/api/validate')
}