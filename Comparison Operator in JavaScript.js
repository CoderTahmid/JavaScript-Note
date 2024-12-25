/* Comparison Operator in JavaScript */
/*This operators always retrurns a boolean value*/

/*The usage of "=="*/
let a=5;
let b=4;
console.log("a == b",a==b); /*This will return "false"*/

let c=6;
let d=6;
console.log("c == d",c==d); /*This will return "true"*/

let aa=5;
let bb="5";
console.log("aa == bb",aa==bb); /*Here it will return "true".But we expect it should return false, because here aa is aa number and bb is string, borth aren't same.So, it should return false. But in JS when we're using "==" this operator, this only check the data not the type of this data. So if the data is same this will print true*/

let cc="Tahmid";
let dd="Tahmid";
console.log("cc == dd",cc==dd); /*It will also return true*/

/*The usage of "!="*/
let e=4;
let f=4; 
console.log("e != f",e!=f); /*This will return "false"*/

let g=3;
let h=4;
console.log("g != h",g!=h); /*This will return "true"*/

/*The usage of "==="*/
/*This triple equal to basically make different in both data and the data type*/
let i=4;
let j="4";
console.log("i === j",i===j); /*This will return "false" because data gulo same hoileo data type same nah*/

let k=4;
let l=4;
console.log("k === i",k===i);

/*The usage of "!=="*/
/*It is same as "===", cheks the data and the data type too*/
let m=4;
let n="4";
console.log("m !== n",m!==n); /*This will reutrn "true" because m and n er value same hoileo eder data type same nah*/

/*The usage of "<="*/
/*"<=" this is basically resfers less than or equal*/
let o=4;
let p=4;
console.log("o <= p",o<=p); /*This will return true because o=p*/

let q=3;
let r=4;
console.log("q <= r",q<=r); /*This will return a true because q<r*/

/*The usage of ">="*/
/*">=" this is basically refers greater than or equal*/
let s=4;
let t=4;
console.log("s >= t",s>=t); /*This will return a true because s=t*/

let u=5;
let v=4;
console.log("u >= v",u>=v); /*This will return a true cause u>v*/
