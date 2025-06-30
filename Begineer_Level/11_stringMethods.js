//String Mathods

// Length
let str = "Good Morning";
console.log( `string length is =: ${str.length}`);                //length

//Upper And LowerCase
console.log(`${str} in uppercases is ${str.toUpperCase()}`);      //Uppercase
console.log(`${str} in the Lowercase is  ${str.toLowerCase()}`);  //Lowercase

//charcter find
console.log(`${str} 3 character is the ${str.charAt(3)}`);  // chatcter provide that index

//indexof()
console.log(`${str.indexOf("M")}`);                       //index no provide 

//includes()
console.log(`${str.includes("Morning")}`);                     //provide the True/False

//Slice Method / Substring Differenc3

//real life example (Slice)
const cardNumber = "1234 5678 9101 1123";
const lastFour = cardNumber.slice(-4);
console.log(`**** **** **** ${lastFour}`); //**** **** **** 1123

const fileName = "invoice.pdf";
const addOne = fileName.slice(fileName.lastIndexOf('.') + 1);
console.log(addOne); //pdf


//replace
let str6 =  "Shubham Ahire"
console.log(`${str6.replace("Shubham", "Pawan")}`);  //replace the 

//split
let name6 = "html,css,javascript";
console.log(name6.split(","));  //used for separate 

//trim
let str8 = "   Hello   ";
console.log(str8.trim());     //remove the spaces

//concat()
let firstNmae = "Pawan";
let lastName = "Ahire";
console.log(firstNmae.concat( lastName) );