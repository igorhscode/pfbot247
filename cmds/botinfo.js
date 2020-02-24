const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
  let em1 = message.guild.emojis.find(emoji => emoji.name === "yes")
  let em2 = message.guild.emojis.find(emoji => emoji.name === "heart1")
let em3 = message.guild.emojis.find(emoji => emoji.name === "heart2")
let em4 = message.guild.emojis.find(emoji => emoji.name === "heart3")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL) 
    .setDescription(` ${em2} Авторы бота. ${em2}
    haventsound - main dev
    Ссылки: - [VK](https://vk.com/sw_igor)`)
    message.channel.send(embed)
    msg.react("675762644551991296")
    }
module.exports.help = {
  name: "authors"
  }