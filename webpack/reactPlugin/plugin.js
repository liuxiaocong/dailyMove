const { RawSource } = require("webpack-sources");

module.exports = class DemoPlugin {
  apply(compiler) {
    //console.log('applying>>>>>>>>>>>>>>>>>>>>>>>>>>');
    //console.log(compiler);
    //compiler.plugin('emit', (compilation, next) => {
    //  console.log('emit>>>>>>>>>>>>>>>>>>>>>>>>>>');
    //  console.log(compilation)
    //  compilation.assets['ttxt'] = new RawSource("demo");
    //  next()
    //})
    //compiler.hooks.compile.tap('DemoPlugin', compilation => {
    //  console.log(compilation)
    //})
    //// 生成资源到 output 目录之前（异步）
    //compiler.hooks.emit.tapAsync('DemoPlugin', (compilation, fn) => {
    //  console.log(compilation)
    //  compilation.assets['index.md'] = {
    //    // 文件内容
    //    source: function () {
    //      return 'this is a demo for plugin'
    //    },
    //    // 文件尺寸
    //    size: function () {
    //      return 25
    //    }
    //  }
    //  fn()
    //})
    compiler.plugin('emit', function(compilation, callback) {
      // 在生成文件中，创建一个头部字符串：
      var filelist = 'In this build:\n\n';

      // 遍历所有编译过的资源文件，
      // 对于每个文件名称，都添加一行内容。
      console.log(">>>>>>>>>>>>>>>>>>>>")
      console.log(compilation.assets);
      for (var filename in compilation.assets) {
        filelist += ('- '+ filename +'\n');
      }

      // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
      compilation.assets['filelist.md'] = {
        source: function() {
          return filelist;
        },
        size: function() {
          return filelist.length;
        }
      };

      callback();
    });
  }
}