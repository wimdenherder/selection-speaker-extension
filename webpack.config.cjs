const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/execute.js',
  output: {
    path: __dirname + '/build',
    filename: 'execute.js'
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
        patterns: [
            { from: 'src/manifest.json', to: 'manifest.json' },
            { from: 'src/background.js', to: 'background.js' },
            { from: 'src/content-script.js', to: 'content-script.js' },
        ],
    })
  ],
  mode: 'development'
};