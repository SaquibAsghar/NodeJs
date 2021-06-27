const fs = require("fs");

try {
	fs.writeFileSync(
		"notes.text",
		"This note file is created using writeFileSync method present in 'fs' module of NodeJs.\n",
		{ encoding: "utf8", flag: "a" }
	);
} catch (error) {
	console.log(error);
}
