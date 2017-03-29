const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const compress = {
    warnings: false,
};
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'produce') {
    compress.drop_debugger = true;
    compress.drop_console = true;
}
module.exports = {
    entry: {
        background: [
            path.resolve(__dirname, './src/background')
        ],
        contentScript: [
            path.resolve(__dirname, './src/contentScript')
        ],
        options: [
            path.resolve(__dirname, './src/options')
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less'],
    },
    plugins: [
        new webpack.DefinePlugin({
            // 定义当前运行环境，在运行环境中可以通过process.env.NODE_ENV访问当前环境
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress
        }),
    ],
    module: {
        rules: [{
            test: /\.js|jsx$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', `less-loader?{"sourceMap":true}`]
            }),
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            }),
        }]
    }
};
