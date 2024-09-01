

// ES6
let numbers = [1, 2, 3, 4, 5];

var findOddNumber = function(num) {
    if(num % 2 !== 0) {
        return num;
    }
}

numbers = numbers.filter(num => num % 2 !== 0);

console.log(numbers); // Output: [1, 3, 5]



