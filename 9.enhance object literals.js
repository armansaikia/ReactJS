// Enhanced Object Literals:

//     define fields with variable assignment of the same name
//     define functions
//     define dynamic (calculated) properties


// Template Strings:
//     `string ${variableName} ${variableName} string`;


console.log('Total Amount: ', totalAmount);

const firstName = 'Harish';
const num = 20;
const userInfo = {
    firstName,
    ['last' + '_' + 'name'+ '_' + 10]: 'KL',
    [`last_name_${num}`]: 56,
    getFirstName() {
        return 'FirstName: ' + this.firstName;
    }
}

console.log(userInfo);

console.log(userInfo.getFirstName())