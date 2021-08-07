import axios from 'axios';
import { useDispatch } from 'react-redux'
import { initAuth } from 'actions/auth'

const dispatch = useDispatch()

const Api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost'
})

Api.defaults.headers.common['Content-Type'] = 'application/json';
Api.defaults.timeout = 60000; // 60초
Api.interceptors.response.use(
    res => {
        if (res.data.rt === 403 && res.config.url !== '/login') {
            delete Api.defaults.headers.common["token"];
            dispatch(initAuth());
        }
        return res;
    }
)

export default Api