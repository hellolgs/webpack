import Axios from 'axios';
import qs from 'qs';
Axios.defaults.timeout = 10000;
Axios.interceptors.response.use(
    response => {
        if(response.status === 200) {
            return Promise.resolve(response.data);            
        } else {
            return Promise.reject(response);
        }
    }
)
Axios.interceptors.request.use(
    request => {
        if(request.method !=='post' && request.method !=='get') {
            alert('请求方式错误')
        } else {
            return Promise.resolve(request)
        }
    }
);
function post(url,params) {
    return new Promise((resolve,reject) => {
        Axios.post(url,qs.stringify(params))
        .then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
function get(url,params) {
    return new Promise((resolve,reject) => {
        Axios.get(url,params)
        .then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
export {
    post,
    get
}
