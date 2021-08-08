import axios from 'axios';

const Api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://210.119.104.206:8080'
})

Api.defaults.headers.common['Content-Type'] = 'application/json';
Api.defaults.timeout = 60000; // 60초
Api.interceptors.response.use(
    res => {
        if (res.data.rt === 403 && res.config.url !== '/login') {
            delete Api.defaults.headers.common["token"];
            window.location.reload('/auth/logout')
        }
        return res;
    }
)

export default Api