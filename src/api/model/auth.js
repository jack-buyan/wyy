import config from '../../config'
import http from '../../utils/request'

export default {
    login: {
        url: `${config.API_URL}/cellphone/existence/check`,
        name: '检测手机号码是否已注册',
        get: async function (params) {
            return await http.get(this.url, params);
        }
    }

    
}


// export const login = (params) => {
//     return request({
//         url: `${config.API_URL}/cellphone/existence/check`,
//         method: 'get',
//         params
//     })
// }