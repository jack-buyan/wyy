const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://localhost:3000", // 后台服务地址以及端口号
            changeOrigin: true, // 是否开启代理  控制服务器收到的请求头中Host的值
            pathRewrite: { "/api": "/",  },// 重写请求路径
        })
    )
}
