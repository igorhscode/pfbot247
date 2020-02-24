const Discord = require('discord.js')
const fs = require("fs");
const db = require('quick.db')
module.exports.run = async (bot,message,args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let argsUser 
    if (member) argsUser = member.user
    else argsUser = message.author
let flame = await db.fetch(`flame_${argsUser .id}`)
if (flame ===  null)  flame =  0;
let embed = new Discord.RichEmbed()
.setColor(message.guild.member(argsUser).displayHexColor)
.setAuthor("Ваш баланс!", argsUser.avatarURL)
.addField('Игрок', argsUser.username)
.addField("Имеет",`${flame} монет`)
.setFooter("Не забудь взять ежедневный бонус - #daily", "https://images-ext-1.discordapp.net/external/cJMbEJLK4_qJTJH5aZMIQQsoxFanBXTSHzJsOm6d-BU/https/media.discordapp.net/attachments/652455894818357249/652457422958624768/info.png")
bot.send(embed);  
};
module.exports.help = {
    name: "$"
}