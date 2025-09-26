// Project 6 — Ternary Operators, Constructors, Nested Functions
// Author: Bohumil Kolouch


// 1) TERNARY EXAMPLE

function ageCheck() {
// Read value from the <input> (string by default) and coerce to number
  const ageInput = document.getElementById("age").value;
  const age = Number(ageInput);

// Ternary chain:
  const message = isNaN(age)
    ? "Please enter a valid number."
    : age >= 18
      ? "You are old enough to vote."
      : "You are not old enough to vote.";

  document.getElementById("ageResult").textContent = message;
}

//* 2) CONSTRUCTOR
//* 3) DISPLAYING RESULTS

// `this` constructor.
function Gadget(brand, name, year) {
  this.brand = brand;
  this.name = name;
  this.year = year;

// Formating info.
  this.info = function () {
    return `${this.brand} ${this.name} (${this.year})`;
  };
}

// Using `new`.
const g1 = new Gadget("Acme", "Phone X", 2024);
const g2 = new Gadget("Acme", "Book Pro", 2023);
const g3 = new Gadget("Globex", "Tab S", 2025);

// Select object to display.
function showGadget() {
  const select = document.getElementById("gadgetSelect");
  const choice = select.value;

// Pick the instance.
  const item = choice === "1" ? g1 : choice === "2" ? g2 : g3;

// Place the result.
  document.getElementById("gadgetResult").textContent = item.info();
}

//* 4) NESTED FUNCTION

function runNested() {
// Creates a private variable and returns a result.
  function makeCounter(start) {
    let count = start;

// Access to the scope.
    function increment() {
      count = count + 1;
    }

// Calling the function.
    increment();
    increment();
    increment();

// Updated value.
    return count;
  }

  const result = makeCounter(5);
  document.getElementById("nestedResult").textContent =
    "Nested function result (starting at 5, function runs x 3). Result: " + result;
}