const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.inviter.username} ||  ${invites.uses}`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**INVITE LEADERBOARD**`)
        .setFooter("©iHH.CTeam")
        .setColor(0x06238B)
        .addField('Invites', `${possibleinvites.join('\n')}`)
        .setTimestamp();
    message.channel.send({ embed })
     message.react(":white_check_mark:")
}

module.exports.help = {
    name: "invitestats"
}
