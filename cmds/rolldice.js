const Discord = require("discord.js");
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
    let replies = ["One", "Two", "Three", "Four", "Five", "Six"];
    let result = Math.floor((Math.random() * replies.length));

    message.delete().catch(O_o => {});

    try {
        let newembed = new Discord.RichEmbed()
            .setAuthor("A dice has been rolled!")
            .setColor('GREEN')
            .setDescription("Rolled By: " + message.author.username + "\nResult: " + replies[result]);

        message.channel.send({
            embed: newembed
        });
    } catch (e) {
        console.log(e.stack);
    }; // The try is because it errored when I didn't do it.
};

module.exports.help = {
    name: "rolldice"
}
