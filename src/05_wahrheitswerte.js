
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

let date = new Date();
//Berechnung Alter
let year = date.getFullYear();
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

console.log("ageJohn " + ageJohn);
console.log("ageMark " + ageMark);
console.log("datum " + year);

let isJohnOlder = (ageJohn > ageMark);
let isJohnEqual= (ageJohn == ageMark);

if (isJohnOlder){
  console.log("John ist älter als Mark")
}
else if(isJohnEqual){
  console.log("John ist älter als Mark")
}else{
  console.log("Mark müsste älter als Mark sein")
}

console.log(isJohnOlder);
console.log(isJohnEqual);


