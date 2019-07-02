'use strict';

const fs = require('fs');
const faker = require('faker');

let file = process.argv[2];

let myFunction = (err, data) => {
    if (err) { throw err; }
    console.log(`Before:`, data.toString());
    
    let randomNum = faker.random.number();
    fs.appendFile(file, randomNum, (err) => {
        if (err) { throw err; }
        console.log(`${randomNum} was added to ${file}`);
    })
    fs.readFile(file, (err, data) => {
        if (err) { throw err; }
        console.log(`After:`, data.toString());
    })
}

//initial console log is undefined if I don't read here
fs.readFile(file, myFunction);
