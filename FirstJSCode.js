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
console.log(glass);