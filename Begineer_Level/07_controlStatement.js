//if else statement
let marcks  = 80;
if(marcks  >= 80){
    console.log("distinction");
} else if (marcks >= 60){
    console.log("passed");
} else {
    console.log("fail");
}

//switch case
let day = 1;
switch(day){ 
    case 1 : console.log("Monday"); 
        break;
    case 2: console.log("Tuseday"); 
        break;
    case 3 : console.log("Wednesday"); 
        break;
    case 4 : console.log("Thurday"); 
        break;
    case 5 : console.log("Friday"); 
        break;
}

//Ternary oprator

/*
Syntax
    Condition ? expression1 : expression2 ;
*/

//Example
let Age = 18;
let result = Age >= 18 ? "U R ELIGIBLE" : " U R NOT-ELIGIBLE";
console.log(result);

//Real Life Example
let isLogin =  false;
let msg = isLogin ? 'Welcome Back' : 'Please Log-in';
console.log(msg);

//Multiple ternary operator
let Vay = 14;
let vishay = Vay < 18 ? 'you are minor' : Vay = 60 ? 'u r adult' : 'u r senior citizene';
console.log(vishay);

