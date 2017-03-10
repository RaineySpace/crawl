const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base');
const { plugins, pluginModule } = require('./webpack.plugins')('produce');

module.exports = merge(webpackBaseConfig, {
    plugins,
    module: {
        rules: [{
            test: /\.js|jsx$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            loader: pluginModule.extractCSS.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
            }),
        }, {
            test: /\.css$/,
            loader: pluginModule.extractCSS.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            }),
        }]
    }
});
