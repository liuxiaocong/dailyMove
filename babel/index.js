import '@babel/polyfill';

const fn = () => {
};
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
var a = new Promise((resolve, reject)=>{
  resolve('a');
});



async function load() {
  var result = await a();
  console.log(result)
}

new Promise(() => {
});

class Test {
  constructor(name) {
    this.name = name;
  }
}

load();