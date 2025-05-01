const prompt = require('prompt-sync')();

let usdRate = 1;
let eurRate = 0.86;
let inputUsd;
let result 

inputUsd = prompt("Enter amount in USD: ");

result =  inputUsd + " USD" + " is " + inputUsd * eurRate + " EUR";

console.log(result);