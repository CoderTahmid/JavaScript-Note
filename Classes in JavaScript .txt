/* Classes in JavaScript */

/*
class is program-code template for creating objects,
Think of classes as blueprints for creating objects
*/

/*
jokhona amra ekta same template'r upre
different different koyekta object banabo 
tokhon e muloto class'r bebohar hbe,
ba bola jay class muloto oi kajer jonnei used hoy
*/

class toyotaCar {
    start() {
        console.log("Start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brand = brand;
        /*
        ekhane "this" diye muloto jei object'r jonne call kora hbe shei object kei mean koreh
        */
    }
}
let fortuner = new toyotaCar();
let lexus = new toyotaCar();
    /*
    ekhon ekhane fortuner name'r ekta new object create hoilo,
    ja kina toyotaCar'r moddhe diye jacche arki.

    ei "new" keyword diye new object create kora hoy arki
    */
console.log(fortuner); /*website'r console e gele oikhane ei start and stop functions gula pawa jabe*/
console.log(fortuner.start()); /*ekhane start print hbeh*/

console.log(lexus.start()); /*etao oi ager tar moto e kaj korbe*/

fortuner.setBrand("FORTUNER") 
console.log(fortuner); /*ekhane toyotaCar e "brand" name e ekta property create hbeh, jar kina value hocche "FORTUNER" */ 

lexus.setBrand("LEXUS");
console.log(lexus); /*etao same as before. "brand" name e ekta property create hbeh, jar kina value hocche "LEXUS" */

/*Constructor*/ 

/*
All About Constructor
JS'r moddhe constructor name'r method age thekei default bhabei create hoy,
amader create kora lage na,
tobe amra chaile amader own customized constructor method create korte pari.

constructor'r main kaj hocche initialize object,
orthat jokhon kono notun object create kora hocche,
tokhon oi creation'r time e jodi amra kono kaj korte chai, kono property set korte chai
tokhon ei constructor method used hoy
*/

class toyotaCar2 {
    constructor(brand, milage) {
        console.log("Creating new object");
        this.brand = brand;
        this.milage = milage;
    }

    start() {
        console.log("Start");
    }

    stop() {
        console.log("stop");
    }
}
let fortuner2 = new toyotaCar2("FORTUNER2",10);
let lexus2 = new toyotaCar2("LEXUS2", 20);
console.log(fortuner2);
console.log(lexus2);
    /*
    jokhon kono notun object create kora hoy,
    tokhon ei constructor function shobar age invoke hoy.
    ekhn ekhane jehetu constructor function e ekta kaj set kore dewa hoise,
    so oita e age korbe.
    upre created fotuner and lexus object'r jonne emon kisu hbe nah,
    karon oder constructor function empty
    */