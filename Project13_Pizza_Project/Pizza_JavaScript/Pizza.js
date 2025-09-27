function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    var selectedSize;

    // check which size is selected
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // assign price to selected size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;
    getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");

    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); // first topping free
    } else {
        toppingTotal = 0;
    }

    runningTotal = (runningTotal + toppingTotal);
    getVeggies(runningTotal, text1);
}

function getVeggies(runningTotal, text1) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies");

    for (var k = 0; k < veggieArray.length; k++) {
        if (veggieArray[k].checked) {
            selectedVeggie.push(veggieArray[k].value);
            text1 = text1 + veggieArray[k].value + "<br>";
        }
    }

    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1); // first veggie free
    } else {
        veggieTotal = 0;
    }

    runningTotal = (runningTotal + veggieTotal);

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML =
        "<h3>Total: <strong>£" + runningTotal + ".00</strong></h3>";
}

// -------------------------
// Reset button functionality
// -------------------------
function resetOrder() {
    // reset pizza size to default (Large Pizza)
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        sizeArray[i].checked = false;
        if (sizeArray[i].value === "Large Pizza") {
            sizeArray[i].checked = true;
        }
    }

    // uncheck all meat toppings
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        toppingArray[j].checked = false;
    }

    // uncheck all veggie toppings
    var veggieArray = document.getElementsByClassName("veggies");
    for (var k = 0; k < veggieArray.length; k++) {
        veggieArray[k].checked = false;
    }

    // clear the receipt area
    document.getElementById("showText").innerHTML = "";
    document.getElementById("totalPrice").innerHTML = "";
}
