let assert = require('assert');

console.log('quiz 1');

// QUESTION 1
let begin = function() {
  console.log('begin');
}

begin();

let echo = function(arg) {
  return arg;
}

let string = 'the iron yard';
assert( echo(string) === string );
