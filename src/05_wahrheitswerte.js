
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 2000;
const birthYearMark = 1990;

let date = new Date();
//Berechnung Alter
let year = date.getFullYear();
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

console.log("ageJohn " + ageJohn);
console.log("ageMark " + ageMark);
console.log("datum " + year);