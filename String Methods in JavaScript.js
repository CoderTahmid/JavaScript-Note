/* String Methods in JavaScript */
/*Strings in JS is inmutable, it's mean to make change any string we must have to create a new variable*/
/*Here is ".toUpperCase" or ".toLowerCase()" is a method*/
/*Must have to create a different variable to use these methods*/

/*Upper Case method*/
let str="IdealCollege";
str=str.toUpperCase(); 
console.log(str); /*This will change the "IdealCollege" to "IDEALCOLLEGE"*/

/*Lower Case method*/
let str1="IDEALCOLLEGE";
str1=str1.toLowerCase();
console.log(str1); /*This will change the "IDEALCOLLEGE" to "idealcollege"*/

/*Trim method*/
let str2="    Hello World    ";
console.log(str2.trim()); /*It will just simply remove the spaces of the string form the starting of the string and ending of the string*/

/*Slice method*/
let str3 = "01234567";
console.log(str3.slice(3,7)); /*This will print the starting index but not print the ending index*/
let str4="hello";
console.log(str4.slice(0,4));

/*Concatenation method*/
/*String concatenation means 2 ta string jora lagano*/
let str5 = "Tahmid ";
let str6 = "Ibne Mofazzol";
let res= str5.concat(str6);
let res1= str6.concat(str5);
console.log(res); /*This will print "TahmidIbne Mofazzol"*/
console.log(res1); /*This will print "Ibne MofazzolTahmid"*/
let res2 = str5+str6;
console.log(res2); /*We can also concate like this*/
console.log("My name is "+str5+str6+" Im a student of Ideal College, Dhanmondi"); /*We can also concate like this*/

/*Replace method*/
/*This method searches any later from a string then replace it with another something*/
/*This method is case sensitive you must have to declare the case whatever it is upper or lower*/
let str7="Tahmid";
console.log(str7.replace("t","f")); /*This code will not execute*/
console.log(str7.replace("T","f"));
console.log(str7.replace("Tah","Lam"));
let str8="hellolololo";
console.log(str8.replace("lo","DD")); /*Only the first "lo" will be replaced*/
console.log(str8.replaceAll("lo","DD")) /*This will replace all the "lo"*/

/*Split method*/
/*eita kono ekta string'r every character ke alada kore ekta array create korbeh*/
let sentence = 'I wanna be a good programmer';
console.log(sentence.split()); // output : [ 'I wanna be a good programmer' ]
console.log(sentence.split(''));
    /*
    output : 
    [
    'I', ' ', 'w', 'a', 'n', 'n',
    'a', ' ', 'b', 'e', ' ', 'a',
    ' ', 'g', 'o', 'o', 'd', ' ',
    'p', 'r', 'o', 'g', 'r', 'a',
    'm', 'm', 'e', 'r'
    ]
    */
console.log(sentence.split(' ')); // output : [ 'I', 'wanna', 'be', 'a', 'good', 'programmer' ]
    /*
    ekhane just ekta space dewa hoiseh split() method'r bhitore
    to eita oi sentence'r space gula ke dhoira coma boshaya 
    array toiri kore felseh
    and every word becomes an array element
    kinda like emon je
    jekhane jekhane space khuje pabe 
    sekhane sekhane bhag kore dibeh
    */
console.log(sentence.split('a')); // output : [ 'I w', 'nn', ' be ', ' good progr', 'mmer' ]
    /*
    same as before
    jekhane jekhane a paise bhag kore diseh
    */

/*Join method*/
/*eta muloto ekta arrya'r element gula ke join korayh*/
const friends = ['rahim', 'kahim', 'fahim', 'mahim', 'sahim'];
console.log(friends.join()); // output : rahim,kahim,fahim,mahim,sahim
console.log(friends.join('|')); // output : rahim|kahim|fahim|mahim|sahim
console.log(friends.join('-')); // output : rahim-kahim-fahim-mahim-sahim

/*Includes method*/
/*eta kinda array'r jei include method ta aseh oitar motoi*/
const randomName = 'tahmid';
console.log(randomName.includes('d')); // output : true , string ta te 'd' ase er jonnei true
console.log(randomName.includes('x')); // output : false, string ta te 'x' naih er jonnei false

