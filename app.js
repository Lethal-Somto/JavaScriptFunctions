// // Basic Function
// function greet(name){
//     return "Hello " + name;
// }

// console.log(greet("Somtochukwu"));

// //function express
// const greet = function(name){
//     return "Hello " + name;
// }

// console.log(greet("Abuchi"))

// //arrow function
// const greet = (name) =>{
//     return "Hello " + name;
// }

const math = require('./Utility/math');

const generator = require('./Utility/NumberGenerator');

console.log(math.add(3,5));

console.log(generator.generate(3))