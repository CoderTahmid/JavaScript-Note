/* Arrays in JavaScript */
/*Jokhon ekoi dhoroner onek data store koraite hoy tokhon amra basically arrays use kori*/
/*Defination of Array : Collection of a same type of information*/
/*Arrays are mutable in JS*/
/*Array length = last index + 1; array length isn't the last index of the array rather it is the total number of the array's element*/

let marks = [90, 12, 2, 44, 32, 44, 45];
let heros = ["Ironman", "Thor", "Hulk", "Spiderman"];
console.log(marks[0] + marks[1]);
console.log(heros[0]);

/*Changing any value of a array*/
marks[0] = 100;
console.log(marks[0]); /*This will print 100 instead of 90*/

/*Looping over an array*/
for (let i = 0; i < heros.length; i++) {
    console.log(heros[i]); /*Er mane hocche heros variable ta print hbe kintu i er upre base kore, ar index ekhane loop korbe*/
}

for (let hero of heros) {
    console.log(hero);
}

/*For-each loop*/
/*for-each ke higher order function or higher order method bola hoy*/
/*higher order function tader bole jara onno kono function ke parameter hishabe use kore, or onno kono function ke return kore*/
/*mone rakhte hbe--> for-each diye kono kisu return kora jay nah, ei loop diye only element iterate kora jay*/
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function my_func(val) {
    console.log(val); /*ei loop ta array'r protita value print korbe alada alada bhabe*/
});
arr.forEach(my_func = (val) => {
    console.log(val);
});
let cities = ["Dhaka", "Tangail", "Mumbai", "Ghatarchar"];
cities.forEach(city_func = (city, i, arr) => {
    console.log(city.toUpperCase(), i, arr); /*for-each loop's first parameter array'r value gulo, 2nd parameter value gulor index, 3rd parameter array nijei*/
});

/****Array Methods****/

/*Push method*/
/*Push sadharonoto programming a add kora ortho bujhay*/
/*kono array'r last e kono item jog korte hole ei push methon use kora hoy*/
console.log(heros); /*This line simply print the array*/
heros.push("Superman", "Ben10");
console.log(heros); /*But this will add some new data in the array*/

/*Pop method*/
/*Pop sadharonoto programming a delete kora ortho bujhay*/
/*kono array'r last'r kono ekta element delete kore dibe ei pop method*/
let foodItems = ["rice", "meat", "burger", "pizza"];
console.log(foodItems);
let deletedItem = foodItems.pop();
console.log(foodItems); /*this will delete the "pizza" from the main array*/
console.log(`the deleted item is ${deletedItem}`);

/*toString method*/
/*muloto ekta array ke array format e print e na kore string form e print koranoi ei method'r kaj*/
console.log(heros.toString());
/*Shortcut of toString method*/
const num1 = 3434;
const num1Str = num1 + '';
console.log(num1Str); // Now it will print like a string

/*Concat method*/
/*Concat korle main array change hoy nah, new ekta variable newa lage*/
let randomNames = ["Tahmid", "Bushra", "Rifat"];
let concatedArray1 = heros.concat(foodItems); /*Age "heros" array er info gula ashbe then "foodItems" array gular element ashbe*/
let concatedArray2 = foodItems.concat(heros);  /*Age "foodItems" array er info gula ashbe then "heros" array gular info ashbe*/
let concatedArray3 = foodItems.concat(heros, randomNames);
console.log(concatedArray1); /*Eita basically "heros" array er sathe "foodItems" array ke add kore new ekta array banay*/
console.log(concatedArray2);
console.log(concatedArray3);

/*Unshift method*/
/*Unsift method is almost similar to the "push" method*/
/*push method jemon last e new element add kore, temon unsift method first e ekta new element add kore*/
let collegeNames = ["ICD", "DCC", "DC"];
collegeNames.unshift("MKC");
console.log(collegeNames); // output : [ 'MKC', 'ICD', 'DCC', 'DC' ]

/*Shift method*/
/*Shift method is similar to the pop method*/
/*pop method e jemon array'r last e theke ekta ekta info delete kore dey, shift method e temon array'r first e theke ekta info delete kore dey*/
let schoolNames = ["DGBHS", "SBNGBHS", "FRII"];
let deletedVal = schoolNames.shift();
console.log(deletedVal); /*Eita basically print korbe shei value ta jeita delete kora hoise*/
console.log(schoolNames); /*and eta print korbe delete korar por array'r new value*/

/*Slice method*/
let bdCrickPlayers = ["Sakib", "Mushfiq", "Tamim", "Mustafiz"];
let slicedPart = bdCrickPlayers.slice(0, 3);
console.log(`The sliced part is ${slicedPart}`);

/*Splice method*/
/*splice method diye muloto kono ekta index theke shuru kore fixed poriman element delete korar por new info add korar jonne use kora hoy*/
/*eita main array ke change kore dey*/
let numArr = [1, 2, 3, 4, 5, 6, 7];
numArr.splice(2, 2, 1000, 69000);
console.log(numArr); /*2 number index theke delete houa start hbe, 2number index shoho next aro 1ta value delete kore new value 1000 and 69000 oikhane replace korbe*/

