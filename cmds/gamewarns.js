const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) =>{
    let em3 = message.guild.emojis.find(emoji => emoji.name === "yes")
    let em4 = message.guild.emojis.find(emoji => emoji.name === "not")
    let channel = message.guild.channels.find(channel => channel.name === "┌🚩наказания")

    try{
        function send (msg){
            message.channel.send(msg);
        }

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${em4} У вас нет прав`);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!args[0]) return send(`${em4} Вы не указали пользователя`);
    if(!rUser) return send(`${em4} Пользователь не найден`);
    if(rUser.hasPermission("MANAGE_MESSAGES"))
    return message.reply(`${em4} нее... Вы не можете дать ему игровое предупреждение!`);
    profile[rUser.id].gamewarns++;
    fs.writeFile('../profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    if(profile[rUser.id].gamewarns >=3){
        message.guild.member(rUser).addRole('610811731215777822');
    }
    let embed = new Discord.RichEmbed()
    .setAuthor("Игровое предупреждение", message.author.displayAvatarURL)
    .setColor('#e22216')
    .setDescription(`Выдача игровых предупреждений!
    Администратор: <@${message.author.id}> выдал игровое предупреждению участнику: ${rUser}

    Количество игровых предупреждений: **${profile[rUser.id].gamewarns}/3**` )
    .setTimestamp()
    message.channel.send(`Вы выдали игровое предупреждение! подробная информация в ${channel} !`);
    message.guild.channels.get('681556666143342643').send(embed);
    }catch(err){
    if(err.name === "ReferenceError")
    console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
}

};
module.exports.help = {
    name: "gamewarn"
};