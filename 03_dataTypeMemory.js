//Heap And Stack Memory

//01 Heap Memory 
let person1 = {
    name : "pawan",
    age : 24,
    City : "Pune"
}

let Person2 = person1

Person2.name = "Shubham",
console.log(person1.name);  //dynamicallly changed (Heap)
console.log(Person2.name);


//stack memory
let a = 10;
let b = a;

b = 20;
console.log(a); //static allocation (Unchanged) (stack)
console.log(b);
