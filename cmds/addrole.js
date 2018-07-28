const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You do not have permissions.")
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.reply("Please provide a user name")
    let role = args.join(" ").slice(22);

    if (!role) return message.reply("Please provide a role name.");
    let aRole = message.guild.roles.find(`name`, role);
    if (!aRole) return message.reply(`I can't find the role.`);

    if (rMember.roles.has(aRole.id)) return message.reply("The user already have this role!");
    await (rMember.addRole(aRole.id))
    return message.reply("Success!")

}
