let randomFunction = (a, b) => {
    sum = a + b;
    console.log(a ,b, sum);
    return sum;
}
randomFunction(3, 4); // simply output dibeh, output : 3 4 7
randomFunction(); // kono value pass kora hoy naih, so output : undefined undefined NaN

let randomFunction2 = (a = 5 , b = 5) => {
    sum = a + b;
    console.log(a ,b, sum);
    return sum;
}
randomFunction2(2, 3); // output : 2 3 5
randomFunction2(); // output : 5 5 10
    /*
    ekhane emon houar karon hocche jeh
    ekhane parameter gular ekta default value seta kore dewa hoiseh ty
    */