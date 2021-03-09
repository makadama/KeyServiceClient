const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ks-backend.herokuapp.com/',
      changeOrigin: true,
    })
  );
};