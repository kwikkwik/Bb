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
    const Discord = require('discord.js');
    let user = message.mentions.users.first();
    if (!user) {
        return message.reply('You must mention someone!');
    }
    const mentioneduser = message.mentions.users.first();
    const joineddiscord = (mentioneduser.createdAt.getDate() + 1) + '/' + (mentioneduser.createdAt.getMonth() + 1) + '/' + mentioneduser.createdAt.getFullYear() + ' | ' + mentioneduser.createdAt.getHours() + ':' + mentioneduser.createdAt.getMinutes() + ':' + mentioneduser.createdAt.getSeconds();
    message.delete();
    let game;
    if (user.presence.game === null) {
        game = 'Not currently Playing.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'He didnt sent a message.';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = 'Online';
    } else if (user.presence.status === 'dnd') {
        status = 'Do Not Disturb';
    } else if (user.presence.status === 'idle') {
        status = 'Idle';
    } else if (user.presence.status === 'offline') {
        status = 'Offline';
    }
  // Let afk;
  // if (user.presence.data.afk === true) {
  //   afk = "✅"
  // } else {
  //   afk = "❌"
  // }
    let stat;
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    const embed = new Discord.RichEmbed()
  .addField('**UserInfo:**', `**Name:** ${user.username}#${user.discriminator}\n**Join Discord:** ${joineddiscord}\n**The Last Message:** ${messag}\n**Playing:** ${game}\n**Status:** ${status}\n**Bot?** ${user.bot}`, true)
  .setThumbnail(user.displayAvatarURL)
  .addBlankField()
  .addField(`Roles:`, '``' + message.mentions.members.first().roles.map(r => r.name).join(' ❱❱ ') + '``')
  .addBlankField()
  .addField('DiscordInfo:', `**Discriminator:** ${user.discriminator}\n**ID:** ${user.id}\n**Username:** ${user.username}`)
  .setAuthor(`Info from ${user.username} in below`, user.displayAvatarURL)
  .setFooter(`© MasterBotTeam`, client.user.displayAvatarURL)
  .setColor(stat);
    message.channel.send({embed})
  .catch(e => logger.error(e));
};
module.exports.help = {
    name: 'userinfo'
};
