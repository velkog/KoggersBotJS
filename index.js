require('dotenv').config(); 

const Discord = require("discord.js");
const client = new Discord.Client();

const POGGERS = "710012265394470982";
const SLAV = "754153365696544820";
const CLAWS = "730730742728097803";

client.on("ready", () => {
    console.log("KoggersBot ready!");
});

client.on("message", message => {
    if (message.author.bot) return;
    if (!message.content || message.content === 0) return;
    let content = message.content.toLowerCase();
    const emotes = content.match(/<:.+?:\d+>/g);
    if (emotes) {
        emotes.forEach(emote => content = content.replace(emote, ""));
        emotes.forEach(function(emote) {
            // TODO: This is really dumb, use a regex or something
            const emoteId = emote.split(":")[2].slice(0,-1);
            switch(emoteId) {
                case POGGERS:
                    message.react(POGGERS).catch(console.error);
                    break;
                case CLAWS:
                    message.react(CLAWS).catch(console.error);
                    break;
                case SLAV:
                    message.react(SLAV).catch(console.error);
                    break;
                default:
                    return;
            }
        });
    }
    if (content.length === 0) return;
    
    if (content.includes("kkoggers")) {
        const attachment = new Discord.MessageAttachment("https://raw.githubusercontent.com/velkog/KoggersBot/main/assets/kkoggers.gif");
        message.channel.send(attachment);
    }
    
    if (content.includes("velkog")) {
        message.react(POGGERS).catch(console.error);
    }

    if (content.includes("slav")) {
        message.react(SLAV).catch(console.error);
    }

    if (content.length > 50) return;
    for (let i = 0; i < content.length; i++) {
        if (content.charAt(i) !== '^') return;
    }
    message.channel.send(content);
});

client.login();
