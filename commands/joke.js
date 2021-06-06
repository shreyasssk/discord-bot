const embed = {
    "title": "Get random jokes",
    "description": "Fetches data from the [jokeApi](https://sv443.net/jokeapi/v2/). \n Visit my [website](https://production-shreyasssk.surge.sh/) for more info! ```\n!joke <args>```",
    "color": 4886754,
    "footer": {
      "text": "Made with ❤️ by Shreyas Shivakumar "
    },
    "fields": [
      {
        "name": "args (optional):",
        "value": "nsfw, racist, religious, political, sexist, explicit. \n You can also using multiple options"
      }
    ]
}
module.exports = (client, axios) => {
    client.on('message', async (msg) => {
        if (msg.author.bot) return;
        if (msg.content.startsWith(process.env.PREFIX)) {
            const [CMD_NAME, ...args] = msg.content
                .trim()
                .substring(2)
                .split(/\s+/);
    
            if (args[0] === 'naglok') {
                msg.channel.send(`Hello Naag Lok member, ${msg.author.username}`)
            }
            
            if (args[0] === 'joke') {
    
            if (!args[1]) {
                    await axios.get('https://v2.jokeapi.dev/joke/Any?type=single')
                    .then((res) => {
                        msg.channel.send(`${res.data.joke}`);
                    })
                }
                if (args[1] === 'help') {
                    msg.channel.send({ embed })
                }
                if (args[1] !== 'help' && args.length >= 2) {
                    await axios.get(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=${args[1]}&type=single`)
                    .then((res) => {
                        if (res.data.joke === undefined) {
                            msg.channel.send(`${res.data.message}`)
                        } else {
                            msg.channel.send(`${res.data.joke}`);
                        }
                    })
                }
            }
        }
    })
}