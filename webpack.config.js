var path = require('path');
module.exports = {
    entry : './main.js',
    output	: {
        path: __dirname,        //__dirname是一个nodejs变量，表示当前js文件所在的目录
        filename: 'bundle.js'
    },
    module	: {
        loaders: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    resolve	: {
        extensions : ['','.js','.json','.coffee']
    }
}