let assert = require('assert');

console.log('quiz 1');

// QUESTION 1
let begin = function() {
  console.log('begin');
}

begin();

// QUESTION 2
let echo = function(arg) {
  return arg;
}

let string = 'the iron yard';
assert( echo(string) === string );

// QUESTION 3
let math = function(a,b,c) {
  return (a+b)*c;
}

console.log(`Calling math(3,4,2) = ${math(3,4,2)}`);
