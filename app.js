'use strict'

const fs = require('fs');

const gender = ['F', 'M'];
const  maleNames = ['Janusz', 'Mariusz', 'Dariusz', 'Ireneusz', 'Tadeusz'];
const femaleNames = ['Helena', 'Krystyna', 'Mariola', 'Ilona', 'Halina'];
const lastName = ['Kowalski', 'Konarski', 'Jeziorski', 'Morski', 'Nowak', 'Kwiatkowska'];

const randChoice = function(arr) {
    return arr[Math.floor(Math.random()*arr.length)]; // picks index of given array
};

const people = [];

for (let i = 0; i <= 20; i++) {
    const randomPerson = {};
    randomPerson.gender = randChoice(gender);
    randomPerson.firstName = randomPerson.gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
    randomPerson.lastName = randChoice(lastName);
    randomPerson.age = Math.floor(Math.random()*(78-18+1)+18);
    randomPerson.email = `${randomPerson.firstName}.${randomPerson.lastName}@gmail.com`;

    people.push(randomPerson);
}

console.log(people);

const myJSON = JSON.stringify(people);

fs.writeFile('people.json', myJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved');
});