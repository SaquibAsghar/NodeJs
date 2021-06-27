const chalk = require('chalk')
const fs = require('fs')

fs.writeFile('../files/async/asyncNote.text', "This file is created using writeFile method present in 'fs' module of NodeJS.", ()=>{return console.log(chalk.inverse.greenBright("File write operation completed."))})
