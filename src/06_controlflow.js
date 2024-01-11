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
const firstName = "Jane"
let job;
job = "diver";
switch (job) {
    case "driver":
        console.log(firstName+ " fährt Taxi!")
        break;
    case "diver":
        console.log(firstName+ " fährt taucht im Rhein!")
    default:
        break;
}