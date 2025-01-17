/* Objects in JavaScript */

/*Declaration of an object*/
const student = { /*generally we define obects as "const" type*/
    fullName: "Tahmid Ibne Mofazzol",
    ageNew: 15,
    HSCPass: true,
    collegeName: " Ideal College, Dhanmondi",
    'fav places': ['bandarban', 'saintmartin', 'kuakata']
    /*
    here is "student" is an object.
    Orthat jei ekta variable'r moddhe onekgulo information ekta sathe guccho akare newa hoy
    shei variable kei object bole.

    here fullName, ageNew, HSCPass egula ke property bola hoyh
    mane bepar ta kinda emon je
    ekta property
    jar key hocche fullName and value hoccheh Tahmid Ibne Mofazzol
    key = ageNew, value = 15
    */
};

/*Accessing in object's properties*/
/*property access kora jay koyekta way te*/
console.log(student.fullName); // output : Tahmid Ibne Mofazzol 
console.log(student['fullName']); // output : Tahmid Ibne Mofazzol
console.log(student["fav places"]); // output : [ 'bandarban', 'saintmartin', 'kuakata' ]

/*Nested object*/
const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'victory day', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: '5',
            merit: 'top most'
        }
    }
}
console.log(college.unique); // output : { color: 'blue' }
console.log(college.unique.color) // output : blue
console.log(college.unique.result.gpa); // output : 5

/*Accessing keys of an object*/
/*
mone rakhar bishoy hocche
eikhane jei trick ta dekhano hoise
shei trick e ekta object'r key gula ke array akare pawa jay
kinda bola jay je 
ekta object'r key gula ke array te convert korar way eita
*/
const computer = {
    brand: 'lenovo',
    price: '35000',
    processor: 'intel',
    hdd: '512gb'
}
const keys = Object.keys(computer);
console.log(keys); // output : [ 'brand', 'price', 'processor', 'hdd' ]

/*Accessing values of an object*/
/*
same as ekhaneo 
ekta object'r value gula ke array te convert kora jay ei trick e
*/
const values = Object.values(computer);
console.log(values); // output : [ 'lenovo', '35000', 'intel', '512gb' ]

/*Accessing values and keys at once*/
const glass = {
    name: 'glass',
    color: 'golden',
    price: '12',
    isCleaned: true
};
const pair = Object.entries(glass);
console.log(pair);
    /* output : 
    [
        [ 'name', 'glass' ],
        [ 'color', 'golden' ],
        [ 'price', '12' ],
        [ 'isCleaned', true ]
    ]
    so eta basically ekta 2D / 2 Dimensional array print koreh
    */

/*Deleting a property from an object*/
delete glass.isCleaned;
console.log(glass); // output : { name: 'glass', color: 'golden', price: '12' }

/*Freezing an object*/
Object.freeze(glass)
glass.source = 'Bangladesh'; // ekhane glass object e new ekta property add kora hoise, jar key = source & value = Bangladesh
console.log(glass);
    /*
    output : { name: 'glass', color: 'golden', price: '12' }
    ekhane glass ta ke freeze kore deway oi new property ta add hoy naih
    same way te ei glass object theke kono property remove o kora jabe na 
    mane amra onek time e delete kori 'delete' keyword diye
    */

/*Object destructing*/
/*
object destructing hocche muloto emon ekta process
jar maddhome
kono ekta object'r property gula ke bar bar use kora jay easily
*/
const actor = {
    actorName: 'Ananta',
    age: 30,
    phone: '01724424214',
    money: 324235252,
}

const {actorName} = actor;
console.log(actorName); // output : Ananta
    /*
    so ekhane ja hocche ta holo je
    amra property name ke as a variable hishabe nicchi
    and oi varibale ke console korlei
    oi object'r oi property'r value ta pawa jabeh
    */
const {money} = actor;
console.log(money); // output : 324235252

const actor2 = {
    actorName2: 'Ananta Tambuk',
    age2: 330,
    phone2: '01724424214',
    money2: 324235252,
}
const {actorName2, age2, money2} = actor2; // We can also write it like this
console.log(actorName2); // output : Ananta Tambuk
console.log(age2); // output : 330

const actor3 = {
    actorName3: 'Ananta Tambuk',
    age3: 330,
    phone3: '01724424214',
    money3: 324235252,
}
const {age3: boyosh3} = actor3; // ebhabeo Declare kora possible  
// console.log(age3); // output : error
console.log(boyosh3); // output : 330

/*Optional Chaining*/

const user = {
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
};

const user2 = {
    id: 5002,
    name: 'Tony Stark',
    address: {
        city: 'Chittagong',
        country: 'Bangladesh'
    }
}
console.log(user.address.street.second); // output : poribag er goli
// console.log(user2.address.street.second); // output : error
console.log(user2.address.street?.second); // output : undefined, this time at least error khabo na
    /*
    and ebhabe question mark dewa kei muloto optional chaining boleh
    mane bepar ta emon hbe je
    jodi 'street' er man pawa jay 
    tahole shamne agao
    ar naile undefined print koroh
    */
console.log(user.address.street?.second); // output : poribag er goli, karon ekhane 'street' pawa geseh
