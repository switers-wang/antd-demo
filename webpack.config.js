const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        inline: true,
        progress: true,
        port: 9999,
        contentBase: './'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,  //对这个不做处理
            loader: 'babel-loader'
          },
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/,
                use: [ 'style-loader', 'css-loader', 'less-loader' ]
            },
        ]
    },
    entry: './index.js',
    output: {
      filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'my redux',
            template: './src/index.html'
        })
    ]
  };