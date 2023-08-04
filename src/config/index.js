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
    
    //TokenName
	TOKEN_NAME: "Authorization",

	//Token前缀，注意最后有个空格，如不需要需设置空字符串
	TOKEN_PREFIX: "Bearer ",
}

export default DEFAULT_CONFIG