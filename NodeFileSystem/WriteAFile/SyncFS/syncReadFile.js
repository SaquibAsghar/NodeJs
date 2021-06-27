const fs = require('fs')
const chalk = require('chalk')

try {
    let r_line = fs.readFileSync('../files/sync/notes.text', {encoding: 'utf8', flag:'r'})
    console.log(`\n${chalk.rgb(100, 250, 70)(r_line)}`)
} catch (error) {
    if(error.errno === -4058){
        return console.log(chalk.red("ERROR: No such file or directory found."))
    }
    return console.log(chalk.red(error))
}