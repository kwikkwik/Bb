exports.run = (client, message, args) => {
    const cleverbot = require("cleverbot.io");
    var clever = new cleverbot('oK8S3ChTweQSUXy8','N2MmWaDdhtpwowjvXPB7zjDQhmwRgLJE');
    clever.setNick("Plastik Test");
    clever.create(function(err, session) {
        clever.ask(args.join(' '), function(err, res) {
            message.channel.send(res);
        });
    });
}
