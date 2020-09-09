const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        })
    ],
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
};