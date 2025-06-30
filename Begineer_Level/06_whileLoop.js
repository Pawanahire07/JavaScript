//While loop

/*Syntex
    while(condition){
        code black excuted
    } */

//Example
let i = 0;
while(i <= 6){
    console.log(i);
    i++;
}

//Do-While loop

/*Syntex
    do{
        code black excuted
    }while (condition) */

//Exmaple
let j = 7;
do{
    console.log( j );
    j++;
} while( j <= 9 )


    //Real life example
let Password = " ";
let corrctPass = "Admin";
do{
    Password = prompt("Enter Your Passwors : ");
}while (Password != corrctPass);
console.log("Permission Grant....");