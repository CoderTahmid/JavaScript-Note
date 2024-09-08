let numArr4 = [1, 2, 3, 4, 5, 6];
numArr4.map((val) => {
    console.log(val); /*this will result as like for-each loop*/
});

new_saved_array = numArr4.map((val) => {
    return val;
})
console.log(new_saved_array);