/* Strings in JavaScript */


/*String Indices*/
/*To get access to any string's any position later this function is used*/
let str="Tahmid";
console.log(str[0]); /*This will print the value of the first later of any index*/

/*Template Literals*/
/*By using Template Literals we can get access any objects's key very easily and the code is easy to read also*/
/*Template Literals always returns a string, for example we can say by using "" this while we are printing any number it will be highlighted there, because "" this retruns a number as a number but the Template Literals returns a number as string*/
fullName=`Tahmid`;
console.log(fullName); /*This code will print "Tahmid" just like the normal " " this inverted comma's function, so where is the difference? let's find it out*/

let object={
    prodName : "Pen",
    prodPrice : 10,
}
console.log("The price of the",object.prodName,"is",object.prodPrice,"TK");
console.log(`The price of the ${object.prodName} is ${object.prodPrice} TK`); /*Now this code will print same as the previous line code, and ei run time e value calculate kora ke bola hoy string interpolation*/
console.log(`Tahmid is 19 years old`); /*Here 19 is printing as a string not as a number*/

marufAge=10;
tahmidAge=90;
bushraAge=34;
console.log(`they all are total ${marufAge+tahmidAge+bushraAge} years old`); /*Template Literals also calculate values during run time*/

/*Escape character*/
console.log(`How are \n you`); /*This will create a new line*/
console.log(`Apna\tcollege`); /*This create a tab space*/
let str1="Tah\tmid";
console.log(str1.length); /*"Tahmid" er length 6 character hoileo "\t" thakar korone 7 print hbe, it's mean escape characters count as a single character*/

/*String Length*/
let str2="Tahmid Ibne";
console.log(str2.length); /*This will print 11 space also counted as length*/
let str3="Tahmid";
console.log(str3.length); /*This will print 6*/