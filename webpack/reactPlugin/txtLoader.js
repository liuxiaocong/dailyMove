module.exports = (src) => {
  console.log(src);
  src = src.split('').reverse().join('');
  return `module.exports = '${src}'`
};