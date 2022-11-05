/*
Javascript
-creates dynamically update content, control multimedia, animate images, and pretty much everything else.

DYNAMIC CODE
Server side - ability to update the dislay of a web page/app, to show different things generating new content as required.

Client side - generates new content inside the client's browser.
*/

console.Log("Hello World!");

document.getElementById 
("sample").innerHTML =
("Welcome to Javascript");

//the most common way to display data in HTML

//2. document.write() - testing purposes
document.write("Hello Method");

//3. alert() - display a window in the web browser.
alert("I am an alert")

//4. console.Log() - for debugging purposes
console.Log("This is a console log")

//This is a single line comment

//comment

/* Multiline comment */

//Naming variable
const pi = 3.1416;
//These variables cannot be reassigned.
console.Log (pi);

pi = 1.20;
console.Log(pi);

let name ="Jem";
console.Log(name);
name="Dahl";
console.Log(name);

let name="Joey";
//we cannot re-declare the variable itself
//console.Log (name);

//Primitive Data Types
let name1 = "Bryan";
console.Log (name1);
console.Log(typeof name1);
//typeof enables us to know what type it is

let age = "15"
console.Log (typeof age);

let grade = 90.5
console.Log(typeof grade);

let isPresent = true;
console.Log (isPresent);
console.Log (typeof isPresent);

let myCopy;
console.Log(myCopy);

let option1 = null;
console.Log(optional);

// let 1fruit = apple;
// console.Log (1fruit);

let $year = 2022;
console.Log($year);
//we can use a special character before word when naming a variable.
//there are some special characters that do not work for assigning a variable.

let $_year = 2023;
console.Log($_year);
//2 special characters are working before a word.

let state = 'Washington';
console.Log(state);