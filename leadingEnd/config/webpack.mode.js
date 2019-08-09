module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    { 'loader': 'style-loader' },
                    { 'loader': 'css-loader' },
                    { 'loader': 'sass-loader' }
                ]
            },
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]'
                }
            }
        ]
    },
}