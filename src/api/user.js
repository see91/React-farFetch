import axios from 'axios'

axios.defaults.baseURL = "http://localhost:6066";


export function reg(user) {
    return axios.post('/signup', user)
}

export function login(user) {
    return axios.post('/login', user)
}

export function logout(user) {
    return axios.get('/logout', user)
}

export function validate(user) {
    return axios.get('/validate', user)
}