const fs = require("fs");

try {
	fs.writeFileSync(
		"../files/sync/notes.text",
		"This note file is created using writeFileSync method present in 'fs' module of NodeJs.\n",
		{ encoding: "utf8", flag: "w" }
	);

	fs.appendFileSync(
		"../files/sync/notes.text",
		"This line is appended using appendFileSync method present in 'fs' module of NodeJS.\n"
	);
} catch (error) {
	console.log(error.message);
}
