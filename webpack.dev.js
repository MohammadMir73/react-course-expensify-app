const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            staticOptions: {},
        },
        historyApiFallback: true
    },
    mode: 'development'
});