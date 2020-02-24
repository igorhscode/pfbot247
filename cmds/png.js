const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let botmessage = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setImage(botmessage)
    bot.send(embed);
};
module.exports.help = {
   name: "png"
};