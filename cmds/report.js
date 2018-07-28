const Discord = require("discord.js");
const moment = require("moment");
const talkedRecently = new Set();

exports.run = async (client, message, args, tools, map) => {
      if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id))
    return;
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 7000);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Can not find profile.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("GREEN")
    .addField("Reported Player", `${rUser} ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", `${moment.utc(message.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
    .addField("Reason", rreason)
    .setTimestamp();

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Can not find Channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}
