







// const person = {
//     name: 'Andrew',
//     age: 36,
//     location:  {
//         city: 'philadelphia',
//         temp: 92
//     }
// };
// const { name ='Anonoymous', age, location } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

const book = {
    title: 'A little prince',
    author: 'Ryan holiday',
    publicher: {
        name: 'Penguin'
    }
}

const { title, author, publicher } = book;
const { name: publisherName = 'self-Published' } = book.publicher;

console.log(`${title} is published by ${name}`);
console.log(publisherName);









//Array desftructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennslyvania', '19147'];
const [, , state = 'New York'] = address;
console.log(`you are in ${state}`);





//Array desftructuring

const item = ['Coffee', '$2.00', '$2.50', '$2.75' ];
const [ coffeeName, s, m, l ] = item;

console.log(`${coffeeName} is for ${m}`);