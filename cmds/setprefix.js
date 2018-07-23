const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (client, message, args, color) => {
	if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Sorry you can't do that!").then(msg => msg.delete(3000));
	if (!args[0]) return message.channel.send(`Please input new prefix`).then(msg => msg.delete(3000));
	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

	prefixes[message.guild.id] = {
		prefixes: args[0]
	};

	fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
		if (err) console.log(err);
	});
	
	    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Prefix Changed!")
    .setDescription(`Set to **${args[0]}** on ${message.guild.name}`)
    .setTimestamp();

    message.channel.send(embed);
	
  console.log(args[0])
}
