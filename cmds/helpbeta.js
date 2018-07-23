const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let pages = ['**Page: 1** | **Core** \n\n`help`\n`helpbeta`\n`ping`\n`stats`\n`invite`\n`info`', 
	       '**Page: 2** | **Music** \n\n`play`\n`skip`\n`stop`\n`queue`\n`pause`\n`resume`\n`volume`\n`np`', 
         '**Page: 3** | **Fun** \n\n`8ball`\n`say`\n`sayd`\n`sayembed`\n`randommeme`',
	 '**Page: 4** | **Utility** \n\n`userinfo`\n`serverinfo`\n`avatar`\n`weather`\n`discrim`'];
  let page = 1; // We will define what page we are on here, the default page will be 1. (You can change the default page)
 
  const embed = new Discord.RichEmbed() // Define a new embed, if you are on the `stable` branch it will be new Discord.RichEmbed()
    .setColor(0xff2f2f) // You can set your color here
    .setTitle("Plastik Command List")
    .setFooter(`Page ${page} of ${pages.length} • Plastik | Beta Help`) // This is the default value, showing the default page and the amount of pages in the array.
    .setDescription(pages[page-1]) // This sets the description as the default page (we are subtracting 1 since arrays start at 0)
 
  message.channel.send(embed).then(msg => { // Now, we will send the embed and pass the new msg object
   
    msg.react('⏪').then( r => { // We need to make sure we start the first two reactions, this is the first one
      msg.react('⏩')
     
      // Filters - These make sure the variables are correct before running a part of code
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); // This creates the collector, which has the filter passed through it. The time is in milliseconds so you can change that for however you want the user to be able to react
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
     
      // Next, we need to handle the collections
      backwards.on('collect', r => { // This runs when the backwards reaction is found
        if (page === 1) return; // We want to make sure if they are on the first page, they cant go back a page.
        page--; // If it can go back, push back the page number
	embed.setTitle("Plastik Command List")
        embed.setDescription(pages[page-1]); // Just like setting the first one, reset the Description to the new page
        embed.setFooter(`Page ${page} of ${pages.length} • Plastik | Beta Help`); // This also sets the footer to view the current pagenumber
        msg.edit(embed) // Then, we can push the edit to the message
      })
     
      forwards.on('collect', r => { // This runs when the forwards reaction is found
        if (page === pages.length) return; // We can use copy and paste since it is basically the same thing, although now it checks if the page is currently on the highest possible, so it can't go any higher.
        page++; // If it can go forwards, push forwards the page number
	embed.setTitle("Plastik Command List")
        embed.setDescription(pages[page-1]); // Just like setting the first one, reset the Description to the new page
        embed.setFooter(`Page ${page} of ${pages.length} • Plastik | Beta Help`); // This also sets the footer to view the current pagenumber
        msg.edit(embed) // Then, we can push the edit to the message
      })
   
    })
 
  })
 
}
