/*
different differend random file e ekta ekta koreh class likhe
shegula ke access kore use korar jonnoi muloto toh module concept ashcheh
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