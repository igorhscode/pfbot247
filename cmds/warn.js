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
    let Rreason = args.slice(1).join( " " );
    if(!Rreason) return send(`${em4} Укажите причину`);
    if(rUser.hasPermission("MANAGE_MESSAGES"))
    return message.reply(`${em4} нее... Вы не можете дать ему предупреждение!`);

    profile[rUser.id].warns++;
    fs.writeFile('../profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    if(profile[rUser.id].warns >=3){
        message.guild.member(rUser).kick("3/3 Предупреждений");
    }
    let embed = new Discord.RichEmbed()
    .setAuthor("Предупреждение", message.author.displayAvatarURL)
    .setColor('#e22216')
    .setDescription(`Выдача предупреждений!
    Администратор: <@${message.author.id}> выдал предупреждению участнику: ${rUser}

    Причина выдачи предупреждения: ${Rreason}.
    Количество предупреждений: **${profile[rUser.id].warns}/3**` )
    .setTimestamp()
    message.channel.send(`Вы выдали предупреждение! подробная информация в ${channel} !`);
    message.guild.channels.get('681556666143342643').send(embed);
    }catch(err){
    if(err.name === "ReferenceError")
    console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
}

};
module.exports.help = {
    name: "warn"
};