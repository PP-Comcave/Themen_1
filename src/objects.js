/***** Objekte 1 Daten/Funktionen *******/
let person = {
    firstName : "Jasper",
    lastName : "Haag",
    salary : [30000,800000],
    permission : true,
    sayhello : function () {
        return ("hello "+ this.firstName + " " + this.lastName);

        
    }
}

console.log(person.lastName);

console.log("ich bin "+ person.sayhello()  + " und verdiene " + person.salary[1])

let baikal = {
                value: "10m",
                deep:{
                    deeper:{
                        temperature:"4 Grad Celius",
                        deepest:"das licht auf 1642m!"

                    }
                }
}
console.log(baikal);
console.log(baikal.deep.deeper.temperature);