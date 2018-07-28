const superagent = require('superagent');
module.exports.run = async (client, message, args) => {

try {
   function clean(text) {
      if (typeof(text) === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
        return text;
    }
    const bug = args.join(" ")
    if (!bug) return message.channel.send('Please fill in the name of the bug!')
    const content = clean(`**${message.author.username}**#${message.author.discriminator} (${message.author.id}) reported a bug:\n${bug}\nServer: **${message.guild.name}**\nID: **${message.guild.id}**`);
    const id = '472736222637195286';
    new Promise((resolve, reject) => {
      superagent.post(`https://discordapp.com/api/channels/${id}/messages`)
        .set('Authorization', `Bot ${client.token}`).send({ content })
        .end((err, res) => {
          if (err) {
            reject(err);
            message.reply('There was an error while sending your bug report to Frogbot Support. Please try again later.');
          } else {
            resolve(res);
            message.channel.send(`:white_check_mark: _**${message.author.username}**_, your bug report has successfully been submitted to MasterBot Support for review. Thank you!.`);
          }
        });
    });
}  catch (err) {
console.log(err)
}
}
