// arguments object can be used to access parameters of function
function testArgument(p1, p2 = "default", p3) {
    for (const arg of arguments) {
        console.log(arg);
    }
    console.log("Arg: " + p1 + p2 + p3)
}

// rest operator
function restSum(n1, n2, n3) {
    return n1 + n2 + n3;
}

const numbers = [1, 2, 3];
console.log(restSum(numbers)) // 1,2,3undefinedundefined
console.log(restSum(...numbers)) // 6

// `rest` return an array of arguments
function sum(...rest) {
    return rest.reduce((acc, curr) => acc + curr, 0);
}

// destructuring object
const { id, ...n } = { id: 1, title: 'js', author: 'James' };

// Destructuring first element of array
function arrayAdd([x1], [x2]) {
    return x1 + x2
}

// Array destructuring
const a = [5, 3]
const b = [2, 3]
const [x1] = a;
console.log(x1)

const person = [
    { id: 1, name: 'Suda' },
    { id: 2, name: 'Surapong' },
    { id: 3, name: 'Somchai' }
]

// Combine destructuring of Array and Object `,` comma mean skip
function get3thPersonName([, , { name }]) {
    // skip 2 object and destructuring the person to only name
    return name
}

const [p1, ...rest] = person
console.log(rest)
console.log(p1)

// console.log(getPersonName(person))