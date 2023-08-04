const DEFAULT_CONFIG = {
    //主题颜色
    dark: {
        COLOR:'#000'
    },
    light: {
        COLOR:'#fff'
    },
    //接口地址
    API_URL: process.env.NODE_ENV === 'development' ? '/api' : '/',
    
    //请求超时
	TIMEOUT: 10000,
}

export default DEFAULT_CONFIG