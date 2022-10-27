"use strict";

// const produceRaw = Number(prompt("Enter Your Price:", ""));
// const plusVat = 20.6 / 100
// const total = produceRaw * (1 + plusVat)     
// console.log (total) 

// This function clear all the values
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