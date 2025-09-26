//--While loop
function Call_Loop() {
  var Digit = "";
  var X = 1;  //starting point
  while (X < 11) {  //loop until x is 10
    Digit += "<br>" + X;
    X++;
  }
  document.getElementById("Loop").innerHTML = Digit;
}