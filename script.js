"use strict";

const produceRaw = Number(prompt("Enter Your Price:"));
const plusVat = 20.6 / 100
const total = produceRaw * (1 + plusVat)     
console.log (total) 