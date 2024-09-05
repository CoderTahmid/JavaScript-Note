/*Basic use of "this" keyword*/
/* "this" keyword muloto sobche beshi used hoy jokhon amra class niye deal kori tokhon */
/*
khub e sadharon bhabe 'this' keyword diye ja bujhayh ta holo je 
jodi ami kono class'r moddhe 'this' use korih 
tahole oita oi class'r property ba method ke bujhay
emon ekta ekta kisu
*/

/* use 1 */
class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math');
    }
}
const tapan = new Teacher('Shahjahan Tapan', 'Physics');
console.log(tapan); // output : Teacher { name: 'Shahjahan Tapan', subject: 'Physics' }

const bozlu = new Teacher('Bozlur Rahman', 'Biology');
console.log(bozlu); // output :  Teacher { name: 'Bozlur Rahman', subject: 'Biology' }

/* use 2 */
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`);
    }
    activity(){
        this.sleep();
    }
}

const kodom = new Person('Kodom Ali', 21);
console.log(kodom); // output : Person { name: 'Kodom Ali', age: 21 }
kodom.sleep(); // output : sleeping now Kodom Ali

const badam = new Person('Badam Ali', 23);
console.log(badam); // output : Person { name: 'Badam Ali', age: 23 }
badam.sleep(); // output : sleeping now Badam Ali