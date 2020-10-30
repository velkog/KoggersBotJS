require('dotenv').config(); 

const Discord = require("discord.js");
const client = new Discord.Client();

const POGGERS = "710012265394470982";

client.on("ready", () => {
    console.log("KoggersBot ready!");
});

client.on("message", message => {
    if (message.author.bot) return;
    if (!message.content || message.content === 0) return;
    const content = message.content.toLowerCase();

    if (content.includes("velkog")) {
        try {
            message.react(POGGERS);
        } catch {
            message.react("😍");
        }
        return;
    }

    if (message.length > 10 || message.length === 0) return;
    for (var i = 0; i < content.length; i++) {
        if (content.charAt(i) !== '^') return;
    }
    message.channel.send(content);
});

client.login();