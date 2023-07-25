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
​
​
function sortUsers(data = [], order = 'asc') {
    if (order === 'asc') {
        return data.sort((a, b) => {
            if (a.name < b.name ){
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        });
    } else {
        return data.sort((a, b) => {
            if (a.name < b.name ){
                return 1;
            } else if (a.name > b.name) {
                return -1;
            } else {
                return 0;
            }
        });
    }
}
​
let result = sortUsers(users, 'desc');
​
console.log(result);
​
// sortUsers(users, 'desc');