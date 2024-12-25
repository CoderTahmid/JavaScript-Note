/***Local Storage***/

/*
About local storage

dhorlam ami kono ekta website e dhuke
sekhane login na korei kichu change korlam
for example ami koyekta item select kore rakhlam je pore kinbo 
shei website e jodi ami abar 1/2 week pore jai ami dekhbo je
ogulai abar ase
mane jei koyta item save korsi ta e aseh

to amar ei data gula kothay thakeh?
jodi ami sekhane login kortam tahole bola jeto ja
server e amar name e thaka part e aseh
but ami to login kori naih
so ei khetre data thake hocche local storage e
ja muloto amar PC ba browser ei thakeh

ei data gulo key(variable kinda) and value akare thakeh
website'r inspect element e giye application section e gele ei key and value gula dekha jay
*/

/*Getting an item from local storage*/
console.log(localStorage.getItem('drinks'));
    /*
    well ei code ta console e water print korbe
    and eta run korar jonne ektu different way te kaj korte hbeh
    application section e key te drinks set kore nite hbe manually 
    and tar value te manually water set korte hbeh

    and emon item get korar jonne jei name ta dibo
    ta always string ei dite hbeh
    just like
    'drinks'
    */

/*Setting an item in local storage*/
console.log(localStorage.setItem('phone', 'samsung'));
    /*
    ei setItem() ta 2 ta parameter nibe
    ekta hocche key and arekta nibe value
    ei code'r output hishabe key show korbe 'phone' and tar value show korbe 'samsung'

    amra jodi setItem er parameter hishabe array or object dei 
    tahole sheta string hishabei set hbeh
    array or object ke directly set kora jabe nah   
    */

/*Removing an item from local storage*/
console.log(localStorage.removeItem('money'));
    /*
    local storage e thaka 'money' item ta ke remove kore dibe ei line of code
    */