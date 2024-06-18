/* 
This module is about Type Conversion and Type Coersion in JavaScript. 

There are two types of type conversion, 
1. Type coercion (implicit), and
2. Explicit Type Conversion. 

Let us look at the first one that is Type Coercion, 
Type coercion is implicit. 
*/
//Type Coercion

let aValue = '5' - 4;  // '5' is a String and 4 without the '' is a number.
console.log(aValue);     
console.log(typeof(aValue));   
/* 
it gives out 1, a number. This is only possible if '5' a string was converted to a number. This conversion which happened implicitly by Compiler is known as Type Coercion.
*/

// Explicit Type Conversion: We explicitly tells JavaScript to convert a data type into another. 

/*
Convert to a String.
Two methods, 
1. String()  and,
2. toString  ((value).toString)
*/

//1. String() : Can convert anything even null and undefined to a String.  
console.log(String(45));
console.log(String(null));
console.log(String(undefined));
console.log(String(true));

//2. toString() : Can convert any number or boolean to a string but gives out error if we try to convert null or undefined to a string using toString().
let myNum = 45;
let myBool = true;
myNum = myNum.toString();
myBool = myBool.toString();
console.log(myNum);
console.log(myBool);
console.log((56).toString());


/***** 
Convert to a Number.

1. Number().
2. Unary + Operator -->> Works on Variables.
3. parseInt()
4. parseFloat()
*/

console.log(Number("Hello"));  // NaN
console.log(Number(null));     // 0
console.log(Number("97"));     // 97
console.log(Number(true));     // 1 and for false = 0.

let cNum = '123';
console.log(+cNum);     //123.

// ***** parseInt(): 
console.log(parseInt('1235'));
//Numbers will be parsed in the String until a non-numeric character is encountered. Meaning, it will parse the numbers and stop right before the non-numeric character. 
console.log(parseInt('1235f64'));   // ouput - 1235.  
//parseInt() can't parse a string (containing numbers) if it starts with a non-numeric character. It gives out NaN which stands for Not a Number. 
// Note: NaN is a number in JS which tells the JS that the input is not a number. 
console.log(parseInt('f12345f65'));  // NaN
console.log(parseInt('123.45'));   // 123 Can't parse foating points.

// ***** parseFloat() : Can parse to floating point numbers
console.log(parseFloat('12345.54f78'));   // 12345.54


/*****
Convert to Boolean:
Simply use Boolean() to convert anything to boolean. It is the simplest as we know what values are Truthy and Falsy in JavaScript. 
Any value other than null, undefined, 0, NaN, '', false in JavaScript are Truthy values.
*/
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(0));          // false

console.log(Boolean(45));         // true
console.log(Boolean("hey"));      // true
console.log(Boolean(true));       // true
// COmment out