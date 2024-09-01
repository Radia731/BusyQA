let people = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
];


// let filteredPeople = people.map(function (item) {
//     return item.name ;
// });

let filteredPeople = people.map(item => item.name);
console.log(filteredPeople);
