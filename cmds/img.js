const { RichEmbed } = require('discord.js');
const req = require('request-promise-native');
const reaction = ['⬅','➡','🔁'];

exports.run = async (client, msg, args) => {
  if(args.length < 1) return msg.reply('Please add some query!');
    
    const image = await req({
    url: `https://www.google.co.uk/search?q=${encodeURIComponent(args.slice(0).join('+'))}&tbm=isch`,
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.0) Gecko/20100101 Firefox/60.0' }
    });
    const images = image.match(/"ou":"([^"]*)"/g).map(i => i.slice(6, -1));
    let index = 0;
    const emb = new RichEmbed()
    .setColor(client.color)
    .setAuthor(`Search Result for ${args.join(' ')}`, 'http://i.imgur.com/b7k7puJ.jpg')
    .setImage(images[index])
    .setFooter(`**Result ${index +1} of ${images.length}**`);
    const imMsg = await msg.channel.send(emb);
    for(const rect of reaction){
        await imMsg.react(rect);
    }
    const filter = (re, user) => reaction.includes(re.emoji.name) && user.id === msg.author.id;
    const REACT = imMsg.createReactionCollector(filter, {time: 600000});
    REACT.on('collect', col => {
        switch(col.emoji.name){
            case reaction[0] :
                index--;
                break;
            case reaction[1] :
                index++;
                break;
            case reaction[2] :
                index = Math.floor(Math.random()*images.length)-1;
                break;
        }
    index = ((index%images.length)+images.length)%images.length;
        emb.setImage(images[index]);
        emb.setFooter(`**Result ${index +1} of ${images.length}**`);
        imMsg.edit(emb);
    });

};

exports.info = {
    name: "image",
    alias: ["img"],
    permission: "default",
    type: "general",
    guildOnly: false,
    help: "new cmd"
};
