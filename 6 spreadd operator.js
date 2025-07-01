// spread operator - array me aur object me 

const array1 = [1,2,3];
const array2 = [4,5,6];


const newArray = [...array1];
const newArray2 = [...array1,array2]; // spread operator ke bina 
const newArray3 = [...array1, ...array2];// spread operator ke saath maze hai 
console.log(newArray);
console.log(newArray2);
console.log(newArray3);

// integer pe spread operator kaam nahi karta kyuki vo iterable nah ihote solution hai ki string me hi paas karo 

const Ar= [..."12345678"]; 
//vs 
// const Ar2  = [...123456789 ];// TypeError: 123456789 is not iterable
console.log(Ar);

 