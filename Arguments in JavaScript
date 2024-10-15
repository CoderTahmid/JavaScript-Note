/* Arguments in JavaScript */

function sum(a, b, c) {
    console.log(arguments);
        /*
        output : [Arguments] { '0': 45, '1': 89, '2': 12, '3': 34, '4': 45, '5': 43 }
        ekhahen ei 'arguments' keyword diye muloto ei function ke call korar shomoy jei
        argument gula pass kora hoise shegula dekha jay arki

        output e jeita ashche, sheta ke array like object bola hoy
        karon ekhane every index e alada alada value aseh
        */
    console.log(arguments[4]);
        /*
        output : 45
        mane ekhane argument'r 4th index e thaka value ta ashbe arki
        */
    console.log(typeof arguments); // output : object
    console.log(...arguments); // output : 45 89 12 34 45 43
    console.log([...arguments]); // output : [ 45, 89, 12, 34, 45, 43 ]
    const result = a + b + c;
    return result;
};

console.log(arguments);
const total = sum(45, 89, 12, 34, 45, 43); // ekhane ei '45', '89', '12' hocche argument