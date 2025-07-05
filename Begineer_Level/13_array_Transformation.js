//Arrya tarnsformation

//forEach()
let fruits = ["Apple", "Banana", "cherry", "orange"];
fruits.forEach((item, index) => {
    console.log(`Item is ${item} And Index is the ${index}`);
});

//map()           ------------------return the new array not the original
let no = [1,2,3,4,5,6,7,8];
let diuble = no.map((num) =>  {
    return num * 2
});
console.log(diuble);
console.log (no);

//Filter()
let number = [1,3,5,8,10];
let filterNo = number.filter((num) => {
    return num % 2 === 4;
});
console.log(filterNo);
console.log(number);


//Find() ---------------------------------condition not that time undefined (return new array)
let num1 = [3, 5, 9, 12, 56];
let current = num1.find((num) => {
    return num === 34;
});
console.log(current);
console.log(num1);

//indexOf()---------------------------- cnd not meet that time return -1
let fruit = ["Apple", "Banana", "cherry", "orange"];
let index = fruit.indexOf("chwerry", 3);
console.log(index);


//sort()
let num = [3, 7, 3, 67, 8, 9, 8];
let sortNum =  num.sort();   //------it not work poper
console.log(sortNum);

let sortNum2 = num.sort((a,b) => a-b); // -----> it work poper, bydefault Ascending order
console.log(sortNum2);