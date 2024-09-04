/****Spread Operator for arrays****/

/*
spread Operator hocche muloto concat method'r short form,
concat method ke short kore likhar jonnei muloto spread operator ascheh
spread operator ke "..." diye likhte hoyh
*/

const firstRandomArr = [1,2,3];
const secRandomArr = [4,5,6];

combined = [...firstRandomArr, ...secRandomArr];
    /*
    er mane hocche,
    prothome firstRandomArr ke spread kora hbeh
    then secRandomArr ke spread kora hbeh
    pore eder ke add kora hbeh ek satheh 
    and ekta new variable e store kora hbeh
    */
console.log(combined); // Output : [1,2,3,4,5,6]

combined2 = [...firstRandomArr,"a",...secRandomArr];
console.log(combined2); // Output : [1,2,3,'a',4,5,6]

combined3 = [...firstRandomArr,"a",...secRandomArr,"b"];
console.log(combined3); // Output : [1,2,3,'a',4,5,6,'b'];

console.log(...firstRandomArr); // output : 1 2 3
    /*
    ekhane noticable bishoy hocche je
    ei spread method use korleh
    array theke ta normal number e convert hbeh
    */

/*Using spread operator to find a maximum value of an array*/
const arrToFindMaxNum = [1,23,45,32,232,143,2422,243];
const maxVal = Math.max(...arrToFindMaxNum);
console.log(maxVal); // output : 2422