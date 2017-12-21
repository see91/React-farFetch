import axios from 'axios';
axios.defaults.baseURL = "http://localhost:6066";

axios.interceptors.response.use((res) => {
    return res.data
});

export let getSwiper = () => {
    return axios.get('/swiper')
};
export let getChoose = ()=> {
  return axios.get('/recommend')
};
export let getGroom = ()=>{
    return axios.get('/prdlist1')
};
export let getList1 = ()=>{
    return axios.get('/list1')
};
export let getList2 = ()=>{
    return axios.get('/list2')
};
export let getList3 = ()=>{
  return axios.get('/list3')
}

