import axios from 'axios';

axios.defaults.baseURL = "http://localhost:6066";


//请求详情页商品数据
export let getPrddetail = (id) => {
    return axios.post('/prddetail', id)
};

//获取 推荐数据
export let getGoodsList=(id)=>{
    return axios.get('/recommend',id)
}
