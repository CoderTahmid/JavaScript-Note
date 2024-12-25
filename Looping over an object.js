/* Looping over an object */

const mobile = {
    brand: 'samsung',
    price: '25000',
    color: 'black',
    camera: '12mp',
    isNew: true
}
for(const prop in mobile){
    console.log(prop); // mobile object'r all key gula ke output hishabe dekhabe
    console.log(mobile[prop]); // all key'r value gula ke output hishabe dekhabe
}