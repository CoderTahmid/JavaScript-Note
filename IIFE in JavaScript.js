/* IIFE in JavaScript */

/*IIFE = Immediately Invoked Function Expression*/

/*
IIFE use kora hoy muloto je karon e ta holo,
kono ekta function ke call na korei tar karjokrom chalaite IIFE use kora hoy,
majhe majhe amder emon hbe je not always amader ekta function ke call korte hbeh,
like like kono kono emon function thakte pareh je jar kaj matro ekbar e hbeh,
so oi khetre ekta new function banay  take abar ekta alada variable name diye call korte hbeh
ei case e dekha jay je onek beshi variables create hoye jayh, 
so ei bepar ta kei atkaite muloto IIFE use kora hoy
*/ 

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve(200);
        }, 2000);
    });
};

// async function getAllData() {
//     console.log("Getting Data 1...");
//     await getData(1);
//     console.log("Getting Data 2...");
//     await getData(2);
//     console.log("Getting Data 3...");
//     await getData(3);
//     console.log("Getting Data 4...");
//     await getData(4);
// };
// let data1 = getAllData();
// console.log(data1);

    /*
    so uprer ei commented code e dekha jacche je amader getAllData name e ekta function create kora lagse,
    pore seta ke abar use korar jonne ekta alada variable "data1" create kora lagseh
    but IIFE use korle ta kora lgbe na,
    functiont ta direcly execute hbeh
    */

(async function () {
    console.log("Getting Data 1...");
    await getData(1);
    console.log("Getting Data 2...");
    await getData(2);
    console.log("Getting Data 3...");
    await getData(3);
    console.log("Getting Data 4...");
    await getData(4);
})(); 
    /*
    and eta IIFE version of that one code,
    ekhn console e gelei dekha jabe je 
    eta ekai run hocche
    */