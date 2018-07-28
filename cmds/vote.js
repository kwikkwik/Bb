const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args, tools, map) => {
      if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id))
    return;
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 7000);
    if (message.channel.type === 'dm') return;
      message.delete();
    let erembed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} | Vote`,`https://cdn.discordapp.com/avatars/464511870993432578/2c3cbc1a1d12d17f9fb086f3ef058dd6.png`)
    .setThumbnail('https://media.giphy.com/media/26uf8tQf6WVQPxP9u/giphy.gif')
    .addField("**Vote Bolt**", "[Vote](https://discordbots.org/bot/471150809196003328/vote)", true)
    .setColor("#06238B")
    .setFooter(`© MasterBotTeam`)
    .setTimestamp()
    message.channel.send(erembed);
}
