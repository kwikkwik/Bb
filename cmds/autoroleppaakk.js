const fs = require("fs");
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Anda tidak ada izin untuk menggunakan command ini");
	let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
	if (!args[0]) { // jika tidak ada argument makan autorole akan dimatikan
		autorole[message.guild.id] = {
			role: 0
		};
		fs.writeFile("./autorole.json", JSON.stringify(autorole), (err) => {
			if (err) console.log(err);
		});
		message.reply("Silakan ketik nama role untuk dijadikan autorole");
    }
	if (args[0]) { // jika ada argumen maka akan dijadikan autorole
		let roles = args.join(" ");
		let role = message.guild.roles.find("name", roles);
		autorole[message.guild.id] = {
			role: role.id // yang diambil hanya id nya saja
		};
		fs.writeFile("./autorole.json", JSON.stringify(autorole), (err) => {
			if (err) console.log(err)
		});
		message.reply(`Autorole pada server ini telah aktif **${role.name}**`);
	}
}

exports.help = {
	name: "autorole"
}
