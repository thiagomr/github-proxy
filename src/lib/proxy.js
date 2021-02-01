const { createProxyMiddleware } = require('http-proxy-middleware');

exports.githubProxy = createProxyMiddleware({
    target: process.env.GITHUB_API_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/api': ''
    },
    logLevel: 'silent'
});
