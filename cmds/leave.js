
exports.run = (client, message, args) => {
 
  if (!message.member.voiceChannel) return message.channel.send("Please connect to a voice channel.")

  if (!message.guild.me.voiceChannel) return message.channel.send("Sorry the bot isn't connected to any voice channel.")
	
	message.guild.me.voiceChannel.leave();
	
	message.channel.send("Im now leaving the channel....");

}
