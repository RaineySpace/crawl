const path = require('path');
const config = require('./config');

module.exports = {
    entry: {
        background: [
            path.resolve(__dirname, '../src/background')
        ],
        browserAction: [
            path.resolve(__dirname, '../src/browserAction')
        ],
        contentScript: [
            path.resolve(__dirname, '../src/contentScript')
        ],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: `http://localhost:${config.port}/dist`,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less'],
    },
};
