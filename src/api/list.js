import axios from 'axios';

axios.defaults.baseURL = "http://localhost:6066";


export let getData = (cls) => {
    return axios.get(`/prdlist?type=${cls.type}&offset=${cls.offset}`)
};
export let getCurrentList = (type) => {
    return axios.post('/recommlist', type)
}

export let getCollect = (id) => {
    return axios.post('/collection', id)
};
export let reqCollects = (id) => {
    return axios.post('/collection', id)
}

