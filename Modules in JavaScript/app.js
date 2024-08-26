/*
different differend random file e ekta ekta koreh class likhe
shegula ke access kore use korar jonnoi muloto toh module concept ashcheh
*/

/*
eta ke Named Exports o bola hoy
*/

import { personDoing } from "./personDoing.js"; // ekhane ebar oi file e thaka codes gulo use kora jabeh
console.log(personDoing);

class animalDoing extends personDoing {
    work() {
        console.log("work");
    };

    shit() {
        console.log("Shit");
    };
};
let animalVal = new animalDoing();
console.log(animalVal);
console.log(animalVal.eat());

/* Default Exports */

/*
upre amra jei example ta dekhsi shetake
named exports boleh
ekhnn amra default exports dekhbo
*/

import engineer from "./personDoing.js"; // ekhon ekhane "engineer" class ke import korteh ager moto curly braces use kora lage naih
console.log(engineer);

class everyone extends engineer {};
let everyoneVal = new everyone();
console.log(everyoneVal.probSolve());

/*
now let's import named class and a default class at same time from a same file
*/

import defaultClass, {namedClass} from "./randomClasses.js";
console.log(defaultClass);
console.log(namedClass);