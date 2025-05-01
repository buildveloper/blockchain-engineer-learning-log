const prompt = require('prompt-sync')();

let enemiesDefeated;
let bonusesCollected;

enemiesDefeated = prompt("Enter number of enemies defeated: ");
enemiesDefeated = enemiesDefeated * 1; // convert string to number using basic arithmetic, necessary since the prompt function return a string

bonusesCollected = prompt("Enter number of bonuses collected: ");
bonusesCollected = bonusesCollected * 1;

let totalScore = enemiesDefeated + bonusesCollected;
console.log("Total Score: " + totalScore);

if(totalScore >= 50){
    console.log("can level up");
} else {
    console.log("cannot level up")
};