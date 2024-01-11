/*
// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 32;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
 console.log("ageJohn: " + ageJohn);
 console.log("ageMark: " + ageMark);
 console.log("isJohnOlder: " + isJohnOlder);
 console.log("isJohnEqual: " + isJohnEqual);
 console.log("------------------");

/************ IF  ************/

// TINA --> There is no alternative!

// entweder JA oder nix ... alternativlos

// Türsteher-Politik (Doors 10 p.m.)
/*
if(isJohnOlder)
{
    console.log("John ist älter!")
}else{
    console.log("John ist jünger!")
}
*/
/* const firstName = "Jane"
let job;
job = "artist";     // .. malt ein Bild!
job = "pilot";      // .. macht etwas anderes! --> default
job = "teacher";    // .. unterrichtet!
job = "instructor";  // .. unterrichtet!
switch (job.toLowerCase()) {
    case "driver":
        console.log(firstName+ " fährt Taxi!")
        break;
    case "diver":
        console.log(firstName+ " taucht im Rhein!")
        break;
    case "artist":
        console.log(firstName + " malt ein Bild!")
        break;
    default:
        console.log(firstName + " macht etwas anderes");
        break;
} */

const cond = true;

const value = 1;

switch (cond) {
    case (value == 1):
        console.log("Der Wert ist 1");
        break;
    case (value == 2):
        console.log("Der Wert ist 2");
        break;
    default:
        console.log("error")
        break;
}