/* Promise chain in JavaScript*/

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1 found");
            resolve("Success");
        }, 4000);
    });
};

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2 found");
            resolve("Success");
        }, 4000);
    });
};

console.log("Fetching data 1...");
let p1 = asyncFunc();
p1.then((res) => {
    console.log("Fetching data 2...");
    let p2 = asyncFunc2();
    p2.then((res) => {});
});

/*Making a big promise chain*/

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("Success");
        }, 3000);
    });
};

console.log("Getting Data 1...");
getData(1).then(() => {
    console.log("Getting Data 2...");
    return getData(2);
}).then(() => {
    console.log("Getting Data3...");
    return getData(3);
}).then(() => {
    console.log("Gettin Data 4...");
    return getData(4);    
});
