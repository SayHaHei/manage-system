module.exports = {
  devServer: {
    open: true,
    port: 3333
  },
  css: {
    loaderOptions: {
      less: {
        prependData: `import "~@/assets/less/_variable.less";`
      }
    }
  }
};
