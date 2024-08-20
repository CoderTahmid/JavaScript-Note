/* Logical operators in JavaScript */
/*They always returns a boolean value*/

/*The usage of "&&"*/
/*This "&&" basically work as the AND gate from the logic gate*/
/*Both conditions must be true to return a true*/
let a=5;
let b=6;

let cond1 = a*b>20;
let cond2 = a+b<20; 
console.log("cond1 && cond2",cond1&&cond2); /*This will print a true cause both conditions are true*/
        /*We can also write like that*/
console.log("cond1 && cond2",a*b>20 && a+b<20);

let cond3 = b<a;
let cond4 = b>a;
console.log("cond3 && cond4",cond3&&cond4); /*It will return a false cause cond3 is false*/

/*The usage of "||". It is called or or*/
/*This or or works same as the OR gate from the logic gate*/
/*If only one condition is true, it will return a true and when both conditions are false then it will return a false*/
let d=5;
let c=2;

let cond5 = c<d;
let cond6 = c=d;
console.log("cond5 || cond6",cond5||cond6); /*It will reeturn a true because cond5 is true*/


let cond7 = c*d>30;
let cond8 = d-c>6;
console.log("cond7 || cond8",cond7||cond8); /*This will return a false because both conditions are false*/

/*The usage of "!",it is called not*/
/*It works same as the not gate from the logic gate*/
/*For any true condition it will return false or vice-versa*/
let e=4;
let f=5;
let cond9 = e>f;
console.log("!(cond9)",!(cond9)); /*The cond9 is false but this will return true*/




