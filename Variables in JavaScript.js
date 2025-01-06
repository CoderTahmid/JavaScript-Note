/* Variables in JavaScript /

/* no need to define the variable type like Python and C code */
/*
var is a global scope variable
let is a block scope variable
const is a block scope variable
*/
{
let name="Tahmid Ibne";
let age=12;
let price=123; /* for those values which can be changed */
const arga="paul"; /* for constant value which is can not be change */

console.log(name);
console.log(age);
console.log(price);
console.log(arga);
}
/* we can also write like that, but this thing will only work for "let" it wont work at "const" */
let a;
a="43";
console.log(a);

/* object */
const student = { /*generally we define obects as "const" type*/
    fullName: "Tahmid Ibne Mofazzol",
    ageNew: 15,
    HSCPass: true,
    collegeName: " Ideal College, Dhanmondi",
};

/* access to any perticular key in a object */
console.log(student.ageNew);
console.log(student.fullName);


/* chagning any key information from a object */
student["ageNew"] = student["ageNew"] + 100000;
console.log(student["ageNew"]);

student["fullName"] = "Mushfiqa Afrin Bushra";
console.log(student["fullName"]);

student.ageNew = student.ageNew + 233525;
console.log(student.ageNew);

student.fullName = "Tania Akter";
console.log(student.fullName);

/*converting a string to integer*/
let randomNum = 10;
let anotherRandomNum = "10";
console.log(randomNum + anotherRandomNum); // output : 1010
console.log(randomNum + parseInt(anotherRandomNum)); // output : 20
    /*
    ekhane ei parseInt() method ta anotherRandomNum ke integer e convert korseh
    hence 55 line e output 20 asche
    */
let aFloatNum = 10.5;
console.log(parseInt(aFloatNum)); // output: 10, float number ta ke integer e convert korseh

/*Shortcut for converting a string into integer*/
const input = '560';
const inputNum = +input;
console.log(inputNum); // Now it will print as an integer