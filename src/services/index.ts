import axios from 'axios'
import { AxiosInstance } from "axios";
import { Options } from './interface'
declare var Promise: any;

const MINI_TIME = 300
let TIME_OUT_MAX = 3000
let _apiHost = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : './'

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = _apiHost


axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = JSON.stringify(config.data);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((res) => {
    if (res.data.code != '200') {
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    return Promise.reject(error);
});

export default (url: string, method: string = 'post', _data: any = {}): Promise<any> => {
    let _opts: Options = { method, url }
    //通用数据的合并（token）
    const _query: any = {}
    for (let _key in _data) {
        if (_data.hasOwnProperty(_key) && _data[_key] !== '') {
            _query[_key] = _data[_key]
        }
    }
    //判断请求类型
    if (method.toLocaleUpperCase() === 'POST') {
        _opts.data = _query
    } else {
        _opts.params = _query
    }

    return new Promise((resolve: (data: any) => void, reject: (data: any) => void) => {
        const _instance: AxiosInstance = axios.create({
            timeout: TIME_OUT_MAX
        })

        //axios实例发送当前请求
        //请求完成：1、取消当前请求的定时器；2、在当前请求标识队列中移除当前标识；
        // 3、成功的话返回统一处理后的数据，失败则对状态码进行判断
        _instance.request(_opts)
            .then((res: any) => {
                let responseData = res.data
                resolve(res.data)
            })
            .catch((res: any) => {
                let _response = res.response
                let _message = ''
                switch (_response.status) {
                    case 404:
                        _message = '404,错误请求'
                        break
                    case 401:
                        _message = '未授权'
                        break
                    case 403:
                        _message = '禁止访问'
                        break
                    case 408:
                        _message = '请求超时'
                        break
                    case 500:
                        _message = '服务器内部错误'
                        break
                    case 501:
                        _message = '功能未实现'
                        break
                    case 503:
                        _message = '服务不可用'
                        break
                    case 504:
                        _message = '网关错误'
                        break
                    default:
                        _message = '未知错误'
                }
                reject(res)
            })
    })
}