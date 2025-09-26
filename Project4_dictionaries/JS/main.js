// JavaScript code to demonstrate dictionary and display results in HTML elements
function my_Dictionary()    {
    var Computer = { // Creating a dictionary object named Computer
        Type: "Desktop", // Key value pair. Key is Type and value is Desktop.
        Brand: "Dell",
        Location: "Living room",
        Windows: "Windows 11",
        Color: "Black",
        Managed: "Yes"
    };
    delete Computer.Windows; // Deleting the Windows property - undefined
    document.getElementById("Dictionary").innerHTML = Computer.Windows; // Displaying the value of Windows property in HTML element with id "Dictionary"
}

document.write(typeof "Word"); // Displaying the type of "Word" in the document
document.write(typeof 3); // Displaying the type of 3 in the document
document.write("10" + 5); // Converts the value 5 to string and concatenates it with "10", resulting in "105"
