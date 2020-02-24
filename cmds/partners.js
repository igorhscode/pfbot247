const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
  let em1 = message.guild.emojis.find(emoji => emoji.name === "yes")
  let em2 = message.guild.emojis.find(emoji => emoji.name === "heart1")
let em3 = message.guild.emojis.find(emoji => emoji.name === "heart2")
let em4 = message.guild.emojis.find(emoji => emoji.name === "heart3")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL) 
    .setDescription(` ${em2} Сервер 🌌Космос. ${em2}
    
    [Заглянуть на сервер](https://discord.gg/V8c7W69)`)
    .setImage("https://cdn.discordapp.com/attachments/676483649830387745/681565411396943897/2.gif")
    message.channel.send(embed)
    }
module.exports.help = {
  name: "partners"
  }