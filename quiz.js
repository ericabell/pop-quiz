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

// QUESTION 4
let toString = function(arr) {
  return arr.join(' ');
}

console.log(`Calling toString: ${toString(['now','is','the','time'] )}`);


// QUESTION 5
let callme = function( callback ) {
  console.log('in first function');
  callback('in the second function');
}

callme( (str) => {
  console.log(str);
});

// QUESTION 6
let callme2 = function( callback, str ) {
  console.log('in first function');
  callback(str);
}

callme2( (str2) => {
  console.log('in second function');
  console.log(str2);} , 'hello' );
