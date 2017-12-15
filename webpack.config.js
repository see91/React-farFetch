let babelpolyfill = require("babel-polyfill");
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js'
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.js$/, loader: 'babel-loader', exclude: /node_moudles/, query: {
                presets: ['es2015', 'stage-0', 'react']
            }
            },
            {
                test: /\.css$/, loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|gif|png|svg|ttf|woff|woff2|eot)$/, loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
