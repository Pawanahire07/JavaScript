//Scope

//Global Scope
let name = "Everyone.....Good Morning";
function greet(){
    console.log("Hey, " + name ); //------------ inside function call also
}
console.log("Hey, " + name );     //------------ outside the function call also 
greet();

//Local Scope
function greet1(){
    let name = "Pawan Ahire";
    console.log("Hey, " + name );  //------------ inside function call only
}
console.log("hello, " + name );      //------------ Outside function not allowed (error)
greet1();

//Block Scope ------> it is not applicable for var (inside the currly brackets)
   {
    let a = 30;
    const b = 600;
        console.log(a+b);
   }
//  console.log(a+b);     //-------     not allowed (error)


/*---------------------------------------------------------------------------
                            hoisting
--------------------------------------------------------------------------*/


//var

// var a = 10;
// console.log(a);

var a; //------- whem excute on v8 engine (crome and node)
console.log(a); //undefined(output)
a = 10;


//Let and Const
let c = 20;
console.log(c);//-------(reference error at time hoisting)
// let c = 20;

//function hoisting -------------> Fully hosted (Easy Availble)
greet();               //------------->hoisting
function greet(){
    console.log("Hell0");
}
greet(); //hello

//Arrow Function       ------> Arrow function not allwoed the hoisting
// toGreet();             //----------hoisting(Error)
const toGreet = () =>{
    console.log("Hoisting not allowed in the Arrow function");
};
toGreet();


// Function Expression      ------>  function expression not allwoed the hoisting
// toHand();             //----------hoisting(Error)
const toHand = () =>{
    console.log("Hoisting not allowed in the function expression");
};
toHand();




