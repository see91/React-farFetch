import axios from 'axios';

axios.defaults.baseURL = "http://localhost:6066";

export let getData = (type, offset) => {
    return axios.get(`/prdlist/type=${type}&offset=${offset}`)
};
