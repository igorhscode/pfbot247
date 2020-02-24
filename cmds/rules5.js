const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let role1 = message.guild.roles.find(role => role.name === "🎤┊Ведущий")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#e7ade5")
    .setDescription(`**Примечания**
    › Данные правила могут измениться, дополниться в любой момент, об этом вы будете уведомлены. 
    › Использование недочётов в правилах так же может привести к понесению наказания. 
    › Увидели как нарушают участники или еще хуже Администраторы? Вы обязаны подать на них жалобу Главной Администрации, для этого пропишите команду _**#репорт <@участник> причина**_. Так же прикладывайте доказательства после написания причины, нам будет легче разобраться с нарушителем. 
    › Запрещены шуточные и оскорбительные жалобы, за данные действия вы получите по шапке! 
    › Увидел ошибку или хочешь дополнить правила? Отпиши Главной администрации, мы будем рады выслушать тебя.`)
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "rules3"
};