let myarray = [1,2,3,4,5,6];
console.log(myarray);
let [value1 ,value2 , ...restArray] = myarray;
console.log(value1);
console.log(value2);
console.log(restArray);