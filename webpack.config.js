var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        inline: true,
        progress: true,
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
    entry: path.join(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-antd',
            template: path.join(__dirname, 'index.html')
        })
    ]
  };