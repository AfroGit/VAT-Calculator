"use strict";

// const produceRaw = Number(prompt("Enter Your Price:", ""));
// const plusVat = 20.6 / 100
// const total = produceRaw * (1 + plusVat)     
// console.log (total) 

// This function clear all the values
/*The clearScreen() function access the DOM using the id of the result and clear its value by assigning it an empty string. You can use DOM selectors to target various components of a page.*/ 
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}