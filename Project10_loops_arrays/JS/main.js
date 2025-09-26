// ----- While Loop Function -----
function whileLoopFunction() {
  let text = "";
  let i = 5;
  // While loop runs until i is greater than 5
  while (i <= 13) {
    text += i + "<br>";
    i += 2;
  }
  document.getElementById("While_Loop").innerHTML = text;
}

// ----- For Loop Function -----
function forLoopFunction() {
  let text = "";
  // For loop counts from 0 to 4
  for (let i = 0; i < 5; i++) {
    text += "Number " + i + "<br>";
  }
  document.getElementById("For_Loop").innerHTML = text;
}

// ----- Array Function -----
function arrayFunction() {
  // Create an array of fruits
  const fruits = ["Apple", "Banana", "Cherry", "Water Melon"];
  let text = "";
  // Loop through array
  for (let i = 0; i < fruits.length; i++) {
    text += fruits[i] + "<br>";
  }
  document.getElementById("Array_Display").innerHTML = text;
}

// ----- Object Example -----
function objectFunction() {
  // Create an object using 'let'
  let car = {
    make: "Toyota",
    model: "Auris",
    variant: "Hybrid",
    year: 2016
  };

  // Display object data
  document.getElementById("Object_Display").innerHTML =
    "Car: " + car.make + " " + car.model + " " + car.variant + " (" + car.year + ")";
}
