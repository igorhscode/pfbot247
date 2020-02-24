const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "not")
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${em1} У вас нет прав`);
    let rUser = bot.rUser;
    if(!args[0]) return bot.send(`${em1} Вы не указали пользователя`);
    if(!rUser) return bot.send(`${em1} Пользователь не найден`);
    if(!profile[rUser.id])return bot.send(`${em1} Пользователя нету в profile.json`);
    if(profile[rUser.id]<=0) return bot.send(`${em1} У пользователя 0 игровых предупреждений`);
    profile[rUser.id].gamewarns--;
    fs.writeFile('../profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription("Игровое предупреждение")
    .setColor('#25ca85')
    .addField("Администратор",message.author.username)
    .addField("Снял игровое предупреждение",`${rUser.user.username}`)
    .addField("Количество игровых предупрежденией",`${profile[rUser.id].gamewarns}/3`);

    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "gameunwarn"
};