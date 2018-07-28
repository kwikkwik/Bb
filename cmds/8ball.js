const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (message.channel.type === 'dm') return;
    let question = message.content.split(' ').slice(1).join(' ');
    /*
    List of answers that the bot can randomize
    */
    const answers = [
'As I See Yes',
'Ask again later',
'No',
'I often see him so',
'Better not to tell you',
'Can not predict now',
'Concentrate and ask me again',
'Unreliable at the moment',
'It is certain', 'It is so clear',
'The most handsome',
'My Reply No',
'My Sources Say No',
'Very good',
'Not so good',
'Try Again Tomorrow ...',
'Point to Yes',
'Very Doubtful',
'Without doubt',
'Yes',
'Yes, of course'
    ];
    /*
    If author didn't ask a question return
    */
    if (!question) {
        return message.reply('What questions to answer? **Usage:** `*8ball she is love me?`');
    }
    const embed = new Discord.RichEmbed()
    .setColor('GREEN')
  .setAuthor(`8ball`, 'http://8ballsportsbar.com/wp-content/uploads/2016/02/2000px-8_ball_icon.svg_.png')
  .addField('Info:', `**Your Question:** ${args}\n**My Predictions:** ${answers[~~(Math.random() * answers.length)]}`);
    message.channel.send({embed}).catch(e => logger.error(e))
};
module.exports.help = {
    name: '8ball'
};
