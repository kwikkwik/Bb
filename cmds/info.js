const used = process.memoryUsage().heapUsed / 1024 / 1024;
const Discord = require("discord.js");
const moment = require("moment");
const talkedRecently = new Set();

exports.run = async (client, message, args, tools, map) => {
  
      const os = require('os');
    const arch = os.arch()
    const used = process.memoryUsage().heapUsed / 1024 / 1024;

    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);
  
      if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id))
    return;
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 7000);
if (message.channel.type === 'dm') return;
    const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setAuthor(`${client.user.username} | Bot Info`,`https://cdn.discordapp.com/avatars/464511870993432578/30a3f8c3f24bf6c066c4cee279626bb5.png?size=2048`)
    .setTitle("Invite me!") // TITLE
    .setURL('https://discordapp.com/oauth2/authorize?client_id=464511870993432578&scope=bot&permissions=2146958591') // THIS WILL SET THE TITLE URL TO "www.google.com" 
    .setThumbnail('https://cdn.discordapp.com/avatars/464511870993432578/30a3f8c3f24bf6c066c4cee279626bb5.png?size=2048')
    .setDescription("Bot Info!")
    .addField("Name", `__**${client.user.username}**__`, true)
    .addField("Developer", "`_Brickmaster_#0218`", true)
    .addField("Server Joined", `${client.guilds.size}`, true)
    .addField("Channels", `${client.channels.size}`, true)
    .addField("Platform: ", `${os.platform}`, true)
    .addField("System", `${arch}`, true)
    .addField("People Use This Bot", `${client.users.size}`, true)
    .addField("Library: ", "discord.js", true)
    .addField("Node: ", `${process.version}`, true)
    .addField("Ram Usage", `${Math.round(used * 100) / 100}MB`, true)
    .addField("Uptime: ", `Days: ${days} | Hours: ${hours} | Minutes: ${mins} | Seconds: ${realTotalSecs}`, true)
    .addField("Created Date", `${moment.utc(client.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .setFooter(`© MasterBotTeam`,`https://cdn.discordapp.com/avatars/464511870993432578/30a3f8c3f24bf6c066c4cee279626bb5.png?size=2048`)
    .setTimestamp() // SHOWS THE TIME OF THE EMBED CREATED
    message.channel.send({embed})
    message.react("✅")
}
