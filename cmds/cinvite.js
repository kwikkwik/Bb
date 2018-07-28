const Discord = require("discord.js");

exports.run = async (anko, message, args, color) => {
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription(`\`\`Permanent Invite Link\`\`: ${invite}`);
    message.channel.send(embed);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['createinvite', 'ci'],
  permLevel: 0
};

exports.help = {
  name: 'createinvite',
}
