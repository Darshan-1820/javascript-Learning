let str = "Hello, My name is Darshan";

//console.log(str.__proto__);

// charAt() --> returns the character at specified index value. 
console.log(str.charAt(2));

// concat() --> joins two strings together.
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(str2));    //HelloWorld  --->> concatenate str2 after str1
console.log(str2.concat(str1));  //WorldHello   -->> concatenate str1 after str2

// length --> simply returns the length of the string.
console.log(str.length);

//indexOf --> returns the index of a particular character of the first occurrence.
/*Means if a character is repeated more the one time, it will return the index of the character at it's first occurence. Like for example in the string str, 'a' is being repeated thrice. */
console.log(str.indexOf('a'));
/* We can also give a substring to find out where that substring is starting from in our string*/ 
console.log(str.indexOf('Darshan'));
/* We can also use indexof like this, indexof('i',8) which will give us the index of 'i' after 8th index number. 
Let us try it out shall we? 
In our string str 'a' was being repeated thrice. And the first occurrence of 'a' was at index 11. We have given 12, so it will give us the first occurrence of 'a' after index number 12.
 */
console.log(str.indexOf('a',12)); // first occurrence of 'a' after index 12 --> 19.

// lastIndexOf():  gives the last occurrence of a character. 
console.log(str.lastIndexOf('a'));

// includes(): returns true or false for a character present in our string
console.log(str.includes('a'));

// replace: string.replace('searchValue', 'newValue');
let str3 = str.replace('Darshan','Kshitij')
console.log(str3);


/* 
slice() :The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
slice(indexStart)
slice(indexStart, indexEnd)

indexStart --> The index of the first character to include in the returned substring.
indexEnd --> The index of the first character to exclude from the returned substring.
*/
str1 = 'HelloWorld' 
//      0123456789
//    H   e  l  l  o  W  o  r  l  d
//   -10 -9 -8 -7 -6 -5 -4 -3 -2 -1

console.log(str1.slice(2));  // output: lloWorld 
console.log(str1.slice(1,5)); // output: ello    |'e' is at 1 and 'o' is at 4
console.log(str1.slice(-5));  
console.log(str1.slice(-5,-1));  //output: Worl


/*
The split() method splits (divides) a string into two or more substrings depending on a splitter (or divider). The splitter can be a single character, another string, or a regular expression.

After splitting the string into multiple substrings, the split() method puts them in an array and returns it. It doesn't make any modifications to the original string. 

We can call the split() method on the message string. Let's split the string based on the space ('  ') character. Here the space character acts as a splitter or divider.
*/

let myString = "The quick fox never ran so fast";
let myStringArr = myString.split(' ');
console.log(myStringArr); 

/* 
string.split(splitter, limit);
You can also pass the limit as an optional parameter to the split() method.
As the name indicates, the limit parameter limits the number of splits. It means the resulting array will only have the number of elements specified by the limit parameter
*/

console.log(myString.split(' ',4)); // ['The', 'quick', 'fox', 'never']

/*
In the above example, we split a string using a space (' ') as a splitter. We also pass the number 4 as the limit. The split() method returns an array with only four elements, ignoring the rest
*/
