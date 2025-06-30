// how to iterate object 
const person ={
    name:"Divyansh" ,
    age:21,
    hobbies : ["football", "sleeping ","coding "],
    "meri khaas baat" : "codes" 
};

// 1. for in loop 
for (let key in person){
    // console.log(person.key);  //ye  3een baar undefined dega 
    // console.log(person[key]); // ye compute karega kyuki [ ] hai 
    // console.log(`${key}: ${person[key]}`);// ye complete key value pair ke liye 
    console.log(key," : ",person[key] );    // another method 
}

// 2. Object keys 
console.log(Object.keys(person));// ye ek array return karta hai 
// checking 
console.log(typeof(Object.keys(person)));// array ka type toh object hi hota hai 
// checking array hi hai ya nahi 
const yekyahai = Array.isArray(Object.keys(person));
console.log(yekyahai); // true return karega 


// for bhi Object bhi 
for(let key of Object.keys(person)){
    console.log(person[key]);
}
