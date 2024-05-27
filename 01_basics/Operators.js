// Operators in JavaScript


// 1. Assignment Operator
let a = 10; 
let b = a * 2;
console.log(a);
console.log(b);
// 2. Arithmetic Operator

console.log(a+2*b/2);

// Using parseFloat() and parseInt():

console.log('5'-2);  // 3 : type number
console.log('5'*2);  // 10 : type number
console.log('5'/2);  // 2.5 : type Float
console.log('5'%2);   // 1 : type number

console.log('5'+2); //52 -> type string

/*
 As we can see above, in other operations '5' which is a string is getting converted into a number, and the result is calculated. However in case of Addition operator, the string remains the same and it converts the number into a string and concatenate both the strings. TO avoid this, it will be a good practice to convert the inputted value into a number before performing addition operator. 
*/

console.log(parseFloat('5')+parseFloat(5));  // 10.


/* 
Logical Operators,

In JavaScript every value except null, undefined, NaN, '', 0, false are truthy values. These null, undefined, NaN, '', 0 and false, are said to be falsy values. 
SO every numbers from 1-9, " " (-> space is not an empty string) , true etc are all truthy values. 

In short circuit Evaluation, 
&& (AND operator) : returns first falsy value and last truthy value in case there is no falsy value is present.
|| (OR operator) : returns first truthy value and last falsy value in case there is no truthy value is present.
*/

// && : 
console.log(10 && 2 && 12 && true && 16);                      // 16 -> last truthy value
console.log(10 && 2 && 12 && null && 17 && 1 && false);    // null -> first falsy value. 

// || : 
console.log(0 || null || '' || false || NaN);              // NaN -> last falsy
console.log(0 || null || 'String' || false || NaN || 10);      // String -> first truthy
