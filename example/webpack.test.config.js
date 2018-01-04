const glob_entries = require('webpack-glob-entries');
const path = require('path');

const webpack = require('./webpack.config');

webpack.entry = glob_entries('./test/*test.js');
webpack.output = {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/test')
};

module.exports = webpack;