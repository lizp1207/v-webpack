const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // 先到node_modules中去找，找不到则去./loaders目录下去找
  resolveLoader: {
      modules: ['node_modules', './loaders']
  },
  module: {
      rules: [{
          test: /\.js/,
          use: [{
              loader: 'replace.js',
              options: {
                  name: "webpack配置的-异步2"
              }
          }]
      }]
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  }
}