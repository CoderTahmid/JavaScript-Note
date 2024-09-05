/*Use in constructor*/
class person1 {
    constructor() {
        this.species = "Homo Sapience";
    }

    eat() {
        console.log("Eat");
    }
}

class engineer1 extends person1 {
    constructor(branch) {
        super();
        this.branch = branch;
        /*
        so ekhane ekta boro concept aseh ei "super" keyword likha nia
        ekhane muloto dekha jacche je amra child class e ekta constructor create korsi
        child class theke amra ekta constructor ke call korte chacchi
        kintu eta ekta child class houay ekhan theke directly kono constructor ke call kora jabe na
        child class'r constructor ke call korte hoile age parent class'r constructor ke call korte hbeh
        so ei parent class'r constructor ke call korar jonnoi muloto ei "super" used hoy
        */
    }

    work() {
        console.log("Solve problem, Build Something");
    }

    eat() {
        console.log("Eat healthy foods");
    }
}
let engObj1 = new engineer1("Mechanical, Computer Science and Engineering");
console.log(engObj1);