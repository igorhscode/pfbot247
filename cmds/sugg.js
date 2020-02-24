const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    {
        if(message.author.bot) return
        if (!args[0]) return message.reply("Нету текста!");
        let Rreason = args.slice(0).join( " " );
        let spy = new Discord.RichEmbed()
        .setAuthor("Предложение", message.author.displayAvatarURL)
        .setDescription(`Предложение!
        Автор: <@${message.author.id}> предложил идею: ${Rreason}` )
      bot.channels.get('681220015004844108').send(spy)
    };


}

module.exports.help = {
  name: "предложение",
  aliases: []
}