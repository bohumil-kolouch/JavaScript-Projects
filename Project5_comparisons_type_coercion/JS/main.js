// Project 5 - Comparisons & Type Coercion
// Author: Bohumil Kolouch
// Demonstrates comparisons, type coercion, and operators in JavaScript

document.write("Module 2 - Project5 (Comparison type & coercion) Assignment <br><br>");

// 1. Using typeof to display data type
var myNumber = 42;
document.write("The type of myNumber is: " + typeof myNumber + "<br><br>");

// 2. Combining a string and a number
var combo = "My age is " + 42;
document.write("String and number combined: " + combo + "<br><br>");

// 3. Demonstrating comparison operators
document.write("10 == '10' : " + (10 == "10") + "<br>");     // true (type coercion)
document.write("10 === '10' : " + (10 === "10") + "<br>");   // false (strict equality)
document.write("10 > 5 : " + (10 > 5) + "<br>");             // true
document.write("10 < 5 : " + (10 < 5) + "<br><br>");         // false

// 4. Demonstrating logical operators
document.write("(5 > 2 && 10 > 5) : " + (5 > 2 && 10 > 5) + "<br>"); // true
document.write("(5 > 10 || 10 > 5) : " + (5 > 10 || 10 > 5) + "<br>"); // true
document.write("!(20 > 10) : " + !(20 > 10) + "<br>"); // false