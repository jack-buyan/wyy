import config from '../../config'
import http from '../../utils/request'

export default {
    login: {
        url: `${config.API_URL}/cellphone/existence/check`,
        name: '检测手机号码是否已注册',
        get: async function (params) {
            return await http.get(this.url, params);
        }
    },
    banner: {
        url: `${config.API_URL}/banner`,
        name: '获取轮播图',
        get: async function (params) {
            return await http.get(this.url, params);
        }
    }
}