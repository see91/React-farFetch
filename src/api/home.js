import axios from 'axios';

axios.defaults.baseURL = "http://localhost:6066";

axios.interceptors.response.use((res) => {
    return res.data
});

export let getSwiper = () => {
    return axios.get('/swiper')
};
<<<<<<< HEAD

=======
export let getChoose = ()=>{
    return axios.get('/recommend')
}
>>>>>>> 0188bb3856c44fd058f2e3186e04087c556f792f
