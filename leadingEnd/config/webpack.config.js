const marge = require('webpack-merge')
const path = require('path')
const deve = require('./webpack.dev.js')
const produ = require('./webpack.p.js')
const moduledata = require('./webpack.mode')
let submitdata = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.join(__dirname, '../', 'dist'),
        filename: '[name].[hash:6].js'
    },    
    
    
}
module.exports = env => {
    let conf = env = 'production'? produ:deve;
    return marge(conf,moduledata,submitdata)
};
