const fs = require('fs')

try {
    let r_line = fs.readFileSync('../files/sync/note.text', {encoding: 'utf8', flag:'r'})
    console.log(r_line)
} catch (error) {
    if(error.errno === -4058){
        return console.log("No such file or directory found.")
    }
    return console.log(error)
}