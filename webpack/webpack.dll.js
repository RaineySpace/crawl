const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        dll: [
            'react',
            'react-dom',
            'antd',
        ]
    },
    output: {
        path: __dirname,
        filename: '../dist/[name].min.js',
        library: '[name]',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.DllPlugin({
            path: path.resolve(__dirname, './dll.manifest.json'),
            name: '[name]',
            context: __dirname,
        }),
        new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    ],
};
