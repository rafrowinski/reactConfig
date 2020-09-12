const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        clientLogLevel: 'info',
        compress: true,
        port: 9000,
        proxy: {
            '/api': {
                target: 'http://dummy.restapiexample.com/api/v1',
                pathRewrite: {'^/api' : ''},
                changeOrigin: true,
                secure: false
            }
        }
    }
});