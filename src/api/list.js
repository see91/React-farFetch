import axios from 'axios';

axios.defaults.baseURL = "http://localhost:6066";

export let getData = (info) => {
    return axios.get('/prdlist', info)
};
