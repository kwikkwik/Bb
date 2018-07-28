const Discord = require('discord.js');
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
    let user = message.mentions.users.first() || message.author;
   
   let embed = new Discord.RichEmbed()
   .setColor("GREEN")
   .setAuthor(`${client.user.username}`,`https://cdn.discordapp.com/avatars/471150809196003328/a0ed47f2512655b5604a94e0cfb950ef.png?size=2048`)
   .setImage(`https://www.minecraftskinstealer.com/achievement/a.php?i=3&h=Developer&t=_Brickmaster_%230218`)
   message.channel.send(embed) 
  }
