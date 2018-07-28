exports.run = async (anko, message, args, color) => {
  message.reply(message.guild.emojis.map(x => x.toString()).join('|'));
}
