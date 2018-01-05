
console.log('utils.js is running');

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const devide = (a, b) => a / b;
export default devide;
//export 'text'; ---> this is not working

export { square, add, subtract };
//exports - default export - named exports
