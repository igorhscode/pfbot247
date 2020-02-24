const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let em1 = message.guild.emojis.find(emoji => emoji.name === "heart1") 
    let em2 = message.guild.emojis.find(emoji => emoji.name === "heart2")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#d18dda") 
    .setDescription(`
Привееет! Я Пинки - Твой личный помощник по этому уютному серверу!

${em1} Чтобы начать зарабатывать монеты на свой баланс, взаимодействовать с участниками, покупать роли и многое другое - посмотри команды ниже! 


${em2} **Эмоции и действия с участниками**

#hug - обнять одного или всех участников сервера. 
#cry - расплакаться. 
#sad - начать грустить.
#kiss - поцеловать. 
#lick - лизнуть. 
#smile - улыбнуться.
#sexlevel - узнать уровень своей сексуальности.

${em2} **Серверные команды**

#help - команды для игроков сервера.
#adminhelp - команды администрации сервера.
#serverinfo - информация сервера.
#report - кинуть жалобу на игрока.
#translate - перевести с русского на английский и наоборот.
#authors - информация о авторе.

${em2} **Экономика**

#profile - Информация о пользователе.
#level - узнать свой текущий уровень
#daily - получить ежедневную награду.
#$ - проверить свой баланс конфет.
#shop - открыть магазин сервера.
#buy Номер роли - купить роль.
#work-list - список работ,чтобы работать
#work - начать работать`)
    .setImage("https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png")
    bot.send(embed);
};
module.exports.help = {
   name: "help"
};