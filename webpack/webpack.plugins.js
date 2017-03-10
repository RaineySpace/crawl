const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = function getPlugins(env) {
    const plugins = [];
    const pluginModule = [];
    // 定义运行环境全局变量
    plugins.push(new webpack.DefinePlugin({
        // 定义当前运行环境，在运行环境中可以通过process.env.NODE_ENV访问当前环境
        'process.env.NODE_ENV': JSON.stringify(env),
    }));
    // css代码编译
    const extractCSS = new ExtractTextPlugin('[name].css');
    plugins.push(extractCSS);

    // 使用dll
    try {
        plugins.push(new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll.manifest.json')
        }));
    } catch(e) {
        console.log('未检测到dll.manifest.json文件，默认打包全部文件');
    }

    if (env === 'develop') {
        // 代码热更新
        plugins.push(new webpack.HotModuleReplacementPlugin());
        // 控制台增强
        plugins.push(new DashboardPlugin(new Dashboard().setData));
    }

    // if (env === 'produce') {

    // }

    return { plugins, pluginModule: { extractCSS } };
};
