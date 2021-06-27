var inquirer = require("inquirer");

const questions = [
	{
		type: "input",
		name: "first-name",
		message: "What is your first name?",
	},
	{
		type: "rawlist",
		name: "city",
		message: "Where do you live?",
		choices: ["Delhi", "Mumbai", new inquirer.Separator(), "Bangalore"],
		default: 2,
		filter(val) {
			return val.toUpperCase();
		},
	},
	{
		type: "password",
		name: "userPassword",
		message: "Enter Your password ",
		mask: false,
	},
	{
		type: "editor",
		name: "writeFile",
		message: "Write your file",
	},
];

const askQuestion = async () => {
	try {
		const answers = await inquirer.prompt(questions);
		console.log(`Hi!, ${JSON.stringify(answers, null, "")}`);
	} catch (error) {
		console.log(error);
	}
};

askQuestion();
