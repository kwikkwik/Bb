const urban = require('relevant-urban');
const Discord = require('discord.js');

module.exports.run = async (client, message, args, tools) => {
	if (!message.channel.nsfw) return message.reply(" You must be in a **N.S.F.W** channel to use this command.");

	
	if(!args[0]) return message.channel.send(`***Please specify some text***`);
	
  let postMsg = await message.channel.send('**🔍Please Wait...**');
  
	let res = await urban(args.join(' ')).catch(e => {
		
		return message.channel.send('***Sorry, that word was not found!***');
	});

	const embed = new Discord.RichEmbed()
	    .setColor('GREEN')
	    .setTitle(res.word)
	    .setURL(res.urbanURL)
	    .setDescription(`**Definition:**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`)
	    .addField('Author', res.author,true)
	    .addField('Rating', `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`)
	    
	   if (res.tags.length > 0 && res.tags.join(', ').length < 1024) {
   		embed.addField('Tags', res.tags.join(', '), true) 
   		
   	};
  setTimeout(() => {
        postMsg.edit(embed)
        }, 2000);
   	
   	
}

module.exports.help = { 
name: "urban" 
} 
