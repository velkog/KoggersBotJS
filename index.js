require('dotenv').config(); 

const Discord = require("discord.js");
const client = new Discord.Client();

// Channels
const FART_CHANNEL = "802054374163349506";

// Emotes
const CLAWS = "730730742728097803";
const DANK = "801912169339944960";
const POGGERS = "710012265394470982";
const SLAV = "754153365696544820";

// Messages
const FART_MSG = "https://cdn.discordapp.com/attachments/800953926026788875/801964653051248660/AddFartChannel.mp4"
const KKOGGERS_MSG = "https://raw.githubusercontent.com/velkog/KoggersBot/main/assets/kkoggers.gif";

// Users
const TIMBOSID = "329633490008276992";
const TUXID = "140767944257830912";

// Roles
const SHADOW_BANNED_ROLE = "878963262274818068";

client.on("ready", () => {
    console.log("KoggersBot ready!");
});

client.on("message", message => {
    if(message.member.roles.cache.some(role => role.id === SHADOW_BANNED_ROLE)) {
        message.delete();
        return;
    }
    if (message.channel.id === FART_CHANNEL && message.content !== FART_MSG) {
        message.delete();
        return;
    }
    
    if (message.author.bot) return;
    if (!message.content || message.content === 0) return;
    let content = message.content.toLowerCase();
    const emotes = content.match(/<:.+?:\d+>/g);
    if (emotes) {
        emotes.forEach(emote => content = content.replace(emote, ""));
        emotes.forEach(function(emote) {
            // TODO: This is really dumb, use a regex or something
            const emoteTitle = emote.split(":")[1];
            if (emoteTitle.includes("velkogclaws"))
                message.react(CLAWS).catch(console.error);
            if (emoteTitle.includes("dankw"))
                message.react(DANK).catch(console.error);
            if (emoteTitle.includes("velkogpoggers")) 
                message.react(POGGERS).catch(console.error);
            if (emoteTitle.includes("slavmoment"))
                message.react(SLAV).catch(console.error);
        });
    }
    if (content.length === 0) return;
    
    if (content.includes("kkoggers")) {
        const attachment = new Discord.MessageAttachment(KKOGGERS_MSG);
        message.channel.send(attachment);
    }
    
    if (content.includes("velkog")) {
        message.react(POGGERS).catch(console.error);
    }

    if (content.includes("slav")) {
        message.react(SLAV).catch(console.error);
    }
    
    if (content.includes("dank")) {
        message.react(DANK).catch(console.error);
    }
    
   if (content.includes("velklog")) {
        message.react("🚽").catch(console.error);   
    }
    
    if (content.includes("shut up dank")) {
        message.channel.send("Yeah, shut up Dank")
    }
    
    if (content.includes("tux") && content.includes("vc") && content.includes("join")) {
        let tuxTag = "<@" + TUXID + ">";
        let clawsEmote = "<:velkogClaws_alt:" + CLAWS + ">";
        message.channel.send(tuxTag + " Seriously bro, just join VC " + clawsEmote);
    }

    if ((message.author.id === TIMBOSID || content.includes("timbos")) 
        && (content.includes("mod") || content.includes("admin"))) {
      let branch = Math.floor(Math.random() * 5);
      switch(branch) {
        case 0:
          message.channel.send("No.")
          break;
        case 1:
          message.channel.send("Nah.")
          break;
        case 2:
          message.channel.send("Nope.")
          break;
        case 3:
          message.channel.send("Negativo.")
          break;
        case 4:
          message.channel.send("Alright, fine.")
          setTimeout(function(){
            message.channel.send("LOL, jk, no.")
          }, 1500);
          break;
        default:
          break;
      }
    }
    
    if (content === "nice") {
        message.channel.send("nice.");
    }
    
    if (content.length > 50) return;
    for (let i = 0; i < content.length; i++) {
        if (content.charAt(i) !== '^') return;
    }
    message.channel.send(content);
});

client.login();
