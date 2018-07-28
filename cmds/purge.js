const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = async (bot, message, args) => {
    if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id))
    return;
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 5000);
    if (!message.member.hasPermission('ADMINISTRATOR')) { 
    message.channel.send (`Sorry ${message.author}, You need administrator permissions for use this commands!`); 
    return; 
}
  const user = message.mentions.users.first();
  const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2]);
  if (!amount) return message.reply('Please amount <2 - 100>');
  if (!amount && !user) return message.reply('[mention] <2 - 100> ');
  message.channel.fetchMessages({
    limit: amount
  }).then((messages) => {
    if (user) {
      const filterBy = user ? user.id : bot.user.id;
      messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
    }
    message.channel.bulkDelete(messages).catch(error =>
      console.log(error.stack));
  });
};
