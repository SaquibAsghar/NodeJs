const fs = require('fs')

const writeF = fs.writeFile('./test.txt', "This file is created using writeFile method present in 'fs' module of NodeJS.", ()=>{})

console.log(writeF)