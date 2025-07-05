//Array

let arr = ["Pawan", 24 , false, "Ahire"];
console.log(arr[0]);
console.log(arr[3]);

//redefined
arr[3] = "Shubham";
console.log(arr);
console.log(arr.length);


//Array Method


//  1. PUSH
let names = ["Pawan", "Aditya", "Dishank"];
console.log(names);

names.push("Omkar");
console.log(names);    // --------------- add (push) at the end

names.push("Sarvesh");
console.log(names);     // --------------- add (push) at the end



//   2. POP
let finalnames = names.pop();    //------------remove the last item
console.log(names);

let finalname = names.pop();     //------------remove the last item
console.log(names)



// 3. SHIFT
console.log(names);
names.shift();             //------remove the first item in the array
console.log(names);

names.shift();             //------remove the first item in the array
console.log(names);


// 4. unshift
names.unshift("Pawan");
console.log(names);
names.unshift("Omkar", "Sarvesh");
console.log(names);