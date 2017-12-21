import axios from 'axios';

axios.defaults.baseURL = "http://localhost:6066";

// axios.interceptors.response.use((res) => {
//     return res.data
// });

export let getData = () => {
    return axios.get('/prdlist')
};
export let getCurrentList=(type)=>{
    return axios.post('/recommlist',type)
};
