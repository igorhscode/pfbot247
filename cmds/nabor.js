const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
let role1 = message.guild.roles.find(role => role.name === "· • ♡ Pink control ♡ • ·")
let role2 = message.guild.roles.find(role => role.name === "🔥 Pink Flame")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("#d18dda")
    .setDescription(`**Мы открываем набор в ${role1}! ♡**

    Наш сервер ищет коммуникабельных и ответственных ребят! Если ты готов уделять свое время, силы и делиться своей дружелюбностью с другими участниками - добро пожаловать в **${role2}** !
    
    Тебе предстоит следить за порядком и в голосовых каналах, и в чатах! Так что тебе нужно быть стрессоустойчивым и иметь частый онлайн.
    
    Ниже заполни все по заявке:
    1. Имя.
    2. Указать свой возраст (15+).
    3. Быть адекватным и уметь выходить из конфликтных ситуаций.
    4. Имеется ли у вас опыт работы где-то в администрации?
    
    Обязательно быть на сервере не менее 5ти дней. 
    Администрация может отклонить заявку без объяснения причин.
    
    Вашу заявку рассмотрят, напишут в л\с и проведут собеседование! ♡`)
    .setImage("https://cdn.discordapp.com/attachments/678339460383113250/678515265427996672/4444.png")
    bot.send(embed);
};
module.exports.help = {
   name: "just"
};