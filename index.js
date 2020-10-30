// This line MUST be first, for discord.js to read the process envs!
require('dotenv').config(); 
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("KoggersBot ready!");
});

client.on("message", message => {
    var carrotOnly = true;
    const content = message.content;
    if (message.author.bot) return;
    if (message.length > 10) return;
    for (var i = 0; i < content.length; i++) {
        if (content.charAt(i) !== '^') {
            carrotOnly = false;
            break;
        }
    }
    if (carrotOnly) message.channel.send(content);
});

client.login();