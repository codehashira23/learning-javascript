
//objects are reference type , for real world application , stores key value pair , dont have index 
const person ={
    name:"Divyansh" ,
    age:21,
    hobbies : ["football", "sleeping ","coding "]// array bhi add ho sakta hai 
};
console.log(person.name);//accessing name which is the person object property  
console.log(person.age); //to access properties we can use dot operator 

// how to add key value pairs 
person.gender = "male"; 
console.log(person); //we cam see new key value pair added 
