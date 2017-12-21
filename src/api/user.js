import axios from 'axios'

axios.defaults.baseURL = "http://localhost:6066";


export function reg(user) {
    return axios.post('/signup', user)
}


export function login(user) {
    console.log(user);
    return axios.post('/login', user)
}