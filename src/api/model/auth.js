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
    login2: {
        url: `${config.API_URL}/captcha/sent`,
        name: '获取验证码',
        get: async function (params) {
            return await http.get(this.url, params);
        }
    },
    login3: {
        url: `${config.API_URL}/captcha/verify`,
        name: '验证验证码',
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
    },
    recommend: {
        url: `${config.API_URL}/personalized?limit=10`,
        name: '每日推荐',
        get: async function (params) {
            return await http.get(this.url, params);
        }
    },
    newmusic: {
        url: `${config.API_URL}/personalized/newsong`,
        name: '每日推荐',
        get: async function (params) {
            return await http.get(this.url, params);
        }
    },
    playlist: {
        url: `${config.API_URL}/playlist/detail`,
        name: '歌单',
        get: async function (params) {
            return await http.get(this.url, params);
        }
    },
    song: {
        url: `${config.API_URL}/playlist/track/all`,
        name: '获取歌单的所有歌曲',
        get: async function (params) {
            return await http.get(this.url, params);
        }
    }
}