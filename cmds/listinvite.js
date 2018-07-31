const Discord = require('discord.js'), 
      arraySort = require('array-sort'), 
      table = require('table'),
      send = require('quick.hook');

exports.run = async (client, message, args, tools) => {

    let invites = await message.guild.fetchInvites().catch(error => { 
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    }) 

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true }); 

    let possibleinvites = [];
    let index = 0;
    invites.forEach(function(invites) {
        possibleinvites.push(`${++index} ⭐ **${invites.inviter.username}** 》 \`${invites.uses} invites\``)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**INVITE LEADER BOARD**`)
        .setColor('GREEN')
        .setDescription(`${possibleinvites.join('\n')}`)
        .setTimestamp();
    message.channel.send(embed);
    
}