let numArr1 = [1, 2, 3, 4, 5, 6, 7];
numArr1.splice(1, 0, 45454); /*eita basically new item add korar jonne used hoy. etar mane hocche 1no index e jabo, total 0 ta value delete hbe, orthat kono value e delete hbe nah and 1no index e etka new item add kora hbe*/
console.log(numArr1);

let numArr2 = [1, 2, 3, 4, 5, 6, 7];
numArr2.splice(1, 1); /*it's mean, index 1 e jao and ekta item delete koro*/
console.log(numArr2);
console.log(`Length of the numArr2 is ${numArr2.length}`);

let numArr3 = [1, 2, 3, 4, 5, 6, 7];
numArr3.splice(3, 1, 99999); /*er mane hocche 3no index e jabe, ekta item orthat oi 3no index item ta e delete korbe, and ekta new item add korbe*/
console.log(numArr3);

/*Map method*/
/*
map method and for-each method eder kaj same lgte pare, but not at all.
for-each use kora hoy jodi amra noramally kisu calculate korte chai or normally kisu print korte chai,
kintu map use kora hoy jokhon kono ager array'r value use kore new arekta array create kora hbe tokhon.
*/
let numArr4 = [1, 2, 3, 4, 5, 6];
numArr4.map((val) => {
    console.log(val); /*this will result as like for-each loop*/
});

new_saved_array = numArr4.map((val) => {
    return val;
})
console.log(new_saved_array); // output : [ 1, 2, 3, 4, 5, 6 ]
    /*
    ebhabe "map" use kore 
    onno ekta new ekta variable e 
    jekono decleared array'r man save kora jay
    */

/*Filter method*/
/*Filter method er kaj hocche array'r proti ta indivitual index e jaya er moddhe kisu kisu value filter out kora based on some condition*/
let numArr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
evensFromTheNumArr5 = numArr5.filter((val) => {
    return val % 2 === 0; /*orthat array'r jey value gula 2 diye bhag korar por remainder hishabe 0 dibe only tarai ei funtion theke return hbe*/
})
console.log(evensFromTheNumArr5);

valuesGreaterThan3FromNumArr5 = numArr5.filter((val) => {
    return val > 3; /*only 3 theke boro value jegula shegulai new array te save hbe and print out korbe*/
})
console.log(valuesGreaterThan3FromNumArr5);

/*Find method*/
/*
filter method hocche je je je condition complete korbe she shobaikei nibeh
kintu find hocche ektu tar different
find'r khetre je je condition puron korbe tader shobaike na niye
only prothom ta ke nibe
*/
const playerHeight = [75, 65, 67, 72, 55, 59];
const selected = playerHeight.find(player => player > 70);
console.log(selected); // output : 75 | 72 kintu ashe naih

/*Redure method*/
/*reduce method'r kaj hocche to perform some operations and reduce the array to a single value, for example array'r value gulor jogfol or average*/
let numArr6 = [1, 2, 3, 4];
const sum_of_numArr6 = numArr6.reduce((result, current_value) => {
    return result + current_value;
    /*
    reduce emon ekta method je eita first e array'r prothom value ta ke pick korbe and parameter e dewa first varible e ta store korbe.
    ekhane first value hocche 1 ja "result" variable e stored hoise.
    2nd parameter e store hbe array'r 2nd value ta, ekhane 2 hocche 2nd value ja kina current_value te store hoise.
    then ekhane result+current_value kora hbe and ta abar "result" variable e store hbe and "result" varible'r new man'r sathe abar tar next man ta jog hbe.
    and ebhabei pura array'r jogfol ta count kora hbe
    */
});
console.log(sum_of_numArr6);

const largest_num_of_the_array = numArr6.reduce((prev_val, curr_val) => {
    return prev_val > curr_val ? prev_val : curr_val; /*to ekhane ja hocche je ta holo, prev_val jodi curr_val theke boro hoy tahole prev_val return koro naile curr_val return koro*/
});
console.log(largest_num_of_the_array);

/*includes method*/
/*
ei method'r kaj hoccche je 
array te search kore ekta nirdishto value ke khuje ber korah
jodi khuje pay output hbeh true otherwise output will be false
*/
let friends = ["rifat", "maruf", "siam", "ayon"];
console.log(friends.includes("rifat")); // output : true
console.log(friends.includes("Rifat")); // output : false
console.log(friends.includes("king")); // output : false

/*reverse method*/
/*
eta simply just array ta ke ultaya dey
*/
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.reverse()); // output : [ 6, 5, 4, 3, 2, 1 ]

/****Array Sorting****/
/*
array sorting 2 bhabe hoy
Ascending and descending 
*/

/*ascending sort*/

