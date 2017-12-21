import {get,post} from './index'

export function det(user) {
    return post('/api/newAccount',user)
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