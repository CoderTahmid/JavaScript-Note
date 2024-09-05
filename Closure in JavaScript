/***Closure in JavaScript***/

function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    };
};
const firstServer = kitchen();
console.log(`First server call ${firstServer()}`); // output : 1
console.log(`First server call ${firstServer()}`); // output : 2
console.log(`First server call ${firstServer()}`); // output : 3
console.log(`First server call ${firstServer()}`); // output : 4

const secondServer = kitchen();
console.log(`Second server call ${secondServer()}`); // output : 1
console.log(`Second server call ${secondServer()}`); // output : 2
console.log(`Second server call ${secondServer()}`); // output : 3
console.log(`Second server call ${secondServer()}`); // output : 4

/*
so exactly ekhane hocche ta ki, ekhane koyekta things hochce

firstly ekhane ekta boro function newa hoiseh, and tar bhitore arekta choto function declare kora hoise

ei choto function ta te dekha jacche 'roast' variable ta ke use kora hoiseh
kintu ei 'roast' variable ta to ar oi choto function e declare kora naih
oita declare kora tar outer function'r scope e but still choto function e oi 'roast' variable ta work kortase
so ei bepar ta theke amra ja siddhanto nite pari ta holo je
jodi kono function'r bhitore arekta function ke return kora hoy
tahole shei choto function ta oi boro function'r moddhe thaka internal all varibale gula ke access korte parbe

arekta bishoy jeta,
amra jodi ei outer function'r onek gula copy banai
just like amra ekhane banaisi je 'firstServer', 'secondServer' 
tahole ei every copy'r alada alada instance thakbeh
jemon ta amra line 11 to 14 and 17 to 20 gula te dekhte pai

ar eije outer function'r joto gula copy create hbeh
era each and everyone hocche gopon ek ek tar POV thekeh
mane bepar ta hocche je
'firstServer' jane na je 'secondServer' er moddheh ki hocche


to muloto ei internal function ta je 
outer function'r variable gula ke access korte partase
ei bepar ta kei muloto Closure bola hoyh
*/