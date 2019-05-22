module.exports = {
  transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
  productionSourceMap: false,
  configureWebpack: {
    entry: {
      polyfill: '@babel/polyfill'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: 'vuetify-loader'
        }
      ]
    }
  },
};
