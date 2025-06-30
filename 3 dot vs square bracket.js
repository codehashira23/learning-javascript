// diff btw dot and bracket 
const person ={
    name:"Divyansh" ,
    age:21,
    hobbies : ["football", "sleeping ","coding "],
    "meri khaas baat" : "codes" 
};
// spaces allowed nahi 
//
console.log(person["meri khaas baat"]);// "" me paas akrke hoga 
// how to add another key to our person object 
const key = "email";
person[key] = "divyanshjaiswal314@gmail.com";  // yaha pe key variable compute hui aur uski jagah email a gayi 
console.log(person);
// worng way 
person["key"] = "divyanshjaiswal314@gmail.com";  // yaha pe key variable compute nahi hui
console.log(person);