const randomStrings1 = ['rakib', 'nokib', 'sakib', 'akib', 'dakib', 'anis'];
console.log(randomStrings1.sort()); // output : [ 'akib', 'anis', 'dakib', 'nokib', 'rakib', 'sakib' ]
/*
output e "akib" age ashar karon ki?
why not "anis" comes at first
karon hoccheh
ekhane dekhte hbe je
first okkhor "a" hoileo
porer okkhor ta ki
porer ta hocche ekta name e "k" and arekta te "n"
english Alphabet e "k" age ashe "n" thekeh
er jonneh output e "akib" age print hoiseh
pore "anis"
*/

const randomStrings2 = ['rakib', 'nokib', 'sakib', 'akib', 'anis', 'Anis'];
console.log(randomStrings2.sort()); // output : [ 'Anis', 'akib', 'anis', 'nokib', 'rakib', 'sakib' ]
/*
ager output e thik e kintu "Anis" age ashar karon hocche je
"Anis" er first okkhor uppercase e ase ty
uppercase gula age count kore JS
*/

const randomStrings3 = ['rakib', 'nokib', 'sakib', 'akib', 'Pakib', 'anis', 'Anis'];
console.log(randomStrings3.sort()); // output : ['Anis', 'Pakib', 'akib', 'anis', 'nokib', 'rakib', 'sakib']
/*
ekhane output e age "Anis" then "Pakib" 
ashche
ekhane JS jebhabe sorting kortase ta holo je
age dekhbe string gular moddhe kontar prothoom okkhor uppercase e ase
tader age boshabe 
then dekhbe je uppercase gular moddheh
kon english okkhor ta age ashe
take boshabe
that's why e "Anis" age then "Pakib"
*/

const randomNums = [4, 1, 3, 9, 8];
console.log(randomNums.sort()); // output : [ 1, 3, 4, 8, 9 ]

const randomNums1 = [4, 1, 12, 112, 34, 24, 5];
console.log(randomNums1.sort()); // output : [1, 112, 12, 24, 34, 4, 5]
/*
number sort korar kinda string sort korar formula tei hoy
age dekhbe first okkkhor ta 
jodi 1 hoy tahole sheta age ashbeh
er jonne output e 1 age 
then 112
then 12
same theory as string sort korar
*/

const randomNums2 = [4, 1, 12, 112, 34, 24, 5];
console.log(randomNums2.sort((a, b) => a - b)); // output : [1, 4, 5, 12, 24, 34, 112]
/*
ekhane array ta finally sort hoise correct bhabe 
so ekhane dekha jacche je 
amra sort() function'r bhitore ekta call back function pass korsi
eta basically Custom comparator function bola hoy arki
ekhn ei sort() kibhabe array element gula ke sort kore
eta JS'r internal bishoy 
JS'r V8 engine eta kore thake
internally tar bishoy
shei concept e ar na jai
*/

/*Descending sort*/
const randomNums3 = [4, 1, 12, 112, 34, 24, 5];
console.log(randomNums3.sort((a, b) => b - a)); // output : [112, 34, 24, 12, 5, 4, 1]
/* 
just mone rakhte hbe jeh
descending order e sajaite chaile (b- a) kora lgbeh
*/

/****Spread Operator for arrays****/

/*
spread Operator hocche muloto concat method'r short form,
concat method ke short kore likhar jonnei muloto spread operator ascheh
spread operator ke "..." diye likhte hoyh
*/

const firstRandomArr = [1, 2, 3];
const secRandomArr = [4, 5, 6];

combined = [...firstRandomArr, ...secRandomArr];
/*
er mane hocche,
prothome firstRandomArr ke spread kora hbeh
then secRandomArr ke spread kora hbeh
pore eder ke add kora hbeh ek satheh 
and ekta new variable e store kora hbeh
*/
console.log(combined); // Output : [1,2,3,4,5,6]

combined2 = [...firstRandomArr, "a", ...secRandomArr];
console.log(combined2); // Output : [1,2,3,'a',4,5,6]

combined3 = [...firstRandomArr, "a", ...secRandomArr, "b"];
console.log(combined3); // Output : [1,2,3,'a',4,5,6,'b'];

console.log(...firstRandomArr); // output : 1 2 3
/*
ekhane noticable bishoy hocche je
ei spread method use korleh
array theke ta normal number e convert hbeh
*/

/*Using spread operator to find a maximum value of an array*/
const arrToFindMaxNum = [1, 23, 45, 32, 232, 143, 2422, 243];
const maxVal = Math.max(...arrToFindMaxNum);
console.log(maxVal); // output : 2422


/****Array Destruction****/
/*
array destruction is kinda Higher math's matrix concept
*/
function doubleThem(a, b) {
    return [a * 2, b * 2];
}
const [prothom, ditiyo] = doubleThem(2, 3);
/*
doubleThem() eta 2 ta element shoho ekta array return koreh
line 287 e shei element gula ke jothakrome prothom and ditiyo name dewa hoiseh
then shegula ke console e log kora hoise
exactly ebhabei array destruction korte hoyh
*/
console.log(prothom, ditiyo); // output : 4 6


