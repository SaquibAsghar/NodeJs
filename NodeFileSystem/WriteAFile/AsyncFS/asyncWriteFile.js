const fs = require('fs')

fs.writeFile('./test.txt', "This file is created using writeFile method present in 'fs' module of NodeJS.", ()=>{return console.log("File write completed.")})
