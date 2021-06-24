import axios from 'axios';
import Login from './Login';
import store from '@/store/index';

let BaseApi = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost'
})

BaseApi.defaults.headers.common['Content-Type'] = 'application/json';
BaseApi.defaults.timeout = 60000; // 60초
BaseApi.interceptors.response.use(
    res => {
        if (res.data.rt === 403 && res.config.url !== '/login') {
            delete BaseApi.defaults.headers.common["AccessToken"];
            store.dispatch('user/logout');
        }
        return res;
    }
)

let Api = refresh => {
    
    if (refresh) {
        delete BaseApi.defaults.headers.common["Authorization"];
        BaseApi.defaults.headers.common["RefreshToken"] = store.state.user.refreshToken;

        return BaseApi;
    }

    let token = store.state.user.accessToken;

    if (token) {
        BaseApi.defaults.headers.common["Authorization"] = token
        if (store.getters['user/districtCodeFirst']) { // 지역 코드
            BaseApi.defaults.headers.common["doCode"] = store.getters['user/districtCodeFirst']
        }
    }

    return BaseApi
}

export default Api