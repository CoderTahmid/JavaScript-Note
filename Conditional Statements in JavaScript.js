/* Conditional Statements in JavaScript */

/*"If" statement*/
let age = 23;
if (age > 18) {
        console.log("You can vote");
}

let mode = "dark";
let bgcolor;
if (mode === "dark") {
        bgcolor = "BLACK";
}
if (mode === "light") {
        bgcolor = "WHITE";
}
console.log(bgcolor);

/*"If-else" statement*/
let mode1 = "dark";
let bgcolor1;
if (mode1 === "dark") {
        bgcolor1 = "BLACK";
} else {
        bgcolor1 = "WHITE";
}
console.log(bgcolor1);

let age1 = 122;
if (age1 > 18) {
        console.log("vote");
} else {
        console.log("not vote");
}

/*"else-if" statement*/
let mode2 = "pink";
let bgcolor2;
if (mode2 === "dark") {
        bgcolor2 = "black";
} else if (mode2 === "pink") {
        bgcolor2 = "pink";
} else if (mode2 === "green") {
        bgcolor2 = "green";
} else if (mode2 === "merun") {
        bgcolor2 = "merun";
} else {
        bgcolor2 = "white";
}
console.log(bgcolor2);

/*Ternary Operators*/
/*The structure of this operator is --> "condition?true output:false output"*/
let age2 = 12;
let result = age2 >= 25 ? "You are adult" : "You are not adult";
console.log(result);

/* Complex Condition */

let salary = 25000;
let hasCar = true;
let isBCS = true;

if ((salary > 25000 && hasCar == true) || isBCS == true) {
        console.log("shu patro");
}

if ((salary > 25000 || hasCar == true) && isBCS == true) {
        console.log("shu patro")
}
/*
this is how we will write complex conditions
*/


