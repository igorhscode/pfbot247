const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let part = message.guild.channels.find(channel => channel.name === "├🤝партнёры")
let just = message.guild.channels.find(channel => channel.name === "⎩📋заявки")
let c1 = message.guild.channels.find(channel => channel.name === "┌📖руководство")
let c2 = message.guild.channels.find(channel => channel.name === "├📚правила")
let c3 = message.guild.channels.find(channel => channel.name === "├📰новости")
let c4 = message.guild.channels.find(channel => channel.name === "├🔖роли")
let c5 = message.guild.channels.find(channel => channel.name === "├🎯получение-ролей")
let c6 = message.guild.channels.find(channel => channel.name === "├🎉ивенты")
let c8 = message.guild.channels.find(channel => channel.name === "├🌸общение")
let c9 = message.guild.channels.find(channel => channel.name === "├🍄спам")
let cc = message.guild.channels.find(channel => channel.name === "├🔨команды-сервера")
let reports = message.guild.channels.find(channel => channel.name === "├🚨жалобы")
let sugg = message.guild.channels.find(channel => channel.name === "⎩📁предложения")
let c10 = message.guild.channels.find(channel => channel.name === "┌🚩наказания")
let c11 = message.guild.channels.find(channel => channel.name === "⟦🎵⟧выбирай-песенку")
let role1 = message.guild.roles.find(role => role.name === "🔥 Pink Flame")
let role2 = message.guild.roles.find(role => role.name === "・ ☄️ › Pink Flame")
let em1 = message.guild.emojis.find(emoji => emoji.name === "heart1")
let em2 = message.guild.emojis.find(emoji => emoji.name === "heart2")
let em3 = message.guild.emojis.find(emoji => emoji.name === "heart3")
    let embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor([255,255,0])
    .setThumbnail("https://cdn.discordapp.com/attachments/676483649830387745/681222748932014121/ererererer.gif")
    .setDescription(`Приветствую тебя в ${role1} ♡!
    ${em3} Приветствую вас, ${role2} ! Добро пожаловать к нам, присаживайся и давай знакомиться! ${em1} Я - Пинки! Твой хороший помощник и добрый друг.
    ${em2} Мы рады каждому человеку на нашем сервере! 
    
    Каналы категории **информация: ** ${em1}
    ▸ ${c1} - руководство для новичков.
    ▸ ${c2} - Правила или же конституция сервера.
    ▸ ${c3} - публикация изменений на сервере.
    ▸ ${part} - партнёры сервера.
    ▸ ${c4} - роли сервера.
    ▸ ${c5} - канал для получения игровых ролей.
    ▸ ${just} - заявки.

    Каналы категории **чаты: ** ${em2}
    ▸ ${c10} - канал для публикации наказаний.
    ▸ ${c6} - анонсы ивентов сервера.
    ▸ ${c8} - Основное общение на любые темы.
    ▸ ${reports} - канал для жалоб.
    ▸ ${c9} - Канал, созданный для флуда.
    ▸ ${cc} - Информация о командах бота.
    ▸ ${sugg} - канал для предложений.
    
    Каналы в категории **музыка:** ${em3}
    ▸ ${c11} - чат для музыки`)
    message.delete().catch();
    bot.send(embed);
};
module.exports.help = {
   name: "new1"
};