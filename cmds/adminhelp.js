const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "not")
    let em2 = message.guild.emojis.find(emoji => emoji.name === "yes")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${em1} У вас нет прав`);
    let heart1 = message.guild.emojis.find(emoji => emoji.name === "heart1")
    let heart2 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    let embed = new Discord.RichEmbed()
    .setAuthor("Pink Flame", "https://cdn.discordapp.com/icons/586825171168526336/b9dc978e80594f775692fd8273341336.jpg")
    .setColor("#d18dda")
    .setDescription(`${heart1} **Мод.команды#** ${heart2}
**#say** - сообщение Отправляется сообщение от лица бота.
   ** #clear** {число сообщений от 1 до 10} - число Очищает чат от флуда или сообщений иного характера.
   ** #new [новости]** {число сообщений от 1 до 10} - публикуется новость.
${heart1} **Виды наказания#** ${heart2}
    **#ban** - Выдается перманентный бан аккаунта.
    **#kick** - Кикает - участника.
    **#mute {время в сек}** - даёт временный мут.
     **#unmute** - Убирает мут аккаунта.
    **#warn** - Выдается предупреждение аккаунту.
    **#unwarn** - Убирает предупреждение аккаунту.
    **#gamewarn** - Выдается игровое предупреждение аккаунту.
    **#gameunwarn** - Убирает игровое предупреждение аккаунту.
${heart1} **Экономика#** ${heart2}
    **#+$ и #-$** - Может добавить денег или убрать денежные средства.
${heart1} **Ивенты#** ${heart2}
    **#mafia [время проведения]** - публикается информация о ивентах.
    **#шляпа [время проведения]** - публикается информация о ивентах.
    **#poll [предложение для голосования]** - голосование для ивентах.
   
    `)
    .setImage("https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png")
    bot.send(embed);
};
module.exports.help = {
   name: "adminhelp"
};