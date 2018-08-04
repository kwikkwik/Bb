const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You dont have permission for this command!");
    const name = message.content.split(' ').slice(1).join(' ');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("I dont have permission for create role!");
    message.guild.createRole({
    name: `${name}`
    })
    message.channel.send(`Success Create Role ${name}!`)
}

module.exports.help = {
  name: "createrole"
}
