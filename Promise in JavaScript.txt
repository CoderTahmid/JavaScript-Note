/*
about setTimeout() function
setTimeout() diye muloto bola jay ekta code kotokkhon por execute hbeh
setTimeout() e time mili sec unit e boshaite hoyh
*/

function hello () {
    console.log("Hello");
}
setTimeout(hello, 2000); /*ekhn ei hello function ta 2sec por execute hbeh*/

setTimeout(() => {
    console.log("king");
}, 2000); /*ebhabeo likha jabe chaile*/

/*An example of Asynchronous programming*/
console.log("One");
console.log("Two");
console.log("Three");
setTimeout(() => {
    console.log("Four");
}, 2000);
console.log("Five");
console.log("Six");

function sum(a, b) {
    console.log(a+b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1,2,sum);
    /*
    so what's going on here
    prothome ekta function define kora hoiseh
    jar name hocche sum
    ei sum'r moddhe 2 ta variable pass kora hoiseh
    ekta hocche a and arekta hoccheh b
    ei a and b ke obbosho parameter o bole
    now ei sum() function tar kaj hocche je a+b kora

    then arekta new function calculator() define kora hoiseh
    and ei calculator() function e 3 ta variable or parameter dewa hoiseh
    ekta hocche a arekta b and last one hocche sumCallback
    now ei calculator() function'r kaj hoccheh sumCallback parameter tar aro 2 ta parameter save kora
    and ei calculator() function ta ty e korloh 
    sumCallback() e 2 ta parameter pass korseh, 
    jegula hocche a and b

    now! amra jodi next line(line 34) code e ashi 
    tahole ekhane ekta chomotkar bishoy gotseh sheta hoio je
    oikhane sum() = sumCallback() hoye geseh
    well how? 
    now let's explain
    34 number line e calculator() e 3 ta value pass kora hoiseh
    ekta hocche 1 arekta 2 and arekta hoccheh sum
    and ei value gula kintu pass kora hoiseh purbo defined parameter' upre base koreh
    orthat 
    a = 1
    b = 2
    sumCallback() = sum()
    ekhn bola jay jeh sumCallback() er kaj hobe sum() function'r kaj jeta sheta
    and sum() function'r kaj hocche jaya console e a+b print korah

    so etakeh muloto callback bola hoyh
    like
    ek function'r bhitore arek function ke call kora 
    and eder moddhe ebhabe internally variables pass kora
    */

/*
.
.
.
.
*/

/*
about callback hell
callback hell : nested callbacks stacked one another forming a pyramid structure
sometime amader ekta function'r bhitore aro ekta function call korte hoite pareh,
tar bhitoreo aro ekta function call korte hoite pareh and even etar bhitoreo,
muloto nested functions ashte pareh emon ekta bishoy,
ekei muloto bole callback hell, niche example dewa hoiloh

so ei callback hell hocche ekta problem in JavaScript, 
jeta ke solve kortei muloto ashche "promises"
*/

/*
so eta bujhar jonne amra ekhn emon ekta task nibo
jei task e ekta code 2sec por execute hbeh
tar porer ta abar aro 2 sec por execute hbeh
tar porer ta aro 2 sec por execute hbeh
*/

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("Data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

// getData(1, getData(2)); ebhabe likha jabe nah, tahole error ashbe, amader function'r bhitore arekta function likhte hbeh, mane function callback concept use korte hbeh 

getData(1, () => {
    console.log("Data 2 is getting...");
    getData(2, () => {
        console.log("Data 3 is getting...");
        getData(3, () => {
            console.log("Data 4 is getting...");
            getData(4, () => {
                console.log("Data 5 is getting...");
                getData(5);
                setTimeout(() => {
                    console.log("Exit");
                }, 2000);
            });
        });
    });
});
    /*
    now this code here become hard to read
    kono programmer eshe ei code porte parbe na easily 
    or changes anteo tar onek pera khaite hbeh
    emon pyramid structure asha kei muloto callback hell bole
    ekhn eta ke aro structured way te likhar jonnei "promises"
    name'r concept ashche
    */

/*
.
.
.
.
*/

/*
About "promise"

ekta promise'r 3 ta state hoite pareh
ekta hocche pending state
ekta hocche fulfilled state
ekta hocche rejected state

in real life programming
promise muloto amra create kori nah,
promise ashe onno API thekeh,
onno API thekeh Data get hoy arki, pore amra sheta handle kori
to sometimes data get hoite time lgte pareh
oi time kei muloto pending state bola hoyh
ar data paile ta fulfilled state,
ar na paile sheta rejected state
*/

let promise = new Promise((resolve, reject) => {
    console.log("Im a promise");
    resolve(123);
});
console.log(promise);
    /*
    ekhane promise state fulfilled show korbe,
    karon ekhane resolve e ekta data dewa hoiseh
    */

let promise1 = new Promise((resolve, reject) => {
    console.log("Im a promise(2)");
    reject("Error");
});
console.log(promise1);
    /*
    ekhane promise state rejected show korbeh,
    karon ekhane reject kora hoiseh
    */

function getData1(dataId, getNextData) { //dhorlam ei getData1 ekta API, and eta ekta data return kore
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Success");
            if(getNextData){
                getNextData();
            }
        }, 5000);
    });
};
let result = getData1(1);
console.log(result);
    /*
    muloto ei getData1 e jebhabe dekhano hoiseh,
    real life programming eo ebhabe kaj koreh
    like
    kono ekta random name'r function thakeh(ja muloto ekta API hoy),
    ja emon return kore ekta promise, and oi promise ei shob kaj chole
    */

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Here im a Promise");
        resolve("Success");
    });
};
let promise2 = getPromise();
promise2.then(() => {
    console.log("Promise fulfilled");
    /*
    ei "then" keyword ta tokhon use kora hoy jokhon
    promise resolve hoy, and resolve houar por ta dia kisu korte chaile muloto ei "then" use korte hoy
    */
}); 

const getPromise2 = () => {
    return new Promise((resolve, reject) => {
        console.log("here im anothoer promise");
        reject("Not succeed");
    });
}
let promise3 = getPromise2();
promise3.catch(() => {
    console.log("Promise rejected");
    /*
    ei "catch" keyword tokhon e use kora hoy jokhon
    promise rejected hoy arki,
    mane code ta kinda emon je
    jodi promise ta rejected hoy tahole tmi ei kaj korba
    */
});