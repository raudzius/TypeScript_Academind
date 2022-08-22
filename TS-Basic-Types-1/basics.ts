const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) console.log(phrase + result);
    return result;
};

let num1: number;
num1 = 5;
const num2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';

add(num1, num2, printResult, resultPhrase);

// const person: {
//     name: string;
//     age: number;
// } = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = 'AUTHOR'
}

const person = {
    name: 'Mykolas',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}