//find--------------------->IT checks for every single statements and returns TRUE/FALSE (LOGICAL OR OPEARATOR)


const users = [
    {
        name: 'Bhargav',
        city: 'Hyderabad',
        age: 26
    },
    {
        name: 'Jayanth',
        city: 'Hyderabad',
        age: 25
    },
    {
        name: 'Lokesh',
        city: 'Bangalore',
        age: 23
    },
    {
        name: 'Jagadeesh',
        city: 'Bangalore',
        age: 16
    },
    {
        name: 'Ganesh',
        city: 'Mumbai',
        age: 17
    }
];

const isEveryUser = users.every(function(user) {
    return user.age > 18;
});

console.log(isEveryUser);