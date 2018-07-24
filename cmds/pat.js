const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports.run = async (client, message, args) => {
  let tagged = message.mentions.users.first();
  if (!tagged) return message.reply("Tag someone! or pat your self.")
  const pat = await neko.getSFWPat();
  const answers = [
    `Look at **${tagged}**!`,
    `${message.author} and **${tagged}** looks cute together!`,
    `Pat pat!`,
    `There you go, **${tagged}**`,
    `**${tagged}**, ${message.author} just pat you!`
  ];
  const katakata = answers[Math.floor(Math.random() * answers.length)];
  let postMsg = await message.reply('**Please Wait... :)**');
   message.channel.startTyping();
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM") 
    .setDescription(`${katakata}`)
    .setImage(pat.url)
    .setFooter(`Requested by: ${message.author.tag} | Bolt`);
  setTimeout(() => {
        postMsg.edit(embed)
        }, 2000);
message.channel.stopTyping(true);
};
