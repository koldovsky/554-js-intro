// alert('Hello JavaScript!');

// let, const, var

let message = 'Hello World!';
// alert(message);

message = 'Nice to see you!';
// alert(message);

let num = 42;
num = num + 1;
// alert(num);

const age = Number(prompt('Enter your age'));
const nextAge = add(age, 1); // -, /, *, %
alert(nextAge);

if (age < 19) { // > <= >= === !== == != && || 
    alert('You are underaged!');
} else if (age < 60) {
    alert('You are adult');
} else {
    alert('You are old');
} 

// const textMessage = age < 19 ? 'You are underaged!' 
//                  :  age < 60 ? 'You are adult'
//                  : 'You are old';
// alert(textMessage);

function add(a, b) {
   return a + b; 
}

function multiply(a, b) {
   return a * b; 
}


