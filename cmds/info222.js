const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn.discordapp.com/avatars/304377187057008645/04ab3d03d1b2b90495bc39873dac3b28.png?size=2048')
    .setTitle("Plastik's Owner Information")
    .addField("Bot Developer", "ItzMeDwii#9748")
    .addField("Contributors", "Ray#2221, FatK#2359, Aηdiη.#9544, Hazmi35#1855, Masami#7686")
    .addField("Facebook", "[Click Here](https://web.facebook.com/satyabagus144)")
    .addField("Instagram", "[ClickHere](https://www.instagram.com/dwii5359/)")
    .setColor('GREEN')
    .setFooter("ItzMeDwii#9748 | Miyuki Bot")
    .setTimestamp();
	  if(args[0] == "owner") return message.channel.send(embed);	
  
		let infombed = new Discord.RichEmbed()
		.setThumbnail('https://cdn.discordapp.com/avatars/445035093895938053/282cfbe6577983ee7902b1f95d1bfb79.png?size=2048')
		.setTitle("Miyuki's Information")
		.addField("Bot Developer", "my!info owner :)")
		.addField("Language", "Node.js LTS 8.x")
		.addField("Library", "Discord.js Stable")
		.addField("DBL", "[Click Here](https://discordbots.org/bot/445035093895938053)")
		.addField("Donate Me", "[Click Here](https://patreon.com/MiyukiBot)")
		.addField("Website", "[Click Here](https://miyuki-bot.glitch.me)")
		.setColor('GREEN')
		.setFooter("Miyuki Bot")
		.setTimestamp();
		
 	message.channel.send(infombed)
	};
