import axios from 'axios';

axios.defaults.baseURL = "http://localhost:6066";


export let getShopcars = (id) => {
    return axios.post('/shoppingcars', id)
};
