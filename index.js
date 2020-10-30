require('dotenv').config(); 

const Discord = require("discord.js");
const client = new Discord.Client();

const POGGERS = "710012265394470982";

client.on("ready", () => {
    console.log("KoggersBot ready!");
});

client.on("message", message => {
    if (message.author.bot) return;
    const content = message.content.toLowerCase();
    // Velkog React
    if (content.includes("velkog")) {
        try {
            message.react(POGGERS);
        } catch {
            message.react("😍");
        }
    }
    // Carrot Replies
    if (message.length > 10) return;
    for (var i = 0; i < content.length; i++) {
        if (content.charAt(i) !== '^') return;
    }
    message.channel.send(content);
});

client.login();