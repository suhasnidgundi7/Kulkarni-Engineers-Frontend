// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: 'https://kulkarni-engineers.onrender.com',
            changeOrigin: true,
        })
    );
};
