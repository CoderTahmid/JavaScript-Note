const friends = ['tom', 'john', 'rifat', 'bushra'];
const lengths = friends.map(frnd => frnd.length);
console.log(lengths);

const firstLetter = friends.map(firstOkkho => firstOkkho[0]);
console.log(firstLetter);

let cities=["Dhaka","Tangail","Mumbai","Ghatarchar"];
cities.forEach(city_func=(city, i, arr) => {
    console.log(city.toUpperCase(), i, arr); /*for-each loop's first parameter hoy array'r value gulo, 2nd parameter hoy value gulor index, 3rd parameter hoy array nijei*/
});