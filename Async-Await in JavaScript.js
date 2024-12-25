/* Async-Await in JavaScript */

/*
kono ekta function'r age "async" keyword likhe oi function ta keh async function hishabe use kora jay,
and async function automatiically ekta promise return kore,
nij thekei, tar moddhe kono promise define kore dewa lage na
*/ 

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200);
        }, 2000);
    });
};

async function getWeatherData() {
    await api();
    await api();
    /*
    mone rakhte hbeh je,
    await keyword only kono ekta async function'r bhitorei use korte hoy

    muloto amader jeta target ta hocche je prothome ekta kaj hbeh
    tarpor set kora time par hoile next arekta kaj hbeh
    er majhe jei waiting stage ta create korte hoyh,
    etai hocche amader main challange,
    so eta ei "await" keyword ta onek easy kore diseh
    */
}
let data = getWeatherData();
console.log(data);

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve(200);
        }, 2000);
    });
};

async function getAllData() {
    console.log("Getting Data 1...");
    await getData(1);
    console.log("Getting Data 2...");
    await getData(2);
    console.log("Getting Data 3...");
    await getData(3);
    console.log("Getting Data 4...");
    await getData(4);

    /*
    to ekhane ja hocche,
    prothome console'r first statement execute korbe
    then next line e jokhon e "await" pawa jabeh, tokhon e sekhane wait korbe and getData(1) function ta execute korbe
    and nicher gula o same 
    */
};
let data1 = getAllData();
console.log(data1);