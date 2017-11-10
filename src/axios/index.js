import axios from 'axios'

const MINI_TIME = 300
let TIME_OUT_MAX = 3000
let _env = process.env.NODE_ENV
let _apiHost = './'
let _requests = []

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.baseURL = _apiHost


/**
 * 请求地址，请求数据，是否静默，请求方法
 */
export default (url, data = {}, isSilence = false, method = 'POST') => {
    let _opts = { method, url }
    //通用数据的合并（token）
    let _data = Object.assign({}, data, { token: store.getters.token })
    const _query = {}
    for (let _key in _data) {
        if (_data.hasOwnProperty(_key) && _data[_key] !== '') {
            _query[_key] = _data[_key]
        }
    }
    //axios实例请求定时器ID
    let _timer = null
    //判断请求类型
    if (method.toLocaleUpperCase() === 'POST') {
        _opts.data = _query
    } else {
        _opts.params = _query
    }
    //返回一个promise
    return new Promise((resolve, reject) => {
        //实例化axios
        const _instance = axios.create({
            timeout: TIME_OUT_MAX
        })
        //定义请求的唯一标识
        let _random = { stamp: Date.now(), url: `${_apiHost + url}` }
        //判断是否静默（静默的话就不加入请求标识队列，不是则申明此请求实例的定时器）
        if (!isSilence) {
            _timer = setTimeout(() => {
                pushRequest(_random)
            }, MINI_TIME)
        }
        //axios实例发送当前请求
        //请求完成：1、取消当前请求的定时器；2、在当前请求标识队列中移除当前标识；
        3、成功的话返回统一处理后的数据，失败则对状态码进行判断
        _instance(_opts)
            .then(res => {
                let responseData = res.data
                clearTimeout(_timer)
                popRequest(_random)
                resolve(res.data)
            })
            .catch(res => {
                let _response = res.response
                let _message = null
                clearTimeout(_timer)
                popRequest(_random)
                switch (_response.status) {
                    case 404:
                        _message = '404,错误请求'
                        break
                    case 401:
                        router.push({ path: '/login', query: { redirect: router.currentRoute.fullPath } })
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
                if (!isSilence) {
                    Vue.$vux.toast.show({
                        text: _response.data && _response.data.error ? _response.data.error : _message,
                        type: 'warn',
                        width: '10em'
                    })
                }
                reject(res)
            })
    })
}