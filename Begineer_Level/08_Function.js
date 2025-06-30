//Function Declaration  --------------> Hoisting is Allowed
function greet(name){
    return `Hello, ${name}`; 
}
console.log(greet(`"Believe you can and you're halfway there. 
    - Theodore Roosevelt, The only way to do great work is to
     love what you do." - Steve Jobs`));


//Function Expression  --------------> Hoisting is Not Allowed
const People = function(name){
    return `Hello, ${name}`;
}
console.log(People("Rohit Sharma"));
console.log(People("Virat Kohli"));

//Arrow Function  --------------> Hoisting is Not Allowed (ES6)(Shortest Way to Write the function)
const greet4 = (name) => {
    return `hello, ${name}`;
}
console.log(greet("KL Rahul"));
        //      |
        //      |
        //      v
        //(Short way to Write)
    const gree5 = (name, Age) => `Hello, ${name}! Age is ${Age}`;
    console.log(gree5("Rishabh Pant", 27));