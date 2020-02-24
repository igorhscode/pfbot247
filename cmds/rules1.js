const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let role1 = message.guild.roles.find(role => role.name === "🎤┊Ведущий")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#e7ade5")
    .setDescription(`У нашего сервера есть свои правила. Так что обязательно не забудь ознакомиться с ним! Не знание правил не освобождает вас от наказаний.

    Участники голосового чата обязуются следовать всем нижеперечисленным правилам. Вступление в голосовой чат означает безусловное принятие правил чата.
   ** Ниже находятся пункты правил запрещающие действия на сервере.**
    **1.** Нарушение [Условий Использования Discord.](https://discordapp.com/terms) 
    **2.** Ники полностью состоящие из символов Unicode.`)
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "rules1"
};

