import axios from 'axios';

axios.defaults.baseURL = "http://localhost:6066";

axios.interceptors.response.use((res) => {
    return res.data
});
export let getBrandMan = ()=>{
    return axios.get('/brand/man')
};
export let getBrandWoman = ()=>{
    return axios.get('/brand/woman')
};
export let getBrandChildren = ()=>{
    return axios.get('/brand/children')
};
export let getBrandSwiper = ()=>{
    return axios.get('/swiper')
};
