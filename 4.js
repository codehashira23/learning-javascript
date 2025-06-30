// how to iterate object 
const person ={
    name:"Divyansh" ,
    age:21,
    hobbies : ["football", "sleeping ","coding "],
    "meri khaas baat" : "codes" 
};

// 1. for in loop 
// 2. Object keys 
for (let key in person){
    console.log(person.key);  //ye  3een baar undefined dega 
    console.log(person[key]); // ye compute karega kyuki [ ] hai 
    console.log(`${key}: ${person[key]}`);// ye complete key value pair ke liye 
 }
