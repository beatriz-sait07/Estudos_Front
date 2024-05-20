const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  // Outras configurações do Vue CLI
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      const vueCliArgs = args[0];
      vueCliArgs['__VUE_PROD_HYDRATION_MISMATCH_DETAILS__'] = false;
      return args;
    });
  },
};
