const Discord = require('discord.js')
const db = require('quick.db')
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
let role = message.guild.roles.find(role => role.name === "Хомячок")
let role2 = message.guild.roles.find(role => role.name === "Твоя лубоффф")
let role3 = message.guild.roles.find(role => role.name === "эхххъ сейчас бы тяночку.")
let role4 = message.guild.roles.find(role => role.name === "эхххъ сейчас бы куна.")
let role5 = message.guild.roles.find(role => role.name === "save me in your heart 💗")
let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle(`${bot.user.username} Магазин!`)
    .setDescription(`1. ${role} - 13000 монет
    2. ${role2} - 10000 монет
    3. ${role3} - 7800 монет
    4. ${role4} - 5000 монет
    5. ${role5} - 8000 монет`)
    .setFooter("Чтобы купить роль, используй команду #buy <номер роли>", "https://media.discordapp.net/attachments/652455894818357249/652456877132742656/help.png")
    .setColor("RANDOM")
    .setImage('https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png')
message.channel.send(embed)

}
module.exports.help = {
    name: "shop"
}