// JavaScript code to perform basic arithmetic operations and display results in HTML elements
function addition_Function()    {
    var addition = 5 + 2;
    document.getElementById("Math_a").innerHTML = "5 + 2 = " + addition;
}

function subtraction_Function()    {
    var subtraction = 5 - 2;
    document.getElementById("Math_s").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication_Function()    {
    var multiplication = 5 * 2;
    document.getElementById("Math_m").innerHTML = "5 * 2 = " + multiplication;
}

function division_Function()    {
    var division = 5 / 2;
    document.getElementById("Math_d").innerHTML = "5 / 2 = " + division;
}

function modulus_Function()    {
    var reminder = 5 % 2;
    document.getElementById("modulus").innerHTML = "5 % 2 = " + reminder;
}

function all_Math_Function() {
    var simple_Math = (5 + 2) + (5 - 2) - (5 * 2) * (5 / 2);
    document.getElementById("all_Math_Function").innerHTML = "(5 + 2) + (5 - 2) - (5 * 2) * (5 / 2) = " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("negation").innerHTML = - x;
}

function increment_Operator() {
    var y = 5;
    y++;
    document.getElementById("increment").innerHTML = "Incremented value of 5 is: " + y;
}

function decrement_Operator() {
    var y = 5;
    y--;
    document.getElementById("decrement").innerHTML = "Decremented value of 5 is: " + y;
}

// Function to display a random number between 0 and 100 to pop up an alert
window.alert(Math.random() * 100);