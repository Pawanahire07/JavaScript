 // FOR LOOP
    /* ----Syntex-------
    for (initializtion; condition; increment/decrement;){
        code to be excuted
    }*/

//Example 
for (let i =0; i < 20; i++){
    console.log("Pawan ahire", i)
}

 // for in loop
    /* ----Syntex-------
    for (variable in object){
        code to be excuted
    }*/

//Example
let person = {fname: "Shubham", lname: "Pawar", Age: 24};
for (let key in person){
    console.log(key + " : "+ person[key]);
}

 // for of loop
    /* ----Syntex-------
    for (variable of iterable){
        code to be excuted
    }*/

//Example
let fruit = ["apple", "banana", "cherry"];
for (let fruits of fruit){
    console.log(fruits);
}

    //Real Example
    const Student = [
        {name:"shubham", age:22},
         {name:"Pawan", age:24},
          {name:"Omkar", age:19}
    ];

    for (let std of Student){
        console.log(std.name + " is " + std.age + " years old."); 
    }


