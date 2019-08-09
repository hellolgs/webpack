const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Vueloader = require('vue-loader/lib/plugin');
module.exports = {
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new Vueloader(),
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        open: true,
        hot: true
    }
}