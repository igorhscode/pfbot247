const Discord = require("discord.js");
 
module.exports.run = async(bot, message, args) => {
    //p!report [user] [reason]
let Ruser = message.mentions.members.first( );
let Rreason = args.slice(1).join( " " );
let inline = true;
if(Ruser.hasPermission("ADMINISTRATOR"))
return message.reply("нее... Вы не можете кинуть на него жалобу!");
 
    if( !args.length) {
        return message.channel.send("Вы не правильно оформили жалобу. Попробуйте так: `#report [ник] [причина]`")
    };
let reportembed = new Discord.RichEmbed()
    .setFooter(`Жалобу отправил(а): ${ message.author.username}`)
    .setTitle('Жалоба')
    .setColor('#ff0000')
    .setDescription(`
    Игрок: <@${message.author.id}> кинул жалобу на: ${Ruser}

    Причина жалобы: ${Rreason}` )
    message.channel.send('Ваша жалоба была успешно отправлена! спасибо за жалобу!');
    message.guild.channels.get('681219969140392049').send(reportembed);
}
 
module.exports.help = {
    name: "report"
}