const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let role = message.guild.roles.find(role => role.name === "・ ☄️ › Pink Flame")
    let ivent = message.guild.roles.find(role => role.name === "· • ♡ EventMod ♡ • ·")
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart1") 
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    let em3 = message.guild.emojis.find(emoji => emoji.name === "not")
    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(`${em3} У вас нет прав для использования этой команды!!`);
    if(!args[0]) return bot.send(`${em3} Вы не указали Содержимое!`);
    let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor([255,255,0])
    .setDescription(`${role}
    🎮 Привет! Прямо сейчас будет проходить игра Мафия.
    
    ${em2} Время проведения: ** ${botmessage} **
    
    ${em1} Ведущий: <@${message.author.id}>
    
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀[Подключиться](https://discord.gg/tpGebuK)
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**Награда:**
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀˗ˏˋ☆ Победа ⠀⠀⠀⠀⠀⠀⠀˗ˏˋ☆ Участие⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀— 350 монет ⠀⠀⠀⠀⠀⠀⠀ — 100 монет⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
    .setImage('https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png')
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "mafia"
};
