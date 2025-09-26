// .concat() method
function full_sentence() {
    var part_1 = "Guess what is coming up?";
    var part_2 = " It is the end of summer time.";
    var part_3 = " The outumn begins!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("stringMethod").innerHTML = whole_sentence;
}

// .slice() method
function slice_Method() {
    var sentence = "Water, beach, sun and fun.";
    var section = sentence.slice(14, 25);
    document.getElementById("Slice").innerHTML = section;
}

// .toString() method
function string_Method() {
    var myNumber = 999;
    document.getElementById("ToString").innerHTML = myNumber.toString();
}

// .toPrecision() method
function precision_method() {
    var myNumber = 333.3333333333;
    document.getElementById("SpecificLength").innerHTML = myNumber.toPrecision(5);
}
