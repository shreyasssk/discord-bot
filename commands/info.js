const embed = {
    "title": "Thank You for inviting NL Bot to your server!",
    "description": "You can check out my website [NL Server](https://production-shreyasssk.surge.sh/) for more info and updates! ```\nnl <command> <args>```",
    "color": 10197915,
    "footer": {
      "text": "Made with ❤️ by Shreyas Shivakumar."
    },
    "fields": [
      {
        "name": "Joke 😂",
        "value": "`nl joke <args>`\n Use args 'help' for more info!",
        "inline": true
      },
      {
        "name": "Space 🚀",
        "value": "Get interesting fact on stars! \n `nl space`",
        "inline": true
      }
    ]
};

module.exports = (client) => {
    client.on('message', (msg) => {
        if (msg.author.bot) return;
        if (msg.content === 'hello nl') {
            msg.reply('Hi there, glad to have you here! :)', msg.author.username)
        }
        if (msg.content.startsWith(process.env.PREFIX)) {
            const [CMD_NAME, ...args] = msg.content
                .split(/\s+/);
            
                if (args[0] === 'help') {
                    msg.channel.send({ embed })
                }
        }
    })
}