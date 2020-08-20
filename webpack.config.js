const path = require('path')
var nodeExternals = require('webpack-node-externals')

module.exports = (_, args) => ({
  mode: args.mode,
  devtool: args.mode === 'developement' ? 'inline-source-map' : '',
  resolve: {
    extensions: ['.js', '.ts'],
  },
  target: 'node',
  entry: './src/index',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
})
