const prompt = require('prompt-sync')();

let senderName;
let receiverName;
let transactionAmount;
let transactionId;

senderName = prompt("Enter sender's name: ");
receiverName = prompt("Enter receiver's name: ");
transactionAmount = prompt("Enter transaction amount: ");

function generateId(){
    transactionId = senderName + receiverName + transactionAmount;
    return "Transaction ID: " + transactionId;
}

console.log(generateId());

if(transactionAmount > 50){
    console.log("Amount is valid: True")
} else{
    console.log("Amount is valid: False")
};
