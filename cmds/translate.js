const { RichEmbed } = require('discord.js');
const translate = require('@k3rn31p4nic/google-translate-api');

exports.run = async(client, msg, args) => {
  if(args.length < 2) return args.missing(msg, 'Missing parameter', this.help);
  let result = await translate(args.slice(1).join(' '), { to: args[0] });
  const emb = new RichEmbed()
  .setColor('GREEN')
  .setAuthor(`Translation from ${result.from.language.iso.toUpperCase()} to ${args[0].toUpperCase()}`, 'https://cdn.discordapp.com/avatars/471150809196003328/a0ed47f2512655b5604a94e0cfb950ef.png?size=2048')
  .addField('📥INPUT', args.slice(1).join(' '))
  .addField('📤OUTPUT', result.text);
  msg.channel.send(emb);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['trans', 'tl'],
  permLevel: 0
};

exports.help = {
  name : "translate",
  description: "Let's Translate something",
  usage: "translate <to> <text>"
};
