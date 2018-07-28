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
    message.channel.send (`Sorry ${message.author}, You Need ADMINISTRATOR Permissions for use this commands!`); 
    return; 
}
  if(args[0] == "help"){
    message.reply("Use : b!removerole <user mention> <name role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Please mention member to remove role.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Please select role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Member don't have that role.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(` `)
  }catch(e){
    message.channel.send(`Roles has been removed from <@${rMember.id}>.`)
  }
}
