const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();

// CONFIG
const token = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Your Discord BOT Token
const url = 'http://localhost/web/index.php'; // Your FiveM Query URL

client.login(token);

client.on('ready', () => {
	console.log(`\n* Session started on ${client.user.tag} *\n`);
	startBot();
});

function startBot() {
	fetch(url)
		.then(response => response.text())
		.then(data => {
			client.user.setPresence({ status: 'ready' });
			client.user.setActivity(`${data}`, { type: 'PLAYING' });
		})
};

setInterval(startBot, 5 * 1000);

