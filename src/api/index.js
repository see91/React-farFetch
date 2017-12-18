import axios from 'axios';

axios.defaults.baseURL = "http://localhost:6066";

axios.interceptors.response.use((res) => {
    return res.data
});

//请求轮播图数据
export let getSwiper = () => {
    return axios.get('/swiper')
};

//请求所有商品数据
export let getList = () => {
    return axios.get('/prdlist')
};


//请求分类商品数据
export let getType = (type) => {
    return axios.post('/recommlist', type)
};
