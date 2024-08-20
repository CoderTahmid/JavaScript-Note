/* Prototype in JavaScript */

/*
JS e jokhon ekta object create kora hoy tokhon tar moddhe arekta by-default object automatically thake,
shei object'r name hocche "prototype".
ei "prototype" er bhitore kisu special method and properties thakbe
*/

/*
JS'r moddhe array internally ekta object type hoy,
array is not a string, number or array. 
it is simply an object.
orthat bola jay type of an array is object
*/

const employee = {
    calcTax() {
        console.log("You tax rate is 10%");
    }
};
const karanArjun = {
    salary : 50000,
    /*
    console e jeye jokhon ei karanArjun ke print kora hbe,
    toohkon sekhane tar koyekta object dekhte pawa jabe "prototype" name'r object'r bhitore,
    tobe amra chaile amader nijerder o ekta object create korte pari ei "prototype" object'r bhitore
    */
};
const karanArjun2 = {
    salary : 40000,
};

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
    /*
    ekhane muloto ja hoise,
    karanArjun object'r prototype e employee object ta ana hoise,
    browser'r console e jeye ei karanArjun print kore prototype e geleh ei object ta dekhte pawa jabe
    */

const karanArjun3 = {
    salary : 10000,
    calcTax() {
        console.log("your tax rate is 20%");
    }
};
karanArjun3.__proto__ = employee;
console.log(karanArjun3.calcTax());
    /*
    ekhane print hbe hocche "your tax rate is 20%",
    karanArjun3 er prototype hishabe "employee" ke set kore dile
    ekhane "your tax rate is 20%" etai print hbeh, 
    karon 2ta function'r e name same which is calcTax,
    er jonne object bhitore thaka fuction ta e print hbeh,
    not that denotaed function
    */