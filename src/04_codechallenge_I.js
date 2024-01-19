
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});
console.log("hello");

let zahl1 = Number(prompt("zahl 1 = "));

let zahl2 = Number(prompt("zahl 2 = "));
let summe = Number(zahl1 + zahl2);


if (isNaN(zahl1) || isNaN(zahl2)) {
   console.log("number1")
}else{
    console.log("n")
}




console.log("das ergebnis von "+ zahl1 +" + " + zahl2 + " lautet " + summe);
