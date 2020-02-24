const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "not")
    let channel = message.guild.channels.find(channel => channel.name === "┌🚩наказания")
    try{
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`${em1} У вас нет прав`);
    let rUser = bot.rUser;
    let Rreason = args.slice(1).join(" ");
    if(!Rreason[1]) return bot.send(`${em1} Вы не указали причину`);
    if(!args[0]) return bot.send(`${em1} Вы не указали пользователя`);
    if(!rUser) return bot.send(`${em1} Пользователь не найден`);
    if(rUser.hasPermission("MANAGE_MESSAGES"))
    return message.reply(`${em1} нее... Вы не можете дать ему бан!`);
    let embed = new Discord.RichEmbed()
    .setAuthor("Бан", message.author.displayAvatarURL)
    .setDescription(`Банлист пополнен!
    Администратор: <@${message.author.id}> забанил участника: ${rUser}

    Причина выдачи наказания: ${Rreason}` )
    .setTimestamp()
    message.guild.member(rUser).ban("Бан");
    message.channel.send(`Вы выдали бан! подробная информация в ${channel} !`);
    message.guild.channels.get('681556666143342643').send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "ban"
};