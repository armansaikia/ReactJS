//Rest Operator- It is used to store rest of the arguments passed to function

// Syntax: 

// function functionName(arg1,arg2,...restValues){

// }

// functionName(value1,value2,value3,value4);  value 3 n value 4 will store in restValues.It will create one empty array and extra will add there



// Rest Opertor: Parameter should be in last



// function displayNums(a, b, ...extraParams) {
//     console.log(a, b, extraParams);
// }
// ​
// displayNums(10, 32, 78, 55, 23);



​
const users1 = ['Varun', 'Karthik', 'Lokesh'];
​
const users2 = ['Ganesh', ...users2, 'Pradeep'];
​
console.log(users2);
​