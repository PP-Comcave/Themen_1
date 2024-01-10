const prompt = require('prompt-sync')({sigint: true});
let firstName = prompt("vorname  ");
console.log("vorname ist gespeichert!")
let familyName = prompt("nachname  ");
console.log("nachname ist gespeichert!")
console.log(firstName,familyName);
