//Rest Operator- It is used to store rest of the arguments passed to function

// Syntax: 

// function functionName(arg1,arg2,...restValues){

// }

// functionName(value1,value2,value3,value4);  value 3 n value 4 will store in restValues.It will create one empty array and extra parameter we are calling in function will add there



// Rest Opertor: Parameter should be in last



// function displayNums(a, b, ...extraParams) {
//     console.log(a, b, extraParams);
// }

// displayNums(10, 32, 78, 55, 23); // 10,32,[78,55,23] ------------> extras will be store in array




// Spread Opearator-- It is used to extract each value present array/object / copying data from one to another

//syntax :

// const obj ={
//     key1: value1,
//     key2: value2,
//     key3: value3,
// }

// {..obj,key4: value 4,key5: value5}


// same in case of array------------>

// const arr =[value1,value2,value3]

// [...arr,value4,value5,value6]

​
// const users2 = ['Varun', 'Karthik', 'Lokesh'];
// ​
// const users3 = ['Ganesh', ...users2, 'Pradeep']; //copying data from users 2 and add the new one
// ​
// console.log(users3);


//In case of object same thing happens-------------------

const userInfo = {
    firstName: 'Jagadeesh',
    lastName: 'G',
    location: 'Hyderabad'
};
​
const eUserInfo = {...userInfo, email: 'jagadeesh@gmail.com', phone: 9032325435};
​
console.log(eUserInfo);