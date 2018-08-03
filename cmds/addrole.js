const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
               if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`**🔒 | ${message.author} Sorry, But You Need \`MANAGE ROLES\` Permissions To Use This Command!**`);
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!member) return message.channel.send("❌ | Please **@mention** Your Target!");
        let role = args.join(" ").slice(22);
        if (!role) return message.channel.send("❌ | Please Specify The Role Name!");
        let gRole = message.guild.roles.find(`name`, role);
        if (!gRole) return message.channel.send("❌ | No Roles Found Because: *Case Sensitive*");
        if (member.roles.has(gRole.id)) return message.channel.send("❌ | That Roles Is Already Given.");
        await (member.addRole(gRole.id));

        message.delete().catch(O_o=>{});
        try {
        await message.channel.send(`🎉 | Congratulations To <@${member.id}>, Gived Role: ${gRole}!`);
        } catch (e) {
        console.log(e.message)
        }
};

exports.help = {
    name: 'addrole',
    aliases: ['arole'],
    description: 'Give Role For Someone!',
    usage: ' '
};
