const fs = require("fs");

try {
	const read_file = fs.readFileSync("test.txt", {
		encoding: "utf8",
		flag: "r",
	});
	console.log(read_file);
} catch (error) {
    let err_msg = ""
    if (error.errno === -4058) {
        err_msg = "No file found to read."
        return console.log(err_msg);  
    }
    return err_msg = error
	
}
