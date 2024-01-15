
/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/




   const ERROR_STR_DIV = "Division durch null nicht möglich";
  const calc_sign= {
    'sub'   :   0,
    'mul'   :   1,
    'add'   :   2,
    'div'   :   3
    }
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
        console.log("unknown operator")
        break;
   }
    
  }
  // testing calc 
  output("start calc test")
  output(calc(3,6,calc_sign.add));
  output(calc(3,6,calc_sign.sub));
  output(calc(3,6,calc_sign.mul));
  output(calc(0,0,calc_sign.div));
  output("finish calc test")

// module: output | test:
 output("hello");
 output(2);
function output(outputData) {
	console.log(outputData);
}

output(add(2,5));
output(sub(3,1));
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
    if (b !== 0) {
    return a / b;
    }else{
        return ERROR_STR_DIV;
    }
}
