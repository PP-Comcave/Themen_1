
/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/
//ERROR Message to const
const ERROR_STR_DIV = "Division durch null nicht möglich";

const ERROR_WRONG_OP = "unknown operator";
//Calc signs to Const
  const calc_sign= {
    'sub'   :   '-',
    'mul'   :   '*',
    'add'   :   '+',
    'div'   :   '/'
    }

        
const prompt = require('prompt-sync')({sigint: true});

let zahl1 = Number(prompt("zahl 1 = "));
let zahl2 = Number(prompt("zahl 2 = "));
let op;
while (!Object.values(calc_sign).includes(op)) {
  op = prompt("choose op ");
}
output("Rechne "+ zahl1 + op + zahl2 +"=" )
output(calc(zahl1,zahl2,op));
output("TEST finished")
output("next test")
output(calc(getnum1(),getnum2(),getop()));

//calc function   
  function calc(a,b,s) {
   switch (s) {
    case calc_sign.add:
        return add(a,b);
    case calc_sign.sub:
        return sub(a,b);
    case calc_sign.mul:
        return mul(a,b);
    case calc_sign.div:
        return div(a,b);
    default:
        console.log(ERROR_WRONG_OP);
        break;
   }
    
  }
//   // testing calc 
//   output("start calc test")
//   output(calc(3,6,calc_sign.add));
//   output(calc(3,6,calc_sign.sub));
//   output(calc(3,6,calc_sign.mul));
//   output(calc(0,0,calc_sign.div));
//   output("finish calc test")

// // module: output | test:
//  output("hello");
//  output(2);
function output(outputData) {
	console.log(outputData);
}

// calc functions
function add(a,b) {
    return a + b;
    
}
function sub(a,b) {
    return a - b;
    
}
function mul(a,b) {
    return a * b;
    
}
function div(a,b) {
    if (b == 0) {
        return ERROR_STR_DIV;
    }

    return a / b;
}
//get val
function getnum1() {
	return parseInt(prompt("zahl 1 "));
}
function getnum2() {
    return parseInt(prompt("zahl 1 " ));
}
function getop() {
    return prompt("get OP ");
}

