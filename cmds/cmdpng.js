const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor([255,255,0])
    .setDescription(`**Привет, друг!**
    Хочется общения, друзей, может даже найти женщину/мужчину своей мечты? Тогда тебе сюда! Наш маленький, но уютный сервер поможет тебе в том!`)
    .setImage('https://media.discordapp.net/attachments/671293179101708290/671293224370962442/welcome.gif')
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "png2"
};