module.exports = command = [
	{
		name: "help",
		shortdiscription: "",
		discription: "shows the how each command works",
		args: [
			{
				name: "command",
				discription: "the command you want to use",
				type: "string"
			}
		],
		flags: {
			"short": {
				shorthand: "s",
				discription: "Force's the command to give the short vertion of the help",
				type: "flag"
			},
			"command": {
				shorthand: "c",
				discription: "input the command you want to use (overides the arg if present)",
				type: "string"
			}
		},
		examples: [">help", ">help -c help"],
		alias: ["h"],
		_function: null,
	}
]