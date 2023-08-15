import axios from "axios";
import sysConfig from '../config'
import tool from './tool'
const service = axios.create({
    baseURL:'',
    timeout: sysConfig.TIMEOUT,
    headers: {
        // 'Content-Type':'application/json',
       'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
      }
})

service.interceptors.request.use(
    (config) => {
        let token = tool.cookie.get("TOKEN");
        if (token) {
			config.headers[sysConfig.TOKEN_NAME] = sysConfig.TOKEN_PREFIX + token;
		}
    return config;
    },
    (error) => {

        return Promise.reject(error)

    }
)

service.interceptors.response.use(
    (config) => {

        return config;
    },
    (error) => {
        return Promise.reject(error.response);
    }
)

var http = {
    get: function (url, params = {}, config = {}) {
       
        return new Promise((resolve, reject) => {
            service({
                method: 'get',
                url: url,
                params: params,
                ...config
            }).then((response) => {
              
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        })
    }
}

export default http;