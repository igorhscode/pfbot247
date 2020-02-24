const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let channel = message.guild.channels.find(channel => channel.name === "┌🚩наказания")
    let em4 = message.guild.emojis.find(emoji => emoji.name === "not")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${em4} У вас нет прав`);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return bot.send(`${em4} Вы не указали пользователя`);
    if(!args[1]) return bot.send("Укажите время в секундах");
    if(!rUser) return bot.send(`${em4} Пользователь не найден`);
    let embed = new Discord.RichEmbed()
    .setAuthor("Молчанка", message.author.displayAvatarURL)
    .setColor('#e22216')
    .setDescription(`Участник был замучен!
    Администратор: <@${message.author.id}> выдал молчанку участнику: ${rUser}

    Время действия молчанки: ${args[1]}.` )
    .setTimestamp()
    message.channel.send(`Вы выдали мут! подробная информация в ${channel} !`);
    message.guild.channels.get('681556666143342643').send(embed);

    let role = message.guild.roles.find(r => r.name === "Muted");
    if(!role){
        role = await message.guild.createRole({
            name:"Muted",
            permissions:[]
        });
        message.guild.channels.forEach(async (channel,id) => {
            await channel.overwritePermissions(role,{
                SEND_MESSAGES:false,
                ADD_REACTIONS:false,
                SPEAK:false
            });
        });
    };
    if(rUser.hasPermission("MANAGE_MESSAGES"))
    return message.reply(`${em4} нее... Вы не можете дать ему мут!`);
    if(rUser.roles.has(role.id)) return bot.send(`${em4} Этот пользователь уже не может говорить`);
    bot.mutes[rUser.id] = {
        guild:message.guild.id,
        time:parseInt(Date.now() + (args[1]*1000)),
    };
    fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
        if(err) console.log(err);
    });           
        
        rUser.addRole(role);
};
module.exports.help = {
    name: "mute"
};