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
    .setAuthor(`${client.user.username} | Vote`,`https://cdn.discordapp.com/avatars/471150809196003328/a0ed47f2512655b5604a94e0cfb950ef.png?size=2048`)
    .setThumbnail('https://media.giphy.com/media/lYibYdyfaJzxW5tW4s/giphy.gif')
    .addField("**Vote Bolt**", "[Vote](https://discordbots.org/bot/471150809196003328/vote)", true)
    .setColor("GREEN")
    .setFooter(`© MasterBotTeam`)
    .setTimestamp()
    message.channel.send(erembed);
}
