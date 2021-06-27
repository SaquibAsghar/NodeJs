const chalk = require('chalk')
const fs = require('fs')

fs.readFile('../Files/async/asyncNote.text', (err, data)=>{
    if (err){
        if (err.errno === -4058)
        return console.log(chalk.inverse.red("ERROR: No such file or directory found."))
    }
    console.log()
    return console.log(chalk.inverse.greenBright(data))
})