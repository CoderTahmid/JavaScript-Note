/* Loops in JavaScript */

/*For loops*/
for(let countNumber=1; countNumber<=190; countNumber++){
    console.log("Tahmid");
}
console.log("Loop has ended");

// lastNumber = prompt("Enter the last number : ");
// let sum = 0;
// for(i=1 ; i<=lastNumber ; i++){
//     sum = sum + i;
// }
// console.log("The value of sum is : ",sum);

// factorial=1;
// randomNumber=prompt("This a website for calculating any number's factorial, enter the number wich factorial you want");
// for(i=1 ; i<=randomNumber ; i++){
//     factorial=factorial*i;
// }
// console.log(randomNumber,"! =",factorial);

for(let i=1 ; i<=5 ; i++){
    console.log("i = ",i);
}

/*While loops*/
let i = 1;
while(i<=10){
    console.log("king");
    i++;
} 

/*Do while loops*/
let j=15;
do{
    console.log("Ideal College,Dhanmondi");
    j++;
}while(j<=20);

/*for-of loops*/
/*So in this type of loop we dont need to asing the value of i or also we dont need the limitize the loop here i will gain it's own value and limitize its own self*/
/*We basically use this loop for in strings, to enter a string's every later we use  this loop*/
/*Emon kono ekta string'r every later e enter kora ke bola hoy "Iterate"*/
let fullName="Tahmid Ibne Mofazzol";
for(let i of fullName){
    console.log("i=",i); 
}

/*For in loops*/
/*For in loops are used for arrays and objects*/
/*This loop automatically prints the key of any object*/
let studentInformation={
    studentName : "Tahmid",
    GPA : 3.5,
    age : 20,
    isPAss : true,
};
for(let key in studentInformation){
    console.log("Key = ",key,"value = ",studentInformation[key]);
}





