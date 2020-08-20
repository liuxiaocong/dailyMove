const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")

module.exports = function (source) {
  console.log('await loader');
  console.log(source);
  let ast = parser.parse(source,{
    allowImportExportEverywhere: true,
  })
  console.log(ast);
  //traverse(ast, {
  //  AwaitExpression(path) {
  //    let tryCatchAst = t.tryStatement(
  //      //...
  //    )
  //    console.log(tryCatchAst);
  //  }
  //})
  return source;
}