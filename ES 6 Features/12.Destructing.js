//Destructing of Object/array-----------------> Extracting each value of object/array and storing it in variables

// Object:

// const obj = {key1: value1 , key2: value2 , key3: value3};

// const variable1 = obj.key1;
// const variable2 = obj.key2;
// const variable3 = obj.key3;

// earlier we use to store like this 

// In case of object destruction------------------>

// const{variable1,variable2,variable3} = {key1:value,key2: value2,key3:value3};


//ARRAY:

// const arr = [value1,value2,value3,value4]

// const[variable1,variable2,variable3,variable4] = arr; //Destructing in array

//EXAMPLE--------------------->

// const mobileNo. = 9365840250; // mobile number is comming from backend like this 

// const formatedMobileNo. = '+91 9365 402 50'// but for the user we want to show like this

// // we need to change the above format to the below format--------------------->
// // so we will use destructing concept by converting the above no. to array, first we will use split method

// const mobileNo. = 9365840250; 

// console.log (mobileNo.toString().split(" ")); //output - [9,3,6,5,8,4,0,2,5,0]

// //Next we will use template string to convert to below format----------------->

// const formatedMobileNo. = '+91 9365 402 50'



//-------------------------------------------------------------------------------------------------------------------
//In case of array-------------

// const mobileNo = 9365840250;
// console.log(mobileNo.toString().split(" ")); //[ '9365840250' ]

// const [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10] = mobileNo.toString().split("");

// const formattedMobileNo = `+91 ${n1}${n2}${n3}${n4} ${n5}${n6}${n7} ${n8}${n9}${n10}`;

// console.log(formattedMobileNo); //+91 9365 840 250



//In case of Object--------------------------------->

const mobileNo = 9876543210;

function formatedMobileNo(mobileNo){

    const [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10] = mobileNo.toString().split("");

    const formattedMobileNo = `+91 ${n1}${n2}${n3}${n4} ${n5}${n6}${n7} ${n8}${n9}${n10}`;
    
    return formattedMobileNo;
   

}
console.log(formatedMobileNo(mobileNo));

