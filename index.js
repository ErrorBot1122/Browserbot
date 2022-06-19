// Username for alernos

const DJS = require("discord.js");

require("dotenv").config();

const aternos_username = "browserbot"

const prefix = ">"

const commands = [
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

function parseCommand(messegeContent) {
	messegeContent = messegeContent.trim()
	
	if (messegeContent.startsWith(prefix)) {
		const [cmd] = messegeContent.substring(1).split(" ")

		cosnsole.log(cmd)
		
		flagIndex = messegeContent.indexOf("-")

		if (flagIndex != -1) {

			args = messegeContent.substring(1, flagIndex).split(" ");
			
		}
	}
}

const client = new DJS.Client({
	intents: [
		DJS.Intents.FLAGS.GUILDS,
		DJS.Intents.FLAGS.GUILD_MESSAGES
	]
});

client.once("ready", () => {
	console.log("The bot is activated!");
});

client.on("messageCreate", message => {
	console.l0g(parseCommand)
	/*
	if (message.content.startsWith(prefix)) {
		const messegeInner = message.content.substring(1)

		console.log(messegeInner)
		
		if (messegeInner == "test") {
			message.reply("test 123")
		}
	}*/
});

client.login(process.env.TOKEN);
































/*
// Require puppeteer extra and puppeteer stealth
const puppeteer = require('puppeteer-extra')
const pluginStealth = require('puppeteer-extra-plugin-stealth')

const username = process.env['USERNAME']
const password = process.env['PASSWORD']

// Require our hcaptcha method
const { hcaptcha } = require('puppeteer-hcaptcha');

// Tell puppeteer to use puppeteer stealth
puppeteer.use(pluginStealth());

function getServerFromList( servers, value, type = "title" ) {
	let returnServer;
	
	servers.forEach(server => {
		
		if (value == server[type]) {
			returnServer = server
			return
		}
	})	

	return returnServer
}

//function getServersFromList( servers, value, type = "id" ) {
//	let returnServers = [];
	
//	servers.forEach(server => {
//		if (value == server[type]) {
//			returnServer.push(server)
//		}
//	})	

//	return returnServer
//}

(async () => {
	// Instantiate a new browser object
	// Ignore errors associated to https
	// Can be headless but for example sake we want to show the browser
	// Set your desired arguments for your puppeteer browser

	console.log("Loading Browser...")

	// Open the browser
	const browser = await puppeteer.launch({
		ignoreHTTPSErrors: true,
		headless: false,
		devtools: true,
		args: [
			"--disable-dev-shm-usage",
			"--no-sandbox",
			'--user-data-dir="/tmp/chromium"',
			"--disable-web-security",
			"--disable-features=site-per-process"
		],
	});

	console.log("\nOpening Page(s)...")

	console.log("	Getting Pages...")

	// Get the defualt page
	const [page] = await browser.pages();

	console.log("	Going to Alernos...")
	
	// open alternos.org
	await page.goto('https://aternos.org/go/')

	console.log("	Removing defult timeout...")
	
	// Remove the page's default timeout function
	await page.setDefaultNavigationTimeout(0);

	console.log("\nChecking Login... ")

	console.log("	Getting page url...")

	// Get the current url (for checking if it rederected)
	const url = await page.url()

	console.log(`	Did it rederect? ${(url == "https://aternos.org/go/") ? "Yes" : "No"}`)

	// CCheck if i has rederected
	if (url == "https://aternos.org/go/") {
		console.log("	Loging In...")	
	}
	else console.log("	Skiping...")

	
	console.log("\nOpening Server... ")

	console.log("	Waiting for server list...")
	await page.waitForSelector("div.servers")

	console.log("	Grabbing Servers...")
	const servers = await page.evaluate(() => {

		const username = "browserbot";
		
		const current_servers = Array.from(document.querySelector("div.servers").children)
		let returnData = []

		current_servers.forEach((serverElt, i) => {
			const info = serverElt.querySelector(".server-body .server-infos")

			const title = info.querySelector(".server-title .server-name").innerHTML
				.trim();
			
			const id = info.querySelector(".server-details .server-id").innerHTML
				.trim()
				.slice(1, -1);
			
			const software = info.querySelector(".server-details .server-software").textContent
				.trim();
			
			const ownerElt = info.querySelector(".server-title .server-by-user")
			const owner = ( ownerElt ) ? ownerElt.textContent.trim().slice(3, -1) : username 

			returnData.push({ title, id, software, owner, i })
		})

		return returnData
	})

	console.log("	Picking Server...")
	const server = getServerFromList(servers, "superfriendly", "title")
	
	console.log("	Opening Server...")
	await page.click(`div.servers .server:nth-child(${server.i+1})`)

	console.log("	Waiting for page-load...")
	await page.waitForNavigation()
	
	console.log("\nStarting Server")

	console.log("	Waiting for AD popup")
	await page.waitForSelector("#adngin-Leaderboard_Adhesion-0-adhesive-close")
	await page.waitForTimeout(2000)

	console.log("	Closing AD")
	await page.click("#adngin-Leaderboard_Adhesion-0-adhesive-close")
	
	console.log("	Waiting for start button...")
	await page.waitForSelector("#start")

	console.log("	Clicking Start...")
	await page.click("#start")

	
	// Call hcaptcha method passing in our page
	//console.log("Solving Captcha...")
	
	//await hcaptcha(page);

	// Your page is ready to submit. Captcha solving should be the last function on your page so we don't have to worry about the response token expiring.
	//await page.waitForSelector("#checkbox")
	
	//await page.click("#checkbox");

})();
*/