import axios from 'axios';

axios.defaults.baseURL = "http://localhost:6066";


//请求详情页商品数据
export let getPrddetail = (id) => {
    return axios.post('/prddetail', id)
};
