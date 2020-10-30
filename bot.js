const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('KoggersBot ready.');
});

client.on('message', message => {
    content = message.content
    if (content.length > 10) return;

    carrotOnly = true;
    for (var i = 0; i < content.length; i++) {
        if (content.charAt(i) !== '^') {
            carrotOnly = false;
        }
    }
    
    if (carrotOnly) {
        message.reply(content);
    }
});

client.login(process.env.BOT_TOKEN);
